(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{296:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This component provides a simple way to expose health checks. Health\nchecks are used to express the current state of the application in very\nsimple terms: "),a("em",[t._v("UP")]),t._v(" or "),a("em",[t._v("DOWN")]),t._v(". The health checks can be used\nindividually, or in combination to Vert.x Web or the event bus.")]),t._v(" "),a("p",[t._v("This component provides a Vert.x Web handler on which you can register\nprocedure testing the health of the application. The handler computes\nthe final state and returns the result as JSON.")]),t._v(" "),a("h1",{attrs:{id:"using-vert-x-health-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-vert-x-health-checks"}},[t._v("#")]),t._v(" Using Vert.x Health Checks")]),t._v(" "),a("p",[t._v("Notice that you generally need Vert.x Web to use this component. In\naddition add the following dependency:")]),t._v(" "),a("ul",[a("li",[t._v("Maven (in your "),a("code",[t._v("pom.xml")]),t._v("):")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.vertx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vertx-health-check"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("Gradle (in your "),a("code",[t._v("build.gradle")]),t._v(" file):")])]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("compile "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx:vertx-health-check:${maven.version}'")]),t._v("\n")])])]),a("h2",{attrs:{id:"creating-the-health-check-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-health-check-object"}},[t._v("#")]),t._v(" Creating the health check object.")]),t._v(" "),a("p",[t._v("The central object is "),a("code",[t._v("HealthChecks")]),t._v(". You can create a new instance\nusing:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("p",[t._v("Once you have created this object you can register and unregister\nprocedures. See more about this below.")]),t._v(" "),a("h2",{attrs:{id:"registering-the-vert-x-web-handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registering-the-vert-x-web-handler"}},[t._v("#")]),t._v(" Registering the Vert.x Web handler")]),t._v(" "),a("p",[t._v("To create the Vert.x Web handler managing your health check you can\neither:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("using an existing instance of "),a("code",[t._v("HealthChecks")])])]),t._v(" "),a("li",[a("p",[t._v("let the handler create one instance for you.")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HealthCheckHandler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/health-checks"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HealthChecks "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/health-checks"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/web"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" healthCheckHandler1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HealthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" healthCheckHandler2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HealthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWithHealthChecks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HealthChecks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Populate the router with routes...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register the health check handler")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthCheckHandler1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ping*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthCheckHandler2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Procedure registration can be directly made on the "),a("code",[t._v("HealthCheckHandler")]),t._v("\ninstance. Alternatively, if you have created the "),a("code",[t._v("HealthChecks")]),t._v(" instance\nbeforehand, you can register the procedure on this object directly.\nRegistrations and unregistrations can be done at anytime, even after the\nroute registration:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("h1",{attrs:{id:"procedures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedures"}},[t._v("#")]),t._v(" Procedures")]),t._v(" "),a("p",[t._v("A procedure is a function checking some aspect of the system to deduce\nthe current health. It reports a "),a("code",[t._v("Status")]),t._v(" indicating whether or not the\ntest has passed or failed. This function must not block and report to\nthe given "),a("code",[t._v("Future")]),t._v(" whether or not it succeed.")]),t._v(" "),a("p",[t._v("When you register a procedure, you give a name, and the function\n(handler) executing the check.")]),t._v(" "),a("p",[t._v("Rules deducing the status are the following")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("if the future is mark as failed, the check is considered as "),a("em",[t._v("KO")])])]),t._v(" "),a("li",[a("p",[t._v("if the future is completed successfully but without a "),a("code",[t._v("Status")]),t._v(", the\ncheck is considered as "),a("em",[t._v("OK")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("if the future is completed successfully with a "),a("code",[t._v("Status")]),t._v(" marked as\n"),a("em",[t._v("OK")]),t._v(", the check is considered as "),a("em",[t._v("OK")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("if the future is completed successfully with a "),a("code",[t._v("Status")]),t._v(" marked as\n"),a("em",[t._v("KO")]),t._v(", the check is considered as "),a("em",[t._v("KO")]),t._v(".")])])]),t._v(" "),a("p",[a("code",[t._v("Status")]),t._v(" can also provide additional data:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("p",[t._v("Procedures can be organised by groups. The procedure name indicates the\ngroup. The procedures are organized as a tree and the structure is\nmapped to HTTP urls (see below).")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HealthCheckHandler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/health-checks"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" healthCheckHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HealthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register procedures")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Procedure can be grouped. The group is deduced using a name with "/".')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Groups can contains other group")]),t._v("\nhealthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a-group/my-procedure-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("future")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhealthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a-group/a-second-group/my-second-procedure-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("future")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthCheckHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"http-responses-and-json-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-responses-and-json-output"}},[t._v("#")]),t._v(" HTTP responses and JSON Output")]),t._v(" "),a("p",[t._v("When using the Vert.x web handler, the overall health check is retrieved\nusing a HTTP GET or POST (depending on the route you registered) on the\nroute given when exposing the "),a("code",[t._v("HealthCheckHandler")]),t._v(".")]),t._v(" "),a("p",[t._v("If no procedure are registered, the response is "),a("code",[t._v("204 - NO CONTENT")]),t._v(",\nindicating that the system is "),a("em",[t._v("UP")]),t._v(" but no procedures has been executed.\nThe response does not contain a payload.")]),t._v(" "),a("p",[t._v("If there is at least one procedure registered, this procedure is\nexecuted and the outcome status is computed. The response would use the\nfollowing status code:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("200")]),t._v(" : Everything is fine")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("503")]),t._v(" : At least one procedure has reported a non-healthy state")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("500")]),t._v(" : One procedure has thrown an error or has not reported a\nstatus in time")])])]),t._v(" "),a("p",[t._v("The content is a JSON document indicating the overall result\n("),a("code",[t._v("outcome")]),t._v("). It’s either "),a("code",[t._v("UP")]),t._v(" or "),a("code",[t._v("DOWN")]),t._v(". A "),a("code",[t._v("checks")]),t._v(" array is also given\nindicating the result of the different executed procedures. If the\nprocedure has reported additional data, the data is also given:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n"checks" : [\n{\n  "id" : "A",\n  "status" : "UP"\n},\n{\n  "id" : "B",\n  "status" : "DOWN",\n  "data" : {\n    "some-data" : "some-value"\n  }\n}\n],\n"outcome" : "DOWN"\n}\n')])])]),a("p",[t._v("In case of groups/ hierarchy, the "),a("code",[t._v("checks")]),t._v(" array depicts this structure:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n"checks" : [\n{\n  "id" : "my-group",\n  "status" : "UP",\n  "checks" : [\n  {\n    "id" : "check-2",\n    "status" : "UP",\n  },\n  {\n    "id" : "check-1",\n    "status" : "UP"\n  }]\n}],\n"outcome" : "UP"\n}\n')])])]),a("p",[t._v("If a procedure throws an error, reports a failure (exception), the JSON\ndocument provides the "),a("code",[t._v("cause")]),t._v(" in the "),a("code",[t._v("data")]),t._v(" section. If a procedure does\nnot report back before a timeout, the indicated cause is "),a("code",[t._v("Timeout")]),t._v(".")]),t._v(" "),a("h1",{attrs:{id:"examples-of-procedures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-procedures"}},[t._v("#")]),t._v(" Examples of procedures")]),t._v(" "),a("p",[t._v("This section provides example of common health checks.")]),t._v(" "),a("h2",{attrs:{id:"jdbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbc"}},[t._v("#")]),t._v(" JDBC")]),t._v(" "),a("p",[t._v("This check reports whether or not a connection to the database can be\nestablished:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("h2",{attrs:{id:"service-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-availability"}},[t._v("#")]),t._v(" Service availability")]),t._v(" "),a("p",[t._v("This check reports whether or not a service (here a HTTP endpoint) is\navailable in the service discovery:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("h2",{attrs:{id:"event-bus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-bus"}},[t._v("#")]),t._v(" Event bus")]),t._v(" "),a("p",[t._v("This check reports whether a consumer is ready on the event bus. The\nprotocol, in this example, is a simple ping/pong, but it can be more\nsophisticated. This check can be used to check whether or not a verticle\nis ready if it’s listening on a specific event address.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Code not translatable\n")])])]),a("h1",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("When using the Vert.x web handler, you can pass a "),a("code",[t._v("AuthProvider")]),t._v(' use to\nauthenticate the request. Check <a\nhref="http://vertx.io/docs/#authentication_and_authorisation">Vert.x\nAuth</a> for more details about available authentication providers.')]),t._v(" "),a("p",[t._v("The Vert.x Web handler creates a JSON object containing:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("the request headers")])]),t._v(" "),a("li",[a("p",[t._v("the request params")])]),t._v(" "),a("li",[a("p",[t._v("the form param if any")])]),t._v(" "),a("li",[a("p",[t._v("the content as JSON if any and if the request set the content type\nto "),a("code",[t._v("application/json")]),t._v(".")])])]),t._v(" "),a("p",[t._v("The resulting object is passed to the auth provider to authenticate the\nrequest. If the authentication failed, it returns a "),a("code",[t._v("403 - FORBIDDEN")]),t._v("\nresponse.")]),t._v(" "),a("h1",{attrs:{id:"exposing-health-checks-on-the-event-bus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exposing-health-checks-on-the-event-bus"}},[t._v("#")]),t._v(" Exposing health checks on the event bus")]),t._v(" "),a("p",[t._v("While exposing the health checks using HTTP with the Vert.x web handler\nis convenient, it can be useful to expose the data differently. This\nsection gives an example to expose the data on the event bus:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventBus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"health"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  healthChecks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);