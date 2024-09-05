import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Preview from './components/Preview';
import "./App.css";

function App() {
  return (
    <div className="container-md mt-md-5 mt-3 d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
}

export default App;
