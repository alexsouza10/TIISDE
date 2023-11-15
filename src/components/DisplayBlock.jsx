import React from "react";
import cellbike from "/images/cellbike.jpeg"
import StarFull from '/public/icons/StarFull.jsx'
import {
    Container,
    ContentContainer,
    Title,
    SubTitle,
    ContainerUser,
    ImageLeft
} from "../style/DisplayBlockStyle";


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
            <ContainerUser>
                <StarFull />
            </ContainerUser>
            <ImageLeft src={cellbike} />
        </Container>
    )
}

export default Display;