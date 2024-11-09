import React from 'react';

interface FilterButtonProps {
    onClick: () => void;
    label: string;
    className?: string;
}

function FilterButton(props: FilterButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={`px-4 max-h-10 py-2 bg-indigo-600 text-white text-center
            font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${props.className}`}
        >
            {props.label}
        </button>
    );
}

export default FilterButton;
