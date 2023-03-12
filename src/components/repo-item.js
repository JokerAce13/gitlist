import styled from 'styled-components'
import Language from './language'
import Icon from './icon'
import { ButtonAuto } from './button'
import activityLine from '../assets/activity-line.png'

const RepoItemStyled = styled.div`
    padding-block: 1rem;
    border-block-end: 1px solid var(--grey);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    &:last-child {
        border-block-end: none;
    }

    .repo-item-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-inline-size: 16rem;
    }

    .repo-item-stats {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;

        button {
            inline-size: fit-content;
        }
    }

    .title {
        display: flex;
        gap: 1rem;
        margin: 0;
        a {
            color: var(--primary);
            text-decoration: none;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .public {
        border: 1px solid var(--grey);
        padding-block: .255rem;
        padding-inline: .5rem;
        font: var(--caption-regular);
        border-radius: .5rem;
    }

    .description {
        margin: 0;
        font: var(--body2-regular);
    }

    .topicList {
        display: flex;
        gap: .25rem
    }

    .topicItem {
        color: var(--primary);
        font: var(--caption-medium);
        background-color: var(--grey-3);
        padding-inline: .75rem;
        padding-block: .25rem;
        border-radius: 2rem;
    }

    .details {
        display: flex;
        align-items: center;
        gap: 1rem;
        font: var(--caption-regular);
    }

    .details-item {
        display: flex;
        align-items: center;
        gap: .5rem;
        color: var(--grey);
        & span::first-letter {
            text-transform: uppercase;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;

        .repo-item-stats {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

        }
    }

    @media screen and (prefers-color-scheme: light) {

        .topicItem {
            background-color: var(--bluelight);
            color: var(--primary);
        }

        .details-item{
            color: var(--black);
        }
    }
`

function RepoItem(props) {
    const updatedAt = new Date(props.updated_at)
    const today = new Date()
    const diffMilliseconds = updatedAt - today
    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24))
    const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')
    return (
        <RepoItemStyled>
            {/* <div className='repo-item'> */}
                <div className='repo-item-info'>
                    <h3 className='title'>
                        <a href={props.owner.html_url} target="_blank" rel="noreferrer" >
                            {props.name}
                        </a>
                        {
                            props.private ? null : (<span className='public'>Public</span>)
                        }
                    </h3>
                    {
                        props.description ? (
                            <p className='description'>
                                { props.description }
                            </p>
                        ) : null
                    }
                    {
                        props.topics.length ? (
                            <div className='topicList'>
                                {
                                    props.topics.map(item => <span className='topicItem' key={item}>{item}</span>)
                                }
                            </div>
                        ) : null
                    }

                    <div className='details'>
                        {
                            props.language ? (
                                <Language name={props.language} />
                            ) : null
                        }
                        <span className='details-item'>
                            <Icon name='star' />
                            <span>{props.stargazers_count}</span>
                        </span>
                        <span className='details-item'>
                            <Icon name='branch' />
                            <span>{props.forks_count}</span>
                        </span>
                        <span className='details-item'>
                            <span className='date'>{timeAgo}</span>
                        </span>
                    </div>
                </div>
                <div className='repo-item-stats'>
                    <ButtonAuto
                        text="Star"
                        icon={<Icon name="star" size="20" color="var(--grey)" />}
                    />
                    {/* <img src={"../../public/activity-line.png"} alt="Linea de actividad" /> */}
                    <img src={activityLine} alt="Linea de actividad" />
                </div>
            {/* </div> */}
        </RepoItemStyled>
    )
}

export default RepoItem