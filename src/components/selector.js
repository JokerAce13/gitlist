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

    @media screen and (max-width: 768px){
        font-size: 10px;
    }

    @media screen and (prefers-color-scheme: light) {
        background-color: var(--white);
        color: var(--buttonBg);
        border: 1px solid var(--grey);
    }
`

function Selector({ children, onChange }) {
    return (
        <SelectorStyled onChange={onChange}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
