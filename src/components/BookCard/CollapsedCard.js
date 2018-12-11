import styled from 'styled-components'

export default styled.section`
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 170px auto 50px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;

  &.expand {
    max-height: 800px;
  }
`
