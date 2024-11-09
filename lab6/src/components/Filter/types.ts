export interface FilterProps {
    title: string;
    options: { label: string; value: number[] }[]; // Array of objects with label and value
    className?: string;
    onChange?: (value: string) => void; // Optional onChange callback for handling selection changes
}
