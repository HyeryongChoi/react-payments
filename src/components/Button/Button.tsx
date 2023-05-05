import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  designType: 'basic' | 'text';
  width: string;
  height: string;
  backgroundColor: string;
  fontSize: string;
  children: React.ReactNode;
}

export function Button({ designType = 'basic', children, ...props }: Partial<Props>) {
  return (
    <Style.Button className={designType} {...props}>
      {children}
    </Style.Button>
  );
}

const Style = {
  Button: styled.button<Partial<Props>>`
    width: ${(props) => (props.width ? `${props.width}` : '300px')};
    height: ${(props) => (props.height ? `${props.height}` : '100px')};
    border: none;
    border-radius: 7px;
    outline: 0;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : 'var(--primary-color)'};

    color: ${(props) => (props.color ? props.color : 'var(--grey-100)')};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
    font-weight: 600;

    cursor: pointer;

    &.text {
      width: ${(props) => (props.width ? `${props.width}` : 'max-content')};
      height: ${(props) => (props.height ? `${props.height}` : 'max-content')};

      color: ${(props) => (props.color ? props.color : 'var(--grey-700)')};
      font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
      font-weight: bold;
      background-color: transparent;
    }

    &:disabled {
      color: var(--grey-500);
    }

    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.01);
    }
  `,
};
