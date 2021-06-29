module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    //Mysql users테이블 생성
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      charset: "utf-8mb4",
      collate: "utf-8mb4_general_ci", //한글설정
    }
  );
  Comment.associate = (db) => {};
  return Comment;
};
