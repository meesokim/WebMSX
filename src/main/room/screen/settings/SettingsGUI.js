// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// HTML and CSS data for Settings

wmsx.SettingsGUI = {};

wmsx.SettingsGUI.html = function() {
    return `<div id="wmsx-modal" tabindex="-1">
        <div id="wmsx-menu">
            <div id="wmsx-back">
                <div class="wmsx-back-arrow">
                </div>
            </div>
            <div class="wmsx-caption">
                Help & Settings
            </div>
            <div class="wmsx-items">
                <div id="wmsx-menu-general" class="wmsx-item wmsx-selected">
                    GENERAL
                </div>
                <div id="wmsx-menu-media" class="wmsx-item">
                    MEDIA
                </div>
                <div id="wmsx-menu-inputs" class="wmsx-item">
                    KEYBOARD
                </div>
                <div id="wmsx-menu-ports" class="wmsx-item">
                    PORTS
                </div>
                <div id="wmsx-menu-about" class="wmsx-item">
                    ABOUT
                </div>
                <div id="wmsx-menu-selection">
                </div>
            </div>
        </div>
        <div id="wmsx-content">
            <div id="wmsx-general">
                <div class="wmsx-left">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                F11
                            </div>
                        </div>
                        <div class="wmsx-desc">
                            Power
                        </div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                Shift
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                F11
                            </div>
                        </div>
                        <div class="wmsx-desc">Reset</div>
                    </div>
                    <div class="wmsx-full-divider"></div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                T
                            </div>
                        </div>
                        <div class="wmsx-desc">CPU Turbo Mode</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Q
                            </div>
                        </div>
                        <div class="wmsx-desc">NTSC/PAL</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                W
                            </div>
                        </div>
                        <div class="wmsx-desc">V-Synch Modes</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                E
                            </div>
                        </div>
                        <div class="wmsx-desc">CRT Filters</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                R
                            </div>
                        </div>
                        <div class="wmsx-desc">CRT Modes</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                D
                            </div>
                        </div>
                        <div class="wmsx-desc">Debug Modes</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                S
                            </div>
                        </div>
                        <div class="wmsx-desc">Sprite Modes</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                G
                            </div>
                        </div>
                        <div class="wmsx-desc">Capture Screen</div>
                    </div>
                    <div class="wmsx-full-divider"></div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-desc">Right-Click Bar Icons: Default Action</div>
                    </div>
                </div>
                <div class="wmsx-right">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                0 - 9
                            </div>
                        </div>
                        <div class="wmsx-desc">Load State</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                0 - 9
                            </div>
                        </div>
                        <div class="wmsx-desc">Save State</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                F12
                            </div>
                        </div>
                        <div class="wmsx-desc">Save State File</div>
                    </div>
                    <div class="wmsx-full-divider"></div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                F12
                            </div>&nbsp;&nbsp;/&nbsp;&nbsp;<div class="wmsx-key">
                                Shift
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                F12
                            </div>
                        </div>
                        <div class="wmsx-desc">Fast / Slow Speed</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                Shift
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Arrows
                            </div>
                        </div>
                        <div class="wmsx-desc">Adjust Speed</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                P
                            </div>
                        </div>
                        <div class="wmsx-desc">Toggle Pause</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                O
                            </div>&nbsp;/&nbsp;<div class="wmsx-key">
                                F
                            </div>
                        </div>
                        <div class="wmsx-desc">Next Frame</div>
                    </div>
                    <div class="wmsx-divider"></div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Enter
                            </div>
                        </div>
                        <div class="wmsx-desc">Full Screen</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Arrows
                            </div>
                        </div>
                        <div class="wmsx-desc">Screen Size / Width</div>
                    </div>
                    <div class="wmsx-full-divider"></div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Backspace
                            </div>
                        </div>
                        <div class="wmsx-desc">Defaults</div>
                    </div>
                </div>
            </div>
            <div id="wmsx-media">
                <div class="wmsx-top-left">
                    <div class="wmsx-hotkey wmsx-heading">
                        Media Commands:
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                F6
                            </div>
                        </div>
                        <div class="wmsx-desc">Load Disk</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                F7
                            </div>
                        </div>
                        <div class="wmsx-desc">Load Cartridge</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                F8
                            </div>
                        </div>
                        <div class="wmsx-desc">Load Cassette Tape</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key">
                                Ctrl
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                F11
                            </div>
                        </div>
                        <div class="wmsx-desc">Load Any Media</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-desc">
                            Drag &amp; Drop Files or URLs (Any Media)
                        </div>
                    </div>
                </div>
                <div class="wmsx-top-right">
                    <div class="wmsx-hotkey wmsx-heading">
                        Modifiers for Media Commands:
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            + <div class="wmsx-key">
                                Shift
                            </div>
                        </div>
                        <div class="wmsx-desc">Use Drive B / Slot 2</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            + <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>
                        </div>
                        <div class="wmsx-desc">Load Empty Media</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            + <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>
                        </div>
                        <div class="wmsx-desc">Remove Media</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            + <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>
                        </div>
                        <div class="wmsx-desc">Save Media File</div>
                    </div>
                    <div class="wmsx-hotkey wmsx-clear">
                        <div class="wmsx-desc">
                            Right-Drag / Middle-Click: No Auto-Reset
                        </div>
                    </div>
                </div>
                <div class="wmsx-full-divider"></div>
                <div class="wmsx-hotkey">
                    <div class="wmsx-command">
                        <div class="wmsx-key wmsx-key-fixed">
                            Ctrl
                        </div>
                    </div>
                    <div class="wmsx-desc">&nbsp;+ Drag &amp; Drop Disk Files to Load and Add Disks to the current Drive Stack
                    </div>
                </div>
                <div class="wmsx-hotkey">
                    <div class="wmsx-command">
                        <div class="wmsx-key wmsx-key-fixed">
                            Alt
                        </div>
                    </div>
                    <div class="wmsx-desc">&nbsp;+ Drag &amp; Drop Files or ZIP File to force "Files as Disk" or "ZIP as Disk" loading
                    </div>
                </div>
                <div class="wmsx-full-divider"></div>
                <div class="wmsx-bottom-left">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Home
                            </div>
                        </div>
                        <div class="wmsx-desc">Rewind Tape</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Ctrl
                            </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Pg Up / Dn
                            </div>
                        </div>
                        <div class="wmsx-desc">Seek Tape</div>
                    </div>
                </div>
                <div class="wmsx-bottom-right">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                Pg Up / Dn
                            </div>
                        </div>
                        <div class="wmsx-desc">Select Disk</div>
                    </div>
                </div>
                <div class="wmsx-clear"></div>
                <div class="wmsx-hotkey wmsx-bottom">
                    <div class="wmsx-command">
                        <div class="wmsx-key">
                            Shift
                        </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                            Ctrl
                        </div>&nbsp;<div class="wmsx-key wmsx-key-fixed">
                            Alt
                        </div>&nbsp;+&nbsp;<div class="wmsx-key">
                            F8
                        </div>
                    </div>
                    <div class="wmsx-desc">
                        Auto-Run Cassette program at current Tape position
                    </div>
                </div>
            </div>
            <div id="wmsx-inputs">
                <div class="wmsx-left">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                C
                            </div>
                        </div>
                        <div class="wmsx-desc">Copy Screen Text</div>
                    </div>
                        <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                H
                            </div>
                        </div>
                        <div class="wmsx-desc">Adjust Turbo Fire speed</div>
                    </div>
            </div>
                <div class="wmsx-right">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                V
                            </div>
                        </div>
                        <div class="wmsx-desc">Open Text Paste box</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                B
                            </div>
                        </div>
                        <div class="wmsx-desc">Open Text Input box</div>
                    </div>
                </div>
                <div class="wmsx-full-divider"></div>
                <div class="wmsx-bottom">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                L
                            </div>
                        </div>
                        <div class="wmsx-desc">Toggle Keyboard Layout</div>
                    </div>
                    <div class="wmsx-right" >
                        <div id="wmsx-inputs-keyboard-name" class="wmsx-hotkey wmsx-link" >
                            Keyboard: Default
                        </div>
                    </div>
                    <div id="wmsx-keyboard"></div>
                </div>
                <div class="wmsx-footer">
                    (hover mouse pointer over MSX Keyboard keys to display/modify mappings)
                </div>
            </div>
            <div id="wmsx-ports">
                <div class="wmsx-left">
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                M
                            </div>
                        </div>
                        <div class="wmsx-desc">Toggle Mouse</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                J
                            </div>
                        </div>
                        <div class="wmsx-desc">Toggle Joysticks</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                K
                            </div>
                        </div>
                        <div class="wmsx-desc">Toggle Joykeys</div>
                    </div>
                    <div class="wmsx-hotkey">
                        <div class="wmsx-command">
                            <div class="wmsx-key wmsx-key-fixed">
                                Alt
                            </div>&nbsp;+&nbsp;<div class="wmsx-key">
                                H
                            </div>
                        </div>
                        <div class="wmsx-desc">Adjust Turbo Fire speed</div>
                    </div>
                </div>
                <div class="wmsx-right">
                    <div id="wmsx-ports-mouse-mode" class="wmsx-hotkey wmsx-link wmsx-mouse-device">Mouse Mode: AUTO</div>
                    <div id="wmsx-ports-joysticks-mode" class="wmsx-hotkey wmsx-link wmsx-joystick-device">Joysticks Mode: AUTO</div>
                    <div id="wmsx-ports-joykeys-mode" class="wmsx-hotkey wmsx-link wmsx-joykeys-device">Joykeys Mode: DISABLED</div>
                </div>
                <div class="wmsx-full-divider"></div>
                <div class="wmsx-bottom">
                    <div class="wmsx-bottom-left">
                        PORT 1
                        <div id="wmsx-ports-device1" class="wmsx-none-device">
                            <div id="wmsx-ports-device1-title" class="wmsx-device-title">NO DEVICE</div>
                            <div class="wmsx-joy">
                                <div class="wmsx-virtual wmsx-joy-trig wmsx-joy-L"></div>
                                <div class="wmsx-virtual wmsx-joy-trig wmsx-joy-R"></div>
                                <div class="wmsx-joy-middle"></div>
                                <div class="wmsx-joy-logo"></div>
                                <div class="wmsx-joy-outleft"></div>
                                <div class="wmsx-joy-outright"></div>
                                <div class="wmsx-joy-left">
                                    <div class="wmsx-joy-dir wmsx-joy-dirh"></div>
                                    <div class="wmsx-joy-dir wmsx-joy-dirv"></div>
                                    <div class="wmsx-joy-dir-center"></div>
                                </div>
                                <div class="wmsx-joy-right">
                                    <div class="wmsx-joy-button wmsx-joy-A"></div>
                                    <div class="wmsx-joy-button wmsx-joy-B"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-X"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-Y"></div>
                                </div>
                                <div class="wmsx-joy-center">
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-BACK"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-START"></div>
                                </div>
                                <div id="wmsx-joy1-UP" class="wmsx-joy-hs wmsx-joy-hs-UP">&#9650;</div>
                                <div id="wmsx-joy1-DOWN" class="wmsx-joy-hs wmsx-joy-hs-DOWN">&#9660;</div>
                                <div id="wmsx-joy1-LEFT" class="wmsx-joy-hs wmsx-joy-hs-LEFT">&#9668;</div>
                                <div id="wmsx-joy1-RIGHT" class="wmsx-joy-hs wmsx-joy-hs-RIGHT">&#9658;</div>
                                <div id="wmsx-joy1-A" class="wmsx-joy-hs wmsx-joy-hs-A">A</div>
                                <div id="wmsx-joy1-B" class="wmsx-joy-hs wmsx-joy-hs-B">B</div>
                                <div id="wmsx-joy1-X" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-X">X</div>
                                <div id="wmsx-joy1-Y" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-Y">Y</div>
                                <div id="wmsx-joy1-L" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-L">L</div>
                                <div id="wmsx-joy1-R" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-R">R</div>
                                <div id="wmsx-joy1-BACK" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-BACK">BACK</div>
                                <div id="wmsx-joy1-START" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-START">START</div>
                            </div>
                            <div class="wmsx-mouse">
                                <div id="wmsx-mouse1" class="wmsx-mouse-body">
                                    <div class="wmsx-mouse-button1"></div><div class="wmsx-mouse-button2"></div>
                                    <div class="wmsx-mouse-logo"></div>
                                </div>
                            </div>
                            <div class="wmsx-touch"></div>
                            <div class="wmsx-none"></div>
                        </div>
                    </div>
                    <div class="wmsx-bottom-right">
                        PORT 2
                        <div id="wmsx-ports-device2" class="wmsx-none-device">
                            <div id="wmsx-ports-device2-title" class="wmsx-device-title">NO DEVICE</div>
                            <div class="wmsx-joy">
                                <div class="wmsx-virtual wmsx-joy-trig wmsx-joy-L"> </div>
                                <div class="wmsx-virtual wmsx-joy-trig wmsx-joy-R"> </div>
                                <div class="wmsx-joy-middle"> </div>
                                <div class="wmsx-joy-logo"> </div>
                                <div class="wmsx-joy-outleft"> </div>
                                <div class="wmsx-joy-outright"> </div>
                                <div class="wmsx-joy-left">
                                    <div class="wmsx-joy-dir wmsx-joy-dirh"></div>
                                    <div class="wmsx-joy-dir wmsx-joy-dirv"></div>
                                    <div class="wmsx-joy-dir-center"></div>
                                </div>
                                <div class="wmsx-joy-right">
                                    <div class="wmsx-joy-button wmsx-joy-A"></div>
                                    <div class="wmsx-joy-button wmsx-joy-B"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-X"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-Y"></div>
                                </div>
                                <div class="wmsx-joy-center">
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-BACK"></div>
                                    <div class="wmsx-virtual wmsx-joy-button wmsx-joy-START"></div>
                                </div>
                                <div id="wmsx-joy2-UP" class="wmsx-joy-hs wmsx-joy-hs-UP">&#9650;</div>
                                <div id="wmsx-joy2-DOWN" class="wmsx-joy-hs wmsx-joy-hs-DOWN">&#9660;</div>
                                <div id="wmsx-joy2-LEFT" class="wmsx-joy-hs wmsx-joy-hs-LEFT">&#9668;</div>
                                <div id="wmsx-joy2-RIGHT" class="wmsx-joy-hs wmsx-joy-hs-RIGHT">&#9658;</div>
                                <div id="wmsx-joy2-A" class="wmsx-joy-hs wmsx-joy-hs-A">A</div>
                                <div id="wmsx-joy2-B" class="wmsx-joy-hs wmsx-joy-hs-B">B</div>
                                <div id="wmsx-joy2-X" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-X">X</div>
                                <div id="wmsx-joy2-Y" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-Y">Y</div>
                                <div id="wmsx-joy2-L" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-L">L</div>
                                <div id="wmsx-joy2-R" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-R">R</div>
                                <div id="wmsx-joy2-BACK" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-BACK">BACK</div>
                                <div id="wmsx-joy2-START" wmsx-virtual="true" class="wmsx-virtual wmsx-joy-hs wmsx-joy-hs-START">START</div>
                            </div>
                            <div class="wmsx-mouse">
                                <div id="wmsx-mouse2" class="wmsx-mouse-body">
                                    <div class="wmsx-mouse-button1"></div><div class="wmsx-mouse-button2"></div>
                                    <div class="wmsx-mouse-logo"></div>
                                </div>
                            </div>
                            <div class="wmsx-touch"></div>
                            <div class="wmsx-none"></div>
                        </div>
                    </div>
                </div>
                <div class="wmsx-footer">
                    (hover mouse pointer over Controller buttons to display/modify mappings)
                </div>
            </div>
            <div id="wmsx-about">
                <div id="wmsx-logo-version">
                    WebMSX&nbsp;&nbsp;-&nbsp;&nbsp;version&nbsp` + WMSX.VERSION + `
                </div>
                <div class="wmsx-info">
                    ` + atob("Q3JlYXRlZCBieSBQYXVsbyBBdWd1c3RvIFBlY2Npbg==") + `
                    <br>
                    ` + atob("PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93ZWJtc3gub3JnIj5odHRwOi8vd2VibXN4Lm9yZzwvYT4=") + `
                </div>
                    <div id="wmsx-browserinfo">
                </div>
            </div>
        </div>
    </div>
    <div id="wmsx-control-mapping-popup">
        <div id="wmsx-control-mapping-popup-heading">
            Control mapped to:
        </div>
        <div id="wmsx-control-mapping-popup-mapping" class="wmsx-command"></div>
        <div id="wmsx-control-mapping-popup-footer">
            Press new key.
            <br>
            (right-click to clear)
        </div>
    </div>`;
};

wmsx.SettingsGUI.css = function() {
    return `#wmsx-modal * {
    outline: none;
    box-sizing: border-box;
}

#wmsx-modal {
    position: absolute;
    overflow: hidden;
    width: 600px;
    height: 0;
    opacity: 0;
    visibility: hidden;
    top: 22px;
    left: 29px;
    color: hsl(0, 0%, 10%);
    font: normal 13px sans-serif;
    white-space: nowrap;
    text-align: initial;
    box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, .4);
    transform: scale(0.85);
    transition: visibility .2s ease-out, opacity .2s ease-out, transform .2s ease-out, height .25s step-end;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 9;
}
#wmsx-modal.wmsx-show {
    transform: scale(1);
    transition: visibility .2s ease-out, opacity .2s ease-out, transform .2s ease-out;
    height: 456px;
    visibility: visible;
    opacity: 1;
}

#wmsx-modal .wmsx-heading {
    font-weight: 700;
    color: hsl(0, 0%, 30%);
}

#wmsx-modal .wmsx-link {
    font-weight: 700;
    line-height: 21px;
    color: hsl(228, 90%, 40%);
    cursor: pointer;
}
#wmsx-modal .wmsx-link:hover {
    outline: 1px solid;
}

.wmsx-command {
    position: relative;
    display: inline-block;
    font-weight: 600;
    color: hsl(0, 0%, 48%);
}

.wmsx-hotkey {
    height: 27px;
    padding: 3px 5px;
    box-sizing: border-box;
}

.wmsx-hotkey .wmsx-desc {
    display: inline-block;
    line-height: 21px;
}

.wmsx-key {
    position: relative;
    display: inline-block;
    top: -1px;
    min-width: 25px;
    height: 21px;
    padding: 4px 6px 3px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: hsl(0, 0%, 42%);
    background: white;
    border-radius: 3px;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0 1px 0 1px hsl(0, 0%, 47%);
    text-align: center;
}

.wmsx-key-fixed {
    width: 31px;
    padding-left: 0;
    padding-right: 2px;
}

.wmsx-footer {
    position: absolute;
    bottom: 21px;
    width: 543px;
    margin-top: 16px;
    text-align: center;
}

#wmsx-menu {
    position: relative;
    background: white;
    border-bottom: 1px solid hsl(0, 0%, 72%);
}

#wmsx-menu #wmsx-back {
    position: absolute;
    width: 40px;
    height: 34px;
    margin: 3px 1px;
    padding: 16px 12px;
    cursor: pointer;
}
#wmsx-menu #wmsx-back:hover {
    background: rgba(0, 0, 0, .12);
}

.wmsx-back-arrow {
    display: block;
    width: 16px;
    height: 2px;
    border-radius: 1000px;
    background: hsl(0, 0%, 98%);
}
.wmsx-back-arrow:before {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: inherit;
    background: inherit;
    transform: rotate(-45deg);
    transform-origin: 1px 1px;
}
.wmsx-back-arrow:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
    transform-origin: 1px 1px;
}


#wmsx-menu .wmsx-caption {
    height: 29px;
    margin: 0 -1px;
    padding: 10px 0 0 48px;
    font-size: 18px;
    color: white;
    background: hsl(358, 66%, 50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .9);
    vertical-align: middle;
    box-sizing: content-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#wmsx-menu .wmsx-items {
    position: relative;
    width: 80%;
    height: 39px;
    margin: 0 auto;
    font-weight: 600;
}

#wmsx-menu .wmsx-item {
    float: left;
    width: 20%;
    height: 100%;
    padding-top: 13px;
    font-size: 14px;
    color: rgba(0, 0, 0, .43);
    text-align: center;
    cursor: pointer;
}

#wmsx-menu .wmsx-selected {
    color: hsl(358, 67%, 46%);
}

#wmsx-menu #wmsx-menu-selection {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 3px;
    background: hsl(358, 67%, 46%);
    transition: left 0.3s ease-in-out;
}

#wmsx-content {
    position: relative;
    left: 0;
    width: 3000px;
    height: 378px;
    background: rgb(218, 218, 218);
    transition: left 0.3s ease-in-out
}

#wmsx-general, #wmsx-inputs, #wmsx-media, #wmsx-ports, #wmsx-about {
    position: absolute;
    width: 600px;
    height: 100%;
    box-sizing: border-box;
}

#wmsx-general {
    padding-top: 21px;
    padding-left: 36px;
}

#wmsx-general .wmsx-left {
    float: left;
    width: 248px;
}

#wmsx-general .wmsx-left .wmsx-command {
    width: 105px;
}

#wmsx-general .wmsx-right {
    float: left;
}

#wmsx-general .wmsx-right .wmsx-command {
    width: 160px;
}

#wmsx-media {
    left: 600px;
}

#wmsx-media {
    padding-top: 16px;
    padding-left: 32px;
}

#wmsx-media .wmsx-top-left {
    float: left;
    width: 290px;
}

#wmsx-media .wmsx-top-right {
    float: left;
}

#wmsx-media .wmsx-bottom-left {
    float: left;
    width: 294px;
}

#wmsx-media .wmsx-bottom-right {
    float: left;
}

#wmsx-media .wmsx-top-left .wmsx-command {
    width: 107px;
}

#wmsx-media .wmsx-top-right .wmsx-command {
    width: 101px;
}

#wmsx-media .wmsx-bottom-left .wmsx-command {
    width: 174px;
}

#wmsx-media .wmsx-bottom-right .wmsx-command {
    width: 138px;
}

#wmsx-media .wmsx-bottom .wmsx-command {
    width: 174px;
}

#wmsx-inputs {
    left: 1200px;
    padding: 26px 0 0 33px;
}

#wmsx-inputs .wmsx-left {
    float: left;
    width: 290px;
}

#wmsx-inputs .wmsx-command {
    width: 91px;
}

#wmsx-inputs .wmsx-bottom {
    margin-top: 13px;
}

#wmsx-inputs .wmsx-bottom .wmsx-hotkey {
    display: inline-block;
    width: 255px;
}

#wmsx-inputs .wmsx-bottom .wmsx-right {
    display: inline-block;
    width: 275px;
    text-align: right;
}

#wmsx-inputs #wmsx-inputs-keyboard-name {
    width: initial;
}

#wmsx-keyboard {
    position: relative;
    top: 2px;
    width: 535px;
    height: 174px;
    padding: 12px 0 0 13px;
    margin-top: 5px;
    background: hsl(0, 0%, 25%);
    border-radius: 1px 1px 0 0;
    box-sizing: border-box;
    box-shadow: 0 1px 0 1px hsl(0, 0%, 20%), 0 3px 4px 1px hsl(0, 0%, 40%);
}

#wmsx-ports {
    left: 1800px;
    padding: 26px 0 0 27px;
}

#wmsx-ports .wmsx-left {
    float: left;
    width: 295px;
    padding-left: 26px;
}

#wmsx-ports .wmsx-right {
    float: left;
}

#wmsx-ports .wmsx-command {
    width: 91px;
}

#wmsx-ports .wmsx-bottom {
    width: 546px;
    text-align: center;
}

#wmsx-ports .wmsx-bottom-left, #wmsx-ports .wmsx-bottom-right {
    display: inline-block;
    height: 162px;
    margin-top: 2px;
    vertical-align: top;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: hsl(0, 0%, 32%);
}

#wmsx-ports .wmsx-device-title {
    margin-top: 14px;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    color: hsl(0, 0%, 35%);
    text-align: center;
}

#wmsx-ports .wmsx-joystick-device .wmsx-joy, #wmsx-ports .wmsx-joykeys-device .wmsx-joy {
    display: block;
}
#wmsx-ports .wmsx-mouse-device .wmsx-mouse {
    display: block;
}
#wmsx-ports .wmsx-touch-device .wmsx-touch {
    display: block;
}
#wmsx-ports .wmsx-none-device .wmsx-none {
    display: block;
}

#wmsx-ports .wmsx-mouse-device, #wmsx-ports .wmsx-mouse-device .wmsx-device-title {
    color: hsl(120, 100%, 30%);
}
#wmsx-ports .wmsx-joystick-device, #wmsx-ports .wmsx-joystick-device .wmsx-device-title {
    color: hsl(228, 90%, 40%)
}
#wmsx-ports .wmsx-joykeys-device, #wmsx-ports .wmsx-joykeys-device .wmsx-device-title {
    color: hsl(0, 90%, 43%);
}
#wmsx-ports .wmsx-touch-device, #wmsx-ports .wmsx-touch-device .wmsx-device-title {
    color: hsl(167, 100%, 31%);
}
#wmsx-ports .wmsx-joykeys-device .wmsx-virtual {
    opacity: 0.33;
}
#wmsx-ports .wmsx-joykeys-device .wmsx-joy-button.wmsx-virtual {
    background: hsl(0, 0%, 75%);
    box-shadow: 0 3px 0 0 hsl(0, 0%, 60%), 0 3px 0 1px hsl(0, 0%, 40%);
}
#wmsx-ports .wmsx-joykeys-device .wmsx-joy-hs.wmsx-virtual {
    display: none;
}

#wmsx-ports .wmsx-joy {
    display: none;
    position: relative;
    top: 14px;
    width: 252px;
    font-weight: bold;
    text-align: center;
    vertical-align: top;
    box-sizing: border-box;
}
#wmsx-ports-device1 .wmsx-joy {
    margin-right: 8px;
}
#wmsx-ports-device2 .wmsx-joy {
    margin-left: 8px;
}

.wmsx-joy-logo, .wmsx-mouse-logo {
    position: absolute;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAOCAYAAABU4P48AAAGXklEQVRIx9VWbUyUVxZ+3vedd2YYvmYQhrF8CNuCWMoKgqhp7a7rtutC9gOMrtnEuEZ0daHaWLtsqV2DGnaTkqbJbsq2dmti2ZZ1I2m0mHZr1JKCgDUja3EHbEUHBDowMzAM77xf9579USQ0Xfu/z697T87JeXKec8+5wDyovk7AdwALJB+y2zznH13+53yb9YdDmuabMM1geVzcSgD66ZlIX1VyYplEcN5QtXMb/nPz6AsNDT/du3t3Y1RR2OXLl9+sra39e1NT07YtW7Y8p2ma0tvbe2rXrl1v1NfXL9m0adNOl8tVQUSJRPSNwlgsFkHX9etlZWUvAPi8qrq69NixY81zipIhybLR1dn52oH9+98AYCwEpduseZ8UP3aXNjxO9ORaaitcrtD6NUQb19OLuctC9EQ50ZPr6JPvr1DswI6ujo4hmkdbW9ssgOozZ84MLLJFAez0er2fRqNR4pzTt0HVdXrx8OELAFb++8KFTkXXyeCMLnZ2stzc3JMAkgHAstASwGSfonz6eGJCNqwy/quqDIybAFmSJFEeVzVjqc0mF1jlOAmoWF5cnHU/trS0NAHAz0pKSpbdt7ndbltFRcVv8/PzVzkcDszMzCAcDkOSpK/yEYFxDkEU4Xa7YbPb8btnntmY7HS2lZSVPgJRxNj4BPbu2X1reHj4PQCzXyMc0PTI9ahyCamsGpBRYLdbhnWd51ok/CIx3n4+MhvblSLJSyDgEZtclux22+7HZmZmoqioaH1WVpZjQbH0dLGqqmqFIAiIxWKoq6sLt7a2Xnc6nZosy9bUtLQ4q9UqK4oi76utza3Zsycp0ZWMnTU1BVa7Haqm4bmDB0NDvsF/AOgAwL/Rz9sf8vx8ZHXxLP1gHU2WF7PWFXlztLaUaF0Z/TItJUDlJeR/OJs3bK6OMMYW5DQMg1pbW9XFEkejUWpvb4+Njo6ajHPyj4ywkdFRYyIQ0L/w+8NHjx9/CUA+AJcrJeXAlatXI+FYjEKKQpNzc9TU3KwAeBuAazFJcdGZhmMxf38sdhemiVSLLA7MKYwxRiCOBFGUpzSdfzgeMNY89WOrIAgL0kqShK1bt9oAgHMOToT4+HjMzEZw4eJFDYKArMxMMSMjw5KaliZ7PB5n3bPPHn2psfFlACwcCr17x++fMBiDbhpQNR3nOzoiAF4BEF5MWFp88atabHVi4tq1cfZCcEK/qrJMi0VyioKoEYm3NUO/EQxT8aHnxWU5OVIwGCSv18uzs7NFUZLAGMOAz8dNk8MR7xCC4WnzWGNjt9frjQVCodSbPp/g8/koyeWCIyFBSExKyj154sTEn1599emfVFZWQhRFDgEEwqqysoSLH300NjM9/fGDKgwAc1PMGA7oBgPnKLBZZW9MNWcNExtsdus/A5NznuV5lJGdLRKA28O3WUtLyywAmIxBN0309fbq3b1X9JiuY1lurjXd42EnXn/9ZM2OHU3bt207XLdv3+mbgz5NNXTEJyVKss32602VlTUWq9Wi6ToGBwe5SYTMnBw0t7Q0AFjzbYTZQDT22eeqGjFMEx5BFHyqasYYgygAgZimi48VTqemp0uMc/T2XlXujvgDkZhCBufQdB09PVdCPd3dk7phkNvjEf919uzTM4bRPG0Yh0OqevzW2NivVpevsYsWGT09vWzvgf2Ppi1dmkaCgO6uLmNjefngtb6+WYMx5BcW2pr+8te3AXzvQYTpvalQr183IhYixAOSSGSZZQzgHCs5t4dXrlKS4uIESRTx/vvngpOTU9dD4WkmyzKmIxH4Boe+vOv3+yFJgmCxwCSCwRgM04RJBN0wYImLw8eXLuHmwADVHznihCDgzp072L558xCAP7x76tTpYCgMm92O9Rt/lPeb2tojAJK+NtYW4YvOqPK3rrm5gxGTOyYMwz8QUxMMw1xyi3M1u79//OChQ6mqpskffvBBH4CXT771luve2NgTwclJpauzs6uwqOhy09GjSVPBYB6IOM0/TgIgiCL1X7sWueH1jhxoaHD88fnfZ5imaT/X3j4Kzl8DcLb9nXe8nOC02W0VhmkI46P3Sm0Ox8Oaongf9H+Q52VIBzADQAGQBoABCAJIAWADcA/AbQBOAEXzq9MP4EsAHgA5/0dFAJiGIHwGIjeAgq/2FmYA9C/yibs/9ubz+wFM4LuG/wFQqng3L3GLVwAAAABJRU5ErkJggg==");
}

.wmsx-joy .wmsx-joy-trig {
    position: absolute;
    top: -6px;
    width: 45px;
    height: 40px;
    background: hsl(0, 0%, 68%);
    border-radius: 5px;
    box-shadow: inset 1px 1px hsl(0, 0%, 90%), 0 2px 2px 2px hsl(0, 0%, 47%);
}
.wmsx-joy .wmsx-joy-L {
    left: 25px;
    border-top-left-radius: 16px;
}
.wmsx-joy .wmsx-joy-R {
    right: 25px;
    border-top-right-radius: 16px;
}

.wmsx-joy .wmsx-joy-middle {
    position: absolute;
    left: 2px;
    right: 2px;
    height: 85px;
    background: white;
    background: linear-gradient(hsl(0, 0%, 94%), white, white, hsl(0, 0%, 93%));
    border-radius: 50px 50px 40px 40px;
    box-shadow:
    0 5px 0 0     hsl(0, 0%, 78%),
    0 1px 2px 1px hsl(0, 0%, 73%),
    0 6px 4px 1px hsl(0, 0%, 40%);
}

.wmsx-joy-logo {
    top: 17px;
    left: 103px;
    width: 46px;
    height: 14px;
}

.wmsx-joy .wmsx-joy-outleft, .wmsx-joy .wmsx-joy-outright {
    position: absolute;
    width: 100px;
    height: 97px;
    background: white;
    border-radius: 100%;
    transform-origin: 50px 50px;
    transform: rotate(6deg);
    box-shadow:
    0 5px 0 -1px      hsl(0, 0%, 78%),
    0 6px 0 -1px      hsl(0, 0%, 78%),
    -1px 8px 2px -2px hsl(0, 0%, 48%),
    0 9px 4px -2px    hsl(0, 0%, 36%);
}
.wmsx-joy .wmsx-joy-outright {
    right: 0;
    transform: rotate(-6deg);
    box-shadow:
    0 5px 0 -1px     hsl(0, 0%, 78%),
    0 6px 0 -1px     hsl(0, 0%, 78%),
    1px 8px 2px -2px hsl(0, 0%, 48%),
    0 9px 4px -2px   hsl(0, 0%, 36%);
}

.wmsx-joy .wmsx-joy-left, .wmsx-joy .wmsx-joy-right {
    position: absolute;
    top: 10px;
    width: 80px;
    height: 78px;
    background: hsl(0, 0%, 87%);
    border: 1px solid hsl(0, 0%, 76%);
    border-right: none;
    border-bottom: none;
    border-radius: 100%;
    box-sizing: border-box;
}
.wmsx-joy .wmsx-joy-left {
    left: 10px;
}
.wmsx-joy .wmsx-joy-left:before {
    content: "";
    position: absolute;
    top: 9px;
    left: 10px;
    width: 58px;
    height: 58px;
    background: hsl(0, 0%, 77%);
    border-radius: 1000px;
    box-sizing: border-box;
}
.wmsx-joy .wmsx-joy-right {
    right: 10px;
}
.wmsx-joy .wmsx-joy-right:before {
    content: "";
    position: absolute;
    top: 20px;
    right: 16px;
    width: 27px;
    height: 57px;
    background: hsl(0, 0%, 77%);
    border-radius: 1000px;
    box-sizing: border-box;
    transform: rotate(45deg);
}

.wmsx-joy .wmsx-joy-dir {
    position: absolute;
    color: hsl(0, 0%, 95%);
    background: hsl(0, 0%, 49%);
    border: 1px solid hsl(0, 0%, 64%);
    border-right-color: hsl(0, 0%, 42%);
    border-bottom-color: hsl(0, 0%, 35%);
    border-radius: 2px 2px 0 0;
    box-shadow:  0 3px 1px hsl(0, 0%, 40%), 0 3px 0 1px hsl(0, 0%, 15%);
    box-sizing: border-box;
}
.wmsx-joy .wmsx-joy-dirh {
    top: 28px;
    left: 16px;
    width: 46px;
    height: 14px;
}
.wmsx-joy .wmsx-joy-dirv {
    top: 12px;
    left: 32px;
    width: 14px;
    height: 45px;
}
.wmsx-joy .wmsx-joy-dir-center {
    position: absolute;
    top: 29px;
    left: 30px;
    width: 18px;
    height: 12px;
    background: hsl(0, 0%, 49%);
}
.wmsx-joy .wmsx-joy-dir-center:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 4px;
    height: 8px;
    width: 8px;
    border-radius: 1000px;
    box-shadow: inset 0 0 6px hsl(0, 0%, 36%), inset 1px 1px 2px -1px hsl(0, 0%, 36%), 1px 1px 0 hsl(0, 0%, 65%);
}

.wmsx-joy-button {
    position: relative;
    display: inline-block;
    top: -1px;
    min-width: 19px;
    height: 19px;
    margin: 0 1px;
    font-size: 12px;
    line-height: 14px;
    padding-top: 3px;
    color: hsl(0, 0%, 97%);
    background: hsl(0, 00%, 54%);
    border-radius: 100%;
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1), 0 3px 0 0 hsl(0, 0%, 40%), 0 3px 0 1px hsl(0, 0%, 15%);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.wmsx-joy-button.wmsx-square {
    top: -2px;
    min-width: 18px;
    height: 18px;
    font-size: 11px;
    border-radius: 1px 1px 0 0;
    padding: 2px 5px 0;
    box-shadow: inset 1px 1px hsl(0, 0%, 64%), inset -1px -1px hsl(0, 0%, 35%), 0 3px 0 0 hsl(0, 0%, 40%), 0 3px 0 1px hsl(0, 0%, 15%);
}

.wmsx-joy .wmsx-joy-A {
    position: absolute;
    top: 46px;
    left: 29px;
    background: hsl(132, 90%, 41%);
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1), 0 3px 0 0 hsl(127, 90%, 30%), 0 3px 0 1px hsl(0, 0%, 15%);
}
.wmsx-joy .wmsx-joy-B {
    position: absolute;
    top: 26px;
    left: 49px;
    background: hsl(0, 94%, 63%);
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1), 0 3px 0 0 hsl(0, 90%, 43%), 0 3px 0 1px hsl(0, 0%, 15%);
}
.wmsx-joy .wmsx-joy-X {
    position: absolute;
    top: 26px;
    left: 9px;
    background: hsl(234, 80%, 66%);
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1), 0 3px 0 0 hsl(234, 80%, 47%), 0 3px 0 1px hsl(0, 0%, 15%);
}
.wmsx-joy .wmsx-joy-Y {
    position: absolute;
    top: 6px;
    left: 29px;
    background: hsl(58, 100%, 44%);
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.06), 0 3px 0 0 hsl(56, 100%, 33%), 0 3px 0 1px hsl(0, 0%, 15%);
}

.wmsx-joy .wmsx-joy-center .wmsx-joy-button {
    position: absolute;
    top: 43px;
    width: 18px;
    height: 09px;
    color: hsl(0, 0%, 58%);
    border-radius: 1000px;
    background: hsl(0, 0%, 82%);
    box-shadow: inset 0 1px 1px hsl(0, 0%, 70%), 0 2px 0 0 hsl(0, 0%, 62%), 0 2px 0 1px hsl(0, 0%, 30%);
}

.wmsx-joy .wmsx-joy-center .wmsx-joy-BACK {
    left: 103px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
}
.wmsx-joy .wmsx-joy-center .wmsx-joy-START {
    right: 103px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
}

.wmsx-joy-hs {
    position: absolute;
    border: 1px solid transparent;
    border-radius: 1000px;
    box-sizing: border-box;
    cursor: pointer;
}
.wmsx-joy-hs.wmsx-joy-hs-unmapped {
    color: rgb(30, 30, 30);
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
}

.wmsx-joy-hs-UP, .wmsx-joy-hs-DOWN, .wmsx-joy-hs-LEFT, .wmsx-joy-hs-RIGHT {
    width: 26px;
    height: 25px;
    padding-top: 6px;
    font-size: 10px;
    line-height: 10px;
    color: hsl(0, 0%, 95%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.wmsx-joy-hs-UP {
    top: 18px;
    left: 37px;
    padding-top: 7px;
}
.wmsx-joy-hs-DOWN {
    top: 51px;
    left: 37px;
    padding-top: 4px;
}
.wmsx-joy-hs-LEFT {
    top: 34px;
    left: 21px;
}
.wmsx-joy-hs-RIGHT {
    top: 34px;
    left: 53px;
}
.wmsx-joy-hs-A, .wmsx-joy-hs-B, .wmsx-joy-hs-X, .wmsx-joy-hs-Y {
    width: 21px;
    height: 23px;
    font-size: 12px;
    line-height: 18px;
    color: hsl(0, 0%, 99%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.wmsx-joy-hs-A {
    top: 57px;
    right: 39px;
}
.wmsx-joy-hs-B {
    top: 37px;
    right: 19px;
}
.wmsx-joy-hs-X {
    top: 37px;
    right: 59px;
}
.wmsx-joy-hs-Y {
    top: 17px;
    right: 39px;
}
.wmsx-joy-hs-L, .wmsx-joy-hs-R {
    width: 54px;
    height: 25px;
    top: -20px;
    color: hsl(0, 0%, 52%);
    font-size: 12px;
    line-height: 12px;
    border-radius: 0;
}
.wmsx-joy-hs-L {
    left: 21px;
}
.wmsx-joy-hs-R {
    right: 22px;
}
.wmsx-joy-hs-BACK, .wmsx-joy-hs-START {
    width: 26px;
    height: 29px;
    top: 39px;
    padding-top: 18px;
    font-size: 7px;
    font-weight: normal;
    line-height: 11px;
    color: hsl(0, 0%, 54%);
    border-radius: 0;
}
.wmsx-joy-hs-BACK {
    left: 99px;
}
.wmsx-joy-hs-START {
    right: 99px;
}

#wmsx-ports .wmsx-mouse {
    display: none;
    position: relative;
    width: 230px;
}

#wmsx-ports .wmsx-mouse-body {
    position: relative;
    top: 6px;
    left: -8px;
    overflow: visible;
    white-space: nowrap;
    width: 59px;
    height: 75px;
    margin: 14px auto;
    background: linear-gradient(166deg, white, white, white, white, hsl(0, 0%, 97%), hsl(0, 0%, 90%));
    border: 1px solid hsl(0, 0%, 81%);
    border-right-color: hsl(0, 0%, 76%);
    border-radius: 10px 8px 25px 32px;
    box-sizing: border-box;
    transform: skew(-47deg, 30deg);
    box-shadow:
        /* inset 0px 0px 1px 0      hsl(0, 0%, 45% */
    3px 2px 0   -1px hsl(0, 0%, 70%)
    ,4px 3px 0   -1px hsl(0, 0%, 60%)       /* line */
    ,6px 4px 0   -2px hsl(0, 0%, 82%)       /* line */
    ,5px 0   0   -4px hsl(0, 0%, 70%)
    ,6px 0   0   -4px hsl(0, 0%, 70%)
    ,7px 1px 0   -4px hsl(0, 0%, 70%)
    ,8px 2px 0   -4px hsl(0, 0%, 70%)
    ,9px 3px 0   -4px hsl(0, 0%, 70%)
    ,10px 4px 0  -4px hsl(0, 0%, 70%)
    ,11px 5px 0  -4px hsl(0, 0%, 70%)
    ,12px 6px 0  -4px hsl(0, 0%, 70%)
    ,13px 7px 0  -4px hsl(0, 0%, 70%)
    ,14px 8px 0  -4px hsl(0, 0%, 70%)
    ,17px 8px 0  -6px hsl(0, 0%, 70%)
    ,18px 11px 0 -6px hsl(0, 0%, 70%)
    ,2px 6px 0   -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,4px 7px 0   -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,8px 9px 0   -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,10px 09px 0 -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,12px 10px 0 -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,14px 10px 0 -4px hsl(0, 0%, 70%)       /* bottom correction */
    ,19px 11px 4px -6px hsl(0, 0%, 3%)      /* shadow */
    ,13px 12px 4px -6px hsl(0, 0%, 3%)      /* shadow */
;
}

#wmsx-ports .wmsx-mouse-button1, #wmsx-ports .wmsx-mouse-button2 {
    position: absolute;
    height: 25px;
    background: transparent;
    border: 0 solid hsl(0, 0%, 70%);
    box-sizing: border-box;
}
#wmsx-ports .wmsx-mouse-button1 {
    width: 48%;
    border-right-width: 1px;
}
#wmsx-ports .wmsx-mouse-button2 {
    width: 101%;
    border-bottom-width: 1px;
}

.wmsx-mouse-logo {
    top: 29px;
    left: 14px;
    width: 24px;
    height: 7px;
    background-size: 100%;
}

#wmsx-ports .wmsx-none {
    display: none;
    width: 104px;
    height: 106px;
    margin: 12px 63px 0;
    border: 12px solid hsl(0, 0%, 72%);
    border-radius: 100%;
    box-sizing: border-box;
}
#wmsx-ports .wmsx-none:after {
    content: "";
    display: block;
    position: relative;
    top: 50%;
    left: -6px;
    width: 92px;
    height: 12px;
    background: hsl(0, 0%, 72%);
    transform: translateY(-50%) rotate(-45deg);
}

#wmsx-ports .wmsx-touch {
    display: none;
    width: 68px;
    height: 107px;
    margin: 8px 81px 0;
    background: white;
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px hsl(0, 0%, 70%), 1px 1px 0 1px hsl(0, 0%, 40%), 2px 3px 4px hsl(0, 0%, 26%);
}
#wmsx-ports .wmsx-touch:before {
    content: "";
    display: block;
    position: relative;
    width: 58px;
    height: 77px;
    margin: 13px auto 4px;
    background: hsl(0, 0%, 35%);
}
#wmsx-ports .wmsx-touch:after {
    content: "";
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    left: 29px;
    border: 1px solid hsl(0, 0%, 60%);
    background: hsl(0, 0%, 95%);
    border-radius: 100%;
}

#wmsx-about {
    left: 2400px;
    font-size: 18px;
}

#wmsx-about #wmsx-logo-version {
    width: 380px;
    height: 212px;
    margin: 36px auto 24px;
    color: hsl(0, 0%, 98%);
    padding-top: 170px;
    box-sizing: border-box;
    text-align: center;
    background: black url("` + wmsx.Images.urls.logo + `") center 50px no-repeat;
    background-size: 334px 100px;
    box-shadow: 3px 3px 14px rgb(75, 75, 75);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#wmsx-about .wmsx-info {
    line-height: 30px;
    text-align: center;
}

#wmsx-about a {
    color: rgb(0, 40, 200);
    text-decoration: none;
}
#wmsx-about a:hover {
    text-decoration: underline;
}

#wmsx-about #wmsx-browserinfo {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 7px;
    font-size: 10px;
    text-align: center;
    color: transparent;
}

#wmsx-control-mapping-popup {
    display: none;
    position: fixed;
    padding: 4px 9px;
    font: normal 13px sans-serif;
    line-height: 19px;
    text-align: center;
    vertical-align: top;
    border-radius: 6px;
    border: 8px white solid;
    background: rgb(220, 220, 220);
    box-shadow: 0 3px 3px 2px rgba(0, 0, 0, .55);
    box-sizing: border-box;
    z-index: 10;
}
#wmsx-control-mapping-popup .wmsx-command {
    width: auto;
    line-height: 21px;
    margin: 10px 0;
    font-weight: bold;
}
#wmsx-control-mapping-popup:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    margin: 0 auto;
    border-width: 10px;
    border-style: solid;
    border-color: transparent white white transparent;
    box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, .55);
    box-sizing: border-box;
    transform: translateY(16px) rotate(45deg);
}

.wmsx-clear {
    clear: both;
}

.wmsx-divider {
    clear: both;
    height: 27px;
}

.wmsx-full-divider {
    clear: both;
    height: 21px;
}

#wmsx-general .wmsx-full-divider {
    clear: both;
    height: 18px;
}`;

};
