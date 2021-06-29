module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    //Mysql users테이블 생성
    "Hashtag",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      charset: "utf-8mb4",
      collate: "utf-8mb4_general_ci", //한글설정
    }
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};
