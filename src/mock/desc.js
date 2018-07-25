const Mock = require('mockjs');

const results = Mock.mock(
  [{
    "id": 1,
    "name": () => {
      return Mock.Random.cname();
    },
    "raw": () => {
      return Mock.Random.image('800x450', '#FF6600');
    },
  },{
    "id": 1,
    "name": () => {
      return Mock.Random.cname();
    },
    "raw": () => {
      return Mock.Random.image('450x800',  '#50B347', '#FFF');
    },
  },]
);


module.exports = {
  [`GET /img/rect`](req, res) {
    res.send(JSON.stringify(results));
  },
  [`GET /img/edge`](req, res) {
    res.send(JSON.stringify(results));
  },
  [`GET /img/description`](req, res) {
    res.send(JSON.stringify(results));
  },
  [`POST /img/rect`](req, res) {
    console.log(req.body);
    res.send(true);
  },
  [`POST /img/edge`](req, res) {
    console.log(req.body);
    res.send(true);
  },
  [`POST /img/description`](req, res) {
    console.log(req.body);
    res.send(true);
  }
}
