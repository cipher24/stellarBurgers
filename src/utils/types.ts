export interface IElement {
  _id: string;
  name: string;
  type: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  proteins: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v: number;
  dragId: string;
  count: number;
};

export type TRequestProps = { [name: string]: string }