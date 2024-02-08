import React from "react";
import { Home } from "./pages/home";
import { Nav } from "./pages/home/Nav";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Artist } from "./pages/artist";


export default function App() {
  return (
    <>

      <div className="h-vh min-h-dvh bg-purple-black px-4 pt-4 pb-4 flex flex-col gap-4">
        <BrowserRouter>
          <Link to={"/"}>
            <Nav userID={"@saaz"} userName="Katrina" picture={''} />
          </Link>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/artistDetails' element={<Artist />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}
