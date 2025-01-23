import styled from 'styled-components';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) => {
    switch (size) {
        case 'small': return '8px 16px';
        case 'large': return '16px 32px';
        default: return '12px 24px';
    }
}};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
        case 'small': return '14px';
        case 'large': return '18px';
        default: return '16px';
    }
}};
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
        case 'secondary':
            return `
          background: ${theme.colors.secondary};
          color: white;
          &:hover {
            background: ${theme.colors.secondaryDark};
          }
        `;
        case 'outline':
            return `
          background: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: white;
          }
        `;
        default:
            return `
          background: ${theme.colors.primary};
          color: white;
          &:hover {
            background: ${theme.colors.primaryDark};
          }
        `;
    }
}}
`;