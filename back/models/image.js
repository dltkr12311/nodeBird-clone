module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    //Mysql users테이블 생성
    "Image",
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      charset: "utf-8",
      collate: "utf-8_general_ci", //한글설정
    }
  );
  Image.associate = (db) => {};
  return Image;
};
