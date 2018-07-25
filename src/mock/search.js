const Mock = require( 'mockjs') ;

let unlabeledSearchData = Mock.mock({
  "total|100": 1,
  "results|10": [{
    'id|+1': 1,
    'name': () => {
      return Mock.Random.cname();
    },
    'url_small': () => {
      return Mock.Random.image('250x250', '#FF6600');
    },
    'url_ex_small': () => {
      return Mock.Random.image('250x250', '#FF6600');
    },
  }]
});

let annotatedSearchData=Mock.mock({
  "total|100": 1,
  "results|10": [{
    'id|+1': 1,
    'name': () => {
      return Mock.Random.cname();
    },
    'url_small': () => {
      return Mock.Random.image('250x250', '#50B347', '#FFF');
    },
    'url_ex_small': () => {
      return Mock.Random.image('250x250', '#50B347', '#FFF');
    }
  }]
});

let rawImgRECT=Mock.mock({
  "id":1,
  "name":() => {
    return Mock.Random.cname();
  },
  'raw': () => {
    return Mock.Random.image('720x600', '#50B347', '#FFF',"RECT");
  },
  'tags':[{

    "id":"111111111111111",
    'comment':"RECT_COMMENT_1",
    'mark':{
      "type":"RECT",
      "x": 50,
      "y": 50,
      "width": 100,
      "height": 50,
      "fill": 'green',
      "stroke": 'black',
    }
  },
    {
    'comment':"RECT_COMMENT_2",
      "id":"211111111111111111",
    'mark':{
      "type":"RECT",
      "x": 50,
      "y": 50,
      "width": 200,
      "height": 50,
      "fill": 'green',
      "stroke": 'black',
    }
  }]
});

let rawImgDESC=Mock.mock({
  "id":2,
  "name":() => {
    return Mock.Random.cname();
  },
  'raw': () => {
    return Mock.Random.image('720x600', '#50B347', '#FFF',"DESC");
  },
  'tags':[{
    'comment':"DESC_COMMENT",
    'mark':{
      "type":"DESC",
    }
  }]
});

let rawImgEDGE=Mock.mock({
  "id":3,
  "name":() => {
    return Mock.Random.cname();
  },
  'raw': () => {
    return Mock.Random.image('720x600', '#50B347', '#FFF',"EDGE");
  },
  'tags':[{
    'comment':"EDGE_COMMENT",
    'mark':{
      "type":"EDGE",
      "points":[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
      "fill": 'green',
      "stroke": 'black',
    }
  }]
});

module.exports = {
  [`GET /img/search`] (req, res) {
    console.log(req.query.state);
    if(req.query.state==='false'){
      res.send(
        JSON.stringify(unlabeledSearchData)
      )
    }else {
      res.send(
        JSON.stringify(annotatedSearchData)
      )
    }
  },

  ['GET /img'](req,res) {
    console.log(req.query.imgId);
    if (req.query.imgId === '1') {
      res.send(
        JSON.stringify(rawImgDESC)
      )
    }else if (req.query.imgId === '2') {
      res.send(
        JSON.stringify(rawImgEDGE)
      )
    }else{
      res.send(
        JSON.stringify(rawImgRECT)
      )
    }
  }
};
