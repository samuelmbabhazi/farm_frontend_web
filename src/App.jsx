import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OnboardingScreen from "./pages/Onboarding";

import Getstart from "./pages/Getstart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OnboardingScreen />} />
          <Route path="/getstart" element={<Getstart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
