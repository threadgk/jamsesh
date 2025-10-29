import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";
import Trending from "./pages/Trending";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="genres" element={<Genres />} />
          <Route path="trending" element={<Trending />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

