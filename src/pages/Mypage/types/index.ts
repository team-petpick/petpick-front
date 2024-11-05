import { MY_PAGE_SIDE_BAR_MENU } from '@constants/myPageSidebarMenu';

export type TMypageState =
  | (typeof MY_PAGE_SIDE_BAR_MENU)[keyof typeof MY_PAGE_SIDE_BAR_MENU]
  | null;
