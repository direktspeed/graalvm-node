(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{232:function(a,t,e){"use strict";e.r(t);var n=e(28),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" Install")]),a._v(" "),e("p",[a._v("Assuming you’ve already installed "),e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),e("OutboundLink")],1),a._v(" and ("),e("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java"),e("OutboundLink")],1),a._v(" or\n"),e("a",{attrs:{href:"http://www.graalvm.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v("), install the project management utilities development tool.")]),a._v(" "),e("h2",{attrs:{id:"using-npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-npm"}},[a._v("#")]),a._v(" Using NPM")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" es4x-pm "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR npm install -g es4x-pm")]),a._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Using "),e("code",[a._v("npm")]),a._v(" should be the preferred way to install as it allows easy upgrades and should be portable across different\n"),e("em",[a._v("Operating Systems")]),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"os-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-package"}},[a._v("#")]),a._v(" OS package")]),a._v(" "),e("p",[a._v("When working on CI environments where the amount of packages is limited, the package manager can be installed by\nunzipping the prepackaged tar/zip file.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES4X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.9.0'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  https://github.com/reactiverse/es4x/releases/download/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("/es4x-pm-"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("-bin.tar.gz "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zx --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -C /usr/local\n")])])]),e("p",[a._v("For Windows Operating Systems the same can be done using a "),e("code",[a._v("zip")]),a._v(" file instead.")]),a._v(" "),e("h2",{attrs:{id:"verify-the-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-installation"}},[a._v("#")]),a._v(" Verify the installation")]),a._v(" "),e("p",[a._v("You should now have a "),e("code",[a._v("es4x")]),a._v(" command available in your path, you can test it by running:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ es4x --help\n\nUsage: java -jar /usr/local/bin/es4x-bin.jar [COMMAND] [OPTIONS]\n            [arg...]\n\nCommands:\n    bare         Creates a bare instance of vert.x.\n    dockerfile   Creates a generic Dockerfile for building and deploying the\n                 current project.\n    init         Initializes the 'package.json' to work with ES4X.\n    install      Installs required jars from maven to 'node_modules'.\n    list         List vert.x applications\n    run          Runs a JS script called <main-verticle> in its own instance of\n                 vert.x.\n    start        Start a vert.x application in background\n    stop         Stop a vert.x application\n    version      Displays the version.\n\nRun 'java -jar /usr/local/bin/es4x-bin.jar COMMAND --help' for\nmore information on a command.\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("For best experience and performance please install "),e("a",{attrs:{href:"https://www.graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v(". When working on standard JDK,\nusing Java < 11 will run on "),e("code",[a._v("Interpreted")]),a._v(" mode which is not performance or recommended for production.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);