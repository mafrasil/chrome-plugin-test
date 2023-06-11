import { useEffect, useState } from 'react';
import Search from './components/Search';
import Heading from './components/Heading';
import Recipe from './components/Recipe';
import DishDetails from './components/Details';
import { Recipe as RType } from './types/Recipe';
import Yumazoo from './lib/yumazoo';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<RType[]>([]);
  const [selectedDish, setSelectedDish] = useState<RType | null>(null);
  
  async function fetchData() {
    const data = await Yumazoo.getRecipes();

    /* remove duplicate recipes & empty titled recipes */
    const uniqueRecipes: RType[] = data.filter((recipe: RType, index: number, self: RType[]) =>
      index === self.findIndex((r: RType) => (
        r.name === recipe.name && r.origin === recipe.origin
      ))
    ).filter((recipe: RType) => recipe.name !== '');

    setRecipes(uniqueRecipes);
    setSelectedDish(uniqueRecipes[0]);
    setIsLoading(false); // set loading to false after data is fetched
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading) {
    return <div>Loading...</div> // or a loading spinner
  }

  return (
    <div className="h-[586px] w-[400px] relative bg-primary p-6">
      <Search recipes={recipes} selectedDish={selectedDish!} setSelectedDish={setSelectedDish} />
      <Heading name={selectedDish!.name} country={selectedDish!.origin} updateRecipes={fetchData} />
      <Recipe dish={selectedDish!} />
      <DishDetails dish={selectedDish!} />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;