import React from "react";
import { Home } from "./pages/home";
import { Nav } from "./pages/home/Nav";
export default function App() {
  return (
    <>
      <div className="h-vh bg-purple-black px-4 pt-4 pb-4 flex flex-col gap-4">
        <Nav userID={"@saaz"} userName="Katrina" picture={''} />
        <Home />
      </div>
    </>
  );
}
