import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';
import { IAllProductInfo, TProductFilterType } from '@types';
import { PRODUCT_FILTER_TYPE } from '@constants/productFilter';

interface IProductInfoProps {
  activeFilter: TProductFilterType;
  setActiveFilter: (filterType: TProductFilterType) => void;
  productInfo: IAllProductInfo;
}

const ProductFilter = ({ activeFilter, setActiveFilter, productInfo }: IProductInfoProps) => {

  const handleFilterButtonClick = (filterType: TProductFilterType) => {
    setActiveFilter(filterType);
  };


  return (
    <Wrapper>
      <FilterLayout>
        <TotalCount>총 {productInfo.content.length}개</TotalCount>
        <FilterContainer>
          <FilterButton onClick={() => handleFilterButtonClick(PRODUCT_FILTER_TYPE.POPULAR)}>
            <FilterTextBox isActive={activeFilter === PRODUCT_FILTER_TYPE.POPULAR}>
              인기순
            </FilterTextBox>
          </FilterButton>
          <FilterDivideBox></FilterDivideBox>
          <FilterButton onClick={() => handleFilterButtonClick(PRODUCT_FILTER_TYPE.SALES)}>
            <FilterTextBox isActive={activeFilter === PRODUCT_FILTER_TYPE.SALES}>
              판매순
            </FilterTextBox>
          </FilterButton>
        </FilterContainer>
      </FilterLayout>
    </Wrapper>
  );
};

export default ProductFilter;

const Wrapper = styled.div`
  padding: 35px 0 14px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const FilterLayout = styled.div`
  width: 1050px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TotalCount = styled.div`
  ${TextStyles.subText.smallM}
  color: ${PETPICK_COLORS.GRAY[800]}
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
const FilterButton = styled.button``;
const FilterTextBox = styled.span<{ isActive: boolean }>`
  ${TextStyles.subText.smallM}
  color: ${({ isActive }) =>
    isActive ? `${PETPICK_COLORS.BLUE[400]}` : `${PETPICK_COLORS.GRAY[700]}`};
  font-weight: ${({ isActive }) => (isActive ? '00' : '400')};
`;
const FilterDivideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1px;
  height: 10px;
  flex-shrink: 0;
  background-color: ${PETPICK_COLORS.GRAY[400]};
`;
