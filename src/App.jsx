import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Characters from "./pages/characters/Characters"
import DefaultPage from "./pages/defaultPage/DefaultPage"
import DetailCharacter from "./pages/detailCharacters/DetailCharacter"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personajes" >
          <Route index element={<Characters />} />
          <Route path="info/:characterId" element={<DetailCharacter />} />
        </Route>
        
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
