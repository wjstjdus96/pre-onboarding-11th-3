export const calculateDate = (string) => {
  return string
    .slice(0, 10)
    .split("-")
    .map((item, idx) => {
      if (idx == 0) return item + "년 ";
      if (idx == 1) return item + "월 ";
      return item + "일";
    });
};
