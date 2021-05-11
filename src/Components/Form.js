import styled from 'styled-components'
import { GlobalContext } from '../Store/GlobalState'

const StyledForm = styled.section`
  display: 'flex';

  > input {
    padding: 1em;
  }
`

function Form() {
  const { queryDish, queryIngredient } = useContext(GlobalContext)

  return (
    <form>
      <div>
        <input id="dish" name="dish" type="text" value="" />
        <label htmlFor="dish"></label>
      </div>
    </form>
  )
}
