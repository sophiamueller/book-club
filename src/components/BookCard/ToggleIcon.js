import styled from 'styled-components'

export default styled.div`
  align-items: center;
  display: inline-flex;
  grid-row-start: span 2;
  justify-content: center;
  margin-left: 200px;

  &.rotate {
    transform: rotate(180deg);
  }
`
