export const BEGINNER = "BEGINNER";
export const INTERMEDIATE = "INTERMEDIATE";
export const ADVANCED = "ADVANCED";

export const typeToChinese = type => {
  switch (type) {
    case BEGINNER:
      return "基础教程";
    case INTERMEDIATE:
      return "中级教程";
    case ADVANCED:
      return "高级教程";
    default:
      return "无分类教程";
  }
};
