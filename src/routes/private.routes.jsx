import React from "react";
import { Route, Routes } from "react-router-dom";
import Characters from "../pages/characters/Characters";
import DetailCharacter from "../pages/detailCharacters/DetailCharacter";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="personajes">
        <Route index element={<Characters />} />
        <Route path="info/:characterId" element={<DetailCharacter />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
