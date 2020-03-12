(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{241:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This Vert.x component provides interfaces for authentication and\nauthorisation that can be used from your Vert.x applications and can be\nbacked by different providers.")]),t._v(" "),s("p",[t._v("Vert.x auth is also used by vertx-web to handle its authentication and\nauthorisation.")]),t._v(" "),s("p",[t._v("To use this project, add the following dependency to the "),s("em",[t._v("dependencies")]),t._v("\nsection of your build descriptor:")]),t._v(" "),s("ul",[s("li",[t._v("Maven (in your "),s("code",[t._v("pom.xml")]),t._v("):")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.vertx"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vertx-auth-common"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("Gradle (in your "),s("code",[t._v("build.gradle")]),t._v(" file):")])]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx:vertx-auth-common:${maven.version}'")]),t._v("\n")])])]),s("h1",{attrs:{id:"basic-concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[t._v("#")]),t._v(" Basic concepts")]),t._v(" "),s("p",[s("em",[t._v("Authentication")]),t._v(" means verifying the identity of a user.")]),t._v(" "),s("p",[s("em",[t._v("Authorisation")]),t._v(" means verifying a user has an authority.")]),t._v(" "),s("p",[t._v("What the authority means is determined by the particular implementation\nand we don’t mandate any particular model, e.g. a permissions/roles\nmodel, to keep things very flexible.")]),t._v(" "),s("p",[t._v("For some implementations an authority might represent a permission, for\nexample the authority to access all printers, or a specific printer.\nOther implementations must support roles too, and will often represent\nthis by prefixing the authority with something like "),s("code",[t._v("role:")]),t._v(", e.g.\n"),s("code",[t._v("role:admin")]),t._v(". Another implementation might have a completely different\nmodel of representing authorities.")]),t._v(" "),s("p",[t._v("To find out what a particular auth provider expects, consult the\ndocumentation for that auth provider..")]),t._v(" "),s("h1",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("p",[t._v("To authenticate a user you use "),s("code",[t._v("authenticate")]),t._v(".")]),t._v(" "),s("p",[t._v("The first argument is a JSON object which contains authentication\ninformation. What this actually contains depends on the specific\nimplementation; for a simple username/password based authentication it\nmight contain something like:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('{\n "username": "tim"\n "password": "mypassword"\n}\n')])])]),s("p",[t._v("For an implementation based on JWT token or OAuth bearer tokens it might\ncontain the token information.")]),t._v(" "),s("p",[t._v("Authentication occurs asynchronously and the result is passed to the\nuser on the result handler that was provided in the call. The async\nresult contains an instance of "),s("code",[t._v("User")]),t._v(" which represents the authenticated\nuser and contains operations which allow the user to be authorised.")]),t._v(" "),s("p",[t._v("Here’s an example of authenticating a user using a simple\nusername/password implementation:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" authInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mypassword"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nauthProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("succeeded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("principal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" is now authenticated"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"authorisation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorisation"}},[t._v("#")]),t._v(" Authorisation")]),t._v(" "),s("p",[t._v("Once you have an "),s("code",[t._v("User")]),t._v(" instance you can call methods on it to authorise\nit.")]),t._v(" "),s("p",[t._v("to check if a user has a specific authority you use "),s("code",[t._v("isAuthorised")]),t._v(".")]),t._v(" "),s("p",[t._v("The results of all the above are provided asynchronously in the handler.")]),t._v(" "),s("p",[t._v("Here’s an example of authorising a user:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAuthorized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"printers:printer1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("succeeded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hasAuthority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hasAuthority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User has the authority"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User does not have the authority"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And another example of authorising in a roles based model which uses\n"),s("code",[t._v("role:")]),t._v(" as a prefix.")]),t._v(" "),s("p",[t._v("Please note, as discussed above how the authority string is interpreted\nis completely determined by the underlying implementation and Vert.x\nmakes no assumptions here.")]),t._v(" "),s("h2",{attrs:{id:"caching-authorities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-authorities"}},[t._v("#")]),t._v(" Caching authorities")]),t._v(" "),s("p",[t._v("The user object will cache any authorities so subsequently calls to\ncheck if it has the same authorities will result in the underlying\nprovider being called.")]),t._v(" "),s("p",[t._v("In order to clear the internal cache you can use "),s("code",[t._v("clearCache")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"the-user-principal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-user-principal"}},[t._v("#")]),t._v(" The User Principal")]),t._v(" "),s("p",[t._v("You can get the Principal corresponding to the authenticated user with\n"),s("code",[t._v("principal")]),t._v(".")]),t._v(" "),s("p",[t._v("What this returns depends on the underlying implementation.")]),t._v(" "),s("h1",{attrs:{id:"creating-your-own-auth-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-auth-implementation"}},[t._v("#")]),t._v(" Creating your own auth implementation")]),t._v(" "),s("p",[t._v("If you wish to create your own auth provider you should implement the\n"),s("code",[t._v("AuthProvider")]),t._v(" interface.")]),t._v(" "),s("p",[t._v("We provide an abstract implementation of user called "),s("code",[t._v("AbstractUser")]),t._v("\nwhich you can subclass to make your user implementation. This contains\nthe caching logic so you don’t have to implement that yourself.")]),t._v(" "),s("p",[t._v("If you wish your user objects to be clusterable you should make sure\nthey implement "),s("code",[t._v("ClusterSerializable")]),t._v(".")]),t._v(" "),s("h1",{attrs:{id:"pseudo-random-number-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-random-number-generator"}},[t._v("#")]),t._v(" Pseudo Random Number Generator")]),t._v(" "),s("p",[t._v("Since Secure Random from java can block during the acquisition of\nentropy from the system, we provide a simple wrapper around it that can\nbe used without the danger of blocking the event loop.")]),t._v(" "),s("p",[t._v("By default this PRNG uses a mixed mode, blocking for seeding, non\nblocking for generating. The PRNG will also reseed every 5 minutes with\n64bits of new entropy. However this can all be configured using the\nsystem properties:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("io.vertx.ext.auth.prng.algorithm e.g.: SHA1PRNG")])]),t._v(" "),s("li",[s("p",[t._v("io.vertx.ext.auth.prng.seed.interval e.g.: 1000 (every second)")])]),t._v(" "),s("li",[s("p",[t._v("io.vertx.ext.auth.prng.seed.bits e.g.: 128")])])]),t._v(" "),s("p",[t._v("Most users should not need to configure these values unless if you\nnotice that the performance of your application is being affected by the\nPRNG algorithm.")]),t._v(" "),s("h2",{attrs:{id:"sharing-pseudo-random-number-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharing-pseudo-random-number-generator"}},[t._v("#")]),t._v(" Sharing Pseudo Random Number Generator")]),t._v(" "),s("p",[t._v("Since the Pseudo Random Number Generator objects are expensive in\nresources, they consume system entropy which is a scarce resource it can\nbe wise to share the PRNG’s across all your handlers. In order to do\nthis and to make this available to all languages supported by Vert.x you\nshould look into the "),s("code",[t._v("VertxContextPRNG")]),t._v(".")]),t._v(" "),s("p",[t._v("This interface relaxes the lifecycle management of PRNG’s for the end\nuser and ensures it can be reused across all your application, for\nexample:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VertxContextPRNG "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/auth-common"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate a secure token of 32 bytes as a base64 string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VertxContextPRNG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate a secure random integer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" randomInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VertxContextPRNG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('@author <a href="mailto:julien@julienviet.com">Julien Viet</a>\n@author <a href="http://tfox.org">Tim Fox</a>')])])}),[],!1,null,null,null);a.default=e.exports}}]);