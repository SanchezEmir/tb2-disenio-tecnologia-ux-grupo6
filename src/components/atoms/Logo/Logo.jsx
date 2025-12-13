import styled from "styled-components";

const LogoImage = styled.img`
  height: ${(props) => props.height || "30px"};
  width: auto;
  object-fit: contain;
`;

function Logo({ height = "30px", ...props }) {
  return (
    <LogoImage
      src="/img/corto.png"
      alt="Casa Andina Logo"
      height={height}
      {...props}
    />
  );
}

export default Logo;
