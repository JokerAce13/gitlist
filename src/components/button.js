import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
    display: inline-flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    text-decoration: none !important;
    cursor: pointer;
    background-color: var(--buttonBg);
    color: var(--white);
    border: 1px solid var(--grey);
    border-radius: .5rem;
    min-inline-size: 8.5rem;
    padding-block: .25rem;
    font: var(--button);
    &:hover {
        background-color: var(--white);
        color: var(--button);
        text-decoration: none;
    }

    @media screen and (prefers-color-scheme: light) {
        background-color: var(--white);
        color: var(--buttonBg);
        &:hover {
            background-color: var(--buttonBg);
            color: var(--white);
        }
    }
`

function Button({ text, link, className, icon }) {
    const componentType = link ? 'a' : 'button'

    let iconComponent = null
    if(icon && isValidElement(icon)) {
        iconComponent = icon
    }

    return (
        <ButtonStyled as={componentType} href={link} className={className}>
            {iconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background-color: var(--white);
    color: var(--buttonBg);
    &:hover {
        background-color: var(--buttonBg);
        color: var(--white);
    }
`

export const ButtonAuto = styled(Button)`
    min-inline-size: initial;
`

export const ButtonRounded = styled(Button)`
    border-radius: 50%;
    min-inline-size: initial;
    padding: .75rem;
    &:hover {
        background-color: var(--buttonBg);
        transform: scale(1.1);
    }

    @media screen and (prefers-color-scheme: light) {
        &:hover {
            background-color: var(--white);
        }
    }
`

export default Button
