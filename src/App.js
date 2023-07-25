import './App.css';
import HomePage from './pages /homepage';
import ResumePage from './pages /resumepage';
import ProjectPage from './pages /projectspage';
import PostsPage from './pages /posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
