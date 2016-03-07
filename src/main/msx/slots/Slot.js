// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// Abstract base Slot
// 0x0000 - 0xffff

wmsx.Slot = function() {

    this.connect = function(machine) {
    };

    this.disconnect = function(machine) {
    };

    this.powerOn = function(paused) {
    };

    this.powerOff = function() {
    };

    this.reset = function() {
    };

    this.read = function(address) {
        return 0xff;
    };

    this.write = function(address, value) {
    };

    this.cpuExtensionBegin = function(s) {
    };

    this.cpuExtensionFinish = function(s) {
    };

    this.isExpanded = function() {
        return false;
    };

    this.dump = function(from, chunk, quant) {
        wmsx.Util.dump(this.bytes, from, chunk, quant);
    };

};

wmsx.Slot.base = new wmsx.Slot();