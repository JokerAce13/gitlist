import styled from 'styled-components'

const EmptyStateStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .message {
        color: var(--grey);
        font: var(--headline2-semi-bold);
        margin-block-end: 1.5rem;
    }

    @media screen and (prefers-color-scheme: light) {
        color: var(--black);
    }
`

const messageGeneric = 'No hay repositorios bajos los criterios seleccionados'

function EmptyState({ message = messageGeneric }) {
    return (
        <EmptyStateStyled>
            <h2 className='message'>{message}</h2>
        </EmptyStateStyled>
    )
}

export default EmptyState
