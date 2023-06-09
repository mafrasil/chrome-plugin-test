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
      <AnimatePresence mode="wait">
      <motion.div layoutId="recipe" className="bg-[#131823] rounded-md p-3" key={dish.name}>
          <div className=" bg-[#17CFC4] rounded-md text-primary px-6 py-3">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} exit={{ opacity: 0 }} className="font-bold text-xl">Difficulty: {dish.difficulty}</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }} exit={{ opacity: 0 }}>{dish.description}</motion.p>
              <motion.button whileHover={{ scale: 1.05 }} layoutId="recipeBtn" className="bg-[#131823] rounded-md text-white w-full text-sm p-2 mt-2" onClick={() => setIsExpanded(!isExpanded)}>
                  View Full Recipe
              </motion.button>
          </div>
      </motion.div>
      {isExpanded && (
      <motion.div layoutId="recipe" className="absolute inset-5 bg-[#17CFC4] flex flex-col text-primary rounded-md p-6 shadow-full">
          <motion.button layoutId="recipeBtn" className="bg-white w-8 h-8 ml-auto rounded-full" onClick={() => setIsExpanded(!isExpanded)}>
              <i className="fas fa-times"></i>
          </motion.button>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} className="mt-5">
            {dish.description}
          </motion.p>
      </motion.div>
      )}
      </AnimatePresence>
  </>
  )
}

export default Recipe;