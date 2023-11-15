import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const StarGold = styled(FaStar)`
color: gold;
font-size: 24px;
`;

const StarFull = () => {
    return (
        <StarGold />
    )
}

export default StarFull;