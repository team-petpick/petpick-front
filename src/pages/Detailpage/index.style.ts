import styled from 'styled-components';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';

export const ActionGoToCartButton = styled.button`
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 432px;
  height: 100%;
  border-radius: 3px;
  font-size: ${TextStyles.body.mediumM};
  color: #fff;
  background-color: ${PETPICK_COLORS.BLUE[300]};
  border: 0 none;
`;
export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 56px;
  margin-top: 20px;
`;
export const ActionButtons = styled.button`
  border: 1px solid ${PETPICK_COLORS.BLUE[300]};
  border-radius: 3px;
  width: 56px;
`;
export const TotalContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const TotalWon = styled.div`
  padding-left: 5px;
  ${TextStyles.subTitle.largeSB}
`;
export const TotalPriceText = styled.span`
  padding-right: 12px;
  ${TextStyles.body.mediumM}
`;
export const TotalPrice = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.bigTitle.xxlargeB}
`;
export const InfoContainer = styled.div`
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
export const PriceSpan = styled.span<IStyleProps>`
  font-weight: normal;
  font-size: 12px;
  color: ${({ isDiscounted }) =>
    isDiscounted ? PETPICK_COLORS.GRAY[400] : PETPICK_COLORS.GRAY[800]};
  text-decoration: ${({ isThrough }) => (isThrough ? 'line-through' : 'none')};
`;
export const SelectPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
`;
export const CountText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;
export const SelectLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  width: 100%;
`;
export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;
export const IncreaseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  border-radius: 3px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;
export const PurchaseContainer = styled.div`
  padding-bottom: 40px;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  font-weight: bold;
  line-height: 30px;
`;
export const PriceBox = styled.div`
  margin: 8px 0 40px;
`;
export const PriceText = styled.span`
  font-size: 18px;
  color: rgb(51, 51, 51);
`;
export const DiscountText = styled.span`
  padding-right: 9px;
  color: rgb(250, 98, 47);
  font-size: 28px;
`;
export const DiscountPrice = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: rgb(51, 51, 51);
`;
export const RegularPrice = styled.span`
  font-size: 16px;
  color: rgb(181, 181, 181);
  letter-spacing: -0.5px;
  text-decoration: line-through;
  margin-right: 1px;
`;
export const ProductTitle = styled.h1`
  width: 500px;
  ${TextStyles.bigTitle.xxlargeSB}
  color: rgb(51, 51, 51);
  margin: 0px 20px 0px 0px;
`;
export const ProductTitleInfo = styled.h2`
  width: 500px;
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 19px;
  margin-top: 4px;
`;
export const Title = styled.p`
  color: rgb(51, 51, 51);
  font-weight: 400;
  line-height: 19px;
  white-space: pre-line;
`;
export const Text = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 4px;
  line-height: 16px;
  white-space: pre-line;
`;
export const InfoTitle = styled.dt`
  width: 128px;
  height: 100%;
  line-height: 19px;
  color: rgb(102, 102, 102);
`;
export const InfoText = styled.dd`
  display: flex;
  flex-direction: column;
  color: rgb(51, 51, 51);
  line-height: 19px;
  font-weight: 400;
`;
export const InfoList = styled.ul`
  margin-top: 20px;
`;
export const InfoListItem = styled.li`
  display: flex;

  padding: 17px 0 18px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 14px;
`;
export const MainInfo = styled.main`
  width: 1010px;
`;

export const DetailLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  margin: 0px auto;
`;
export const DetailInfoContainer = styled.div`
  padding-bottom: 100px;
`;
export const ProductContainer = styled.div`
  width: 1050px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const ProductImageContainer = styled.div`
  width: 430px;
  height: 552px;
`;
export const ProductImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;
export const ProductInfoContainer = styled.section`
  width: 560px;
`;
export const ProductDescriptionLayout = styled.div`
  padding-top: 40px;
`;

export const DescriptionImageBox = styled.div`
  width: 100%;
`;
export const DescriptionText = styled.p``;
export const InfoNav = styled.nav`
  width: 100%;
  display: flex;
  margin-top: 50px;
  box-shadow: inset 0 -0.5px 0 0 #${PETPICK_COLORS.GRAY[300]};
`;
export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
`;
export const NavListItem = styled.li`
  width: 100%;
  display: flex;
  flex: 1;
  border-width: 1px 0 1px 1px;
  border-color: ${PETPICK_COLORS.GRAY[200]};
  border-style: solid;
  background-color: ${PETPICK_COLORS.GRAY[100]};
`;
export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${TextStyles.body.mediumM}
  color: ${PETPICK_COLORS.GRAY[600]}
`;
