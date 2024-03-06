//76 number - 4 groups of 19 (1:0 and 2: 1-9)
//24 action - 4 groups of 6 (2:D2, 2:Sk, 2:R)

import { useEffect, useState } from "react";
import UnoCard from "./UnoCard";

//8 wild cards 4: wild 4: draw4
export default function Uno(){
    const [deck, setDeck] = useState(false)
    const [display, setDisplay] = useState(false)
    const [shuffled, setShuffled] = useState(false)
    const [playingCards, setPlayingCards] = useState([])
    useEffect(()=>{
       const createDeck = ()=>{
            const rawDeck = {
                red:[],
                blue:[],
                green:[],
                yellow:[]
            }
            for(const key in rawDeck){
                rawDeck[key].push(0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,"+2","+2","block","block","repeat","repeat")
            }
            rawDeck.wild = ["+4","+4","+4","+4","Wild","Wild","Wild","Wild"]
            return rawDeck
        }
        setDeck(createDeck())
    },[])
    const shuffleDeck = ()=>{
        if(!shuffled){
            let cardCount =0
            for(let i = 0;i<4;i++){
                while(cardCount<10){//<--108 cards
                    const colors = Object.keys(deck)
                    const randomColor = colors[Math.floor(Math.random()*colors.length)]
                    const randomsubDeck = [...deck[randomColor]]
                    const randomVal = randomsubDeck.splice(Math.floor(Math.random()*randomsubDeck.length),1)
                   setPlayingCards((prevCards)=>[...prevCards, {val:randomVal[0], color:randomColor}])
                   cardCount++
                }
            }
            setShuffled(true)
        }
    }
    deck && shuffleDeck()
    return(
        <>
            <h1>Soon To Be Uno!!</h1>
            <p>Card Count:{playingCards.length}</p>
            <div className = "devGrid">
                {playingCards &&
                playingCards.map((card, i)=><UnoCard key = {i}setDisplay = {setDisplay} display = {display} num = {card.val} color = {card.color} id={i}/>)}
            </div>
            <UnoCard key={"00"} setDisplay = {setDisplay} display = {display} num = {"w"} color = {"wild"} id={999}/>

        </>
    )
}