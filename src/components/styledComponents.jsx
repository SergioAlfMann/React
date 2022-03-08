import styled from "styled-components";
//Cart
const WrapperCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h3`
    font-weight: 200;
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
  font-size: 16px;
  font-weight: 200;
`;

const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

const TotalGeneral = styled.div`
  font-size: 16px;
  font-weight: 200;
  
`;

const SubTotalGeneral = styled.div`
  font-size: 16px;
  font-weight: 200;
  
`;

const Taxes = styled.div`
  font-size: 16px;
  font-weight: 200;
  
`;


const ProductAmount = styled.div`
font-size: 16px;
font-weight: 200;
margin: 5px;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;



export{
    WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,
    ProductPrice, ProductAmount, ProductAmountContainer, TotalPrice, TotalGeneral, SubTotalGeneral, Taxes, Top, TopButton, TopText

}

