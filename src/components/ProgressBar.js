import styled from 'styled-components'

export default styled.div`
  background: cornflowerblue;
  height: ${props => props.height || 5}px;

  &::after {
    content: '';
    height: ${props => props.height || 5}px;
    display: block;
    width: ${props => props.percentage * 100}%;
    background: deeppink;
    transition: width 0.3s ease;
  }
`
