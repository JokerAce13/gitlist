import styled from 'styled-components'

const LanguageStyled = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    &:before {
        content: '';
        background-color: ${({color}) => color };
        block-size: 1rem;
        inline-size: 1rem;
        border-radius: 50%;
    }

`

const languages = {
    ruby: {
        color: 'red'
    },
    css: {
        color: 'green'
    },
    javascript: {
        color: 'yellow'
    },
    python: {
        color: 'orange'
    },
}

function Language({ name }) {
    const formatedName = name.toLowerCase()
    const color = languages[formatedName] ? languages[formatedName].color : 'blue'
    return (
        <LanguageStyled color={color}>
            {name}
        </LanguageStyled>
    )
}

export default Language
