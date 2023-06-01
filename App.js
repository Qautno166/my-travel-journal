import React from "react";
import Header from "../src/Components/Header.js";
import Cards from "../src/Components/Cards.js";
import journalData from "../src/Components/journalData.js";
function App() {
  const cardsElements = journalData.map((cards) => {
    return <Cards key={cards.id} items={cards} />;
  });
  return (
    <div>
      <Header />
      <section className="card"> {cardsElements}</section>
    </div>
  );
}

export default App;
