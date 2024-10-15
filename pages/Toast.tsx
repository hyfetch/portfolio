
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";


export default function Toast() {
    return (
        <div className="toastinfo">
            {/* the info sign thingy the thingy with i in a circle  */}
            <i className="fas fa-info-circle"></i>
            <p className="message">Contact me @  <a href="https://contact.mero.lol" rel="noopener noreferrer">contact.mero.lol</a></p>
        </div>
    );
}
