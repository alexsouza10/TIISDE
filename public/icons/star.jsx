import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const StarGold = styled(FaStar)`
color: gold;
font-size: 24px;
`;

const Star = () => {
    return (
        <StarGold />
    )
}

export default Star;