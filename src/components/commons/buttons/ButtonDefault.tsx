import { Button } from "@/components/ui/button";

interface ButtonDefaultProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
 
export function ButtonDefault({
  children,
  ...props
}: ButtonDefaultProps) {
  return <Button {...props} >{children}</Button>
}