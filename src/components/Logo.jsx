import "../css/components/logo.css"
import LOGO from "../assets/logo.webp"

export function Logo(){

    return(
        <div className="hrnetlogo">
            <h1 className="hrneth1">HRnet</h1>
            <img className="logoback" src={LOGO} alt="HRnet logo" draggable="false" />
        </div>
    )

}