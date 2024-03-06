import { useState } from "react"
function UnoCard({num, color, setDisplay, display, id}) {
    const [hover, setHover] = useState("")
                    //if it is a skip or reverse card we use google icon class.
    const smallClass =(position)=> `${num === "block" || num === "repeat" ? "material-symbols-outlined" : undefined} sm num ${position}`
    const bigClass = `${num === "block" || num === "repeat" ? "material-symbols-outlined" : num === "D"? "drawTwo" :undefined} ${color}Color`
    const numDislay = (size)=>{
      let cardVal = num
      if(num ==="wild" && size === "sm"){
        //the wild cirle should be the display vaku
      }else if(num ==="+2" && size === "big"){
        //two overlapping rectangles with box shadow
      }else if(num ==="+4" && size === "big"){
       //two overlapping rectangles with box shadow
      }
      return size === "big" ? <p className={bigClass}>{num}</p> : num
    }
    return (
      <>
       <div className={hover+" container"} id = {id}>
            <div className={`${hover} unoCard ${display === id ? "display":undefined}`} onClick={()=>{
                hover === "flipped"?setHover(""):setHover("flipped")
                setDisplay(id)
                }} >
                <div className="card front">
                    <div><p>UNO</p></div>
                </div>
                <div className={color + "BackGround card back icon"}>
                    <div className={smallClass("a")}>{numDislay("sm")}</div>
                    <div className="big num icon">{numDislay("big")}</div>
                    <div className={smallClass("b")}>{numDislay("sm")}</div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default UnoCard