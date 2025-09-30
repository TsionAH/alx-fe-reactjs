import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState([]);
  const colors = ["bg-red-400", "bg-green-400", "bg-yellow-400"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    setData(recipesData);

    const interval = setInterval(() => {
      setCurrentColorIndex(prev => (prev + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      {/* Page Header */}
      <h1 className={`${colors[currentColorIndex]} text-white text-3xl font-bold p-4 mb-6 transition-colors duration-1000 text-center`}>
        Welcome to the recipe sharing platform.
      </h1>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {data.map(recipe => (
            
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
             <Link
        to="/add-recipe"
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add New Recipe
      </Link>
           <Link to={`/recipe/${recipe.id}`}>
           <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 text-center">{recipe.summary}</p>
         </Link>  
         </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
