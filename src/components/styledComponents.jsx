import styled from "styled-components";
//Cart
const WrapperCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const TotalPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const TotalGeneral = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;


const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin: 20px;
`;



export{
    WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,
    ProductPrice, ProductAmount, ProductAmountContainer, TotalPrice, TotalGeneral

}

