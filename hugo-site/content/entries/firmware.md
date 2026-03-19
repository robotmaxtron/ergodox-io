---
sectionid: firmware
sectionclass: h2
parent_id: guide
title: Firmware
number: 2300
---
The ErgoDox supports several firmware options. Choose the one that best fits your needs. The main controller has 
traditionally used an ATmega32u4 breakout board. 

## QMK Firmware
The most popular and recommended firmware. It offers powerful features like layers, macros, and deep customization.
- **[QMK Homepage](https://qmk.fm)**
- **[GitHub Repository](https://github.com/qmk/qmk_firmware/tree/master/keyboards/ergodox_ez)**
- **Configuration Tool**: Use the [ErgoDox-EZ Configurator](https://configure.zsa.io/ergodox-ez/layouts/default/latest/0) to generate keymaps and hex files easily.

## Other Options
- **Experimental v3 ErgoDox Firmware**: [Modernized fork](https://github.com/robotmaxtron/ergodox-firmware) of Ben's original firmware with some additional features.
- **TMK Firmware**: Oleg Kostyuk (cub-uanic) [ported the TMK firmware](https://github.com/cub-uanic/tmk_keyboard) 
(written by "hasu") to the ErgoDox! A lightweight, feature-rich firmware.
- **Original Firmware**: Ben Blazak's original code. [GitHub](https://github.com/benblazak/ergodox-firmware).

## Flashing Instructions
Once you have your firmware file (`.hex`), follow these steps to flash it to the **Adafruit ItsyBitsy**:
1. **Enter Bootloader**: Press the reset button on the ItsyBitsy twice in quick succession.
2. **Flash Code**: Use `avrdude` or the [Arduino IDE](https://www.arduino.cc/en/software) to upload the firmware.
3. **Verify**: The keyboard should automatically reset and be ready for use.