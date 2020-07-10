(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0Dsi":function(e,t,n){e.exports=n.p+"static/debugging-browser-8608339e5cceed2fe6363aa9ac694ee1.png"},Ohfv:function(e,t,n){e.exports=n.p+"static/debugging-phpstorm-breakpoint-a3c056662ee1816b179cbd29fcc02722.png"},ehuN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"development/debugging.md"}});var l={_frontmatter:i},b=r.a;function c(e){var t=e.components,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,o({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"debugging"},"Debugging"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Xdebug")," is a great PHP debugging tool. Unfortunately it slows down PHP by around 20-25%. For tests and ",Object(a.b)("inlineCode",{parentName:"p"},"composer")," and ",Object(a.b)("inlineCode",{parentName:"p"},"drush")," commands, it can be even slower. That's why debugging isn't turned on by default and why you should turn off debugging when you are done using it."),Object(a.b)("p",null,"These instructions describe using PHPStorm as the code editor for debugging. To use Visual Studio Code, you will need to install the ",Object(a.b)("a",o({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug"}),"PHP Debug Adapter"),". @TODO: Add ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/AmazeeLabs/silverback/blob/master/docs/development/debugging.md"}),"docs for how to configure VSC")," to work with Amazee.io docker containers."),Object(a.b)("h2",{id:"debugging-php-or-twig-files"},"Debugging PHP or Twig files"),Object(a.b)("p",null,"You will need to setup your browser so that it triggers an Xdebug session. This can be done with bookmarklets or with a browser extension. This only needs to be installed once per browser."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Bookmarklets (works with any browser): ",Object(a.b)("a",o({parentName:"li"},{href:"https://www.jetbrains.com/phpstorm/marklets/"}),"https://www.jetbrains.com/phpstorm/marklets/")),Object(a.b)("li",{parentName:"ul"},"Chrome extension: ",Object(a.b)("a",o({parentName:"li"},{href:"https://chrome.google.com/webstore/search/xdebug"}),"Xdebug Helper")),Object(a.b)("li",{parentName:"ul"},"Firefox add-on: ",Object(a.b)("a",o({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/xdebug-helper-for-firefox/"}),"Xdebug Helper"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note on Twig debugging:")," Twig debugging won't work on old Silverback sites. Ensure ",Object(a.b)("inlineCode",{parentName:"p"},"sites/default/amazeeio.development.services.yml")," file has ",Object(a.b)("inlineCode",{parentName:"p"},"parameters: twig.config: cache")," set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),". If it is set to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", you can safely commit the change to your git repository."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note on Windows debugging:")," If you are using Windows, you will first need to install some software. See the section below on ",Object(a.b)("a",o({parentName:"p"},{href:"#debugging-on-windows-10"}),"Debugging on Windows 10"),"."),Object(a.b)("h3",{id:"at-the-start-of-your-debugging-session"},"At the start of your debugging session…"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Restart the docker container to turn on Xdebug connections."),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"In the Silverback project root directory, edit the ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," file. Edit the following line to remove the ",Object(a.b)("inlineCode",{parentName:"li"},"#")," comment character from its beginning:",Object(a.b)("pre",o({parentName:"li"},{className:"grvsc-container default-dark","data-language":"yaml","data-index":"0"}),Object(a.b)("code",o({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),Object(a.b)("span",o({parentName:"span"},{className:"mtk4"}),"XDEBUG_ENABLE"),Object(a.b)("span",o({parentName:"span"},{className:"mtk1"}),": "),Object(a.b)("span",o({parentName:"span"},{className:"mtk8"}),'"true"')))))),Object(a.b)("li",{parentName:"ol"},"Restart the local docker container with:",Object(a.b)("pre",o({parentName:"li"},{className:"grvsc-container default-dark","data-language":"shellscript","data-index":"1"}),Object(a.b)("code",o({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),Object(a.b)("span",o({parentName:"span"},{className:"mtk1"}),"docker-compose up -d")))))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setup PHPStorm to debug your file."),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the top-right palette of icons in your PHPStorm window, click the “Start Listening for PHP Debug Connections” button. Or select that option from PHPStorm’s “Run” pull-down menu."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"The button looks like a 80s-style phone with a red 'no' symbol next to the hearing end.",src:n("tJMu")}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"At the line of code you'd like to examine, look in the left gutter and click to the right of the line number to add a breakpoint for this line. A red dot will appear to indicate a breakpoint has been set."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"A line of PHP code in PHPStorm with a red dot to its left",src:n("Ohfv")}))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Trigger the debugging with your web browser."),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open your web browser to the web page you want to debug.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Turn on Xdebug with your browser extension or bookmarklet. Either click on the bookmarklet to run its JavaScript code or click on the browser extension's buttons."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"A web browser's bookmarks bar with two bookmarklets for starting and stopping the debugger",src:n("0Dsi")}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Reload the page to begin the debugging session.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"When debugging Twig files"),", you will need to reload the page one extra time. The first time the page loads after your change, Twig will compile the ",Object(a.b)("inlineCode",{parentName:"p"},".twig")," template to a PHP file which it will save in its cache at the end of the first reload. On the second reload, PHPStorm will be able to debug your ",Object(a.b)("inlineCode",{parentName:"p"},".twig")," template using the cached PHP file in the background."))))),Object(a.b)("h3",{id:"at-the-end-of-your-debugging-session"},"At the end of your debugging session…"),Object(a.b)("p",null,"If you fail to turn off debugging, you will notice ",Object(a.b)("inlineCode",{parentName:"p"},"drush")," commands being extremely slow."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Restart the docker container to turn off Xdebug connections."),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"In the Silverback project root directory, edit the ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," file. Edit the following line to add the ",Object(a.b)("inlineCode",{parentName:"li"},"#")," comment character to its beginning:",Object(a.b)("pre",o({parentName:"li"},{className:"grvsc-container default-dark","data-language":"yaml","data-index":"2"}),Object(a.b)("code",o({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),Object(a.b)("span",o({parentName:"span"},{className:"mtk3"}),'#XDEBUG_ENABLE: "true"')))))),Object(a.b)("li",{parentName:"ol"},"Restart the local docker container with:",Object(a.b)("pre",o({parentName:"li"},{className:"grvsc-container default-dark","data-language":"shellscript","data-index":"3"}),Object(a.b)("code",o({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),Object(a.b)("span",o({parentName:"span"},{className:"mtk1"}),"docker-compose up -d")))))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the top-right palette of icons in your PHPStorm window, click the “Stop Listening for PHP Debug Connections” button. Or select that option from PHPStorm’s “Run” pull-down menu."),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("img",{alt:"The button looks like a 80s-style phone with a sound symbol next to the hearing end.",src:n("iI8W")}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Stop triggering a debug session on your web browser, by doing one of the following:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Turn off Xdebug with your browser extension or bookmarklet. Either click on the “stop debugger” bookmarklet or click on the browser extension's buttons."),Object(a.b)("p",{parentName:"li"}," ",Object(a.b)("img",{alt:"A web browser's bookmarks bar with two bookmarklets for starting and stopping the debugger",src:n("0Dsi")}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Or, just close the browser window with the web page you were debugging."))))),Object(a.b)("h2",{id:"debugging-tests"},"Debugging Tests"),Object(a.b)("p",null,"@TODO"),Object(a.b)("h2",{id:"debugging-on-windows-10"},"Debugging on Windows 10"),Object(a.b)("p",null,"Before you can debug on Windows 10, you will need to install and configure a loopback adapter."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install a Loopback adapter.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Start the Hardware Wizard.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Click the Windows ",Object(a.b)("inlineCode",{parentName:"li"},"Start")," menu and type ",Object(a.b)("inlineCode",{parentName:"li"},"cmd")," in the search box."),Object(a.b)("li",{parentName:"ol"},"When ",Object(a.b)("inlineCode",{parentName:"li"},"cmd.exe")," appears, right-click and choose Run as administrator."),Object(a.b)("li",{parentName:"ol"},"In the command prompt, type ",Object(a.b)("inlineCode",{parentName:"li"},"hdwwiz.exe")," and press ",Object(a.b)("inlineCode",{parentName:"li"},"Enter"),"."))),Object(a.b)("li",{parentName:"ol"},"Use the Hardware Wizard.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Click Next."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},"Install the hardware that I manually select from a list (Advanced)"),", then click Next."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},"Network adapters"),", then click Next."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft")," as the manufacturer, select ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft KM-TEST Loopback Adapter")," as the adapter for Windows 10, then click Next."),Object(a.b)("li",{parentName:"ol"},"Select Next to confirm the installation."),Object(a.b)("li",{parentName:"ol"},"Select Finish to complete the installation."))))),Object(a.b)("li",{parentName:"ol"},"Configure the loopback adapter.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Find the newly created adapter.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Start > Settings > Network & Internet > Wi-Fi"),"."),Object(a.b)("li",{parentName:"ol"},"Under ",Object(a.b)("inlineCode",{parentName:"li"},"related settings"),", click ",Object(a.b)("inlineCode",{parentName:"li"},"change adapter options"),"."),Object(a.b)("li",{parentName:"ol"},"Select the newly created adapter and right-click on it, selecting ",Object(a.b)("inlineCode",{parentName:"li"},"Properties")," from the drop-down menu."),Object(a.b)("li",{parentName:"ol"},"Confirm that ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft Loopback Adapter")," or ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft Loopback Adapter #")," is displayed in the ",Object(a.b)("inlineCode",{parentName:"li"},"Connect Using:")," field. If it is not, you have accidentally selected the wrong adapter in the previous step; try that step again."))),Object(a.b)("li",{parentName:"ol"},"Configure the adapter.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Deselect everything except ",Object(a.b)("inlineCode",{parentName:"li"},"Internet Protocol 4 (TCP/IPv4)"),"."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},"Internet Protocol 4 (TCP/IPv4)"),", and click ",Object(a.b)("inlineCode",{parentName:"li"},"Properties")," to open ",Object(a.b)("inlineCode",{parentName:"li"},"Internet Protocol 4 (TCP/IPv4)")," Properties."),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},"Use the following IP address"),". Fill in the IP address and Subnet mask with the following:",Object(a.b)("pre",o({parentName:"li"},{className:"grvsc-container default-dark","data-language":"","data-index":"4"}),Object(a.b)("code",o({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),"IP address: 172.16.172.16")),"\n",Object(a.b)("span",o({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",o({parentName:"span"},{className:"grvsc-source"}),"Subnet mask: 255.255.255.0"))))),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Advanced")," to open ",Object(a.b)("inlineCode",{parentName:"li"},"Advanced TCP/IP Settings"),"."),Object(a.b)("li",{parentName:"ol"},"Switch to the ",Object(a.b)("inlineCode",{parentName:"li"},"WINS")," tab and select ",Object(a.b)("inlineCode",{parentName:"li"},"Disable NetBIOS over TCP/IP"),"."),Object(a.b)("li",{parentName:"ol"},"Click OK to close ",Object(a.b)("inlineCode",{parentName:"li"},"Advanced TCP/IP")," Settings."),Object(a.b)("li",{parentName:"ol"},"Click OK to close the ",Object(a.b)("inlineCode",{parentName:"li"},"Internet Protocol (TCP/IP)")," Properties."),Object(a.b)("li",{parentName:"ol"},"Click OK to close the connection properties."))))),Object(a.b)("li",{parentName:"ol"},"Follow the instructions above: ",Object(a.b)("a",o({parentName:"li"},{href:"#debugging-php-or-twig-files"}),"Debugging PHP or Twig files"),".")),Object(a.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n  .default-dark {\n    background-color: #1E1E1E;\n    color: #D4D4D4;\n  }\n  .default-dark .mtk4 { color: #569CD6; }\n  .default-dark .mtk1 { color: #D4D4D4; }\n  .default-dark .mtk8 { color: #CE9178; }\n  .default-dark .mtk3 { color: #6A9955; }\n  .default-dark .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"development/debugging.md"}}),c.isMDXComponent=!0},iI8W:function(e,t,n){e.exports=n.p+"static/debugging-phpstorm-stop-dbee2367629d1289e961fe66d42d9e58.png"},tJMu:function(e,t,n){e.exports=n.p+"static/debugging-phpstorm-start-fab8dabd8be2d270fd88fa26449506d4.png"}}]);
//# sourceMappingURL=component---development-debugging-md-d9cc8a318b0b8a961ceb.js.map