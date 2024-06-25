"use client";
import React, { useCallback } from "react";

interface CheckboxProps {
  label?: string;
  value?: any;
  selectedValues?: any[];
  setSelectedValues?: React.Dispatch<React.SetStateAction<any[]>>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  selectedValues = [],
  setSelectedValues,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSelectedValues((prevSelectedValues: any[]) => {
        if (prevSelectedValues.includes(val)) {
          return prevSelectedValues.filter((item) => item !== val);
        } else {
          return [...prevSelectedValues, val];
        }
      });
    },
    [setSelectedValues]
  );

  return (
    <label className="md:text-base text-sm cursor-pointer">
      <input
        type="checkbox"
        value={value}
        checked={selectedValues.includes(value)}
        onChange={handleChange}
        className="mr-2 cursor-pointer"
      />
      {label}
    </label>
  );
};

export default Checkbox;
