import { ReactNode, ElementType } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}

export default function Container({
  children,
  className,
  id,
  as: Component = "div",
}: ContainerProps) {
  const classes = [
    "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      id={id ? `container-component-${id}` : undefined}
      className={classes}
    >
      {children}
    </Component>
  );
}
