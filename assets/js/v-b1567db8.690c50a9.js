"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50115],{823548:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-b1567db8","path":"/guide/adapters/flashing/alternative_flashing_methods.html","title":"Alternative flashing methods","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"With Raspberry Pi (~3min)","slug":"with-raspberry-pi-3min","link":"#with-raspberry-pi-3min","children":[]},{"level":3,"title":"Via Arduino Uno/ESP8266 with CCLoader (~3min)","slug":"via-arduino-uno-esp8266-with-ccloader-3min","link":"#via-arduino-uno-esp8266-with-ccloader-3min","children":[]},{"level":3,"title":"Via Arduino/ESP8266 with CCLib (~3hrs)","slug":"via-arduino-esp8266-with-cclib-3hrs","link":"#via-arduino-esp8266-with-cclib-3hrs","children":[]}],"git":{"updatedTime":1688280372000},"filePathRelative":"guide/adapters/flashing/alternative_flashing_methods.md"}')},664203:(e,i,n)=>{n.r(i),n.d(i,{default:()=>z});var a=n(166252);const t=n.p+"assets/img/CC2531_wiring_raspi-header.5711ef70.jpg";var r=n(654256);const s=n.p+"assets/img/IMG_20180111_193941.03eceed6.jpg",d=n.p+"assets/img/IMG_20180111_193923.a5a7d7ba.jpg",l=n.p+"assets/img/IMG_20180110_234401.a8ca2bd3.jpg",o=(0,a._)("h1",{id:"alternative-flashing-methods",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#alternative-flashing-methods","aria-hidden":"true"},"#"),(0,a.Uk)(" Alternative flashing methods")],-1),c=(0,a._)("h3",{id:"with-raspberry-pi-3min",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#with-raspberry-pi-3min","aria-hidden":"true"},"#"),(0,a.Uk)(" With Raspberry Pi (~3min)")],-1),u={href:"https://github.com/WiringPi/WiringPi/releases",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/jmichault/flash_cc2531",target:"_blank",rel:"noopener noreferrer"},p=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/jmichault/flash_cc2531.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Connect the following pins of the debug port to the GPIO port :</li></ol><ul><li>pin 1 (GND) --&gt; pin 39 (GND)</li><li>pin 7 (reset) --&gt; pin 35 (GPIO24, BCM19)</li><li>pin 3 (DC) --&gt; pin 36 (GPIO27, BCM16)</li><li>pin 4 (DD) --&gt; pin 38 (GPIO28, BCM20)</li></ul><p><img src="'+t+'" alt=""></p><p>Optionally, connecting Target Voltage Sense to a 3.3v source (Red wire) eliminates the need to plug the device into a usb port, so optionally connect the following too:</p><ul><li>pin 2 (Target Voltage Sense) --&gt; pin 1 or pin 17 (3.3v) on Raspi</li></ul>',6),m={href:"https://pinout.xyz/",target:"_blank",rel:"noopener noreferrer"},b=(0,a.uE)('<p>A downloader cable CC2531 <img src="'+r+'" alt=""> and 4 Dupont line Female to Female are perfect for this purpose. If you don&#39;t want to buy a downloader cable, you need to bend the debug pins outwards to be able to connect your Dupont cables since the pins are too close together to connect the Dupont cables directly.</p><p>Now insert the usb dongle in an USB port :</p><p><img src="https://raw.githubusercontent.com/jmichault/files/master/Raspberry-CC2531.jpg" alt=""></p><ol start="4"><li>Test by running :</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> flash_cc2531\n./cc_chipid\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>it should return :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  ID = b524.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you see 0000 or ffff, something is wrong and you should probably check your wiring.</p>',8),v={start:"5"},g={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},C=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/flash_cc2531       <span class="token comment">#assuming you git-cloned the program to your home directory</span>\n<span class="token function">wget</span> https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip\n<span class="token function">unzip</span> CC2531_DEFAULT_20211115.zip  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Erase and flash the CC2531 :</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cc_erase\n./cc_write CC2531ZNP-Prod.hex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>It takes around 3 minutes.</p><h3 id="via-arduino-uno-esp8266-with-ccloader-3min" tabindex="-1"><a class="header-anchor" href="#via-arduino-uno-esp8266-with-ccloader-3min" aria-hidden="true">#</a> Via Arduino Uno/ESP8266 with CCLoader (~3min)</h3><p><strong>This has been tested with a Genuine Arduino Uno, an Arduino Pro Micro - China clone, and a NodeMCU ESP8266 and is significantly faster than CCLib</strong></p><h4 id="prepare-the-firmware" tabindex="-1"><a class="header-anchor" href="#prepare-the-firmware" aria-hidden="true">#</a> Prepare the firmware</h4>',7),f={href:"https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/",target:"_blank",rel:"noopener noreferrer"},_=(0,a._)("p",null,[(0,a.Uk)("Unpack firmware and convert the hex file to binary using "),(0,a._)("code",null,"objcopy"),(0,a.Uk)(" (do not use the included binary file!)")],-1),k=(0,a._)("em",null,[(0,a._)("strong",null,"Windows")],-1),w=(0,a._)("code",null,"objcopy.exe",-1),x={href:"https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump",target:"_blank",rel:"noopener noreferrer"},D=(0,a.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Linux or Bash on Ubuntu on Windows</strong>: install the <code>binutils</code> package using your package manager</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objcopy --gap-fill 0xFF --pad-to 0x040000 <span class="token parameter variable">-I</span> ihex CC2531ZNP-Prod.hex <span class="token parameter variable">-O</span> binary /tmp/CC2531ZNP-Prod.bin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),y=(0,a._)("h4",{id:"prepare-ccloader",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#prepare-ccloader","aria-hidden":"true"},"#"),(0,a.Uk)(" Prepare CCLoader")],-1),P={href:"https://github.com/RedBearLab/CCLoader",target:"_blank",rel:"noopener noreferrer"},U=(0,a.uE)('<li>On Windows you can use the precompiled <code>CCloader.exe</code></li><li>On Linux you have to compile <code>CCLoader</code> yourself so change directory to <code>CCLoader/SourceCode/Linux</code>, and run<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc main.c <span class="token parameter variable">-o</span> CCLoader\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',2),E=(0,a.uE)('<h4 id="flashing-the-arduino-or-esp8266-and-the-cc2531-device" tabindex="-1"><a class="header-anchor" href="#flashing-the-arduino-or-esp8266-and-the-cc2531-device" aria-hidden="true">#</a> Flashing the Arduino or ESP8266 and the CC2531 device</h4><ol><li>For Arduino, leave the pins set as default in &#39;Arduino\\CCLoader\\CCLoader.ino&#39; (lines 86-90):</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Debug control pins &amp; the indicate LED\nint DD = 6;\nint DC = 5;\nint RESET = 4;\nint LED = 13;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For ESP8266 (NodeMCU or WeMos D1 Mini) edit those pins in &#39;Arduino\\CCLoader\\CCLoader.ino&#39; (lines 86-90) to usable pins for the ESP8266, these worked for me (note that the number is the GPIO number, not the label on the NodeMCU):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Debug control pins &amp; the indicate LED\nint DD = 14; //GPIO14=D5 on NodeMCU/WeMos D1 Mini\nint DC = 4; //GPIO4=D2 on NodeMCU/WeMos D1 Mini\nint RESET = 5; //GPIO5=D1 on NodeMCU/WeMos D1 Mini\nint LED = 2; //GPIO2=D4 and the Blue LED on the WeMos D1 Mini and the ESP-12E module on the NodeMCU, or can use GPIO16=D0 for the other Blue LED on NodeMCU\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),L=(0,a._)("code",null,"Arduino\\CCLoader\\CCLoader.ino",-1),S={href:"https://www.arduino.cc/en/main/software",target:"_blank",rel:"noopener noreferrer"},A=(0,a.uE)('<li><p>Note the COM port number or device name as this will be used later</p></li><li><p>Connect Arduino pins as described below to the debug header of the CC device</p><table><thead><tr><th>Arduino</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D4</td><td>7</td><td>RESETn</td></tr><tr><td>D5</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D6</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table><p><img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" alt=""></p><p>If you have a 3.3V Arduino you can optionaly connect <code>3.3V -&gt; Target Voltage Sense (Pin 2)</code> and program the CC2531 without connecting the CC2531 to USB (in the next step).</p><p>Connect the ESP8266 pins as described below to the debug header of the CC device</p><table><thead><tr><th>ESP8266</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D1/GPIO5</td><td>7</td><td>RESETn</td></tr><tr><td>D2/GPIO4</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D5/GPIO14</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table><p><img src="https://user-images.githubusercontent.com/35885181/67834765-dcab2280-faad-11e9-8755-971f0e456217.jpg" alt="C2531 debug pins"><img src="https://user-images.githubusercontent.com/35885181/67834764-dc128c00-faad-11e9-8e06-0937e1bb6790.jpg" alt="CC2531 stick and NodeMCU"></p></li><li><p>Connect Arduino/ESP8266 first, then within a couple seconds connect the CC2531 to USB power</p></li><li><p>Place the prepared <code>CC2531ZNP-Prod.bin</code> next to the executable file</p></li><li><p>Start the flashing process</p><p><strong>Windows</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CCLoader_x86_64.exe [Number of the COM port] CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Example:</em> Arduino UNO on COM7</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CCLoader_x86_64.exe 7 CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Linux</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./CCLoader [Name of the USB device] CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Example:</em> Arduino Uno on <code>/dev/ttyACM0</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./CCLoader /dev/ttyACM0 CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',5),M=(0,a.uE)('<p>It should be done in a few minutes.</p><p>If burning fails/gets stuck at <code>Request sent already! Waiting for respond...</code> - try again, check your wiring, try using <code>1</code> instead of <code>0</code> as the last parameter. Or try run command with <code>sudo</code>.</p><h3 id="via-arduino-esp8266-with-cclib-3hrs" tabindex="-1"><a class="header-anchor" href="#via-arduino-esp8266-with-cclib-3hrs" aria-hidden="true">#</a> Via Arduino/ESP8266 with CCLib (~3hrs)</h3><p>Flashing firmware via Arduino is implemented using the project https://github.com/wavesoft/CCLib <strong>But with minor improvements!!!</strong></p>',4),O={href:"https://github.com/AndrewLinden",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/wavesoft/CCLib/issues/19",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/kirovilya/CCLib",target:"_blank",rel:"noopener noreferrer"},W=(0,a.uE)('<ul><li>Timeouts of operations</li><li>After opening the port (I have in Windows 7) Arduino reboots and, accordingly, does not respond to requests - made a 3 seconds pause (found somewhere in internet).</li><li>The port speed is reduced to 9600, because at another speed leaving communication errors: <code>ERROR: Could not read from the serial port!</code></li></ul><p>Flashing process:</p><ol><li><p>Download and unpack the archive with the library https://github.com/kirovilya/CCLib.</p></li><li><p>Flashing Arduino sketch via Arduino IDE CCLib\\Arduino\\CCLib\\Examples\\CCLib_proxy\\CCLib_proxy.ino</p></li></ol><p><strong>If flashing via esp8266 (wemos d1 mini), you need change connection (p. 5) and Pinout configuration in Arduino/CCLib/Examples/CCLib_proxy/CCLib_proxy.ino:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int CC_RST   = 5;\nint CC_DC    = 4;\nint CC_DD_I  = 14;\nint CC_DD_O  = 12;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>Install Python 2.7 or later (tested with python 2.7.13), if not installed</p></li><li><p>Install pyserial 3.0.1, if not installed <code>pip install -r CCLib\\Python\\requirements.txt</code> or <code>pip install pyserial==3.0.1</code></p></li><li><p>Connect the contacts as described https://github.com/kirovilya/CCLib#1-prepare-your-arduino-board <strong>But in my case, I connected completely without resistors, combined the contacts CC_DD_I and CC_DD_O together and connected to the DD pin of the DEBUG connector!</strong></p></li></ol><p><img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" alt=""></p><p>I connected only 3 specified contacts and GND. During the firmware, the stick and Arduino must be connected to the USB.</p><p><img src="'+s+'" alt=""><img src="'+d+'" alt=""><img src="'+l+'" alt=""></p><ol start="6"><li>After that, try to get information about the chip - if it works, then the connection is correct (example for COM9 port - Arduino port):</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Projects\\CCLib\\Python&gt;python cc_info.py -p COM9\nINFO: Found a CC2531 chip on COM9\n\nChip information:\n      Chip ID : 0xb524\n   Flash size : 256 Kb\n    Page size : 2 Kb\n    SRAM size : 8 Kb\n          USB : Yes\n\nDevice information:\n IEEE Address : 00124b0014aa\n           PC : 0000\n\nDebug status:\n [ ] CHIP_ERASE_BUSY\n [ ] PCON_IDLE\n [X] CPU_HALTED\n [ ] PM_ACTIVE\n [ ] HALT_STATUS\n [ ] DEBUG_LOCKED\n [X] OSCILLATOR_STABLE\n [ ] STACK_OVERFLOW\n\nDebug config:\n [ ] SOFT_POWER_MODE\n [ ] TIMERS_OFF\n [X] DMA_PAUSE\n [X] TIMER_SUSPEND\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),R={href:"https://github.com/wavesoft/CCLib/issues/22#issuecomment-384452424",target:"_blank",rel:"noopener noreferrer"},T={start:"7"},F={href:"https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/",target:"_blank",rel:"noopener noreferrer"},G=(0,a._)("code",null,".hex",-1),B=(0,a._)("strong",null,"remove the second last line",-1),Z=(0,a._)("li",null,[(0,a._)("p",null,"Start the flashing firmware (it takes a long time, about 2-3 hours):")],-1),j=(0,a.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Projects\\ZigBee&gt;python cc_write_flash.py -e -p COM9 --in=CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex\nINFO: Found a CC2531 chip on COM9\n\nChip information:\n      Chip ID : 0xb524\n   Flash size : 256 Kb\n    Page size : 2 Kb\n    SRAM size : 8 Kb\n          USB : Yes\nSections in CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex:\n\n Addr.    Size\n-------- -------------\n 0x0000   8176 B\n 0x1ff6   10 B\n 0x3fff0   1 B\n 0x2000   239616 B\n\nThis is going to ERASE and REPROGRAM the chip. Are you sure? &lt;y/N&gt;:  y\n\nFlashing:\n - Chip erase...\n - Flashing 4 memory blocks...\n -&gt; 0x0000 : 8176 bytes\n    Progress 100%... OK\n -&gt; 0x1ff6 : 10 bytes\n    Progress 100%... OK\n -&gt; 0x3fff0 : 1 bytes\n    Progress 100%... OK\n -&gt; 0x2000 : 239616 bytes\n    Progress 100%... OK\n\nCompleted\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),K={},z=(0,n(983744).Z)(K,[["render",function(e,i){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[o,c,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Install "),(0,a._)("a",u,[(0,a.Uk)("wiringPi"),(0,a.Wm)(n)]),(0,a.Uk)(", if not already installed.")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Install "),(0,a._)("a",h,[(0,a.Uk)("flash_cc2531"),(0,a.Wm)(n)]),(0,a.Uk)(" :")])])]),p,(0,a._)("p",null,[(0,a.Uk)("See above for the dispositions of pins on CC2531, and at "),(0,a._)("a",m,[(0,a.Uk)("https://pinout.xyz/"),(0,a.Wm)(n)]),(0,a.Uk)(" for pins on Raspberry.")]),b,(0,a._)("ol",v,[(0,a._)("li",null,[(0,a.Uk)("Download and extract the latest firmware "),(0,a._)("a",g,[(0,a.Uk)("CC2531_DEFAULT_20211115.zip"),(0,a.Wm)(n)]),(0,a.Uk)(".")])]),C,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Download the correct firmware (in this example we'll be using the "),(0,a._)("a",f,[(0,a.Uk)("CC2531 firmware"),(0,a.Wm)(n)]),(0,a.Uk)(")")])]),(0,a._)("li",null,[_,(0,a._)("p",null,[k,(0,a.Uk)(": download "),w,(0,a.Uk)(" as per "),(0,a._)("a",x,[(0,a.Uk)("this"),(0,a.Wm)(n)]),(0,a.Uk)(" answer from StackOverflow.")]),D])]),y,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("Download and unpack "),(0,a._)("a",P,[(0,a.Uk)("CCLoader"),(0,a.Wm)(n)])]),U]),E,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Flash Arduino Uno or ESP8266 board with "),L,(0,a.Uk)(" (For NodeMCU on Windows: install "),(0,a._)("a",S,[(0,a.Uk)("the Arduino IDE"),(0,a.Wm)(n)]),(0,a.Uk)(', then in Preferences, add the following URL to the Additional Boards Manager URL field: http://arduino.esp8266.com/stable/package_esp8266com_index.json , then go to the Boards Manager and install the esp8266 package, then set the board to "NodeMCU 1.0 (ESP-12E module)" or if you are using a WeMos D1 Mini set it to "LOLIN(WEMOS) D1 R2 & Mini", then set Port to the correct COM port (it was COM3 for me with a NodeMCU), then Upload the sketch.)')])]),A]),M,(0,a._)("p",null,[(0,a._)("a",O,[(0,a.Uk)("AndrewLinden"),(0,a.Wm)(n)]),(0,a.Uk)(" described that he was able to flash CC2531 using CCLib "),(0,a._)("a",I,[(0,a.Uk)("with comments"),(0,a.Wm)(n)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("As described "),(0,a._)("a",N,[(0,a.Uk)("I made a fork of the CCLib library with minor changes"),(0,a.Wm)(n)]),(0,a.Uk)(" for flashing firmware via Arduino:")]),W,(0,a._)("p",null,[(0,a._)("a",R,[(0,a.Uk)("Another example of connection on MacOS"),(0,a.Wm)(n)])]),(0,a._)("ol",T,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("If everything is successful, download "),(0,a._)("a",F,[(0,a.Uk)("the firmware"),(0,a.Wm)(n)]),(0,a.Uk)(". Before we flash the firmware we need to make a modification to it. Open the "),G,(0,a.Uk)(" file in a text editor and "),B,(0,a.Uk)(". Now save the file.")])]),Z]),j])}]])},654256:(e,i,n)=>{e.exports=n.p+"assets/img/downloader_cable.720e6aa2.png"}}]);