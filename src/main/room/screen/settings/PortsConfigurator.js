// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file./**

wmsx.PortsConfigurator = function(controllersHub, returnFocusElement) {
"use strict";

    var self = this;

    function init() {
        setup();
    }

    this.controllersSettingsStateUpdate = function() {
        this.refresh();
    };

    this.refresh = function() {
        var state = controllersHub.getSettingsState();
        mouseModeElement.innerHTML = "Mouse Mode: " + state.mouseModeDesc;
        joysticksModeElement.innerHTML = "Joysticks Mode: " + state.joysticksModeDesc;
        joykeysModeElement.innerHTML = "Joykeys Mode: " + state.joykeysModeDesc;

        for (var p = 0; p < 2; ++p) {
            var device = state.ports[p];
            var classList = deviceElements[p].classList;
            classList.remove.apply(classList, DEVICE_CLASSES);
            if (device.startsWith(wmsx.ControllersHub.MOUSE))
                classList.add("wmsx-mouse-device");
            else if (device.startsWith(wmsx.ControllersHub.JOY_ANY))
                classList.add(device.startsWith(wmsx.ControllersHub.JOYSTICK) ? "wmsx-joystick-device" : "wmsx-joykeys-device");
            else if (device.startsWith(wmsx.ControllersHub.TOUCH))
                classList.add("wmsx-touch-device");
            else
                classList.add("wmsx-none-device");
            deviceTitleElements[p].innerHTML = device;
        }

        for (var i = 0; i < buttonElements.length; ++i) {
            var but = buttonElements[i];
            var mapping = this.getMappingForControl(but.wmsxButton, but.wmsxPort);
            var unmapped = !mapping
                || (mapping.constructor === Array && mapping.length === 0)
                || (mapping.constructor === Object && (mapping.from.length === 0 || mapping.to.length === 0));       // Virtual button
            if (unmapped) but.classList.add("wmsx-joy-hs-unmapped");
            else but.classList.remove("wmsx-joy-hs-unmapped");
        }
    };

    this.getMappingForControl = function(button, port) {
        return controllersHub.getMappingForControl(button, port);
    };

    this.customizeControl = function(button, port, mapping) {
        controllersHub.customizeControl(button, port, mapping);
        this.refresh();
    };

    function setup() {
        // Set mode fields
        mouseModeElement = document.getElementById("wmsx-ports-mouse-mode");
        mouseModeElement.addEventListener("click", function() { controllersHub.toggleMouseMode(); });
        joysticksModeElement = document.getElementById("wmsx-ports-joysticks-mode");
        joysticksModeElement.addEventListener("click", function() { controllersHub.toggleJoystickMode(); });
        joykeysModeElement = document.getElementById("wmsx-ports-joykeys-mode");
        joykeysModeElement.addEventListener("click", function() { controllersHub.toggleJoykeysMode(); });

        // Set device and buttons elements
        for (var p = 1; p <= 2; ++p) {
            var hubPort = p - 1;
            deviceElements[hubPort] = document.getElementById("wmsx-ports-device" + p);
            deviceTitleElements[hubPort] = document.getElementById("wmsx-ports-device" + p + "-title");
            for (var b in wmsx.JoystickButtons) {
                var buttonElement = document.getElementById("wmsx-joy" + p + "-" + wmsx.JoystickButtons[b].n);
                if (!buttonElement) continue;
                buttonElement.wmsxButton = b;
                buttonElement.wmsxPort = hubPort;
                setupButtonMouseEvents(buttonElement);
                buttonElements.push(buttonElement);
            }
            deviceElements[hubPort].addEventListener("mousedown", mouseDown);
            var mouseElement = document.getElementById("wmsx-mouse" + p);
            mouseElement.wmsxButton = "MOUSE";
            mouseElement.wmsxPort = hubPort;
            setupButtonMouseEvents(mouseElement);
        }
    }

    function setupButtonMouseEvents(buttonElement) {
        buttonElement.addEventListener("mouseenter", mouseEnterButton);
        buttonElement.addEventListener("mouseleave", mouseLeaveButton);
    }

    function mouseEnterButton(e) {
        if (e.target.wmsxButton) {
            buttonElementEditing = e.target;
            joyButtonEditing = buttonElementEditing.wmsxButton;
            portEditing = buttonElementEditing.wmsxPort;
            updatePopup()
        } else
            mouseLeaveButton();
    }

    function mouseLeaveButton() {
        buttonElementEditing = joyButtonEditing = portEditing = null;
        updatePopup();
    }

    function mouseDown(e) {
        if (joyButtonEditing && e.which === 3) controllersHub.clearControl(joyButtonEditing, portEditing);
        self.refresh();
        updatePopup();
    }

    function updatePopup() {
        if (!joyButtonEditing) {
            popup.hide();
            controllersHub.mappingPopupVisibility(popup, portEditing, false);
            returnFocusElement.focus();
            return;
        }

        // Position
        var keyRec = buttonElementEditing.getBoundingClientRect();
        var x = keyRec.left + keyRec.width / 2;
        var y = keyRec.top;

        var text = controllersHub.getMappingPopupText(joyButtonEditing, portEditing);
        popup.show(self, joyButtonEditing, portEditing, x, y, text.heading, text.footer);
        controllersHub.mappingPopupVisibility(popup, portEditing, true);
    }



    var mouseModeElement, joysticksModeElement, joykeysModeElement;
    var deviceElements = [], deviceTitleElements = [], buttonElements = [];

    var buttonElementEditing = null, joyButtonEditing = null, portEditing = null;

    var popup = wmsx.ControlMappingPopup.get();

    var DEVICE_CLASSES = [ "wmsx-none-device", "wmsx-mouse-device", "wmsx-joystick-device", "wmsx-joykeys-device", "wmsx-touch-device"];


    init();

};
