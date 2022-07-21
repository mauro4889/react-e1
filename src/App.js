import logo from './logo.svg';
import './App.css';
import { Container } from './components/Container'

function App() {
  const handleSubmit = (e, tarea) => {
    e.preventDefault();
}
return ( 
  <div className = "App" >
    <Container / >
  </div>
);
}

export default App;
