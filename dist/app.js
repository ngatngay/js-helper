!function(){"use strict";var t;!function(t){function e(t){return"object"==typeof t?JSON.stringify(t):t}function n(t,n){if("string"==typeof t){const e=localStorage.getItem(t);return null===e&&void 0!==n?n:function(t){try{return JSON.parse(t)}catch{return t}}(e)}if("object"==typeof(r=t)&&null!==r&&!Array.isArray(r))for(const n in t)if(Object.hasOwn(t,n)){const r=e(t[n]);localStorage.setItem(n,r)}var r}n.remove=function(t){if("string"!=typeof t)throw new Error("Key phải là một chuỗi");localStorage.removeItem(t)},n.clear=function(){localStorage.clear()},t.lsData=n}(jQuery),(t=jQuery).fn.timeAgo=function(e){const n=t.extend({attr:"datetime"},e);this.each((function(){let e=t(this);e.html(function(t){const e=new Date(t),n=new Date,r=Math.ceil((n-e)/1e3);return r<12?"vừa xong":r<60?r+" giây trước":r<3600?Math.ceil(r/60)+" phút trước":r<86400?Math.ceil(r/3600)+" giờ trước":Math.ceil(r/86400)+" ngày trước"}(e.attr(n.attr)))}))}}();
