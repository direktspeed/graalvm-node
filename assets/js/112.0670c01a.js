(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{326:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vert-x-discovery-backend-zookeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vert-x-discovery-backend-zookeeper"}},[t._v("#")]),t._v(" Vert.x Discovery Backend - Zookeeper")]),t._v(" "),s("p",[t._v("The service discovery has a plug-able backend using the\n"),s("code",[t._v("ServiceDiscoveryBackend")]),t._v(" SPI. This is an implementation of the SPI\nbased on Apache Zookeeper.")]),t._v(" "),s("h1",{attrs:{id:"using-the-zookeeper-backend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-zookeeper-backend"}},[t._v("#")]),t._v(" Using the Zookeeper backend")]),t._v(" "),s("p",[t._v("To use the Zookeeper backend, add the following dependency to the\n"),s("em",[t._v("dependencies")]),t._v(" section of your build descriptor:")]),t._v(" "),s("ul",[s("li",[t._v("Maven (in your "),s("code",[t._v("pom.xml")]),t._v("):")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.vertx"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vertx-service-discovery-backend-zookeeper"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("Gradle (in your "),s("code",[t._v("build.gradle")]),t._v(" file):")])]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx:vertx-service-discovery-backend-zookeeper:${maven.version}'")]),t._v("\n")])])]),s("p",[t._v("Be aware that you can have only a single implementation of the SPI in\nyour "),s("em",[t._v("classpath")]),t._v(". If none, the default backend is used.")]),t._v(" "),s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("There is a single mandatory configuration attribute: "),s("code",[t._v("connection")]),t._v(".\nConnection is the Zookeeper connection "),s("em",[t._v("string")]),t._v(".")]),t._v(" "),s("p",[t._v("Here is an example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ServiceDiscovery "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/service-discovery"')]),t._v("\nServiceDiscovery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceDiscoveryOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBackendConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connection"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2181"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Additionally you can configure:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("maxRetries")]),t._v(": the number of connection attempt, 3 by default")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("baseSleepTimeBetweenRetries")]),t._v(": the amount of milliseconds to wait\nbetween retries (exponential backoff strategy). 1000 ms by default.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("connectionTimeoutMs")]),t._v(": the connection timeout in milliseconds.\nDefaults to 1000.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("canBeReadOnly")]),t._v(" : whether or not the backend support the "),s("em",[t._v("read-only")]),t._v("\nmode (defaults to false)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("basePath")]),t._v(": the Zookeeper path in which the service records are\nstored. Default to "),s("code",[t._v("/services")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ephemeral")]),t._v(": whether or not the created nodes are ephemeral nodes\n(see\n"),s("a",{attrs:{href:"https://zookeeper.apache.org/doc/r3.4.5/zookeeperOver.html#Nodes+and+ephemeral+nodes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zookeeper.apache.org/doc/r3.4.5/zookeeperOver.html#Nodes+and+ephemeral+nodes"),s("OutboundLink")],1),t._v(").\n"),s("code",[t._v("false")]),t._v(" by default")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("guaranteed")]),t._v(": whether or not to guarantee the node deletion even in\ncase of failure. "),s("code",[t._v("false")]),t._v(" by default")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ServiceDiscovery "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/service-discovery"')]),t._v("\nServiceDiscovery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceDiscoveryOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBackendConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connection"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2181"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ephemeral"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guaranteed"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"basePath"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/services/my-backend"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"how-are-stored-the-records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-are-stored-the-records"}},[t._v("#")]),t._v(" How are stored the records")]),t._v(" "),s("p",[t._v("The records are stored in individual nodes structured as follows:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("basepath (/services/)\n  |\n  |- record 1 registration id => the record 1 is the data of this node\n  |- record 2 registration id => the record 2 is the data of this node\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);