import styled from 'styled-components'
// import ModalContent from './modal'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
    grid-area: filters;

    .action-list {
        display: flex;
        gap: 1rem;
    }

    .selector-list {
        display: flex;
        gap: .5rem;
    }

    .count {
        color: var(--white);
        font: var(--headline2-semi-bold);
        margin-block-end: 1.5rem;
    }

    /* .input {
        flex: 1;
    } */
`

function Filters({ repoListCount, setSearch }) {

    function handleChange(event){
        setSearch(event.target.value)
    }

    return (
        <FiltersStyled>
            <h2 className='count'>Repositorios ({repoListCount})</h2>
            <div className='action-list'>
                <InputText
                    placeholder='Busca un repositorio'
                    type="search"
                    onChange={handleChange}
                />
                <div className='selector-list'>
                    <Selector>
                        <option value="all">all</option>
                        <option value="sources">sources</option>
                        <option value="forks">forks</option>
                        <option value="archived">archived</option>
                        <option value="mirrors">mirrors</option>
                    </Selector>
                    <Selector>
                        <option value="all">all</option>
                        <option value="css">css</option>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="html">html</option>
                    </Selector>
                    <Selector>
                        <option value="last-update">last update</option>
                        <option value="name">name</option>
                        <option value="stars">stars</option>
                    </Selector>
                </div>
            </div>
            <Separator/>
            {/* <ModalContent/> */}
        </FiltersStyled>
    )
}

export default Filters
