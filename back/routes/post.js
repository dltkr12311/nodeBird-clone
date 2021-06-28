const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.json({ id: 1, content: "hello" });
});

router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;

// 서버쪽은 해당 라이브러리를 불러올때 import를 사용하지 않고 require를 사용해서 불러온다.
// 프론트는 import를 하면 웹팩이 알아서 require로 불러오기 때문에 따로 하지 않지만 프론트도 실제로는 require를 한다.
