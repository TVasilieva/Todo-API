export default interface ComponentProps {
  formik?: any;
  signUpInputs?: any;
}

export type Inputs = {
  placeholder: string;
  name: string;
  value: string;
  type?: string;
  error: any;
  touched: any;
};
