// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

wmsx.FileCassetteDeck = function() {
"use strict";

    this.connect = function(pCassetteSocket) {
        cassetteSocket = pCassetteSocket;
        cassetteSocket.connectDeck(this);
    };

    this.connectPeripherals = function(pScreen, pDownloader) {
        screen = pScreen;
        fileDownloader = pDownloader;
    };

    this.loadTapeFile = function(name, arrContent, altPower) {
        if (wmsx.Util.arrayIndexOfSubArray(arrContent, HEADER, 0) !== 0)
            return null;

        tapeFileName = wmsx.Util.leafFilename(name);
        tapeContent = wmsx.Util.asNormalArray(arrContent);    // Ensure normal growable Array
        toTapeStart();
        screen.showOSD("Cassette: " + name + ". " + positionMessage(), true);
        fireStateUpdate();

        cassetteSocket.autoPowerCycle(altPower);

        return tapeContent;
    };

    this.loadEmptyTape = function() {
        tapeFileName = "New Tape.cas";
        tapeContent = [];
        toTapeStart();
        screen.showOSD("Cassette loaded with new blank Tape", true);
        fireStateUpdate();
    };

    this.removeTape = function() {
        if (noTapeMessage()) return;
        tapeFileName = null;
        tapeContent = null;
        tapePosition = -1;
        screen.showOSD("Cassette Tape removed", true);
        fireStateUpdate();
    };

    this.saveTapeFile = function() {
        if (noTapeMessage()) return;
        if (tapeContent.length === 0) {
            screen.showOSD("Cassette Tape is empty!", true, true);
            return;
        }

        try {
            fillToNextSlot();
            if (!tapeFileName || tapeFileName == "New Tape.cas") {
                var info = peekFileInfo(0);
                if (info) {
                    tapeFileName = info.name && info.name.trim();
                    if (!tapeFileName ) tapeFileName = "New Tape";
                    tapeFileName += ".cas";
                }
                if (!tapeFileName ) tapeFileName = "New Tape.cas";
                fireStateUpdate();
            }
            fileDownloader.startDownloadBinary(makeFileNameToSave(tapeFileName), new Uint8Array(tapeContent), "Cassette Tape file");
        } catch(ex) {
            // give up
        }
    };

    this.rewind = function() {
        if (noTapeMessage()) return;
        toTapeStart();
        screen.showOSD("Cassette Tape rewound." + positionMessage(), true);
    };

    this.seekToEnd = function() {
        if (noTapeMessage()) return;
        toTapeEnd();
        screen.showOSD("Cassette forwarded to Tape end", true);
    };

    this.seekForward = function() {
        if (noTapeMessage()) return;
        if (!isTapeEnd()) seekHeader(1, 1);
        if(isTapeEnd()) return this.seekToEnd();
        screen.showOSD("Cassette skipped forward." + positionMessage(), true);
    };

    this.seekBackward = function() {
        if (noTapeMessage()) return;
        if (!isTapeStart()) seekHeader(-1, -1);
        if(isTapeStart()) return this.rewind();
        screen.showOSD("Cassette skipped backward." + positionMessage(), true);
    };

    this.peekFileInfoAtCurrentPosition = function() {
        return peekFileInfo(tapePosition);
    };

    this.userTypeCurrentAutoRunCommand = function() {
        if (noTapeMessage()) return;
        if (tapeContent.length === 0) {
            screen.showOSD("Cassette Tape is empty!", true, true);
            return;
        }
        var command = cassetteSocket.getDriver().currentAutoRunCommand();
        if (!command) {
            screen.showOSD("No executable at current Tape position!", true, true);
            return;
        }
        cassetteSocket.getDriver().typeCurrentAutoRunCommand();
    };

    function makeFileNameToSave(fileName) {
        if (!fileName) return "New Tape.cas";

        return wmsx.Util.leafFilenameNoExtension(fileName) + ".cas";
    }

    // Access interface methods

    this.readHeader = function() {
        if (!tapeContent || isTapeEnd()) return false;
        seekHeader(1);
        if (isTapeEnd()) return false;
        tapePosition += 8;          // Skip "read" Header
        return true;
    };

    this.readByte = function() {
        if (!tapeContent || isTapeEnd()) return null;
        return tapeContent[tapePosition++];
    };

    this.writeHeader = function(isLong) {
        if (!tapeContent) this.loadEmptyTape();
        fillToNextSlot();
        for (var i = 0; i < HEADER.length; i++)
            tapeContent[tapePosition++] = HEADER[i];
        return true;
    };

    this.writeByte = function(val) {
        if (!tapeContent) this.loadEmptyTape();
        tapeContent[tapePosition++] = val;              // Grow
        return true;
    };

    this.finishWriting = function() {
        if (!tapeContent) return;
        fillToNextSlot();
    };

    this.motor = function(state) {
        if (state !== null) motor = state;
        else motor = !motor;
        fireStateUpdate();
        return true;
    };

    function seekHeader(dir, from) {
        from = from || 0;
        // Verify: Removed the restriction for Headers to be at multiples of 8 bytes position. CAS files found for Konami Synthesizer does not honor this.
        //do {
            tapePosition = wmsx.Util.arrayIndexOfSubArray(tapeContent, HEADER, tapePosition + from, dir);
            //from = from || dir;
        //} while (tapePosition !== -1 && (tapePosition % 8) !== 0);
        if (tapePosition === -1) dir === -1 ? toTapeStart() : toTapeEnd();
    }

    function noTapeMessage() {
        if (!tapeContent) {
            screen.showOSD("No Cassette Tape!", true, true);
            return true;
        } else
            return false;
    }

    function isTapeEnd() {
        return tapePosition === tapeContent.length;
    }

    function isTapeStart() {
        return tapePosition === 0;
    }

    function toTapeEnd() {
        tapePosition = tapeContent.length;
    }

    function toTapeStart() {
        tapePosition = 0;
    }

    function fillToNextSlot() {
        while(tapePosition % 8)
            tapeContent[tapePosition++] = 0;
    }

    function peekFileInfo(position) {       // Tape must be positioned at a Header
        if (!tapeContent || (tapeContent.length < position + 24)) return null;        // No Tape or Not a complete Header

        var type = null;
        if (wmsx.Util.arrayIndexOfSubArray(tapeContent, BIN_ID, position) === position + 8) type = "Binary";
        else if (wmsx.Util.arrayIndexOfSubArray(tapeContent, TOK_ID, position) === position + 8) type = "Basic";
        else if (wmsx.Util.arrayIndexOfSubArray(tapeContent, ASC_ID, position) === position + 8) type = "ASCII";
        else return null;

        var name = wmsx.Util.int8BitArrayToByteString(tapeContent, position + 18, 6);

        return { type: type, name: name.trim() };
    }

    function positionMessage() {
        var mes = "";
        if (!tapeContent) {
            mes += " No Tape";
        } else if (tapeContent.length === 0) {
            mes += " Tape empty";
        } else if (isTapeEnd()) {
            mes += " Tape at end";
        } else {
            var info = peekFileInfo(tapePosition);
            if (info) mes += ' Tape at ' + info.type + ' "' + info.name + '"';
        }
        return mes;
    }

    function fireStateUpdate() {
        screen.tapeStateUpdate(tapeFileName, motor);
    }


    // Savestate  -------------------------------------------

    this.saveState = function() {
        return {
            f: tapeFileName,
            c: tapeContent && wmsx.Util.compressInt8BitArrayToStringBase64(tapeContent),
            p: tapePosition,
            m: motor
        };
    };

    this.loadState = function(state) {
        tapeFileName = state.f;
        tapeContent = state.c && wmsx.Util.uncompressStringBase64ToInt8BitArray(state.c, tapeContent || []);    // Make sure type is Array
        tapePosition = state.p;
        motor = state.m;
        fireStateUpdate();
    };


    var cassetteSocket;

    var tapeFileName = null;
    var tapeContent = null;     // Must be normal growable Array
    var tapePosition = -1;
    var motor = false;

    var screen;
    var fileDownloader;

    var HEADER = [ 0x1f, 0xa6, 0xde, 0xba, 0xcc, 0x13, 0x7d, 0x74 ];
    var BIN_ID = [ 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0 ];
    var TOK_ID = [ 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3 ];
    var ASC_ID = [ 0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea ];

};