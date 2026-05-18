import { useState, useEffect } from 'react';

const Recipes = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => { 
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {meals && meals.map((meal) => ( 
        <div key={meal.idMeal} className="bg-white rounded-2rem overflow-hidden shadow-xl hover:shadow-orange-100 transition-shadow border-b-8 border-orange-500">
          <div className="relative">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover" /> 
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              {meal.strArea}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{meal.strMeal}</h3> 
            <p className="text-orange-600 font-medium mb-6 uppercase text-sm tracking-widest">{meal.strCategory}</p>
            <button className="w-full py-3 px-6 bg-transparent border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
              Show Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;