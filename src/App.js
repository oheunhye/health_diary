import './css/App.css';
//Navigation
import Navigation from './routes/Navigation';
import {HashRouter, Route} from 'react-router-dom';
//Components
import Daily from './components/Daily';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Navigation />
          <Route path="/" exact="true" component={Daily}/>
          <Route path="/UserInfo" component={UserInfo}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
