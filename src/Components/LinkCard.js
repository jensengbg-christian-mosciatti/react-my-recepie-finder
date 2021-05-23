import styled from 'styled-components'
import noImage from '../assets/noimage.jpg'

function LinkCard({ recepie }) {
  const { thumbnail, title, href, ingredients } = recepie

  const gotoUrl = () => {
    const newWindow = window.open(href, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <StyledCard onClick={gotoUrl}>
      <img src={thumbnail ? thumbnail : noImage} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{ingredients}</p>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 1.2em 0;
  display: flex;

  height: 9em;
  border-radius: 0.3em;
  overflow: hidden;

  background-color: #582c4d26;
  font-size: 0.6em;
  box-shadow: 10px 10px 31px -13px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  cursor: pointer;
  /* transform-origin: 100% 0; */

  :hover {
    /* transform: scale(1.05); */
    /* transform-origin: 0 0; */
    font-size: 0.62em;
    background: white;
    z-index: 1;
  }

  img {
    height: 100%;
  }

  > div {
    padding: 0.3em 0.8em;
  }
`

export default LinkCard
