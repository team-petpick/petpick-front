import { IOrderInfo } from '@types';
import Header from './components/Header';
import OrderHistoryItem from './components/OrderHistoryItem';
import styled from 'styled-components';
import { useState } from 'react';
import { orderPeriods } from '@constants';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

const OrderHistory = () => {
  const [activePeriod, setAcrivePeriod] = useState<number>(0);

  const OrderInfo: IOrderInfo[] = [
    {
      orderDate: '2024.07.12',
      orderNum: '12341234',
      productInfos: [
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
      ],
    },
    {
      orderDate: '2024.06.15',
      orderNum: '12341234',
      productInfos: [
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
      ],
    },
    {
      orderDate: '2024.05.12',
      orderNum: '12341234',
      productInfos: [
        {
          productId: 1,
          sellerId: 1,
          categoryId: 1,
          productTitle: '강아지가 먹을 수 있는 닭고기',
          productCnt: 1,
          productPrice: 10000,
          productType: 'DOG',
          productStatus: 'ON',
          productSale: 10,
          sellerStoreName: '윤일이네 농장',
          productImageUrl:
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
        },
      ],
    },
  ];
  const handlePeriodChange = (index: number) => {
    setAcrivePeriod(index);
  };
  return (
    <>
      <Header onPeriodChange={handlePeriodChange} activePeriod={activePeriod} />
      <Container>
        {OrderInfo.length > 0 ? (
          OrderInfo.map((orderItem) => <OrderHistoryItem orderInfo={orderItem} />)
        ) : (
          <Message>
            {activePeriod !== null
              ? `${orderPeriods[activePeriod]} 간의 주문내역이 없습니다.`
              : '주문내역이 없습니다.'}
          </Message>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Message = styled.div`
  ${TextStyles.subTitle.largeR}
  max-width: 745px;
  width: 100%;
  height: 300px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: ${PETPICK_COLORS.GRAY[800]};
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
`;
export default OrderHistory;
