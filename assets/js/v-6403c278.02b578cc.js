"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13832],{196298:(e,o,t)=>{t.r(o),t.d(o,{data:()=>s});const s=JSON.parse('{"key":"v-6403c278","path":"/devices/4058075729384.html","title":"LEDVANCE 4058075729384 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"LEDVANCE 4058075729384 control via MQTT","description":"Integrate your LEDVANCE 4058075729384 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-22T18:55:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Effect (enum)","slug":"effect-enum","link":"#effect-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688280372000},"filePathRelative":"devices/4058075729384.md"}')},421058:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var s=t(166252);const a=(0,s._)("h1",{id:"ledvance-4058075729384",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ledvance-4058075729384","aria-hidden":"true"},"#"),(0,s.Uk)(" LEDVANCE 4058075729384")],-1),n=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),u=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"4058075729384")],-1),i=(0,s._)("td",null,"Vendor",-1),c=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"SMART+ Indoor Flex multicolor RGBW")],-1),l=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"light (state, brightness, color_temp, color_xy, color_hs), effect, linkquality")],-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4058075729384.jpg",alt:"LEDVANCE 4058075729384"})])],-1),d=(0,s._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA updates")],-1),p=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),q=(0,s.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_xy</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>526</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_xy</code>: To control the XY color (CIE 1931 color space) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;x&quot;: X_VALUE, &quot;y&quot;: Y_VALUE}}</code> (e.g. <code>{&quot;color&quot;:{&quot;x&quot;:0.123,&quot;y&quot;:0.123}}</code>). To read the XY color send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;x&quot;:&quot;&quot;,&quot;y&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the XY color via RGB: <ul><li><code>{&quot;color&quot;: {&quot;r&quot;: R, &quot;g&quot;: G, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;r&quot;:46,&quot;g&quot;:102,&quot;b&quot;:150}}</code></li><li><code>{&quot;color&quot;: {&quot;rgb&quot;: &quot;R,G,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;rgb&quot;:&quot;46,102,150&quot;}}</code></li><li><code>{&quot;color&quot;: {&quot;hex&quot;: HEX}}</code> e.g. <code>{&quot;color&quot;:{&quot;hex&quot;:&quot;#547CFF&quot;}}</code></li></ul></li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span>\n  <span class="token string-property property">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span>\n  <span class="token string-property property">&quot;hue_move&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;hue_step&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// Decrease hue by 90 (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)</span>\n  <span class="token string-property property">&quot;saturation_step&quot;</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token comment">// Increase saturation by 66 (allowed value range: -255 till 255)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},m=(0,t(983744).Z)(h,[["render",function(e,o){const t=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),a,(0,s._)("table",null,[n,(0,s._)("tbody",null,[u,(0,s._)("tr",null,[i,(0,s._)("td",null,[(0,s.Wm)(t,{to:"/supported-devices/#v=LEDVANCE"},{default:(0,s.w5)((()=>[(0,s.Uk)("LEDVANCE")])),_:1})])]),c,l,r])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,s.kq)(" Notes END: Do not edit below this line "),d,(0,s._)("p",null,[(0,s.Uk)("This device supports OTA updates, for more information see "),(0,s.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("OTA updates")])),_:1}),(0,s.Uk)(".")]),p,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[(0,s.Uk)("How to use device type specific configuration")])),_:1})])]),q])}]])}}]);