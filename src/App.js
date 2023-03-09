import './App.css';
import Layout from './components/layout'
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
// import repoData from './components/repo-data';
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/users';
import { useParams } from 'react-router-dom'

// const repoList = [
//   {
//     id: 123,
//     name: 'Mi primer proyecto en React'
//   },
//   {
//     id: 124,
//     name: 'Mi segundo proyecto en React'
//   }
// ]

function App() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  let username = useParams().user
  if (!username) {
    username = 'defunkt'
  }
  // const username = 'defunkt'
  // const username = 'leonidasesteban'
  //const username = 'JokerAce13'

  useEffect(() => {
    getUser(username).then(({ data, isError}) => {
      if (isError) {
        console.log(`El usuario ${username} no ha sido encontrado `)
        return
      }
      setUser(data)

    })
  },[])

  useEffect(() => {
    getRepos(username).then(({ data, isError}) => {
      if (isError) {
        console.log(`El usuario ${username} no tiene repositorios`)
        return
      }
      setRepos(data)
    })
  },[])

  return (
    <Layout>
      <Profile {...user} />
      <Filters/>
      <RepoList repoList={repos}/>
      <Search/>
    </Layout>
  );
}

export default App;
