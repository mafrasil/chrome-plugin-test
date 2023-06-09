import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { initialRecipes } from '../testData/initialRecipes';

interface RecipeProps {
  dish: typeof initialRecipes[number];
}

const Recipe: React.FC<RecipeProps> = ({ dish }) => {
  
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
  <>
      <AnimatePresence>
      <motion.div layoutId="recipe" className="bg-[#131823] rounded-md p-3">
          <div className=" bg-[#17CFC4] rounded-md text-primary p-6">
              <motion.p layoutId="recipeTitle" className="font-bold text-xl">Difficulty: {dish.difficulty}</motion.p>
              <motion.p layoutId="recipeDesc">{dish.description}</motion.p>
              <motion.button whileHover={{ scale: 1.1 }} layoutId="recipeBtn" className="bg-[#131823] rounded-md text-white w-full p-2 mt-2" onClick={() => setIsExpanded(!isExpanded)}>
                  View Full Recipe
              </motion.button>
          </div>
      </motion.div>
      {isExpanded && (
      <motion.div layoutId="recipe" className="fixed inset-5 bg-[#17CFC4] flex flex-col text-primary rounded-md p-6">
          <motion.button layoutId="recipeBtn" className="bg-white w-8 h-8 ml-auto rounded-full" onClick={() => setIsExpanded(!isExpanded)}>
              <i className="fas fa-times"></i>
          </motion.button>
          <motion.p layoutId="recipeDesc" className="mt-5">
            {dish.description}
          </motion.p>
      </motion.div>
      )}
      </AnimatePresence>
  </>
  )
}

export default Recipe;