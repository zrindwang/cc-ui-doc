(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{654:function(n,e,t){"use strict";var o,r=t(1),a=t(40).f,i=t(25),l=t(140),s=t(32),c=t(141),d=t(41),p="".endsWith,u=Math.min,h=c("endsWith");r({target:"String",proto:!0,forced:!!(d||h||(o=a(String.prototype,"endsWith"),!o||o.writable))&&!h},{endsWith:function(n){var e=String(s(this));l(n);var t=arguments.length>1?arguments[1]:void 0,o=i(e.length),r=void 0===t?o:u(i(t),o),a=String(n);return p?p.call(e,a,r):e.slice(r-a.length,r)===a}})},777:function(n,e,t){"use strict";t.r(e);t(94),t(654);var o={name:"App",components:{},data:function(){return{fileList:[{url:"xxx",name:"即席查询.jpg"},{url:"xxx",name:"即席查询.jpg"}]}},methods:{handleExceed:function(n,e){console.log(n),console.log("用户传递的文件超过预期数量了")},handleChange:function(n){console.log(n)},handleSuccess:function(){},handleError:function(){},handleProgress:function(){},beforeUpload:function(n){return n.size/1024>500?(console.log("当前超过了最大限制500kb"),!1):!!n.name.endsWith(".jpg")||(console.log("文件类型不对"),!1)}}},r=t(58),a=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("cc-upload",{attrs:{name:"avatar",action:"http://localhost:3000/upload","file-list":n.fileList,limit:3,accept:"image/jpeg",multipe:!0,"on-exceed":n.handleExceed,"on-change":n.handleChange,"on-success":n.handleSuccess,"on-error":n.handleError,"on-progress":n.handleProgress,beforeUpload:n.beforeUpload,drag:!1}},[t("cc-button",{attrs:{type:"primary",icon:"shangchuan","icon-position":"right"}},[n._v("点击上传")]),n._v(" "),t("div",{attrs:{slot:"tip"},slot:"tip"},[n._v("当前只能上传jpg/png图片，且不能超过500kb")])],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);