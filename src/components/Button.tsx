import { buttonVariants } from './Button.css';

type ButtonVariant = keyof typeof buttonVariants;

export function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
}) {
  return <button className={buttonVariants[variant]}>{children}</button>;
}
