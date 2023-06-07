import React from "react";
import Bg from '../img/Cancel.jpeg';

function Cancel() {
    return (
        <div>
        <img className="d-block w-100 cancel" src={Bg} alt="Bg"/>
        <h1 className="position-absolute top-50 start-50 translate-middle text-center p-3 cancel-text">
        Sorry to see you cancelled your payment!
        </h1>
        </div>
    )
}

export default Cancel;