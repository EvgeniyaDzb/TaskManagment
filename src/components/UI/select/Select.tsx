import React from "react";
import './Select.css'

type SelectProps = {
    options:
    {
        value: string | number,
        name: string
    }[],
    defaultValue: string,
    value: string | number,
    onChange: (value: string | number) => void
};

export const Select = ({ options, defaultValue, value, onChange }: SelectProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value)
    }

    return (
        <select className="mySelect" value={value} onChange={handleChange}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};