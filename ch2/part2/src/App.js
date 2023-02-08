import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AllMeetUps from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path='/'>
          <Route index element={  <AllMeetUps />  } />
          <Route path='new-meetup' element={ <NewMeetup /> } />
          <Route path='favorites' element={ <Favorites /> } />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
