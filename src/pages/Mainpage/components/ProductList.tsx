import styled from 'styled-components';
import Product from './Product';
import { IProductInfo } from '@types';
import useGetLikeAll from '../hooks/useGetLikeAll';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';

interface IProductListProps {
  productInfo: any;
  likedProductIds: number[];
}

const ProductList = ({ productInfo }: IProductListProps) => {
  const { likedProductIds } = useGetLikeAll();
  const navigate = useNavigate();

  const handleProductDetailClick = (productInfo: any) => {
    navigate(ROUTE.DETAILPAGE.replace(':productId', String(productInfo.productId)));
  };
  return (
    <ProductListWrapper>
      {productInfo.content.map((product: IProductInfo) => (
        <Product
          key={product.productId}
          productInfo={product}
          isLiked={likedProductIds.includes(product.productId)}
          onClick={() => handleProductDetailClick(product)}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;

const ProductListWrapper = styled.div`
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  block-size: 100%;
  align-items: center;
  justify-content: center;
`;
