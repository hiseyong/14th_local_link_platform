import { TeamSelectionPage } from './pages/TeamSelectionPage';
import { NotFound } from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<TeamSelectionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;