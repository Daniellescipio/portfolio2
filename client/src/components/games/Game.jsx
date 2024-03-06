import './games.css'
import { ThemeContext } from '../../ThemeConext'
import Nav from '../Nav'


function Game({src}) {
    return (
      <>
        <Nav/>
        <div>
            <iframe src={src}  width={"750px"} height={"850px"}/>
        </div>
      </>
    )
  }
  
  export default Game