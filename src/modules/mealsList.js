import { URL_API, getFoodItems } from './fetchMeals.js';
// Using getFoodItems function //
const getSource = async () => {
  // create an empty array
  const datas = [];
  // awit api data
  const foodList = await getFoodItems(URL_API);
  // loop to get individual data and populate important data to our array
  foodList.forEach((ata) => {
    const newarr = {
      id: ata.idMeal,
      name: ata.strMeal,
      image: ata.strMealThumb,
      category: ata.strCategory,
      origin: ata.strArea,
      cookinginstruction: ata.strInstructions,
    };
    datas.push(newarr);
  });
  return datas;
};

export default getSource;