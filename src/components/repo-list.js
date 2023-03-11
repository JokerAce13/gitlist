import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
    grid-area: repolist;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

function RepoList({ repoList, search }) {
    let list = repoList

    if(search !== '')
    {
        list = repoList.filter((item) => {
            return item.name.search(search) >= 0
        })
    }

    return (
        <RepoListStyled>
            { list.map((item) => {
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
