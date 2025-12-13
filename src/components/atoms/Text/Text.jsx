import styled, { css } from "styled-components";

export const H1 = styled.h1`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin: 0;
`;

export const H2 = styled.h2`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin: 0;

  ${(props) =>
    props.underline &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.colors.black};
      padding-bottom: 5px;
      display: inline-block;
    `}
`;

export const H3 = styled.h3`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;
`;

export const H4 = styled.h4`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.base};
  margin: 0;
`;

export const H5 = styled.h5`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1rem;
  margin: 0;
`;

export const H6 = styled.h6`
  font-family: ${(props) =>
    props.serif ? props.theme.fonts.serif : props.theme.fonts.sans};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 0.875rem;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes.base};
  margin: 0;

  ${(props) =>
    props.small &&
    css`
      font-size: ${(props) => props.theme.fontSizes.sm};
    `}

  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
  
  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.gray.dark};
    `}
`;

export const Span = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};

  ${(props) =>
    props.bold &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.bold};
    `}

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export const Small = styled.small`
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) =>
    props.secondary ? props.theme.colors.gray.dark : "inherit"};
`;
