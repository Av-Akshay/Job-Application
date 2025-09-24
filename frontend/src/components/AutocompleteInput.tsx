import React, { useState, useRef, useEffect, forwardRef } from 'react';

interface AutocompleteInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suggestions: string[];
  onSuggestionSelect?: (value: string) => void;
  containerClassName?: string;
}

const AutocompleteInput = forwardRef<HTMLInputElement, AutocompleteInputProps>(
  ({ suggestions, onSuggestionSelect, containerClassName = "", className = "", ...inputProps }, ref) => {
    const [inputValue, setInputValue] = useState(inputProps.value as string || '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [hasSelected, setHasSelected] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (!hasSelected && inputValue.length > 0) {
        const filtered = suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        ).slice(0, 10);
        setFilteredSuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
      } else {
        setShowSuggestions(false);
        setFilteredSuggestions([]);
      }
      setHighlightedIndex(-1);
    }, [inputValue, suggestions, hasSelected]);

    useEffect(() => {
      if (highlightedIndex >= 0 && highlightedIndex < suggestionRefs.current.length) {
        suggestionRefs.current[highlightedIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }, [highlightedIndex]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setHasSelected(false);
      if (inputProps.onChange) {
        inputProps.onChange(e);
      }
    };

    const handleSuggestionClick = (suggestion: string) => {
      setInputValue(suggestion);
      setShowSuggestions(false);
      setHasSelected(true);
      if (onSuggestionSelect) {
        onSuggestionSelect(suggestion);
      }
      const syntheticEvent = {
        target: { value: suggestion, name: inputProps.name }
      } as React.ChangeEvent<HTMLInputElement>;
      if (inputProps.onChange) {
        inputProps.onChange(syntheticEvent);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showSuggestions) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
            handleSuggestionClick(filteredSuggestions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setShowSuggestions(false);
          setHighlightedIndex(-1);
          break;
      }

      if (inputProps.onKeyDown) {
        inputProps.onKeyDown(e);
      }
    };

    const highlightMatch = (text: string, query: string) => {
      const parts = text.split(new RegExp(`(${query})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="font-semibold text-blue-600">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      );
    };

    return (
      <div ref={containerRef} className={`relative ${containerClassName}`}>
        <input
          ref={ref}
          {...inputProps}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (!hasSelected && inputValue.length > 0 && filteredSuggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          className={className}
          autoComplete="off"
        />
        
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                ref={el => {suggestionRefs.current[index] = el;}}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-3 py-2 cursor-pointer text-blue-400 transition-colors ${
                  index === highlightedIndex
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="text-sm">
                  {highlightMatch(suggestion, inputValue)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

AutocompleteInput.displayName = 'AutocompleteInput';

export default AutocompleteInput;