import React from 'react';
// import { link } from 'fs';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'zikriramdani13@yahoo.com',
            linkProfile: 'zikriramdani.github.io',
            linkBlog: 'zikriramdani.blogspot.com'
        }
    }

    render() {
        return(
            <div>
                <section className="o-section  t-section  o-section--footer">

                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">

                            <header className="o-section__header  t-section__header">
                                <div className="o-content">
                                    <h2 className="o-section__heading">
                                        Contact
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Call me, maybe.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  ">
                                
                                    <div className="c-footer__contact">
                                        <div className="o-grid">

                                        <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                            <div className="o-content">
                                                <div className="o-content__body">
                                                    <h4>Location</h4>
                                                    <address>
                                                        Kunciran Indah, Kota Tangerang
                                                    </address>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                            <div className="o-content">
                                                <div className="o-content__body">
                                                    <h4>Phone</h4>
                                                    <p>
                                                        <a href="whatsapp://send?text=zikriramdani.github.io&phone=+6281993477700">
                                                            0819-934-777-00
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                            <div className="o-content">
                                                <div className="o-content__body">
                                                    <h4>Web</h4>
                                                    <p>
                                                        <a href={'http://' + this.state.linkProfile}
                                                        target='_blank' rel="noopener noreferrer" className="t-link-container">
                                                            <span className="t-link-container__item--blended">
                                                                {this.state.linkProfile}
                                                            </span>   
                                                        </a>  
                                                        <a href={'http://' + this.state.linkBlog}
                                                        target='_blank' rel="noopener noreferrer" className="t-link-container">
                                                            <span className="t-link-container__item--blended">
                                                                {this.state.linkBlog}
                                                            </span>
                                                        </a>                                                       
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="o-grid__col-md-3  o-grid__col-sm-6">
                                            <div className="o-content">
                                                <div className="o-content__body">
                                                    <a href={'mailto:' + this.state.email} target='_blank' rel="noopener noreferrer" className="t-link-container">
                                                        <h4>Email</h4>
                                                        <p>
                                                            <span className="t-link-container__item--blended">
                                                                {this.state.email}
                                                            </span>
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                    <hr className="c-footer__contact-divider" />

                                    <div className="o-content">
                                        <div className="c-footer__bottom">
                                            <div className="c-footer__brand">

                                                <div className="c-brand">
                                                    <div className="o-content__body">
                                                        <h1 className="c-brand__title  t-title">
                                                            <span className="c-brand__sizer  c-brand__sizer--sm">
                                                                <span className="a-footer  c-brand__first-word  t-title__first-word">
                                                                    Zikri
                                                                </span>
                                                                <span className="a-footer  c-brand__second-word  t-title__second-word">
                                                                    Ramdani
                                                                </span>
                                                            </span>
                                                        </h1>
                                                    </div>
                                                </div>

                                            </div>

                                            <ul className="c-footer__social-buttons  c-social-buttons  o-content__body">
                                                <li className="a-footer">
                                                    <a href='https://zikriramdani.github.io' className="c-social-button  t-social-button">
                                                        <i className="fa  fa-lg  fa-dribbble"></i>
                                                    </a>
                                                </li>
                                                <li className="a-footer">
                                                    <a href='http://zikriramdani.blogspot.com' target='_blank' rel="noopener noreferrer" className="c-social-button  t-social-button">
                                                        <i className="fa  fa-lg  fa-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>

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

export default Footer;