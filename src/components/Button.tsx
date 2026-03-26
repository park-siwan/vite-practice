import { button } from './Button.css';

export function Button({ children }: { children: React.ReactNode }) {
  return <button className={button}>{children}</button>;
}
