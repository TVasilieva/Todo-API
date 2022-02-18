export default interface ComponentProps {
  onClose?: () => void;
}

export type LoginHeader = {
  id: string;
  className: string;
  name: string;
  checked: boolean;
};

export type SignUp = {
  htmlFor: string;
  name: string;
  type: string;
  "data-type"?: string;
};
