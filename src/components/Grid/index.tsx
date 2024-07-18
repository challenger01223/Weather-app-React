import { GridDiv } from "@/styles";

interface IGrid {
    children: React.ReactNode
}

const Grid: React.FC<IGrid> = ({ children }) => {
    return (
        <GridDiv>
            {children}
        </GridDiv>
    )
};

export default Grid;