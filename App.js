import './App.css';
import Header from './header';
import Sidebar from './SidebarRow';
import { YTvideos } from './videocard';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Sidebar/> */}
      <YTvideos/>
    </div>
  );
}

export default App;
