// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// Special 384K ROM with 24 * 16K banks. Bank 1 at 0x4000 fixed at page 0x0f, bank 2 at 0x8000 variable
// 0x4000 - 0xbfff

wmsx.CartridgeRType = function(rom) {
"use strict";

    function init(self) {
        self.rom = rom;
        bytes = wmsx.Util.asNormalArray(rom.content);
        self.bytes = bytes;
    }

    this.powerOn = function() {
        this.reset();
    };

    this.reset = function() {
        bank2Offset = -0x8000;
    };

    this.write = function(address, value) {
        // bank1 fixed at page 0x0f
        if (address >= 0x7000 && address < 0x8000)
            bank2Offset = ((value % 24) << 14) - 0x8000;
    };

    this.read = function(address) {
        if (address < 0x4000)
            return 0xff;
        if (address < 0x8000)
            return bytes[0x38000 + address];         // Bank 1 fixed at page 0x0f, so 0x0f * 16304 - 0x4000
        if (address < 0xc000)
            return bytes[bank2Offset + address];
        return 0xff;
    };


    var bytes;
    this.bytes = null;

    var bank2Offset;

    this.rom = null;
    this.format = wmsx.SlotFormats.RType;


    // Savestate  -------------------------------------------

    this.saveState = function() {
        return {
            f: this.format.name,
            r: this.rom.saveState(),
            b: wmsx.Util.compressInt8BitArrayToStringBase64(bytes),
            b2: bank2Offset
        };
    };

    this.loadState = function(s) {
        this.rom = wmsx.ROM.loadState(s.r);
        bytes = wmsx.Util.uncompressStringBase64ToInt8BitArray(s.b, bytes);
        this.bytes = bytes;
        bank2Offset = s.b2;
    };


    if (rom) init(this);

};

wmsx.CartridgeRType.prototype = wmsx.Slot.base;

wmsx.CartridgeRType.recreateFromSaveState = function(state, previousSlot) {
    var cart = previousSlot || new wmsx.CartridgeRType();
    cart.loadState(state);
    return cart;
};
