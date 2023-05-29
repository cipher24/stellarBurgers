export const category = (category) => {
  switch (category) {
    case "sauce" : {
      return {type: category, title: 'Соусы'}
    }
    case 'main' : {
      return {type: category, title: 'Начинки'}
    }
    case 'bun' : {
      return {type: category, title: 'Булки'}
    }
    default : {
      return {type: category, title: 'Булки'}
    }
  }
}