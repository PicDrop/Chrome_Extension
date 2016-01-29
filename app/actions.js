const actions = {
  addUrl: function (url) {
    return {
      type: 'ADD_URL',
      url: url
    };
  },
  test: function (test){
    return {
      type: 'TEST',
      payload: test
    }
  },
  "test2": function () {
    console.log("test2");
  }
};

export default actions;
