import ErrorGif from "./ErrorGif"
import "./ErrorComp.css"

function ErrorComp(){
    return(
        <div id="ErrorComp">
            <h1 id="ErrorText">Page not found</h1>
            <img id="ErrorPikachuGif" src={ErrorGif} alt="ErrorGif"/>
        </div>
    )
}

export default ErrorComp; 