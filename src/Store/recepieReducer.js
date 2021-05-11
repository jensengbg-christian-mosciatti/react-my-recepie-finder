export default function recepieReducer(state, action) {
  switch (action.type) {
    case 'setQueryIngredient': {
      return {
        ...state,
        queryIngredients: [...state.queryIngredients, action.ingredient],
      }
    }
    case 'removeIngredient': {
      console.log(state, action)
      return {
        ...state,
        queryIngredients: state.queryIngredients
          .slice(0, action.id)
          .concat(
            state.queryIngredients.slice(
              action.id + 1,
              state.queryIngredients.length
            )
          ),
      }
    }
    case 'setDish': {
      return {
        ...state,
        queryDish: action.data,
      }
    }
    case 'setRecepieList': {
      return { ...state, recepies: action.data }
    }
    case 'setRecepieLink': {
      const { description, domain, img } = action.data.data
      console.log(description, domain, img, action.data.id)
      const newState = {
        ...state,
        recepies: state.recepies.map((recepie, idx) => {
          if (idx !== action.data.id) return recepie
          return { ...recepie, description, domain, img }
        }),
      }
      console.log(newState)
      return newState
    }

    default: {
    }
  }
}
