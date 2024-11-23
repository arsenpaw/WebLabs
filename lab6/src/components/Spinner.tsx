import React from 'react';

function Spinner(className: {className?: string}) {
    return (
        <div className={`w-8 h-8 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin ${className}`}></div>

    );
}

export default Spinner;