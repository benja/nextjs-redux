import React from 'react';
import styled from 'styled-components';

interface TextProps {
  regular?: boolean;
  semibold?: boolean;
  bold?: boolean;
  color?: string;
  fontSize?: number;
  onClick?: () => void;

  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FONT_WEIGHT_MAP = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;

export const Text = (props: TextProps) => {
  const style: React.CSSProperties = { ...props.style };

  if (props.regular) style.fontWeight = FONT_WEIGHT_MAP.regular;
  if (props.semibold) style.fontWeight = FONT_WEIGHT_MAP.semibold;
  if (props.bold) style.fontWeight = FONT_WEIGHT_MAP.bold;

  if (props.color) style.color = props.color;
  if (props.fontSize) style.fontSize = props.fontSize;

  return (
    <TextBase
      onClick={props.onClick}
      {...props}
      style={style}
      className={props.className}
    >
      {props.children}
    </TextBase>
  );
};

const TextBase = styled.p`
  color: ${(props) => props.theme.text};
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;
