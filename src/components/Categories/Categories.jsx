// Updated CategoryPage.js to route to specific components
import React from 'react';
import { useParams } from 'react-router-dom';
import FruitsVegetablesPage from './FruitsVegetablesPage';
import MeatsSeafoodPage from './MeatsSeafoodPage';
import BreakfastDairyPage from './BreakfastDairyPage';
import BeveragesPage from './BeveragesPage';
import BreadsBakeryPage from './BreadsBakeryPage';
import FrozenFoodsPage from './FrozenFoodsPage';
import BiscuitsSnacksPage from './BiscuitsSnacksPage';
import GroceryStaplesPage from './GroceryStaplesPage';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const renderCategoryPage = () => {
    switch (categoryName) {
      case 'fruits-vegetables':
        return <FruitsVegetablesPage />;
      case 'meats-seafood':
        return <MeatsSeafoodPage />;
      case 'breakfast-dairy':
        return <BreakfastDairyPage />;
      case 'beverages':
        return <BeveragesPage />;
      case 'breads-bakery':
        return <BreadsBakeryPage />;
      case 'frozen-foods':
        return <FrozenFoodsPage />;
      case 'biscuits-snacks':
        return <BiscuitsSnacksPage />;
      case 'grocery-staples':
        return <GroceryStaplesPage />;
      default:
        return (
          <div className="container py-5">
            <h1>Category Not Found</h1>
            <p>Sorry, this category doesn't exist.</p>
          </div>
        );
    }
  };

  return renderCategoryPage();
};

export default CategoryPage;