/// <reference types="es4x" />
// @ts-check

vertx.createHttpServer().requestHandler(req => {
  if (req.uri() == "/") {
    // Serve the index page
    req.response().sendFile("index.html");
  } else if (req.uri().startsWith("/form")) {
    req.response().setChunked(true);
    req.setExpectMultipart(true);
    req.endHandler(done => {
      req.formAttributes().names().forEach(attr => {
        req.response().write("Got attr " + attr + " : " + req.formAttributes().get(attr) + "\n");
      })

      req.response().end();
    });
  } else {
    req.response().setStatusCode(404).end();
  }
}).listen(8080);
