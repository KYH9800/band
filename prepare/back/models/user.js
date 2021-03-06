const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // 가로행에 들어갈 정보, MySQL에는 users 테이블 생성 (자동으로 소문자가 되고 복수로 바뀜) / id가 기본적으로 들어있다.
        email: {
          type: DataTypes.STRING(50), // 문자열 30글자 이내, STRING 외: TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        nickname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        ModelName: 'User',
        TableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
      }
    );
  }
  // 관계 설정 associate
  static associate(db) {
    // User는 여러개의 ~를 가질 수 있다
    db.User.hasMany(db.Band);
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
  }
};
