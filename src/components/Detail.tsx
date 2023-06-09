import { motion } from 'framer-motion';

interface IngredientDetail {
    ingredient: string;
    color: string;
  }
  
  interface DetailProps {
    index: number;
    detail: { name: string; value: string | IngredientDetail[] };
  }
  
  const Detail: React.FC<DetailProps> = ({ detail, index }) => (
    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.15 * index } }} className="detail">
      <p className="text-[#7185AA] text-xs font-light detail__name">{detail.name}</p>
      {Array.isArray(detail.value)
        ? detail.value.map(({ ingredient, color }, index, array) => (
            <span style={{ color }}>
                {ingredient} {index < array.length - 1 && <span className="text-white"> / </span>}
            </span>
          ))
        : <p className="detail__value">{detail.value}</p>
      }
    </motion.div>
  );
  
    export default Detail;