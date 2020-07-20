import React from 'react';

class Preloader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="c-preloader  js-preloader">
                <div className="c-preloader__spinner  t-preloader__spinner"></div>
            </div>
        )
    }

}

export default Preloader;