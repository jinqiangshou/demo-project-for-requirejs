define("m2",[],function(){console.log("this is m2")}),define("m1",["m2"],function(){console.log("this is m1")}),define("requirecss",[],function(){if("undefined"==typeof window)return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,n=!1,o=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?o=!1:t[4]&&(n=parseInt(t[4])<18);var s={};s.pluginBuilder="./css-builder";var i,r,c,a=function(){i=document.createElement("style"),e.appendChild(i),r=i.styleSheet||i.sheet},l=0,d=[],u=function(e){r.addImport(e),i.onload=function(){f()},l++,31==l&&(a(),l=0)},f=function(){c();var e=d.shift();return e?(c=e[1],void u(e[0])):void(c=null)},m=function(e,t){if(r&&r.addImport||a(),r&&r.addImport)c?d.push([e,t]):(u(e),c=t);else{i.textContent='@import "'+e+'";';var n=setInterval(function(){try{i.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},h=function(t,n){var s=document.createElement("link");if(s.type="text/css",s.rel="stylesheet",o)s.onload=function(){s.onload=function(){},setTimeout(n,7)};else var i=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==s.href)return clearInterval(i),n()}},10);s.href=t,e.appendChild(s)};return s.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},s.load=function(e,t,o,s){(n?m:h)(t.toUrl(e+".css"),o)},s}),define("requirecss!../css/m3",[],function(){});var haha=1;console.log("this is from m3"),define("m3",["css!../css/m3"],function(){}),define("indexpage",["m1","m3","jquery"],function(){console.log("this is indexpage.js")}),function(e){var t=document,n="appendChild",o="styleSheet",s=t.createElement("style");s.type="text/css",t.getElementsByTagName("head")[0][n](s),s[o]?s[o].cssText=e:s[n](t.createTextNode(e))}("div{color:red}html{font-weight:700}"),require(["indexpage"]);