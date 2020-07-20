import React from 'react';

class Profiles extends React.Component {
    constructor() {
        super();
        this.state = {
            linkCodepen: 'codepen.io/zikriramdani',
            linkProfile: 'github.com/zikriramdani',
            linkMedium: 'medium.com/@zikriramdani'
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
                                        Profiles
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Busy as usual.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  ">
                                
                                <div className="o-grid">

                                    <div className="o-grid__col-xl-4  o-grid__col-sm-6">
                                        <div className="o-content">
                                            <a href={'http://' + this.state.linkCodepen} target='_blank' rel="noopener noreferrer">
                                                <div className="o-media  o-media--block">
                                                    <div className="o-media__figure">
                                                        <div className="c-profile__icon">
                                                            <i className="fa  fa-lg  fa-envira"></i>
                                                        </div>
                                                    </div>
                                                    <div className="o-media__body  o-content__body">
                                                        <h3 className="t-link-container__item">
                                                            Codepen
                                                        </h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="o-grid__col-xl-4  o-grid__col-sm-6">
                                        <div className="o-content">
                                            <a href={'http://' + this.state.linkProfile} target='_blank' rel="noopener noreferrer">
                                                <div className="o-media  o-media--block">
                                                    <div className="o-media__figure">
                                                        <div className="c-profile__icon">
                                                            <i className="fa  fa-lg  fa-github-alt"></i>
                                                        </div>
                                                    </div>
                                                    <div className="o-media__body  o-content__body">
                                                        <h3 className="t-link-container__item">
                                                            GitHub
                                                        </h3>
                                                        <p>
                                                            All my open source projects for you analyze.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="o-grid__col-xl-4  o-grid__col-sm-6">
                                        <div className="o-content">
                                            <a href={'http://' + this.state.linkMedium} target='_blank' rel="noopener noreferrer">
                                                <div className="o-media  o-media--block">
                                                    <div className="o-media__figure">
                                                        <div className="c-profile__icon">
                                                            <i className="fa  fa-lg  fa-medium"></i>
                                                        </div>
                                                    </div>
                                                    <div className="o-media__body  o-content__body">
                                                        <h3 className="t-link-container__item">
                                                            Medium
                                                        </h3>
                                                        <p>
                                                            Yes. I'm also a blogger and here you find my writings.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
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

export default Profiles;