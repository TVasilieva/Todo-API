export default interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default interface ComponentProps {
  isOpen: boolean;
  formik?: any;
  onClose: () => void;
}
