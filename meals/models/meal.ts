type Meal = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: Number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: Boolean;
  isVegan: Boolean;
  isVegetarian: Boolean;
  isLactoseFree: Boolean;
};

export default Meal;
