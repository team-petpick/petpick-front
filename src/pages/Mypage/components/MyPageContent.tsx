import { match } from 'ts-pattern';
import { MY_PAGE_SIDE_BAR_MENU } from '@constants/myPageSidebarMenu';
import { useControllSidebarStore } from '../stores/useControllSidebarStore';
import WishList from '../wishlist';
import OrderHistory from '../orderhistory';

const MyPageContent = () => {
  const { selectedComponent } = useControllSidebarStore();
  return (
    <div>
      {match(selectedComponent)
        .with(MY_PAGE_SIDE_BAR_MENU.WISHLIST, () => <WishList />)
        .with(MY_PAGE_SIDE_BAR_MENU.ORDER_HISTORY, () => <OrderHistory />)
        .otherwise(() => (
          <WishList />
        ))}
    </div>
  );
};
export default MyPageContent;
