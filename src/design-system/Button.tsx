type ButtonProps = {
  component?: React.ElementType;
  children: React.ReactNode;
};

export default function Button({ component, children, ...props }: ButtonProps) {
  const Component = component || "button";

  return <Component {...props}>{children}</Component>;
}
