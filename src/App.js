import './App.css'
import Cards from './components/Cards/Cards';
import Nav from './components/NavBar/Nav';
import Form from './components/Form/Form';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const username = "facureca10@gmail.com";
  const password = "1234567";

  const login = (userData) =>{
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(() =>{
    !access && navigate("/");
  }, [access])

  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) =>{
    return setCharacters((data) =>{
      return data.filter((element) => element.id !== id)
    })
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname=== "/" ? <Form login={login}/> : <Nav onSearch={onSearch} />}
      
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='detail/:detailId' element={<Detail/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
  
    </div>
  )
}

export default App;
