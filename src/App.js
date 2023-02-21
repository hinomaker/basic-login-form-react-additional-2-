import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignUp } from "./pages";

export const UserContext = createContext();

const App = () => {
  const [mainUserName, setMainUserName] = useState("");
  return (
    <UserContext.Provider value={{ mainUserName, setMainUserName }}>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
