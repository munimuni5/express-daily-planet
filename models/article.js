// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var user = sequelize.define('user', {
//     title: DataTypes.STRING,
//     content: DataTypes.TEXT
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return user;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    // author: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return article;
};
