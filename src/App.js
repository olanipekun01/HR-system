import React from "react";
import Auth from "./Auth";
import List from "./List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        
            {/* <Auth/> */}
            <Route index element={<Auth />} />
            <Route path="list" element={<List />} />
            {/* <List /> */}
          
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;

// "@testing-library/jest-dom": "^5.16.4",
//     "@testing-library/react": "^13.3.0",
//     "@testing-library/user-event": "^13.5.0",
