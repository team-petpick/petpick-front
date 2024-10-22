import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const AnimalTypeWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    height: auto;
    display: flex;
    gap: 38px;
`
export const AnimalTypeButton = styled.div`
    width: 88px;
    height: 40px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background: #f7f7f7;
    color: #000;
    &:hover {
        background: #FFD400;
        color: #fff;
    }
`
export const AnimalTypeText = styled.div`
    width: auto;
    font-weight: 700;
    display: flex;
    align-items:center;
`
export const CategoryWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    height: 56px;
    display: flex; 
    align-items: center;
    border-radius: 5px;
    border: 1px solid #DDD;
    background: rgba(217, 217, 217, 0.00);
    gap: 38px;
`
export const CategoryButton = styled.div`
    width: 88px;
    display: flex;
    justify-content: center;
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 110%;
    cursor: pointer;
` 
export const CategoryText = styled.div`
    width: auto;
    color: #000;
    font-weight: 700;
    display: flex;
    align-items:center;
`                           