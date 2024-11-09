import React from 'react';
import { FilterProps } from "./types";

function Filter({ title, options, onChange }: FilterProps) {
    return (
        <div className="max-w-sm">
            <form>
                <label
                    htmlFor={`${title.toLowerCase()}_filter_select`}
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    {title}
                </label>
                <select
                    id={`${title.toLowerCase()}_filter_select`}
                    className="block py-2 text-base text-gray-700 bg-white border min-w-[200px]
                     border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => onChange && onChange(e.target.value)}
                >
                    {options.map((option, index) => (
                        <option key={index} >
                            {option.label}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
}

export default Filter;
