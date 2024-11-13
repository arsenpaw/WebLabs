export interface FilterProps {
    title: string;
    options: { label: string; value: number }[];
    className?: string;
    onChange?: (value: number) => void;
}
