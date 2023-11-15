import React from "react";
import cellblack from "/images/cellblack.jpeg"
import { ContainerReverse, TitleReverse, SubTitleReverse, ContentContainerReverse, ImageRight } from "../style/DisplayBlockReverseStyle"

const DisplayReverse = () => {
    return (
        <ContainerReverse>
            <ContentContainerReverse>
                <TitleReverse>
                    Hire Expert Mobile App Developers
                </TitleReverse>
                <SubTitleReverse>
                    Build high-quality and user-friendly mobile applications for iOS and Android with our team of skilled mobile software engineers
                </SubTitleReverse>
                <ImageRight src={cellblack} />
            </ContentContainerReverse>
        </ContainerReverse>
    );
};

export default DisplayReverse;