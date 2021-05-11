import { useCallback, useReducer } from 'react'
import axios from 'axios'
import recepieReducer from './recepieReducer'

function useRecepieDataManager() {
  const [
    { recepies, favorites, queryIngredients, queryDish },
    dispatch,
  ] = useReducer(recepieReducer, {
    recepies: [],
    favorites: [],
    queryIngredients: [],
    queryDish: '',
  })

  function setDish(data) {
    dispatch({ type: 'setDish', data })
  }

  function addIngredient(ingredient) {
    dispatch({ type: 'setQueryIngredient', ingredient })
  }

  function removeIngredient(id) {
    dispatch({ type: 'removeIngredient', id })
  }

  function searchRecepie() {
    fetchData()
  }

  function urlEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16)
    })
  }

  const fetchPrettyLinks = async (url, index) => {
    // const baseUrl = 'https://chrimox-link-prev-server.web.app/gimmeprev/?url='
    const baseUrl = 'http://localhost:5000/gimmeprev/?url='

    const encodedUrl = urlEncode(url)

    // console.log(`Complete url:
    // ${encodedUrl}`)
    let result = await axios.get(`${baseUrl}${encodedUrl}`)
    // console.log(result)
    // ${encodedUrl}

    ///FINIRE
    dispatch({ type: 'setRecepieLink', data: { data: result.data, id: index } })
  }

  const getQueryString = useCallback(() => {
    let string = ''
    if (queryIngredients.length) string = `i=${queryIngredients.join()}`
    if (queryDish)
      string = string.length ? `${string}&q=${queryDish}` : `q=${queryDish}`
    return string
  }, [queryIngredients, queryDish])

  const fetchData = useCallback(async () => {
    // https://cors-anywhere.herokuapp.com/
    // https://europe-west1-cors-anywhere-chrimox.cloudfunctions.net/proxyWithCorsAnywhere/
    // console.log(queryDish, getQueryString())
    let result = await axios({
      method: 'get',
      url: `https://europe-west1-cors-anywhere-chrimox.cloudfunctions.net/proxyWithCorsAnywhere/www.recipepuppy.com/api/?${getQueryString()}`,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': '',
      },
    })
    // console.log(result.data.results)
    dispatch({ type: 'setRecepieList', data: result.data.results })
    // result.data.results.map((recepie, index) =>
    //   fetchPrettyLinks(recepie.href, index)
    // )
  }, [getQueryString])

  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  return {
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
}

export default useRecepieDataManager
