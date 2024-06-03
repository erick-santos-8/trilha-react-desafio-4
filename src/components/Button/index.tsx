import { ButtonContainer, ButtonContainerBlock } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, valid }: IButtonProps) => {
  if(valid)
    return <ButtonContainer>{title}</ButtonContainer>;
  return <ButtonContainerBlock>{title}</ButtonContainerBlock>
};

export default Button;
