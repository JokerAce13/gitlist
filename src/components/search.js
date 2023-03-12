import styled from 'styled-components'
import { isDarkMode } from '../utils/utilities'
import Icon from './icon'
import { ButtonRounded } from './button'

const SearchStyled = styled.div`
    position: fixed;
    inset-inline-end: 1.5rem;
    inset-block-end: 1.5rem;
`

function Search({ setModal }) {

    function handleClick(){
        setModal(true)
    }

    return (
        <SearchStyled onClick={handleClick}>
            <ButtonRounded
                icon={<Icon name="search" size="24" color={isDarkMode() ? 'white' : 'black'} />}
             />
        </SearchStyled>
    )
}

export default Search
