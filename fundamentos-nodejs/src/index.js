const express = require('express');

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "hello world ignite!" });

});

app.listen(3333);




