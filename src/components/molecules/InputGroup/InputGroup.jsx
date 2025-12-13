import { useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
import Icon from "../../atoms/Icon/Icon";

const InputGroupContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.gray.border};
  border-radius: ${(props) => props.theme.radius.pill};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: all ${(props) => props.theme.transitions.normal};

  &:focus-within {
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    border-color: #80bdff;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background-color: white;
  border: none;

  ${media.md} {
    padding: 0 1rem;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0.75rem 0.5rem;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 0.95rem;
  background-color: transparent;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray.dark};
    opacity: 0.6;
  }

  ${media.md} {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.gray.dark};

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  ${media.md} {
    padding: 0 1rem;
  }
`;

function InputGroup({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  name,
  showPasswordToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <InputGroupContainer>
      {icon && (
        <IconWrapper>
          <Icon name={icon} size="1.25rem" />
        </IconWrapper>
      )}
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {showPasswordToggle && (
        <ActionButton
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? "eye-slash" : "eye"} />
        </ActionButton>
      )}
    </InputGroupContainer>
  );
}

export default InputGroup;
