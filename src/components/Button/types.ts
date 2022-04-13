export default interface ComponentProps {
  disabled: boolean;
  Icon?: JSX.Element;
  classes?: string;
  size?: "small" | "medium" | "large" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "default"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  "aria-label"?: string;
  onClick: () => void;
}
