import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { useState } from 'react';
import styled from 'styled-components';
import { ISingleProductInfo } from '@types';

interface IProductInfoProps {
  productInfo: ISingleProductInfo;
}
const ProductFilter = ({ productInfo }: IProductInfoProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterButtonClick = (filterType: string) => {
    setActiveFilter((prevFilter) => (prevFilter === filterType ? null : filterType));
  };
  console.log(productInfo);
  return (
    <Wrapper>
      <FilterLayout>
        <TotalCount>총 {productInfo.content.length}개</TotalCount>
        <FilterContainer>
          <FilterButton onClick={() => handleFilterButtonClick('popular')}>
            <FilterTextBox isActive={activeFilter === 'popular'}>인기순</FilterTextBox>
          </FilterButton>
          <FilterDivideBox></FilterDivideBox>
          <FilterButton onClick={() => handleFilterButtonClick('sales')}>
            <FilterTextBox isActive={activeFilter === 'sales'}>판매순</FilterTextBox>
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
    isActive ? `${PETPICK_COLORS.GRAY[500]}` : `${PETPICK_COLORS.GRAY[900]}`};
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
