export const MockServerAnswer = {
  success: true,
  orders: [{ "_id": "64c8ee0f82e277001bfa623b", "ingredients": ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093d"], "owner": "6499a7c68a4b62001c860bc8", "status": "done", "name": "Space флюоресцентный бургер", "createdAt": "2023-08-01T11:35:43.383Z", "updatedAt": "2023-08-01T11:35:43.545Z", "number": 15455, "__v": 0 }]

}
export const MockFailedAnswer = {
  "success": false,
  "message": "jwt malformed"
}
export const MockIngredientDetails = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0,
  count: 0
}

export const MockOrderDetails = {
  success: true,
  name: 'Флюоресцентный spicy бургер',
  order: {
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa093d',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa093d',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0942',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        __v: 0
      }
    ],
    _id: '64c93d7e82e277001bfa63e2',
    owner: {
      name: 'mediumAndrey',
      email: 'mediumandrew@yandex.ru',
      createdAt: '2023-06-14T10:58:08.358Z',
      updatedAt: '2023-07-22T00:47:18.174Z'
    },
    status: 'done',
    name: 'Флюоресцентный spicy бургер',
    createdAt: '2023-08-01T17:14:38.345Z',
    updatedAt: '2023-08-01T17:14:38.493Z',
    number: 15490,
    price: 2066
  }
};

export const MockUserData = {
  email: 'mediumAndrew@yandex.ru',
  name: 'mediumAndrew'
}

export const MockWebSocketList = {
  "success": true,
  "orders": [
    {
      "_id": "64c94df782e277001bfa6401",
      "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0942"
      ],
      "status": "done",
      "name": "Space флюоресцентный spicy бургер",
      "createdAt": "2023-08-01T18:24:55.893Z",
      "updatedAt": "2023-08-01T18:24:56.048Z",
      "number": 15493
    },
    {
      "_id": "64c94de782e277001bfa6400",
      "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0943"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2023-08-01T18:24:39.005Z",
      "updatedAt": "2023-08-01T18:24:39.167Z",
      "number": 15492
    }
  ],
  "total": 15119,
  "totalToday": 169
}


export const MockWebSocketAnswer = {
  "success": true,
  "orders": [
    {
      "_id": "64c8e3ac82e277001bfa6210",
      "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa093d"
      ],
      "status": "done",
      "name": "Био-марсианский space флюоресцентный spicy бургер",
      "createdAt": "2023-08-01T10:51:24.467Z",
      "updatedAt": "2023-08-01T10:51:24.655Z",
      "number": 15444
    }
  ],
  "total": 15119,
  "totalToday": 169
}

export const MockBurgerIngredients = [
  {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0
  },
  {
    _id: '643d69a5c3f7b9001cfa0941',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
    __v: 0
  }
]

export const MockConstructorIngredients = [{
  _id: '643d69a5c3f7b9001cfa0942',
  name: 'Соус Spicy-X',
  type: 'sauce',
  proteins: 30,
  fat: 20,
  carbohydrates: 40,
  calories: 30,
  price: 90,
  image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
  __v: 0,
  count: 0,
  dragId: '83d73964-b4eb-4dff-b395-c5d912c7d575'
},
{
  _id: '643d69a5c3f7b9001cfa0943',
  name: 'Соус фирменный Space Sauce',
  type: 'sauce',
  proteins: 50,
  fat: 22,
  carbohydrates: 11,
  calories: 14,
  price: 80,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
  __v: 0,
  count: 0,
  dragId: '367a1017-caa4-4756-a678-94b202568f93'
}
];
export const MockConstructorIngredientsDeleteOne = [{
  _id: '643d69a5c3f7b9001cfa0942',
  name: 'Соус Spicy-X',
  type: 'sauce',
  proteins: 30,
  fat: 20,
  carbohydrates: 40,
  calories: 30,
  price: 90,
  image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
  __v: 0,
  count: 0,
  dragId: '83d73964-b4eb-4dff-b395-c5d912c7d575'
}];
export const MockConstructorIngredientsUpdated = [{
  _id: '643d69a5c3f7b9001cfa0943',
  name: 'Соус фирменный Space Sauce',
  type: 'sauce',
  proteins: 50,
  fat: 22,
  carbohydrates: 11,
  calories: 14,
  price: 80,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
  __v: 0,
  count: 0,
  dragId: '367a1017-caa4-4756-a678-94b202568f93'
},
{
  _id: '643d69a5c3f7b9001cfa0942',
  name: 'Соус Spicy-X',
  type: 'sauce',
  proteins: 30,
  fat: 20,
  carbohydrates: 40,
  calories: 30,
  price: 90,
  image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
  __v: 0,
  count: 0,
  dragId: '83d73964-b4eb-4dff-b395-c5d912c7d575'
}
]

export const MockConstructorBuns = {
  _id: '643d69a5c3f7b9001cfa093d',
  name: 'Флюоресцентная булка R2-D3',
  type: 'bun',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/bun-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
  __v: 0,
  count: 0,
  dragId: '65b5ab55-0c5b-4bcb-902e-25ff21d7d7fc'
}

export const MockConstructorIngredient = {
  _id: '643d69a5c3f7b9001cfa0943',
  name: 'Соус фирменный Space Sauce',
  type: 'sauce',
  proteins: 50,
  fat: 22,
  carbohydrates: 11,
  calories: 14,
  price: 80,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
  __v: 0,
  count: 0,
  dragId: '367a1017-caa4-4756-a678-94b202568f93'
};
export const MockAddBuns = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0,
  count: 0,
  dragId: '460ace2f-db8b-466c-aead-37f92bfeb21f'
};

export const filledConstructor = {
  buns: MockConstructorBuns,
  ingredients: MockConstructorIngredients
};