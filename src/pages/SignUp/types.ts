export default interface ComponentProps {
  disabled?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  formik?: any;
  signUpInputs?: any;
}

export type SignUpInputs = {
  placeholder: string;
  name: string;
  value: string;
  type?: string;
  error: any;
  touched: any;
};
