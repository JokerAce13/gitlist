import styled from 'styled-components'

const SelectorStyled = styled.select`
    background-color: var(--buttonBg);
    color: var(--white);
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: .5rem;
    border: none;
    font: var(--body2-semi-bold);
    text-transform: capitalize;
`

function Selector({ children }) {
    return (
        <SelectorStyled>
            {children}
        </SelectorStyled>
    )
}

export default Selector
