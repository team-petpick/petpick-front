import styled from 'styled-components';

export const InfoList = styled.ul`
  margin-top: 20px;
`;

export const InfoListItem = styled.li`
  display: flex;
  padding: 17px 0 18px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 14px;
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
