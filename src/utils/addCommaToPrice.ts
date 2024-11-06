export const addCommaToPrice = (price: number | undefined) => {
  if (price === undefined || price === null) {
    return '0'; // 기본값을 설정
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
