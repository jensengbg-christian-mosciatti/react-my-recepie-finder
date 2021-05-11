import { forwardRef, useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Store/GlobalState'

const Form = forwardRef(({ isFixedHead }, ref) => {
  const {
    queryDish,
    setDish,
    queryIngredients,
    addIngredient,
    removeIngredient,
    searchRecepie,
  } = useContext(GlobalContext)

  // const [dish, setDish] = useState('')
  const [ingredient, setIngredient] = useState('')

  const addIngredientToList = (event) => {
    event.preventDefault()
    addIngredient(ingredient)
    setIngredient('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    searchRecepie()
  }

  return (
    <StyledRecepieList id="inputSection">
      <form
        ref={ref}
        className={`${isFixedHead ? 'fixedHead' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="inputContainer">
          <label htmlFor="dish">Dish</label>

          <input
            id="dish"
            name="dish"
            type="text"
            value={queryDish}
            onChange={(e) => setDish(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="ingredient">Ingredient</label>

          <input
            id="ingredient"
            name="ingredient"
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button className="btn btn--ghost" onClick={addIngredientToList}>
            Add
          </button>
        </div>
        <div>
          <ul>
            {queryIngredients.map((ingred, key) => (
              <li key={key} onClick={() => removeIngredient(key)}>
                {ingred}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input className="btn btn--primary" type="submit" value="Search" />
        </div>
      </form>
    </StyledRecepieList>
  )
})

const StyledRecepieList = styled.section`
  width: 100%;

  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  margin: 0 0.5em;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.5em;
    /* width: 100%; */
    /* margin: auto;
    max-width: 20em; */
    transition: all 0.25s ease;

    ul {
      list-style: none;
      margin: 0.2em;
      font-size: 0.8em;

      li {
        display: inline-flexbox;
        padding: 0.2em;
        cursor: pointer;

        ::before,
        ::after {
          content: "'";
        }

        :hover {
          text-decoration: underline;
        }

        :hover::after {
          /* padding: 0.2em; */
          content: " ✖'";
        }
      }
    }

    > div {
      max-width: 30em;
      width: 100%;
    }
  }

  .btn {
    font-size: inherit;
    border: 2px solid #582c4d;
    cursor: pointer;
  }

  .btn--ghost {
    background: transparent;
    color: #582c4d;
  }

  .btn--primary {
    background: #582c4d;
    color: #ffdee4;
    width: 100%;
    padding: 0.2em;
  }

  .inputContainer {
    display: grid;
    grid-template-columns: 5em 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0.8em;
    padding: 0.5em 0;

    input[type='text'] {
      background: none;
      border: none;
      border-bottom: 1px solid #582c4d;
      outline: none;
      color: inherit;
      font-size: inherit;
    }
  }

  .fixedHead {
    width: 100%;

    color: white;
    background: #582c4d;
    box-shadow: 0px 10px 53px -20px rgba(0, 0, 0, 0.75);
    font-size: 0.8em;
    z-index: 10;
    transform: translate3d(0, 0, 0);

    input[type='text'] {
      border-color: #ffdee4;
    }

    .btn--ghost {
      background: #ffdee4;
    }

    .btn--primary {
      border-color: #ffdee4;
    }
  }
`

export default Form
