import styled from 'styled-components'

export default styled.section`
  display: grid;
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;

  &.expand {
    max-height: 800px;
  }
`
