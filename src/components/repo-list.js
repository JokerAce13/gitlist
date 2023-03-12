import styled from 'styled-components'
import RepoItem from './repo-item'
import EmptyState from './empty-state'

const RepoListStyled = styled.div`
    grid-area: repolist;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

function RepoList({ repoList, search, language, order }) {
    let list = repoList
    if(search !== '')
    {
        list = repoList.filter((item) => {
            return item.name.search(search) >= 0
        })
    }

    if(language !== '')
    {
        if (language !== 'all') {
            list = list.filter((item) => {
                return (item.language?.toLowerCase() === language)
            })
        }
    }

    if(order !== '')
    {
        if (order === 'name') {
            list = list.sort((x, y) => x.name.localeCompare(y.name))
        } else if(order === 'stars'){
            list = list.sort((x, y) => y.stargazers_count - x.stargazers_count)
        } else if(order === 'last-update'){
            list = list.sort((x, y) => new Date(y.updated_at) - new Date(x.updated_at))
        }
    }

    if (list.length === 0) {
        return (<EmptyState />)
    }

    return (
        <RepoListStyled>
            {
                list.map((item) => {
                    return <RepoItem {...item} key={item.id} />
                })
            }
        </RepoListStyled>
    )
}

export default RepoList
