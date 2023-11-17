import styled from "styled-components";

export const ContainerReverse = styled.div`
position: relative;
color: #000000;
display: flex;
padding: 20px; 
`;

export const ContentContainerReverse = styled.div`

display: block;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 100%;
`;

export const TitleReverse = styled.h1`
font-size: 50px;
margin-bottom: 8px;
`;

export const SubTitleReverse = styled.h3`
font-size: 15px;
color: #595959;
margin-bottom: 8px;
`;

export const ImageRight = styled.img`
width: 100%;
max-width: 50%;
height: auto;
border-radius: 20px;
border: 1px solid #000000;
margin-right: 20px; // Adicione este estilo para espaçamento entre imagem e texto
`;
