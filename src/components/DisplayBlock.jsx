import React from "react";
import cellbike from "/images/cellbike.jpeg"
import { Container, Title, SubTitle, ContentContainer, ImageLeft } from "../style/DisplayBlockStyle";
import FaRegStar from '../../public/icons/star'


const Display = () => {
    return (
        <Container>
            <ContentContainer>
                <Title>
                    Hire Expert Mobile App Developers
                </Title>
                <SubTitle>
                    Build high-quality and user-friendly mobile applications for iOS and Android with our team of skilled mobile software engineers
                </SubTitle>
            </ContentContainer>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /><FaRegStar />
            <ImageLeft src={cellbike} />
        </Container>
    )
}

export default Display;