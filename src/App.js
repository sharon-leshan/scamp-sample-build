import './App.css';
import Header from './components/Header';
import routes from './routes/routes';

function App() {
  return (
    <>
      <Header />
      {routes()}
    </>
  );
}

export default App;
