import styled, { css } from "styled-components";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "size", "active", "fullWidth"].includes(prop),
})`
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  border-radius: ${(props) => props.theme.radius.pill};
  transition: all ${(props) => props.theme.transitions.normal};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid transparent;

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.colors.black};

      &:hover {
        background-color: #333;
        border-color: #333;
      }
    `}

  ${(props) =>
    props.$variant === "outline" &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.black};
      border-color: ${(props) => props.theme.colors.black};
      border-width: 2px;

      &:hover {
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
      }
    `}

  ${(props) =>
    props.$variant === "white" &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.black};
      border: 1px solid ${(props) => props.theme.colors.gray.border};

      &:hover {
        background-color: ${(props) => props.theme.colors.gray.light};
      }
    `}

  ${(props) =>
    props.$variant === "lime" &&
    css`
      background-color: ${(props) => props.theme.colors.lime};
      color: ${(props) => props.theme.colors.white};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors.limeHover};
      }
    `}

  ${(props) =>
    props.$variant === "round" &&
    css`
      width: 60px;
      height: 60px;
      border-radius: ${(props) => props.theme.radius.circle};
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.black};
      border: 2px solid ${(props) => props.theme.colors.black};
      font-size: 1.5rem;
      padding: 0;

      &:active {
        transform: scale(0.95);
      }
    `}

  ${(props) =>
    props.$active &&
    css`
      background-color: ${(props) => props.theme.colors.black} !important;
      color: ${(props) => props.theme.colors.white} !important;
      border-color: ${(props) => props.theme.colors.black} !important;
    `}

  ${(props) =>
    props.$size === "small" &&
    css`
      padding: 0.375rem 1rem;
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      padding: 0.75rem 2.5rem;
      font-size: 1.125rem;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;

function Button({
  children,
  variant = "primary",
  size = "medium",
  active = false,
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  as,
  to,
  ...props
}) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $active={active}
      $fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
      as={as}
      to={to}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
