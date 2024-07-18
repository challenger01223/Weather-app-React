import { COLORS } from "@/utils/constants";
import { Btn } from "@/styles";

type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

interface ButtonProps extends IBaseButtonProps {
    isActive?: boolean,
    styles?: object
}

const Button: React.FC<ButtonProps> = ({ children, isActive, styles, ...props }) => {
    return (
        <Btn {...props} style={isActive ? { ...styles, color: COLORS.BLUE, backgroundColor: COLORS.WHITE } : { ...styles }}>{children}</Btn>
    )
};

export default Button;