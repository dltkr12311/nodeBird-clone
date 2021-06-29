module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    //Mysql users테이블 생성
    "Post",
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
  Post.associate = (db) => {};
  return Post;
};
