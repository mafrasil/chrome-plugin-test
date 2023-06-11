import { motion } from 'framer-motion';
  
  interface DetailProps {
    index: number;
    name: string;
    value: string;
  }
  
  const Detail: React.FC<DetailProps> = ({ index, name, value }) => (
    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.15 * index } }} className="detail">
      <p className="text-[#7185AA] text-xs font-light detail__name">{name}</p>
      <p className="detail__value">{value}</p>
    </motion.div>
  );
  
    export default Detail;