import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetUps from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path='/'>
          <Route index element={  <AllMeetUps />  } />
          <Route path='new-meetup' element={ <NewMeetup /> } />
          <Route path='favorites' element={ <Favorites /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
