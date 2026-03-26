import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '12px 24px',
  borderRadius: 8,
  border: 'none',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
});
