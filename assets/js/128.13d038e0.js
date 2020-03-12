(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{340:function(t,e,v){"use strict";v.r(e);var _=v(28),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"resultset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#resultset"}},[t._v("#")]),t._v(" ResultSet")]),t._v(" "),v("p",[t._v("Represents the results of a SQL query.")]),t._v(" "),v("p",[t._v("It contains a list for the column names of the results, and a list of")]),t._v(" "),v("p",[t._v("JsonArray")]),t._v(" "),v("p",[t._v("- one for each row of the results.")]),t._v(" "),v("table",[v("colgroup",[v("col",{staticStyle:{width:"25%"}}),t._v(" "),v("col",{staticStyle:{width:"25%"}}),t._v(" "),v("col",{staticStyle:{width:"50%"}})]),t._v(" "),v("tbody",[v("tr",{staticClass:"odd"},[v("td",[v("p",[t._v("Name")])]),t._v(" "),v("td",[v("p",[t._v("Type")])]),t._v(" "),v("td",[v("p",[t._v("Description")])])]),t._v(" "),v("tr",{staticClass:"even"},[v("td",[v("p",[v("code",[t._v("@columnNames")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Array of String")])])]),t._v(" "),v("td",[v("p",[t._v("Get the column names")])])]),t._v(" "),v("tr",{staticClass:"odd"},[v("td",[v("p",[v("code",[t._v("@next")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("ResultSet")])])]),t._v(" "),v("td",[v("p",[t._v("Get the next result set")])])]),t._v(" "),v("tr",{staticClass:"even"},[v("td",[v("p",[v("code",[t._v("@numColumns")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Number (int)")])])]),t._v(" "),v("td",[v("p",[t._v("Return the number of columns in the result set")])])]),t._v(" "),v("tr",{staticClass:"odd"},[v("td",[v("p",[v("code",[t._v("@numRows")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Number (int)")])])]),t._v(" "),v("td",[v("p",[t._v("Return the number of rows in the result set")])])]),t._v(" "),v("tr",{staticClass:"even"},[v("td",[v("p",[v("code",[t._v("@output")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Json array")])])]),t._v(" "),v("td",[v("p",[t._v("Get the registered outputs")])])]),t._v(" "),v("tr",{staticClass:"odd"},[v("td",[v("p",[v("code",[t._v("@results")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Array of Json array")])])]),t._v(" "),v("td",[v("p",[t._v("Get the results")])])]),t._v(" "),v("tr",{staticClass:"even"},[v("td",[v("p",[v("code",[t._v("@rows")])])]),t._v(" "),v("td",[v("p",[v("code",[t._v("Array of Json object")])])]),t._v(" "),v("td",[v("p",[t._v("Get the rows - each row represented as a JsonObject where the keys are the column names and the values are the column values.")]),t._v(" "),v("p",[t._v("Beware that it's legal for a query result in SQL to contain duplicate column names, in which case one will overwrite the other if using this method. If that's the case use link instead.")]),t._v(" "),v("p",[t._v("Be aware that column names are defined as returned by the database, this means that even if your SQL statement is for example: SELECT a, b FROM table the column names are not required to be: a and b and could be in fact A and B.")]),t._v(" "),v("p",[t._v("For cases when there is the need for case insentivitity you should see link")])])])])]),t._v(" "),v("h1",{attrs:{id:"sqloptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sqloptions"}},[t._v("#")]),t._v(" SQLOptions")]),t._v(" "),v("p",[t._v("Represents the options one can use to customize the unwrapped\nconnection/statement/resultset types")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@autoGeneratedKeys")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@autoGeneratedKeysIndexes")])]),t._v(" "),v("td",[v("code",[t._v("Json array")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@catalog")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@fetchDirection")])]),t._v(" "),v("td",[v("code",[t._v("FetchDirection")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@fetchSize")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@queryTimeout")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@readOnly")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@resultSetConcurrency")])]),t._v(" "),v("td",[v("code",[t._v("ResultSetConcurrency")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@resultSetType")])]),t._v(" "),v("td",[v("code",[t._v("ResultSetType")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@schema")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@transactionIsolation")])]),t._v(" "),v("td",[v("code",[t._v("TransactionIsolation")])]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h1",{attrs:{id:"updateresult"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#updateresult"}},[t._v("#")]),t._v(" UpdateResult")]),t._v(" "),v("p",[t._v("Represents the result of an update/insert/delete operation on the\ndatabase.")]),t._v(" "),v("p",[t._v("The number of rows updated is available with link and any generated keys\nare available with link.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@keys")])]),t._v(" "),v("td",[v("code",[t._v("Json array")])]),t._v(" "),v("td",[t._v("Get any generated keys")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@updated")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Get the number of rows updated")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);