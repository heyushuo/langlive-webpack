!function(e){function t(l){if(i[l])return i[l].exports;var o=i[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,l){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){},function(e,t){},function(e,t){!function(){function e(e){for(var i=1;i<e.length;i++)for(var l=0;l<e.length-1;l++){var o=e[l].score,n=e[l+1].score;if(n>o){var a=e[l];e[l]=e[l+1],e[l+1]=a}}t(e)}function t(e){for(var t=(new Date,""),l=0,o=e.length;l<o;l++){var n=e[l],a=n.promotion,c=n.nickname,r=l+1,d="0"+r;r>9&&(d=r);var u=n.live_id,s=n.pfid,m=n.nickname,f=n.live_url,p=n.live_key,b=n.stream_direction;n.headimg;t+="<li>",t+="<b>"+d+".</b>",t+="<div data-direction='"+b+"' data-livekey='"+p+"' data-liveurl='"+f+"' data-nickname='"+m+"' data-pfid='"+s+"' data-liveid='"+u+"' class='main-img'>",t+="<img src='"+n.headimg+"' alt=''>",null!=u&&(t+="<span></span>"),t+="</div>",t+="<span>"+c+"</span>",t+="<b class='score'>"+n.score+"</b>",t+="<b class='ticket'>"+n.count+"</b>",1==a?t+="<i class='promotion'></i>":0==a?t+="<i class='nothing'></i>":-1==a&&(t+="<i class='out'></i>"),t+="</li>"}document.getElementById("users-one").innerHTML=t;var v=new Date;console.log(v),i()}function i(){for(var e=document.getElementsByClassName("main-img"),t=e.length,i=0;i<t;i++)e[i].addEventListener("click",function(){var e=(this.getAttribute("data-pfid"),this.getAttribute("data-nickname"),this.getAttribute("data-liveid"));this.getAttribute("data-liveurl"),this.getAttribute("data-livekey"),this.getAttribute("data-direction");"null"!=e?alert("进入直播间"):alert("进入个人主页")})}var l={ret_code:"0",ret_msg:"ok",data:{my:{live_id:"10008401493805331",live_key:"0MYaTv",stream_direction:1,live_url:"rtmp://video.obslanglive.com/live/10008401493805331",headimg:"http://blob.ufile.ucloud.com.cn/f59a66b97b2cbd9c3e469b5c0bf4e3015f101af8bd24e2328a4446076b226440",nickname:"(。•́︿•̀。)108",pfid:1000840,follow_status:0},users:[{pfid:1000011,count:0,follow_status:null,score:19,promotion:1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://wx.qlogo.cn/mmopen/ajNVdqHZLLASXYCVQQeiaXKA07Mx1Lu24juBVZ40ib9IsI6ImibfsWD1R3JS5I5L4LZMmgxpC4B7Y1taCZmXHQVKic4lbHibcntI7L6S7K4gnMW8/0",nickname:"cabbageancy"},{pfid:1000004,count:0,follow_status:null,score:17,promotion:1,live_id:"13154646",live_key:"",stream_direction:0,live_url:"",headimg:"http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg",nickname:"减肥沟沟壑壑健健康康快快"},{pfid:1023841,count:0,follow_status:null,score:15,promotion:1,live_id:"65465465465",live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/9997f3e49dbf7d65cc495f1a8e21d33cfcac35ede39d4830580a66085ea45832",nickname:"优雅的猫"},{pfid:1000044,count:0,follow_status:null,score:13,promotion:1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/92cee6a8ce12f7b01a58fd7fa990a1bb.jpg",nickname:"嘻嘻哈哈😄💔1213"},{pfid:1000048,count:0,follow_status:null,score:10,promotion:1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/c8d240b8dfb870238431f43a392b312fba00a22c15230aa66f8e33cacc6debda",nickname:"珍珠奶茶😱芋頭紅豆薏米"},{pfid:1000830,count:0,follow_status:null,score:9,promotion:-1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/a765a85a32fde0343476d3d5a54ce686d9370cd4e35f4ac941661c2ab6746bcd",nickname:"58665"},{pfid:1000941,count:0,follow_status:null,score:8,promotion:0,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://playback-langlive.ufile.ucloud.cn/41395b6c4851bbc8d2ac49b643ea1420",nickname:"随意"},{pfid:1000052,count:0,follow_status:null,score:7,promotion:-1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920",nickname:"upper"},{pfid:1000733,count:0,follow_status:null,score:6,promotion:0,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://playback-langlive.ufile.ucloud.cn/8422f67af167df7d2b2caa78ac0a4773c4eade4575b343b5a82b7a48c4bf1427",nickname:"查房"},{pfid:1000012,count:0,follow_status:null,score:5,promotion:-1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/0d94ae9dc33721c87af78a7b2099f5a7ab7395972444c7ab979e3dea46e8ba2e",nickname:"c224002"},{pfid:1000039,count:0,follow_status:null,score:4,promotion:0,live_id:"10000391494820650",live_key:"UioEgF",stream_direction:0,live_url:"rtmp://video.langlive.com/live/10000391494820650",headimg:"http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd",nickname:"哇呀唔唔無武呃呃😂哇咔"},{pfid:1000049,count:0,follow_status:null,score:3,promotion:-1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/6b7f50b02ed10b72159ccf1f00a73ab9.jpg",nickname:"思考解决"},{pfid:1000040,count:0,follow_status:null,score:2,promotion:0,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg",nickname:'🐾"sting"💤'},{pfid:1000010,count:0,follow_status:null,score:1,promotion:-1,live_id:null,live_key:"",stream_direction:0,live_url:"",headimg:"http://blob.ufile.ucloud.com.cn/f9cb7d8ac961fb9b3d5a882aea55bfe5",nickname:"gggggg"}]}};!function(){"0"==l.ret_code&&e(l.data.users)}(),function(e){function t(){i.style.display=l.scrollTop+o.scrollTop>100?"block":"none"}var i=document.getElementById(e),l=document.documentElement,o=document.body;window.onscroll=t,i.style.display="none",i.onclick=function(){i.style.display="none",window.onscroll=null,this.timer=setInterval(function(){l.scrollTop-=Math.ceil(.1*(l.scrollTop+o.scrollTop)),o.scrollTop-=Math.ceil(.1*(l.scrollTop+o.scrollTop)),l.scrollTop+o.scrollTop==0&&clearInterval(i.timer,window.onscroll=t)},10)}}("goTop");var o=navigator.userAgent;navigator.appVersion,o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}()},function(e,t){!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/r>540&&(t=540*r);var i=t/10;n.style.fontSize=i+"px",u.rem=e.rem=i}var l,o=e.document,n=o.documentElement,a=o.querySelector('meta[name="viewport"]'),c=o.querySelector('meta[name="flexible"]'),r=0,d=0,u=t.flexible||(t.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var s=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);s&&(d=parseFloat(s[1]),r=parseInt(1/d))}else if(c){var m=c.getAttribute("content");if(m){var f=m.match(/initial\-dpr=([\d\.]+)/),p=m.match(/maximum\-dpr=([\d\.]+)/);f&&(r=parseFloat(f[1]),d=parseFloat((1/r).toFixed(2))),p&&(r=parseFloat(p[1]),d=parseFloat((1/r).toFixed(2)))}}if(!r&&!d){var b=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),v=e.devicePixelRatio;r=b?v>=3&&(!r||r>=3)?3:v>=2&&(!r||r>=2)?2:1:1,d=1/r}if(n.setAttribute("data-dpr",r),!a)if(a=o.createElement("meta"),a.setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(a);else{var _=o.createElement("div");_.appendChild(a),o.write(_.innerHTML)}e.addEventListener("resize",function(){clearTimeout(l),l=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(l),l=setTimeout(i,300))},!1),"complete"===o.readyState?o.body.style.fontSize=12*r+"px":o.addEventListener("DOMContentLoaded",function(e){o.body.style.fontSize=12*r+"px"},!1),i(),u.dpr=e.dpr=r,u.refreshRem=i,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,i){i(3),i(0),i(1),i(2)}]);