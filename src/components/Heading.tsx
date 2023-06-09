interface HeadingProps {
    name: string;
    country: string;
}
  
const Heading: React.FC<HeadingProps> = ({ name, country }) => {
    return (
        <div className="flex items-center gap-x-2 py-6">
            <div className="w-6 h-8 bg-cover rounded-xl bg-center" style={{ backgroundImage: `url(/flags/${country}.png)` }}>
            </div>
            <span className="text-sm">{name}</span>
            <nav className="ml-auto">
                <ul className="flex gap-x-2">
                    <li className="item-social"><i className="fa-brands fa-facebook-f"></i></li>
                    <li className="item-social"><i className="fa-brands fa-twitter"></i></li>
                    <li className="item-social"><i className="fa-brands fa-instagram"></i></li>
                    <li className="item-social"><i className="fa-brands fa-pinterest"></i></li>
                </ul>
            </nav>
        </div>
    );
}

export default Heading;