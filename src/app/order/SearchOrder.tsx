import React from "react";

interface SearchProps {
  value: string;
  setInput: (value: string) => void;
}

const SearchOrder: React.FC<SearchProps> = ({ value, setInput }) => {
  const allowOnlyOneSpace = (str: string) => {
    return str.replace(/\s+/g, " ").trimStart();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = allowOnlyOneSpace(e.target.value);
    setInput(newValue);
  };
  return (
    <div className="flex sm:flex-row flex-col justify-between overflow-hidden">
      <div className="w-[100%] sm:w-[100%] rounded-lg overflow-hidden shadow-lg">
        <input
          className="text-black p-4 w-full rounded-lg"
          value={value}
          onChange={onChangeInput}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchOrder;
