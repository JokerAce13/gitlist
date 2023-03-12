import './App.css';
import Layout from './components/layout'
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/users';
import { useParams } from 'react-router-dom'
import Modal from './components/modal';

function App() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('')
  const [order, setOrder] = useState('')
  let username = useParams().user
  if (!username) {
    username = 'leonidasesteban'
  }

  useEffect(() => {
    getUser(username).then(({ data, isError}) => {
      if (isError) {
        console.log(`El usuario ${username} no ha sido encontrado `)
        return
      }
      setUser(data)

    })

    getRepos(username).then(({ data, isError}) => {
      if (isError) {
        console.log(`El usuario ${username} no tiene repositorios`)
        return
      }
      setRepos(data)
    })
  },[username])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters
        setSearch={setSearch}
        setLanguage={setLanguage}
        setOrder={setOrder}
        repoListCount={repos.length}
      />
      <RepoList
        repoList={repos}
        search={search}
        language={language}
        order={order}
      />
      <Search setModal={setModal} />
    </Layout>
  );
}

export default App;
