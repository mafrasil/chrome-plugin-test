import React from 'react';
import Detail from './Detail';
import { initialRecipes } from '../testData/initialRecipes';

interface DishDetailProps {
  dish: typeof initialRecipes[number];
}

const DishDetails: React.FC<DishDetailProps> = ({ dish }) => (
  <div className="bg-[#131823]/80 p-6 mt-4 rounded-md">
      <div className="grid grid-cols-2 gap-6 details">
          {dish.details.map((detail, index) => <Detail detail={detail} key={index} />)}
      </div>
  </div>
);

export default DishDetails;