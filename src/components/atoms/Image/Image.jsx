import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};
  border-radius: ${(props) =>
    props.circle
      ? props.theme.radius.circle
      : props.rounded
      ? props.theme.radius.md
      : "0"};
`;

function Image({
  src,
  alt,
  rounded = false,
  circle = false,
  objectFit,
  height,
  ...props
}) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      rounded={rounded}
      circle={circle}
      objectFit={objectFit}
      height={height}
      loading="lazy"
      {...props}
    />
  );
}

export default Image;
