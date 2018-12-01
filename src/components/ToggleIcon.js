import styled from 'styled-components'

export default styled.div`
  align-items: center;
  display: flex;
  grid-row-start: span 2;
  justify-content: center;

  &.rotate {
    transform: rotate(180deg);
  }
`
