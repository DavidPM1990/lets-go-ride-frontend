import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar'

// CLASSNAME DE APP PARA DAR ESTILOS GENERALES 
function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
