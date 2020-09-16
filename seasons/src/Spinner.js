import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui blog text loader">
                {props.message}
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: 'Loding...'
}

export default Spinner;