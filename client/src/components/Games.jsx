import {useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Snake from "./games/Game"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../ThemeConext"
import UnoCard from "./games/uno/UnoCard"

function Games() {
  const {setLocation} = useContext(ThemeContext)
  const [travel, setTravel] = useState()
  const navigate = useNavigate()
  useEffect(()=>{
    setLocation("game")
    navigate(travel)
  },[travel])
 
    return (
      <>
        <Nav/>
        <div onClick = {()=>setTravel("/games/snake")} className = "gameLink"><p>Snake</p></div>
        <div onClick = {()=>setTravel("/games/wordleish")} className = "gameLink"><p>Wordle-ish</p></div>
        <div onClick = {()=>setTravel("/games/memorycircles")} className = "gameLink"><p>Memory Circles</p></div>
        <div onClick = {()=>setTravel("/games/minesweeper")} className = "gameLink"><p>MineSweeper</p></div>
        <div onClick = {()=>setTravel("/games/sentencebuilder")} className = "gameLink"><p>Sentence Builder</p></div>
        <div onClick = {()=>setTravel("/games/uno")} className = "gameLink"><p>Uno</p></div>
        <UnoCard num={1} color={"green"}/>
      </>
    )
  }
  
  export default Games