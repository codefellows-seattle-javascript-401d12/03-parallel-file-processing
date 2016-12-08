'use strict';

const fs = require('fs');
// module.exports = function(err, data) {
//   // if (err) throw err;
//   fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
//       if(err) throw err('error reading data file one.txt');
//       console.log('content:', `one.txt ${data.toString('hex', 0, 8)}`);
//       let result = `${data.toString('hex', 0, 8)} `;
//
//       return fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
//         if(err) throw err('error reading data file two.txt');
//           if(err) throw err();
//           console.log(`two.txt ${data.toString('hex', 0, 8)}`);
//           result+=`${data.toString('hex', 0, 8)} `;
//
//             return fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
//               if(err) throw err('error reading data file three.txt');
//               console.log(`three.txt ${data.toString('hex', 0, 8)}`);
//               result+=data.toString('hex', 0, 8);
//               console.log(result);
//               return result;
//             });
//         });
//     });
// };


// module.exports = function(callback) {
//   fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
//       if(err) throw err('error reading data file one.txt');
//       console.log('content:', `one.txt ${data.toString('hex', 0, 8)}`);
//       let result = `${data.toString('hex', 0, 8)}`;
//
//       return fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
//         if(err) throw err('error reading data file two.txt');
//           if(err) throw err();
//           console.log(`two.txt ${data.toString('hex', 0, 8)}`);
//           result+=`${data.toString('hex', 0, 8)}`;
//
//             return fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
//               if(err) throw err('error reading data file three.txt');
//               console.log(`three.txt ${data.toString('hex', 0, 8)}`);
//               result+=data.toString('hex', 0, 8);
//               console.log(result);
//               callback(result);
//             });
//         });
//     });
// };


module.exports = exports = {};

exports.readFile = function(callback) {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
      if(err) throw err('error reading data file one.txt');
      console.log('content:', `one.txt ${data.toString('hex', 0, 8)}`);
      let result = `${data.toString('hex', 0, 8)} `;

      return fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
        if(err) throw err('error reading data file two.txt');
          if(err) throw err();
          console.log(`two.txt ${data.toString('hex', 0, 8)}`);
          result+=`${data.toString('hex', 0, 8)} `;

            return fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
              if(err) throw err('error reading data file three.txt');
              console.log(`three.txt ${data.toString('hex', 0, 8)}`);
              result+=data.toString('hex', 0, 8);
              console.log(result);
              callback(result);
            });
        });
    });
};

exports.myCallback = function(result) {
  console.log(result);
  return result;
};
