import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Routes className="App">
      <Route path="/bookstore" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
