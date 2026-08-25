import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  buttonName: string;
  onQuery: (query: string) => void;
}

const CustomSearch = ({ placeholder = "Buscar", buttonName, onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKeyDown} />
      <button>{buttonName}</button>
    </div>
  );
};

export default CustomSearch;
