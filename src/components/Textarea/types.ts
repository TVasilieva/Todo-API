export default interface ComponentProps {
  Icon: JSX.Element;
  value: string;
  placeholder: string;
  classes?: {
    input?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
