import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";


// --------------Need to use before container because we are using Info over Container---------
// Z-index helps to maintain order of visibility in sequence 3= Top
const Info = styled.div`
opacity:0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`;


const Container = styled.div`
flex:1;
margin: 8px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f2ebfd;
position: relative;

-------Applying Hover on Info ------;
&:hover ${Info} {
  opacity: 1;

}
`;


const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin: 10px;
Use fot transformation timing;
transition: all 0.5s ease;   
&: hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>

    </Container>
  );
};

export default Product;
