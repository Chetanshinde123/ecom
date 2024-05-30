import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

// -------------Containes Left and Right Side Divided
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;

// -----------Left Side Selected Product Image------------
const ImgContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  border-radius: 20px;
  object-fit: cover;

`;

// ----------Right Side Info of Product----------
const InfoConatiner = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`font-weight: 200;`;

const Desc = styled.p`margin: 20px 0px;`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

// ----------Filtering the product on bases on color , size n all req..
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;


// ----------------------Filter Styling Here 
const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0 5px;
cursor: pointer;
`;

const FilterSize = styled.select`
margin-left:10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;


//---------------- Quantity And Add to Cart Button Styling
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px
`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;


const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.pinimg.com/564x/93/ea/84/93ea845bdfd13f4fbe0f05639eeaf599.jpg" />
        </ImgContainer>

        {/*------------------------------ Here Details of Product Selected ------------------------*/}
        <InfoConatiner>
          <Title>Shoes</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Desc>
          <Price>$ 20 </Price>

          {/*-------------------- Here Filter the product we required on bases of color and size -----------*/}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          {/* ----------------------------This Section is Quantity and And to cart button ---------------- */}
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>
                    ADD TO CART
                </Button>
            </AddContainer>

        </InfoConatiner>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
