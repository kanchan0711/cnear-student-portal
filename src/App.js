import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Component/Global/Topbar";
import Sidebar from "./Component/Global/Sidebar";
import StudentProfile from "./Component/Pages/StudentProfile";

import RecordedClasses from "./Component/Pages/RecordedClasses";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theam";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              
              <Route path="/" element={<StudentProfile />} />
              <Route path="/RecordedClasses" element={<RecordedClasses />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
