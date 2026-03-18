---
sectionid: parts
sectionclass: h2
parent_id: guide
title: Parts
number: 2100
---
A complete ErgoDox build requires sourcing the following components. Most parts are available from common electronics 
suppliers such as Mouser, Digikey, or through community group buys.

## PCBs

PCBs can be ordered with files from the [ErgoDox GitHub repo](https://github.com/robotmaxtron/ErgoDox) using the 
provided Gerber files. Common PCB manufacturers include OSHPark, Seeed Studio, and JLCPCB. Costs will vary depending on 
the quantity ordered, options chosen, etc. JLCPCB has historically had the lowest prices, and several users have had 
PCBs printed by them. 

### Vendors
- [JLCPCB](https://jlcpcb.com/)
- [OSHPark](https://oshpark.com/)
  - Latest Revision: https://oshpark.com/shared_projects/darvLWxS
- [Seeed Studio](https://www.seeedstudio.com/)
- [Profet Keyboards](https://shop.profetkeyboards.com/product/ergodox-pcbs)

## Electronics

The following electronic components are _an example_ of the parts needed for a full build. To make sourcing easier, we've 
provided links to some vendors such as DigiKey and Adafruit for each part:

| Component                              |  Qty  | Part Number                                                                                                               |
|:---------------------------------------|:-----:|:--------------------------------------------------------------------------------------------------------------------------|
| **Adafruit ItsyBitsy 32u4 - 5V 16MHz** |   1   | [3677](https://www.adafruit.com/product/3677)                                                                             |
| **MCP23018 I/O Expander (DIP-28)**     |   1   | [MCP23018-E/SP-ND](https://www.digikey.com/en/products/detail/microchip-technology/MCP23018-E-SP/1999505)                 |
| **Cherry MX Compatible Switches**      | 76-80 | [Kailh Brown](https://www.adafruit.com/product/4954)                                                                      |                                                                                        |
| **1N4148 Diodes (Through-hole)**       | 76-80 | [1N4148FS-ND](https://www.digikey.com/en/products/detail/onsemi/1N4148/458603)                                            |
| **2.2kΩ Resistors**                    |   2   | [CF14JT2K20TR-ND](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/CF14JT2K20/1741321)                |
| **0.1µF Ceramic Capacitor**            |   1   | [BC2665CT-ND](https://www.digikey.com/en/products/detail/vishay-beyschlag-draloric-bc-components/K104K10X7RF5UH5/2356754) |
| **3mm LEDs**                           |   3   | [1080-1041-ND](https://www.digikey.com/en/products/detail/everlight-electronics-co-ltd/HLMP1301-QT264-3ID/2675532)        |
| **220Ω Resistors**                     |   3   | [CF14JT220RCT-ND](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/CF14JT220R/1741346)                |
| **3.5mm TRRS Jacks**                   |   2   | [CP-43514-ND](https://www.digikey.com/en/products/detail/cui-devices/SJ-43514/368146)                                     |
| **TRRS Cable (Male-Male)**             |   1   | [5600-FE-25TRRS-02-MM-ND](https://www.digikey.com/en/products/detail/my-cable-mart/FE-25TRRS-02-MM/24387360)              |
| **Mini USB connector**                 |   1   | [WM17115-ND](https://www.digikey.com/en/products/detail/molex/0548190519/773802)                                          |
| **Short Micro to Mini USB Cable**      |   1   | [839-10-00655-ND](https://www.digikey.com/en/products/detail/tensility-international-corp/10-00655/2766332)               |
| **Mini USB Cable**                     |   1   | [2987-DH-20M50055-ND](https://www.digikey.com/en/products/detail/cvilux-usa/DH-20M50055/13175849)                         |

## Case & Keycaps

There are several options for the ErgoDox case:
- **Layered Acrylic**: The most popular and affordable option. You can laser cut your own or buy a kit. Files are 
available in our [GitHub Repo](https://github.com/robotmaxtron/ErgoDox/tree/master/ErgoDox%20Acrylic%20Case).
- **3D Printed**: Files are available in our [case repository](https://github.com/robotmaxtron/ergodox-case).
- **Custom Wood**: Various artisans create high-end wooden cases.

### Tenting
A **[tenting stand](https://github.com/Ergodox-io/ergodox-tent)** is also available for 3D printing to improve 
ergonomics when using the layered acrylic case.

### Keycaps
You'll need a set of Cherry MX-compatible keycaps. The exact number depends on your chosen layout:

| Layout                 | 1u Keys | 1.5u Keys | 2u Keys | Total |
|:-----------------------|:-------:|:---------:|:-------:|:-----:|
| **Standard (76 keys)** |   60    |    12     |    4    |  76   |
| **Expanded (80 keys)** |   68    |    12     |    0    |  80   |