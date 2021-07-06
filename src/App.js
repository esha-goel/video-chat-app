import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">

      <div className="app__body">
        {/* Side Bar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
