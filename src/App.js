import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import ViewAllVisitors from './components/ViewAllVisitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddVisitor/>}/>
      <Route path='/Viewall' element={<ViewAllVisitors/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
