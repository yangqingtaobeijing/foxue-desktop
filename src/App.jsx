import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Basics from './pages/Basics';
import SutrasIntro from './pages/SutrasIntro';
import SutrasAdvanced from './pages/SutrasAdvanced';
import Meditation from './pages/Meditation';
import Schools from './pages/Schools';
import Advanced from './pages/Advanced';
import Resources from './pages/Resources';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn/introduction" element={<Introduction />} />
          <Route path="learn/basics" element={<Basics />} />
          <Route path="learn/sutras-intro" element={<SutrasIntro />} />
          <Route path="learn/sutras-advanced" element={<SutrasAdvanced />} />
          <Route path="learn/meditation" element={<Meditation />} />
          <Route path="learn/schools" element={<Schools />} />
          <Route path="learn/advanced" element={<Advanced />} />
          <Route path="resources" element={<Resources />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
