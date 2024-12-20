export const PRODUCT_FILTER_TYPE = {
  DESC: 'createAt_desc',
  POPULAR: 'productLikesTotal_desc',
} as const;

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
