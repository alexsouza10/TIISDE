import styled from 'styled-components';

export const Container = styled.div`
  color: #000000;
  display: flex;
  padding: 20px; /* Increased padding for better spacing */
`;

export const ContentContainer = styled.div`
  display: block;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 100%;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h3`
  font-size: 15px;
    color: #595959;
    margin-bottom: 8px;
`;

export const ImageLeft = styled.img`
  width: 100%;
  max-width: 50%;
  height: auto;
  left: 35%;
  border-radius: 20px;
  border: 1px solid #000000;
  float: left;
`;

export const FaRegStar = styled.p`
color: gold;
`;

