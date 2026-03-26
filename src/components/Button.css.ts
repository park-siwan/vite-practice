import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  padding: '12px 24px',
  borderRadius: 8,
  border: 'none',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
  color: '#ffffff',
});

export const buttonVariants = styleVariants({
  primary: [base, { backgroundColor: '#0064FF' }],
  secondary: [base, { backgroundColor: '#6B7280' }],
  danger: [base, { backgroundColor: '#EF4444' }],
});
