import { useState } from "react";
import Add from "./Add";

interface HeadingProps {
    name: string;
    country: string;
    updateRecipes: () => void;
}

const Heading: React.FC<HeadingProps> = ({ name, country, updateRecipes }) => {

    const [showAdd, setShowAdd] = useState(false);

    const handleAddRecipe = () => {
        setShowAdd(true);
    };

    return (
        <>
        <div className="flex items-center gap-x-2 py-6">
            <div>
                <span className={`fi fi-${country.toLowerCase()}`}></span>
            </div>
            <span className="text-sm">{name}</span>
            <nav className="ml-auto">
                <ul className="flex items-center gap-x-1">
                    <li className="item-social"><i aria-label="Facebook" className="fa-brands fa-facebook-f"></i></li>
                    <li className="item-social"><i aria-label="Twitter" className="fa-brands fa-twitter"></i></li>
                    <li className="item-social"><i aria-label="Pinterest" className="fa-brands fa-pinterest"></i></li>
                    <li onClick={handleAddRecipe} className="bg-[#454A5F]/20 hover:bg-white hover:text-primary cursor-pointer hover:scale-110 duration-300 py-1 px-2 rounded-md text-xs" aria-label="Add Recipe">+ Add Recipe</li>
                </ul>
            </nav>
        </div>
        <Add show={showAdd} setShow={setShowAdd} updateRecipes={updateRecipes} />
        </>
    );
}

export default Heading;