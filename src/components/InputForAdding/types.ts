export default interface ComponentProps {
  value: string;
  disabled: boolean;
  handleAddTodo: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
