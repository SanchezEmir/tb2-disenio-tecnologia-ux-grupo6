import styled from "styled-components";

const StyledIcon = styled.i`
  font-size: ${(props) => props.size || "1rem"};
  color: ${(props) => props.color || "inherit"};
  display: inline-block;
  line-height: 1;
`;

function Icon({ name, size, color, className = "", ...props }) {
  return (
    <StyledIcon
      className={`bi bi-${name} ${className}`}
      size={size}
      color={color}
      {...props}
    />
  );
}

export default Icon;
