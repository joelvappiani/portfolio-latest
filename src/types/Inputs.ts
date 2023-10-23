export type NeuInputProps = {
    id: string;
    type: 'textfield' | 'classic';
    placeholder: string;
    handleInputValue: (id: string, value: string) => void;
    inputValue: string;
    submitted: boolean;
    sent: boolean;
}
export type Form = {
    name: string;
    email: string;
    message: string;
}

export type Button = {
    handleSend: () => void
    submitted: boolean;
    sent: boolean;
}