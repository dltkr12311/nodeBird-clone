const express = require("express");
const app = express();

//순수 노드는 .end, express는 send
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.get("/api/post", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.post("/api/post", (req, res) => {
  res.json({ id: 1, content: "hello" });
});

app.delete("/api/post", (req, res) => {
  res.json({ id: 1 });
});

app.listen(3065, () => {
  console.log("서버 실행중");
});
