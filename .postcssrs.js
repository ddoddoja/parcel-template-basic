//ESM 에크마 스크립트 
// CommonJS

// // import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')
// require('auto')

// //export
// // plugins: [
// //   autoprefixer
// // ]
// //}
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

//ESM 에크마스크립트는 브라우저 상에서 내보내기, 가져오기(import, export )
//CommonJS node.js 에서 돌아가는 방식이며, 
// import-> require, export -> module.exports 를 사용한다. 

//위 내용을 간소화 하면.. 
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}