import React from 'react';

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            linkProfile: 'zikriramdani.github.io'
        }
    }

    render() {
        return(
            <div>
                <section className="o-section  t-section  ">

                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">

                            <header className="o-section__header  t-section__header">
                                <div className="o-content">
                                    <h2 className="o-section__heading">
                                        Intro
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        What I am all about.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  ">
                                
                                <div className="o-content">
                                    <div className="c-intro">
                                        <div className="o-content__body">
                                            <p>
                                                I am a web developer and android
                                                developers who lives in Kunciran
                                                Indah, Tangerang City. I spent my
                                                days with my hands in various fields
                                                of <a href={'http://' + this.state.linkProfile}>Web Developers and Android
                                                Developers</a> ranging from back end
                                                programming (PHP, JAVA) to front
                                                end engineering (HTML, CSS, and
                                                jQuery / Javascript), digital accessibility, user assistance and visual
                                                design .
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    </section>
            </div>
        )
    }

}

export default Intro;