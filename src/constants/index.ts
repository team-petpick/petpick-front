import { TPetGender, TProductType } from '@types';

export const animalType = [
  { name: '강아지', type: 'dog', icon: '/png/dog.png' },
  { name: '고양이', type: 'cat', icon: '/png/cat.png' },
  { name: '기타', type: 'etc', icon: '/png/sole.png' },
];

export const PRODUCT_CATEGORY_NAME = {
  ALL: '전체',
  SUPPLIES: '용품',
  FEED: '사료',
  SNACK: '간식',
  CLOTHING: '의류',
} as const;

export const PRODUCT_CATEGORY_INDEX = [
  PRODUCT_CATEGORY_NAME.ALL,
  PRODUCT_CATEGORY_NAME.SUPPLIES,
  PRODUCT_CATEGORY_NAME.FEED,
  PRODUCT_CATEGORY_NAME.SNACK,
  PRODUCT_CATEGORY_NAME.CLOTHING,
] as const;

export const orderPeriods = ['3개월', '6개월', '1년', '3년'];
export const orderPeriodNumbers = [3, 6, 12, 36];

export const ANIMAL_TYPE: { [key in TProductType]: TProductType } = {
  DOG: 'DOG',
  CAT: 'CAT',
  ETC: 'ETC',
} as const;

export const PET_GENDER: { [key in TPetGender]: TPetGender } = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
} as const;

export const YEAR_OPTIONS = Array.from({ length: 100 }, (_, index) => 2024 - index);
export const MONTH_OPTIONS = Array.from({ length: 12 }, (_, index) => index + 1);
export const DAY_OPTIONS = Array.from({ length: 31 }, (_, index) => index + 1);
