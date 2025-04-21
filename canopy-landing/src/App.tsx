
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommunityPage from "./components/cards/CommunityPage";
import HomePage from "./components/cards/HomePage";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  )
}

export default App
