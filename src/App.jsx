import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Characters from "./pages/characters/Characters"
import DefaultPage from "./pages/defaultPage/DefaultPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />

        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
