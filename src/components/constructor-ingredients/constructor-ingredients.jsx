import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import ConstructorPiece from '../constructor-piece/constructor-piece';
import {UPDATE_INGREDIENTS_ORDER, DELETE_INGREDIENT} from '../../services/actions/burger-constructor';

export default function ConstructorIngredients () {
  const dispatch = useDispatch();
  const ingredients = useSelector(store=>store.burgerConstructorReducer.ingredients);

  const swapIngredient = useCallback((dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    const newOrder = [...ingredients];
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragIngredient)

    dispatch({
      type: UPDATE_INGREDIENTS_ORDER,
      payload: newOrder
    })
  }, [ingredients, dispatch]);
  
  const deleteIngredient = useCallback((index, element) => {
    const newOrder = [...ingredients];
    newOrder.splice(index, 1);

    dispatch({
      type: DELETE_INGREDIENT,
      payload: newOrder,
      item: element
    })
  },[ingredients, dispatch]);

return (
    ingredients.map((element, index) => (
      <ConstructorPiece 
        element={element} 
        key={element.dragId}
        index={index} 
        swapIngredient={swapIngredient} 
        deleteIngredient={deleteIngredient}
      />
    ))
)

}