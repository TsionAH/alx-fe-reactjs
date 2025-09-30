import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === Number(id));

  if (!recipe) {
    return <p className="text-center text-red-500 mt-6">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h2>
      <p className="text-gray-700 text-center mb-6">{recipe.summary}</p>
      {recipe.detail && (
        <div className="w-full bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold mb-2">Details</h3>
          <p className="text-gray-600">{recipe.detail}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
