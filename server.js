const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  // REST API 생성
  res.send([
    {
      id: 1,
      image: "http://placehold.it/64x64",
      name: "강우석",
      birthday: "980301",
      gender: "남자",
      job: "회사원",
    },
    {
      id: 2,
      image: "http://placehold.it/64x64",
      name: "홍길동",
      birthday: "001211",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 3,
      image: "http://placehold.it/64x64",
      name: "순심이",
      birthday: "701231",
      gender: "여자",
      job: "디자이너",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
