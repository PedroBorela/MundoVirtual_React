import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import 'aframe';
import HallDeEntrada from './assets/sections/HallDeEntrada';
import PrimeiraSala from './assets/sections/PrimeiraSala';
import AnteSala from './assets/sections/AnteSala';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AnteSala/>}/>
          <Route path='/hallDeEntrada' element={<HallDeEntrada/>}/>
          <Route path='/sala' element={<PrimeiraSala/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;