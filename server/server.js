import express from "express";

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
  response.send("ZDRAVO! We like PICKLES here!!!");
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

app.post("/messages", function (request, response) {
  response.json({ message: "Server goes BOOP!" });
});
