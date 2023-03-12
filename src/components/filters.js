import styled from 'styled-components'
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
        margin-block-start: 0;
        margin-block-end: 1.5rem;
    }

    .option-group option {
        border-radius: .5rem;
        border: 1px solid red;
    }

    @media screen and (max-width: 768px){
        .action-list {
            flex-direction: column;
        }

        .selector-list {
            flex: 1;
        }

        .count {
            display: none;
        }

        input {
            margin-block-start: 2.5rem;
        }
    }

    @media screen and (prefers-color-scheme: light) {
        .count {
            color: var(--black);
        }
    }
`

function Filters({ repoListCount, setSearch, setLanguage, setOrder }) {

    function handleChangeSearch(event){
        setSearch(event.target.value)
    }

    function handleChangeSelectLanguage(event){
        setLanguage(event.target.value)
    }

    function handleChangeSelectOrder(event){
        setOrder(event.target.value)
    }

    return (
        <FiltersStyled>
            <h2 className='count'>Repositorios ({repoListCount})</h2>
            <div className='action-list'>
                <InputText
                    placeholder='Busca un repositorio'
                    type="search"
                    onChange={handleChangeSearch}
                />
                <div className='selector-list'>
                    <Selector>
                        <optgroup className='option-group' label="select type">
                            <option value="all" key="all">all</option>
                            <option value="sources" key="sources">sources</option>
                            <option value="forks" key="forks">forks</option>
                            <option value="archived" key="archived">archived</option>
                            <option value="mirrors" key="mirrors">mirrors</option>
                        </optgroup>
                    </Selector>
                    <Selector onChange={handleChangeSelectLanguage}>
                        <optgroup className='option-group' label="select language">
                            <option value="all">all</option>
                            <option value="css">css</option>
                            <option value="javascript">javascript</option>
                            <option value="java">java</option>
                            <option value="html">html</option>
                        </optgroup>
                    </Selector>
                    <Selector onChange={handleChangeSelectOrder}>
                        <optgroup className='option-group' label="select order">
                            <option value="last-update">last update</option>
                            <option value="name">name</option>
                            <option value="stars">stars</option>
                        </optgroup>
                    </Selector>
                </div>
            </div>
            <Separator/>
        </FiltersStyled>
    )
}

export default Filters
