import React from "react"

const PopUp = ({time_completion}) => {

    return (
        <div className='modal'>
            <div className='overlay'></div>
            <div className="modal-content">
                <h4>Congratulations!</h4>
                <p>You have completed the task in {time_completion} seconds</p>
                <button className="close-modal" onClick={() => window.location.reload(false)}>
                    Finish
                    </button>
            </div>
            
        </div>
    )

}

export default PopUp