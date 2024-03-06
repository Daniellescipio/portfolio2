
import Nav from "../../Nav.jsx"
import { useContext, useState } from "react";
import Sentence from "./Sentence.jsx";
import { structureOne, structureTwo, structureThree, structureFour, structureFive, structureSix, structureSeven, structureEight, structureNine } from "./strcture.js";
function SentenceBuilder() {
    return (
      <>
        <Nav/>
        <div className="sentenceContainer">
        <h1>Sentence Builder</h1>
        <p>Enter or select some words to see the completed sentence</p>
        <>
            <Sentence/>
        </>
    </div>
      </>
    )
  }
  export default SentenceBuilder