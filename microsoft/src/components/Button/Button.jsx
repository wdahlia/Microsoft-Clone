import React from 'react';
import styled, { css } from 'styled-components';

const SIZES = {
  sm: css`
    padding: 0.8rem 1rem;
    border-radius: 3px;
  `,
  md: css`
    padding: 0.35rem 0.8rem;
  `,
  lg: css`
    padding: 0.8rem 1.2rem;
    border-radius: 3px;
  `,
}

const COLORS = {
  blue: css`
    background-color: #0067B8;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
  `,
  yellow: css`
    background-color: #FFD101;
    font-size: 1.3rem;
    font-weight: 800;
  `,
  gray: css`
    background-color: rgba(200, 199, 194, 0.622);
    font-weight: 700;
    font-size: 1.4rem;
  `
}

export default function Button({ disabled, size, color, children }) {
  console.log(disabled);
  const sizeStyle = SIZES[size];
  const colorStyle = COLORS[color];

  return (
    <StyledButton 
      disabled={disabled}
      sizeStyle={sizeStyle}
      colorStyle={colorStyle}
    >
      { children }
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.colorStyle}
  
  &:disabled {
    cursor: default;
    color: black;
  }`