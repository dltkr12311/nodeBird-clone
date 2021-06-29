module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    //Mysql users테이블 생성
    "User",
    {
      email: {
        type: DataTypes.STRING(30),
        allowNull: true, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true, // 필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf-8",
      collate: "utf-8_general_ci",
    }
  );
  User.associate = (db) => {};
  return User;
};
