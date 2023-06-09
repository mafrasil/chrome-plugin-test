interface IngredientDetail {
    ingredient: string;
    color: string;
  }
  
  interface DetailProps {
    detail: { name: string; value: string | IngredientDetail[] };
  }
  
  const Detail: React.FC<DetailProps> = ({ detail }) => (
    <div>
      <p className="text-[#7185AA] text-xs font-light detail__name">{detail.name}</p>
      {Array.isArray(detail.value)
        ? detail.value.map(({ ingredient, color }, index, array) => (
            <span style={{ color }}>
                {ingredient} {index < array.length - 1 && <span className="text-white"> / </span>}
            </span>
          ))
        : <p className="detail__value">{detail.value}</p>
      }
    </div>
  );
  
    export default Detail;