import { MY_PAGE_SIDE_BAR_MENU } from '@constants/myPageSidebarMenu';
import { useControllSidebarStore } from '../stores/useControllSidebarStore';
import * as S from '../styles/FrequentlyUsedMenu.style';
import { TMypageState } from '../types';

const FrequentlyUsedMenu = () => {
  const { setSelectedComponent } = useControllSidebarStore();
  const handleSelectComponent = (component: TMypageState) => {
    setSelectedComponent(component);
  };
  return (
    <S.FrequentlyUsedMenuWrapper>
      <S.FrequentlyUsedMenuList>자주 찾는 메뉴</S.FrequentlyUsedMenuList>
      <S.FrequentlyUsedMenuText
        onClick={() => handleSelectComponent(MY_PAGE_SIDE_BAR_MENU.ORDER_HISTORY)}
      >
        주문 내역
      </S.FrequentlyUsedMenuText>
      <S.FrequentlyUsedMenuText
        onClick={() => handleSelectComponent(MY_PAGE_SIDE_BAR_MENU.WISHLIST)}
      >
        찜한 상품
      </S.FrequentlyUsedMenuText>
    </S.FrequentlyUsedMenuWrapper>
  );
};

export default FrequentlyUsedMenu;
