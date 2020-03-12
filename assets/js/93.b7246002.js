(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{307:function(t,e,v){"use strict";v.r(e);var r=v(28),d=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"match"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[t._v("#")]),t._v(" Match")]),t._v(" "),v("p",[t._v("A match for a value.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@alias")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set an alias that would replace the label value when it matches.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@domain")])]),t._v(" "),v("td",[v("code",[t._v("MetricsDomain")])]),t._v(" "),v("td",[t._v("Set the label domain, restricting this rule to a single domain.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@label")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set the label name. The match will apply to the values related to this key.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@type")])]),t._v(" "),v("td",[v("code",[t._v("MatchType")])]),t._v(" "),v("td",[t._v("Set the type of matching to apply.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@value")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set the matched value.")])])])]),t._v(" "),v("h1",{attrs:{id:"micrometermetricsoptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#micrometermetricsoptions"}},[t._v("#")]),t._v(" MicrometerMetricsOptions")]),t._v(" "),v("p",[t._v("Vert.x micrometer configuration.")]),t._v(" "),v("p",[t._v("It is required to set either")]),t._v(" "),v("p",[t._v("influxDbOptions")]),t._v(" "),v("p",[t._v(",")]),t._v(" "),v("p",[t._v("prometheusOptions")]),t._v(" "),v("p",[t._v("or")]),t._v(" "),v("p",[t._v("jmxMetricsOptions")]),t._v(" "),v("p",[t._v("(or, programmatically,")]),t._v(" "),v("p",[t._v("micrometerRegistry")]),t._v(" "),v("p",[t._v(") in order to actually report metrics.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@disabledMetricsCategories")])]),t._v(" "),v("td",[v("code",[t._v("Array of MetricsDomain")])]),t._v(" "),v("td",[t._v("Sets metrics types that are disabled.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@enabled")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Set whether metrics will be enabled on the Vert.x instance. Metrics are not enabled by default.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@influxDbOptions")])]),t._v(" "),v("td",[v("code",[t._v("VertxInfluxDbOptions")])]),t._v(" "),v("td",[t._v("Set InfluxDB options. Setting a registry backend option is mandatory in order to effectively report metrics.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@jmxMetricsOptions")])]),t._v(" "),v("td",[v("code",[t._v("VertxJmxMetricsOptions")])]),t._v(" "),v("td",[t._v("Set JMX metrics options. Setting a registry backend option is mandatory in order to effectively report metrics.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@jvmMetricsEnabled")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Whether JVM metrics should be collected. Defaults to "),v("code",[t._v("false")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@labelMatches")])]),t._v(" "),v("td",[v("code",[t._v("Array of Match")])]),t._v(" "),v("td",[t._v("Set a list of rules for label matching.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@labelMatchs")])]),t._v(" "),v("td",[v("code",[t._v("Array of Match")])]),t._v(" "),v("td",[t._v("Add a rule for label matching.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@labels")])]),t._v(" "),v("td",[v("code",[t._v("Array of Label")])]),t._v(" "),v("td",[t._v("Sets enabled labels. These labels can be fine-tuned later on using Micrometer's Meter filters (see http://micrometer.io/docs/concepts#_meter_filters)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@prometheusOptions")])]),t._v(" "),v("td",[v("code",[t._v("VertxPrometheusOptions")])]),t._v(" "),v("td",[t._v("Set Prometheus options. Setting a registry backend option is mandatory in order to effectively report metrics.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@registryName")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set a name for the metrics registry, so that a new registry will be created and associated with this name. If "),v("code",[t._v("registryName")]),t._v(" is not provided (or null), a default registry will be used. If the same name is given to several Vert.x instances (within the same JVM), they will share the same registry.")])])])]),t._v(" "),v("h1",{attrs:{id:"vertxinfluxdboptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vertxinfluxdboptions"}},[t._v("#")]),t._v(" VertxInfluxDbOptions")]),t._v(" "),v("p",[t._v("Vert.x InfluxDb micrometer configuration.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@batchSize")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Maximum number of measurements sent per request to the InfluxDB server. When the maximum is reached, several requests are made. Default is 10000.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@compressed")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Activate or deactivate GZIP compression. It is activated by default.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@connectTimeout")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Connection timeout for InfluxDB server connections, in seconds. Default is 1 second.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@db")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v('Database name used to store metrics. Default is "default".')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@enabled")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Set true to enable InfluxDB reporting")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@numThreads")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Number of threads to use by the push scheduler. Default is 2.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@password")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Password used for authenticated connections")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@readTimeout")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Read timeout for InfluxDB server connections, in seconds. Default is 10 seconds.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@retentionPolicy")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("InfluxDB retention policy")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@step")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Push interval steps, in seconds. Default is 10 seconds.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@uri")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("URI of the InfluxDB server. Example: http://influx:8086.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@userName")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Username used for authenticated connections")])])])]),t._v(" "),v("h1",{attrs:{id:"vertxjmxmetricsoptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vertxjmxmetricsoptions"}},[t._v("#")]),t._v(" VertxJmxMetricsOptions")]),t._v(" "),v("p",[t._v("Options for Prometheus metrics backend.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@domain")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set the JMX domain under which to publish metrics")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@enabled")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Set true to enable Prometheus reporting")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@step")])]),t._v(" "),v("td",[v("code",[t._v("Number (int)")])]),t._v(" "),v("td",[t._v("Push interval steps, in seconds. Default is 10 seconds.")])])])]),t._v(" "),v("h1",{attrs:{id:"vertxprometheusoptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vertxprometheusoptions"}},[t._v("#")]),t._v(" VertxPrometheusOptions")]),t._v(" "),v("p",[t._v("Options for Prometheus metrics backend.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@embeddedServerEndpoint")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("Set metrics endpoint. Use conjointly with the embedded server options. Defaults to /metrics.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@embeddedServerOptions")])]),t._v(" "),v("td",[v("code",[t._v("HttpServerOptions")])]),t._v(" "),v("td",[t._v("HTTP server options for the embedded server")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@enabled")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Set true to enable Prometheus reporting")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@publishQuantiles")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("Set true to publish histogram stats, necessary to compute quantiles. Note that it generates many new timeseries for stats, which is why it is deactivated by default.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@startEmbeddedServer")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("When true, an embedded server will init to expose metrics with Prometheus format.")])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);