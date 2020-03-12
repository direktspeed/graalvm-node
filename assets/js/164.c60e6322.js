(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{380:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("编写测试用例时, 我们可以使用vert.x提供的测试框架\n"),a("a",{attrs:{href:"https://github.com/vert-x3/vertx-unit",target:"_blank",rel:"noopener noreferrer"}},[t._v("vert.x unit"),a("OutboundLink")],1),t._v("。安装非常简单:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vertx/unit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install @vertx/unit --save-dev")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ensure es4x fetches the non npm dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install")]),t._v("\n")])])]),a("h2",{attrs:{id:"编写测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写测试用例"}},[t._v("#")]),t._v(" 编写测试用例")]),t._v(" "),a("p",[t._v("测试用例和其它任何"),a("code",[t._v("JavaScript")]),t._v("代码没有什么区别。 通常约定使用"),a("code",[t._v(".test.js")]),t._v("为后缀的文件来存放测试使用的脚本代码。")]),t._v(" "),a("p",[a("code",[t._v("vert.x unit")]),t._v("框架使用"),a("code",[t._v("suites")]),t._v("来组织你的测试脚本, 同时需要使用一个"),a("code",[t._v("main suite")]),t._v("作为启动测试的入口。就像这样:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TestSuite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vertx/unit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" suite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TestSuite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the_test_suite"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsuite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_test_case"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsuite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("p",[t._v("这行命令将会在JVM上运行你的应用, 来替换默认的"),a("code",[t._v("npm")]),t._v("操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Running: java "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \nBegin "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" suite the_test_suite\nBegin "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" my_test_case\nPassed my_test_case\nEnd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" suite the_test_suite , run: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", Failures: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", Errors: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("npm")]),t._v("/"),a("code",[t._v("yarn")]),t._v("运行脚本前,需要显示地在"),a("code",[t._v("package.json")]),t._v("中引入"),a("code",[t._v("test")]),t._v("脚本文件。\n就像这样:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es4x-launcher test index.test.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);