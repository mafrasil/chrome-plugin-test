import React from 'react';
import Detail from './Detail';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../types/Recipe';

interface DishDetailProps {
  dish: Recipe;
}

const DishDetails: React.FC<DishDetailProps> = ({ dish }) => {
  const detailKeys: (keyof Recipe)[] = ['produce', 'protein', 'serves', 'spice', 'cookingOil', 'stock', 'volume', 'authenticity'];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#131823]/80 p-6 mt-4 rounded-md"
        key={dish.name}
      >
        <div className="grid grid-cols-2 gap-6 details">
          {detailKeys.map((key, index) => (
            <Detail
              key={key}
              index={index + 1}
              name={key.charAt(0).toUpperCase() + key.slice(1)}
              value={dish[key].toString()} 
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DishDetails;