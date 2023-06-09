import { useState } from 'react';
import Search from './components/Search';
import Heading from './components/Heading';
import Recipe from './components/Recipe';
import DishDetails from './components/Details';
import './App.css';
import { initialRecipes } from './testData/initialRecipes';

function App() {
  const [selectedDish, setSelectedDish] = useState(initialRecipes[0]);

  return (
    <div className="h-[586px] w-[400px] relative bg-primary p-6">
        <Search selectedDish={selectedDish} setSelectedDish={setSelectedDish} />
        <Heading name={selectedDish.name} country={selectedDish.flag} />
        <Recipe dish={selectedDish} />
        <DishDetails dish={selectedDish} />
    </div>
  );
}

export default App;