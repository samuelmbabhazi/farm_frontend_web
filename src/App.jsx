import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OnboardingScreen from "./pages/Onboarding";

import Getstart from "./pages/Getstart";
import LoginForm from "./pages/Login";

function App() {
  function onLogin(email, password) {
    // Faites quelque chose avec l'email et le mot de passe, par exemple vérifiez-les contre une base de données ou un serveur d'authentification tiers
    console.log(email, password);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OnboardingScreen />} />
          <Route path="/getstart" element={<Getstart />} />
          <Route path="/login" element={<LoginForm onLogin={onLogin} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
