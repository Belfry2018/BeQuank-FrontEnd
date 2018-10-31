export let getTime = () => {
  let date = new Date();
  let sign1 = "-";
  let sign2 = ":";
  let year = date.getFullYear(); // 年
  let month = date.getMonth() + 1; // 月
  let day = date.getDate(); // 日
  let hour = date.getHours(); // 时
  let minutes = date.getMinutes(); // 分
  let seconds = date.getSeconds(); //秒
  let weekArr = [
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期天"
  ];
  let week = weekArr[date.getDay()];
  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
  }
  if (minutes >= 0 && minutes <= 9) {
  }
  if (seconds >= 0 && seconds <= 9) {
  }
  return year + sign1 + month + sign1 + day;
  // return (
  //   year +
  //   sign1 +
  //   month +
  //   sign1 +
  //   day +
  //   " " +
  //   hour +
  //   sign2 +
  //   minutes +
  //   sign2 +
  //   seconds +
  //   " " +
  //   week
  // );
};

export const tutorialTime = () => {
  let date = new Date();
  let sign1 = "-";
  let sign2 = ":";
  let year = date.getFullYear(); // 年
  let month = date.getMonth() + 1; // 月
  let day = date.getDate(); // 日
  let hour = date.getHours(); // 时
  let minutes = date.getMinutes(); // 分
  let seconds = date.getSeconds(); //秒
  let weekArr = [
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期天"
  ];
  let week = weekArr[date.getDay()];
  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
  }
  if (minutes >= 0 && minutes <= 9) {
  }
  if (seconds >= 0 && seconds <= 9) {
  }
  return `${year}年${month}月${day}日`;
};
