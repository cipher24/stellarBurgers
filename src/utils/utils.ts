import { useSelector } from "./hooks";

export const CalculatePrice = (array: string[] = []): number => {
  const { ingredients } = useSelector(store => store.burgerIngredientsReducer);

  const price = array.reduce((accumulator, current) => {
    let match = ingredients.find(element => element._id === current);
    if (match) {
      return accumulator + match.price;
    } else {
      return accumulator;
    }
  }, 0)
  return price;
}

export enum STATUS {
  'done' = 'Выполнен',
  'created' = 'Создан',
  'pending' = 'Обрабатывается'
}

export const composeIngredients = (ingredients: string[]) => {
  const counters: { [name: string]: number } = {};

  ingredients.forEach((element) => {
    if (!counters[element]) counters[element] = 0;
    counters[element]++;
  });
  
  return counters;
}