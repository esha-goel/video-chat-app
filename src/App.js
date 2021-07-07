import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
// import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  // const [user,setUser] = useState(null);
  const [{user},dipatch] = useStateValue();

  return (
    <div className="app">
      {!user?(
        <Login />
      ):(
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
