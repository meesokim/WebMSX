// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// PSGs AY-3-8910/YM2149 supported

wmsx.PSG = function(audioSocket, controllersSocket) {
"use strict";

    this.connectBus = function(bus) {
        bus.connectInputDevice( 0xa0, wmsx.DeviceMissing.inputPortIgnored);
        bus.connectOutputDevice(0xa0, this.outputA0);
        bus.connectInputDevice( 0xa1, wmsx.DeviceMissing.inputPortIgnored);
        bus.connectOutputDevice(0xa1, this.outputA1);
        bus.connectInputDevice( 0xa2, this.inputA2);
        bus.connectOutputDevice(0xa2, wmsx.DeviceMissing.outputPortIgnored);
    };

    this.powerOn = function() {
        audioChannel.powerOn();
        register[15] = 0x0f;
    };

    this.powerOff = function() {
        audioChannel.powerOff();
    };

    this.reset = function() {
        audioChannel.reset();
    };

    this.getAudioChannel = function() {
        return audioChannel;
    };

    this.outputA0 = function(val) {
        registerAddress = val > 15 ? 0 : val;
    };

    this.outputA1 = function(val) {
        register[registerAddress] = val;
        switch(registerAddress) {
            case 0: case 1:
                audioChannel.setPeriodA(((register[1] & 0x0f) << 8) | register[0]); break;
            case 2: case 3:
                audioChannel.setPeriodB(((register[3] & 0x0f) << 8) | register[2]); break;
            case 4: case 5:
                audioChannel.setPeriodC(((register[5] & 0x0f) << 8) | register[4]); break;
            case 6:
                audioChannel.setPeriodN(val & 0x1f); break;
            case 7:
                audioChannel.setMixerControl(val); break;
            case 8:
                audioChannel.setAmplitudeA(val); break;
            case 9:
                audioChannel.setAmplitudeB(val); break;
            case 10:
                audioChannel.setAmplitudeC(val); break;
            case 11: case 12:
                audioChannel.setPeriodE((register[12] << 8) | register[11]); break;
            case 13:
                audioChannel.setEnvelopeControl(val); break;
            // case 14:
                // register 14 is read-only
            case 15:
                // Bits 4 and 5 mapped to external ports
                controllersSocket.writeControllerPin8Port(0, (val & 0x10) >> 4);
                controllersSocket.writeControllerPin8Port(1, (val & 0x20) >> 5);
                break;
        }
    };

    this.inputA2 = function() {
        if (registerAddress !== 14) return register[registerAddress];

        // External port mapped to register 14. Port 0 or 1 defined by register 15 bit 6
        var port = (register[15] >> 6) & 1;

        return controllersSocket.readControllerPort(port);
    };


    var registerAddress = 0;
    var register = wmsx.Util.arrayFill(new Array(16), 0);

    var audioChannel = new wmsx.PSGAudio(audioSocket);


    // Savestate  -------------------------------------------

    this.saveState = function() {
        return {
            ra: registerAddress,
            r: wmsx.Util.storeInt8BitArrayToStringBase64(register),
            ac: audioChannel.saveState()
        };
    };

    this.loadState = function(s) {
        registerAddress = s.ra;
        register = wmsx.Util.restoreStringBase64ToInt8BitArray(s.r, register);
        audioChannel.loadState(s.ac);
    };


    this.eval = function(str) {
        return eval(str);
    };

};