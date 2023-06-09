import Select from "react-select";
import { StylesConfig } from 'react-select';
import { initialRecipes } from "../testData/initialRecipes";

interface Styles {
  [key: string]: any;
}

interface OptionType {
  label: string;
  value: string;
}

const options: OptionType[] = initialRecipes.map((recipe) => ({
  value: recipe.name,
  label: recipe.name,
}));

const colourStyles: StylesConfig<OptionType, false> = {
  menu: (styles: Styles) => ({ ...styles, backgroundColor: '#131823' }),
  control: (styles, { isFocused }) => ({ 
    ...styles, 
    backgroundColor: '#131823', 
    color: "#FFF", 
    borderColor: isFocused ? '#FFF' : '#5B6178',
    outline: 'none',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#6e84dd',
      outline: '#88a5e8',
    },
  }),
  option: (styles, { isDisabled, isSelected }) => {
    return {
        ...styles,
        fontWeight: 500,
        backgroundColor: isSelected ? 'white' : '#0D1119',
        color: isSelected ? '#0D1119' : 'white',
        cursor: isDisabled ? 'not-allowed' : 'default',
        '&:hover': {
            backgroundColor: '#6e84dd',
            color: '#fff',
        },
    };
  },
  input: (styles: Styles) => ({ ...styles, color: '#fff' }),
  placeholder: (styles: Styles) => ({ ...styles, color: '#fff' }),
  singleValue: (styles: Styles) => ({ ...styles, color: '#fff' }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: 40, // Add padding to make space for the search icon
  }),
};

interface SearchProps {
    selectedDish: typeof initialRecipes[number];
    setSelectedDish: React.Dispatch<React.SetStateAction<typeof initialRecipes[number]>>;
  }
  
  const Search: React.FC<SearchProps> = ({ selectedDish, setSelectedDish }) => {
    return (
      <div className="relative">
      <Select 
          styles={colourStyles}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          options={options}
          value={{ value: selectedDish.name, label: selectedDish.name }}
          onChange={(option) => setSelectedDish(initialRecipes.find(recipe => recipe.name === option?.value)!)}
      />
        <i className="fas fa-search absolute left-3 bottom-3 text-gray-400"></i>
      </div>
    );
  };

export default Search;