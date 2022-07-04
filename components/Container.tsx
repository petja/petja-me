import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: Props) => (
  <div className={clsx("max-w-3xl mx-auto px-8", props.className)}>
    {props.children}
  </div>
);
