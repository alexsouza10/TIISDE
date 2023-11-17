import React from "react";
import cellblack from "/images/cellblack.jpeg"
import {
    ContainerReverse,
    ContentContainerReverse,
    TitleReverse,
    SubTitleReverse,
    ImageRight
} from "../style/DisplayBlockReverseStyle"

const DisplayReverse = () => {
    return (
        <ContainerReverse>
            <ImageRight src={cellblack} />
            <ContentContainerReverse>
                <TitleReverse>
                    Experienced and skilled developers
                </TitleReverse>
                <SubTitleReverse>
                    Our team of mobile software engineers  are highly experienced and skilled in developing mobile aplications for both iOS and Android plataforms. They have a deep understandig of the latest technologies and best pratices in mobile app development.
                </SubTitleReverse>
            </ContentContainerReverse>
        </ContainerReverse>
    );
};

export default DisplayReverse;