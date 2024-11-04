import { ProductType } from '@types';

export const anymalType = [
  { name: '강아지', icon: '/src/assets/png/dog.png' },
  { name: '고양이', icon: '/src/assets/png/cat.png' },
  { name: '기타', icon: '/src/assets/png/sole.png' },
];
export const categories = ['전체', '용품', '사료', '간식', '의류'];
export const orderPeriods = ['3개월', '6개월', '1년', '3년'];
export const ANIMAL_TYPE: { [key in ProductType]: ProductType } = {
  DOG: 'DOG',
  CAT: 'CAT',
  ETC: 'ETC',
} as const;
