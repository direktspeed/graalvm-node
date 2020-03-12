(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{304:function(t,e,d){"use strict";d.r(e);var o=d(28),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h1",{attrs:{id:"mailattachment"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#mailattachment"}},[t._v("#")]),t._v(" MailAttachment")]),t._v(" "),d("p",[t._v("Represent a mail attachment that can be used in a MailMessage.")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th"),t._v(" "),d("th"),t._v(" "),d("th")])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Name")]),t._v(" "),d("td",[t._v("Type")]),t._v(" "),d("td",[t._v("Description")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@contentId")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the Content-ID field to be used in the attachment")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@contentType")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the Content-Type")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@data")])]),t._v(" "),d("td",[d("code",[t._v("Buffer")])]),t._v(" "),d("td",[t._v("set the data")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@description")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the description field to be used in the attachment")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@disposition")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the disposition field to be used in the attachment")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@headers")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("Add an header to this attachment.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@name")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the name")])])])]),t._v(" "),d("h1",{attrs:{id:"mailconfig"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#mailconfig"}},[t._v("#")]),t._v(" MailConfig")]),t._v(" "),d("p",[t._v("represents the configuration of a mail service with mail server\nhostname, port, security options, login options and login/password")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th"),t._v(" "),d("th"),t._v(" "),d("th")])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Name")]),t._v(" "),d("td",[t._v("Type")]),t._v(" "),d("td",[t._v("Description")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@allowRcptErrors")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("set if sending allows rcpt errors if true, the mail will be sent to the recipients that the server accepted, if any")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@authMethods")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set string of allowed auth methods. if set only these methods will be used if the server supports them. If null or empty all supported methods may be used")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@disableEsmtp")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("set if ESMTP should be tried as first command (EHLO) rfc 1869 states that clients should always attempt EHLO as first command to determine if ESMTP is supported, if this returns an error code, HELO is tried to use old SMTP. If there is a server that does not support EHLO and does not give an error code back, the connection should be closed and retried with HELO. We do not do that and rather support turning off ESMTP with a setting. The odds of this actually happening are very small since the client will not connect to arbitrary smtp hosts on the internet. Since the client knows that is connects to a host that doesn't support ESMTP/EHLO in that way, the property has to be set to false.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@enabledSecureTransportProtocols")])]),t._v(" "),d("td",[d("code",[t._v("Array of String")])]),t._v(" "),d("td",[t._v("Sets the list of enabled SSL/TLS protocols.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@hostname")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("Set the hostname of the smtp server.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@keepAlive")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("set if connection pool is enabled default is true if the connection pooling is disabled, the max number of sockets is enforced nevertheless")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@keyStore")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("get the key store filename to be used when opening SMTP connections if not set, an options object will be created based on other settings (ssl and trustAll)")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@keyStorePassword")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("get the key store password to be used when opening SMTP connections")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@login")])]),t._v(" "),d("td",[d("code",[t._v("LoginOption")])]),t._v(" "),d("td",[t._v("Set the login mode for the connection. Either DISABLED, OPTIONAL or REQUIRED")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@maxPoolSize")])]),t._v(" "),d("td",[d("code",[t._v("Number (int)")])]),t._v(" "),d("td",[t._v("set the max allowed number of open connections to the mail server if not set the default is 10")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@ownHostname")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the hostname to be used for HELO/EHLO and the Message-ID")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@password")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("Set the password for the login.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@port")])]),t._v(" "),d("td",[d("code",[t._v("Number (int)")])]),t._v(" "),d("td",[t._v("Set the port of the smtp server.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@ssl")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("Set the sslOnConnect mode for the connection.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@starttls")])]),t._v(" "),d("td",[d("code",[t._v("StartTLSOptions")])]),t._v(" "),d("td",[t._v("Set the tls security mode for the connection. Either NONE, OPTIONAL or REQUIRED")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@trustAll")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("set whether to trust all certificates on ssl connect the option is also applied to STARTTLS operation")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@username")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("Set the username for the login.")])])])]),t._v(" "),d("h1",{attrs:{id:"mailmessage"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#mailmessage"}},[t._v("#")]),t._v(" MailMessage")]),t._v(" "),d("p",[t._v("represent a mail message that can be sent via the MailClient")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th"),t._v(" "),d("th"),t._v(" "),d("th")])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Name")]),t._v(" "),d("td",[t._v("Type")]),t._v(" "),d("td",[t._v("Description")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@attachment")])]),t._v(" "),d("td",[d("code",[t._v("Array of MailAttachment")])]),t._v(" "),d("td",[t._v("set the list of attachments of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@bcc")])]),t._v(" "),d("td",[d("code",[t._v("Array of String")])]),t._v(" "),d("td",[t._v("set list of bcc addresses")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@bounceAddress")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set bounce address of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@cc")])]),t._v(" "),d("td",[d("code",[t._v("Array of String")])]),t._v(" "),d("td",[t._v("set list of cc addresses")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@fixedHeaders")])]),t._v(" "),d("td",[d("code",[t._v("Boolean")])]),t._v(" "),d("td",[t._v("set whether our own headers should be the only headers added to the message")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@from")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set from address of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@headers")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("Add a message header.")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@html")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the html text of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@inlineAttachment")])]),t._v(" "),d("td",[d("code",[t._v("Array of MailAttachment")])]),t._v(" "),d("td",[t._v("set the list of inline attachments of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@subject")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the subject of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@text")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td",[t._v("set the plain text of this mail")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@to")])]),t._v(" "),d("td",[d("code",[t._v("Array of String")])]),t._v(" "),d("td",[t._v("set list of to addresses")])])])]),t._v(" "),d("h1",{attrs:{id:"mailresult"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#mailresult"}},[t._v("#")]),t._v(" MailResult")]),t._v(" "),d("p",[t._v("Represent the result of the sendMail operation")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th"),t._v(" "),d("th"),t._v(" "),d("th")])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Name")]),t._v(" "),d("td",[t._v("Type")]),t._v(" "),d("td",[t._v("Description")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@messageID")])]),t._v(" "),d("td",[d("code",[t._v("String")])]),t._v(" "),d("td")]),t._v(" "),d("tr",[d("td",[d("code",[t._v("@recipients")])]),t._v(" "),d("td",[d("code",[t._v("Array of String")])]),t._v(" "),d("td")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);