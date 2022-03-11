// band.js
const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Band extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.TEXT, // 문자열 30글자 이내, STRING 외: TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
        },
        category: {
          type: DataTypes.TEXT,
          allowNull: false, // 필수
        },
      },
      {
        ModelName: 'Band',
        TableName: 'bands',
        charset: 'utf8mb4', // mb4: 이모티콘 사용 가능
        collate: 'utf8mb4_general_ci', // 한글 && 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Band.belongsTo(db.User);
    db.Band.hasMany(db.Post);
    db.Band.hasMany(db.Image);
  }
};
