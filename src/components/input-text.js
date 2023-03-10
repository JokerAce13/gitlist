import styled from 'styled-components'

const InputText = styled.input`
    border: 1px solid var(--grey);
    background-color: var(--bg);
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: 0.5rem;
    font: var(--body2-regular);
    color: var(--white);
    flex: 1;

    @media screen and (prefers-color-scheme: light) {
        background-color: var(--white);
        color: var(--bg);
    }
`
export default InputText
