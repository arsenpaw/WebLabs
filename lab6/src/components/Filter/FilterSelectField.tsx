import React from 'react';
import {FilterSelectProps} from "./types";

function FilterSelectField(props:FilterSelectProps) {
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <label htmlFor="underline_select" className="sr-only">{props.title}</label>
                <select id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    {props.options.map((item) => {
                        return <option>{item}</option>
                    })}
                </select>
            </form>

        </div>
    );
}

export default FilterSelectField;