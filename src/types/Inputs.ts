export type NeuInputProps = {
    id: string;
    type: 'textfield' | 'classic';
    placeholder: string;
    handleInputValue: (id: string, value: string) => void;
}