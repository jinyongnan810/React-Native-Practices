type Meal = {
  id: String;
  categoryIds: String[];
  title: String;
  affordability: String;
  complexity: String;
  imageUrl: String;
  duration: Number;
  ingredients: String[];
  steps: String[];
  isGlutenFree: Boolean;
  isVegan: Boolean;
  isVegetarian: Boolean;
  isLactoseFree: Boolean;
};

export default Meal;
