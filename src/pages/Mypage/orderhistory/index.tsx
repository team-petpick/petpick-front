import { IOrderInfo } from '@types';
import Header from './components/Header';
import OrderHistoryItem from './components/OrderHistoryItem';
import styled from 'styled-components';

const OrderHistory = () => {
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
  return (
    <>
      <Header />
      <Container>
        {OrderInfo.map((orderItem) => (
          <OrderHistoryItem orderInfo={orderItem} />
        ))}
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
export default OrderHistory;
