import './App.scss';
import { BrowserRouter } from "react-router-dom";
import AppFrame from './components/AppFrame';

function App() {
  return (
    <BrowserRouter>
      <AppFrame/>
  </BrowserRouter>
  );
}

export default App;
