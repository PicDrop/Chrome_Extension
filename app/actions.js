// const actions = {
//   addUrl: function (url) {
//     return {
//       type: 'ADD_URL',
//       url: url
//     };
//   },
//   test: function (test){
//     return {
//       type: 'TEST',
//       payload: test
//     }
//   },
//   "addTag": function (tag) {
//     return {
//       type: 'ADD_TAG',
//       payload: tag
//     }
//   }
// };

export function addTag (tag) {
    return {
      type: 'ADD_TAG',
      tag: tag
    }
  }

export function removeTag (index) {
  return {
    type: 'REMOVE_TAG',
    index: index
  }
}
 