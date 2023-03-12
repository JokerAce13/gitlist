import styled from 'styled-components'
import Button from './button'
import Icon from './icon'


const ProfileStyled = styled.div`
    grid-area: profile;

    .profile {
        display: grid;
        grid-template-areas:
        'header'
        'buttons'
        'detail'
        ;
        row-gap: 1.5rem;
    }

    .profile-header {
        grid-area: header;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .profile-detail {
        grid-area: detail;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey);
        overflow: hidden;
        box-sizing: border-box;
    }

    .name {
        font: var(--headline1);
        color: var(--white);
        margin: 0;
    }

    .username {
        font: var(--headline2-ligth);
    }

    p {
        margin: 0;
    }

    .info {
        color: var(--grey-2);
        text-decoration: none;
        display: flex;
        gap: .5rem;
        align-items: center;
        margin-block-end: 1rem;
        font: var(--body2-regular);
    }

    .info:last-child{
        margin-block-end: 0;
    }

    .occupation {
        font: var(--body1-regular);
    }

    a:hover {
        text-decoration: underline;
    }

    .buttons {
        grid-area: buttons;
        display: flex;
        gap: .5rem;
    }

    @media screen and (max-width: 768px){
        position: static;

        .profile {
            grid-template-areas:
            'header'
            'detail'
            'buttons'
            ;
        }

        .profile-header {
            flex-direction: row;
            gap: 1rem;
            align-items: center;
        }

        .avatar {
            block-size: 5rem;
            inline-size: 5rem;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
    }

    @media screen and (prefers-color-scheme: light) {
        .name {
            color: var(--black);
        }

        .info {
            color: var(--grey-3);
        }
    }
`

function Profile(props) {

    const { name, login, avatar_url, bio, followers, following, blog, twitter_username , location, public_gists } = props

    return (
        <ProfileStyled>
            <div className='profile'>
                <div className='profile-header'>
                    <img className="avatar" src={avatar_url} width="278" height="278" alt=''/>
                    <div className='user-info'>
                        <p className="name">{name}</p>
                        <p className="username">{login}</p>
                    </div>
                </div>
                <div className="buttons">
                    <Button
                        text="Follow"
                        link="#"
                    />
                    <Button
                        text="Sponsor"
                        icon={<Icon name="heart" size="20" color="var(--pink)" />}
                    />
                </div>
                <div className='profile-detail'>
                    <p className="bio info occupation">{bio}</p>
                    <p className="followers info">
                        <Icon name="user" size="24" color="var(--grey)" />
                        <strong>{followers}</strong> <span>Followers</span>
                        • <strong>{following}</strong> <span>Following</span>
                    </p>
                    <p className="stars info">
                        <Icon name="star" size="24" color="var(--grey)" /> {public_gists}
                    </p>
                    <p className="location info">
                        <Icon name="location" size="24" color="var(--grey)" /> {location}
                    </p>
                    <a className="info" href={blog} target="_blank" rel="noreferrer">
                        <Icon name="link" size="24" color="var(--grey)" /> {blog}
                    </a>
                    <a className="info" href={`https://twitter.com/${twitter_username}`}target="_blank" rel="noreferrer">
                        <Icon name="twitter" size="24" color="var(--grey)" /> @{twitter_username}
                    </a>
                </div>
            </div>
        </ProfileStyled>
    )
}

export default Profile
