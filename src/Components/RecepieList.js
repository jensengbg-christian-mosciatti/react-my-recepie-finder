import { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Store/GlobalState'
import LinkCard from './LinkCard'

function RecepieList() {
  const { recepies } = useContext(GlobalContext)

  return (
    <StyledRecepieList>
      {recepies.length ? (
        <ul>
          {recepies.map((recepie, index) => {
            return (
              <li key={index}>
                <LinkCard recepie={recepie} />
              </li>
            )
          })}
        </ul>
      ) : (
        <h2>No Recepies</h2>
      )}
    </StyledRecepieList>
  )
}

const StyledRecepieList = styled.section`
  display: flex;
  max-width: 30em;

  > ul {
    padding: 1em;
    list-style: none;
  }
`

export default RecepieList

/* <ReactTinyLink
cardSize="small"
showGraphic={true}
proxyUrl="http://www.whateverorigin.org/get?url="
maxLine={2}
minLine={1}
url={recepie.url}
/> 
*/
