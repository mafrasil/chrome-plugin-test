import React from 'react';
import Detail from './Detail';
import { initialRecipes } from '../testData/initialRecipes';
import { motion, AnimatePresence } from 'framer-motion';

interface DishDetailProps {
  dish: typeof initialRecipes[number];
}

const DishDetails: React.FC<DishDetailProps> = ({ dish }) => (
  <AnimatePresence mode="wait">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#131823]/80 p-6 mt-4 rounded-md" key={dish.name}>
        <div className="grid grid-cols-2 gap-6 details">
            {dish.details.map((detail, index) => <Detail detail={detail} index={index} key={index} />)}
        </div>
    </motion.div>
  </AnimatePresence>
);

export default DishDetails;