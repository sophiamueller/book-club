import styled from 'styled-components'

export default styled.div`
  align-items: center;
  display: inline-flex;
  grid-row-start: span 2;
  justify-content: center;
  margin-left: auto;

  &.rotate {
    transform: rotate(180deg);
  }
`
