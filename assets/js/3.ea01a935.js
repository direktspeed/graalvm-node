(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},144:function(t,e,r){var n=r(16),i="["+r(143)+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},147:function(t,e,r){var n=r(0),i=r(148);n({global:!0,forced:parseInt!=i},{parseInt:i})},148:function(t,e,r){var n=r(3),i=r(144).trim,a=r(143),o=n.parseInt,u=/^[+-]?0[Xx]/,l=8!==o(a+"08")||22!==o(a+"0x16");t.exports=l?function(t,e){var r=i(String(t));return o(r,e>>>0||(u.test(r)?16:10))}:o},161:function(t,e,r){},214:function(t,e,r){var n=r(0),i=r(215);n({global:!0,forced:parseFloat!=i},{parseFloat:i})},215:function(t,e,r){var n=r(3),i=r(144).trim,a=r(143),o=n.parseFloat,u=1/o(a+"-0")!=-1/0;t.exports=u?function(t){var e=i(String(t)),r=o(e);return 0===r&&"-"==e.charAt(0)?-0:r}:o},216:function(t,e,r){var n=r(0),i=r(62),a=String.fromCharCode,o=String.fromCodePoint;n({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function(t){for(var e,r=[],n=arguments.length,o=0;n>o;){if(e=+arguments[o++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?a(e):a(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}})},217:function(t,e,r){"use strict";var n=r(161);r.n(n).a},221:function(t,e,r){"use strict";r.r(e);r(214),r(147),r(29),r(216),r(40);function n(t){if(t){var e=function(t,e,r,n){return String.fromCodePoint(parseInt(e,16))};return t.replace(/\\u([a-z0-9]{4})/gi,e).replace(/\\x([a-z0-9]{2})/gi,e).replace(/\\e/g,"")}return t}var i={props:{src:{type:String,required:!0},cols:{type:String,default:"0"},rows:{type:String,default:"0"},autoplay:{type:String,default:null},preload:{type:String,default:null},loop:{type:String,default:null},startAt:{type:String,default:null},speed:{type:String,default:null},idleTimeLimit:{type:String,default:null},poster:{type:String,default:null},fontSize:{type:String,default:null},theme:{type:String,default:null},title:{type:String,default:null},author:{type:String,default:null},authorURL:{type:String,default:null},authorImgURL:{type:String,default:null}},mounted:function(){var t=this.merge(this.attribute(this.cols,"width",0,parseInt),this.attribute(this.rows,"height",0,parseInt),this.attribute(this.autoplay,"autoPlay",!0,Boolean),this.attribute(this.preload,"preload",!0,Boolean),this.attribute(this.loop,"loop",!0,Boolean),this.attribute(this.startAt,"startAt",0,parseInt),this.attribute(this.speed,"speed",1,parseInt),this.attribute(this.idleTimeLimit,"idleTimeLimit",null,parseFloat),this.attribute(this.poster,"poster",null,n),this.attribute(this.fontSize,"fontSize"),this.attribute(this.theme,"theme"),this.attribute(this.title,"title"),this.attribute(this.author,"author"),this.attribute(this.authorURL,"authorURL"),this.attribute(this.authorImgURL,"authorImgURL"),{onCanPlay:function(){console.log("onCanPlay")},onPlay:function(){console.log("onPlay")},onPause:function(){console.log("onPause")}});asciinema.player.js.CreatePlayer(this.$refs.player,this.src,t)},methods:{attribute:function(t,e,r,n){var i={};return null!==t&&(""===t&&void 0!==r?t=r:n&&(t=n(t)),i[e]=t),i},merge:function(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}}},a=(r(217),r(28)),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"player"})}),[],!1,null,null,null);e.default=o.exports}}]);