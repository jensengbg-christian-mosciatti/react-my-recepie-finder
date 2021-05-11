import React, { createContext } from 'react'
import useRecepieDataManager from './useRecepieDataManager'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const {
    recepies,
    favorites,
    queryIngredients,
    queryDish,
    fetchPrettyLinks,
    setDish,
    searchRecepie,
    addIngredient,
    removeIngredient,
  } = useRecepieDataManager()

  const provider = {
    recepies,
    favorites,
    queryIngredients,
    queryDish,
    fetchPrettyLinks,
    setDish,
    searchRecepie,
    addIngredient,
    removeIngredient,
  }

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  )
}
