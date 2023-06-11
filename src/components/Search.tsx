import Select, { SingleValueProps, StylesConfig, components } from "react-select";
import { Recipe } from "../types/Recipe";

interface Styles {
  [key: string]: any;
}

type OptionType = {
  label: string;
  value: string;
  difficulty: number; // difficulty as numerical data
  origin: string;
};

type SearchProps = {
  selectedDish: Recipe;
  setSelectedDish: (dish: Recipe) => void;
  recipes: Recipe[];
};

export const getDifficultyColor = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "green";
    case 2:
      return "yellow";
    case 3:
      return "red";
    default:
      return "black";
  }
};

export const getDifficultyText = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "Easy";
    case 2:
      return "Medium";
    case 3:
      return "Hard";
    default:
      return "Unknown";
  }
};

const Search: React.FC<SearchProps> = ({ selectedDish, setSelectedDish, recipes }) => {
  if (!selectedDish) return null;

  const options: OptionType[] = recipes.map((recipe) => ({
    label: recipe.name,
    value: recipe.name,
    difficulty: recipe.difficulty,
    origin: recipe.origin,
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

  const SingleValue = ({ children, ...props }: SingleValueProps<OptionType>) => (
    <components.SingleValue {...props}>{props.data.label}</components.SingleValue>
  );

  return (
    <div className="relative">
      <Select
        styles={colourStyles}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null, SingleValue }}
        options={options}
        value={options.find((option) => option.value === selectedDish.name)}
        onChange={(option: any) => setSelectedDish(recipes.find(recipe => recipe.name === option.value)!)}
        formatOptionLabel={(option: OptionType) => (
          <div className="flex items-center text-sm">
            <div className={`fi fi-${option.origin.toLowerCase()}`}></div>
            <div className="mx-2">{option.label}</div>
            <div 
  className="ml-auto mr-1" 
  style={{ 
    backgroundColor: getDifficultyColor(option.difficulty),
    width: "12px",
    height: "12px",
    clipPath: 'polygon(0% 0%, 99% 0%, 100% 40%, 55% 100%, 0 100%)'
  }}
/>
            <div className="text-[#AEB5C1] text-sm font-light">
              <span className="text-white font-bold">{getDifficultyText(option.difficulty)}</span> | 30 min
            </div>
          </div>
        )}
      />
      <i className="fas fa-search absolute left-3 bottom-3 text-gray-400"></i>
    </div>
  );
};

export default Search;
