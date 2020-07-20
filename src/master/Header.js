import React from 'react';
import avatar from '../assets/images/header/avatar.jpg'

class Header extends React.Component {
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
                <section className="o-section o-section--header t-section t-section--header">
                    <div className="c-header">
                        <div className="o-section__header-bg t-section__header"></div>
                        <div className="o-section__content-bg t-section__content"></div>
                        <div className="o-container">
                            <div className="o-section__container">
                                
                                <header className="o-section__header c-header__header t-section__header">
                                    <div className="c-header__inner-header">
                                        <div className="c-header__avatar">
                                            <div className="a-header c-avatar">
                                                <img className="c-avatar__img" src={avatar} alt="" /> 
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                <div className="o-section__content c-header__content t-section__content">
                                    <div className="c-header__inner-content">
                                        <div className="c-header__top">
                                            <div className="c-header__brand">
                                                <div className="c-brand">
                                                    <h1 className="c-brand__title t-title"><span className="c-brand__sizer"><span className="a-header c-brand__first-word t-title__first-word">Zikri</span> <span className="a-header c-brand__second-word t-title__second-word">Ramdani</span></span></h1>
                                                    <h2 className="a-header c-brand__sub-title t-sub-title"><span className="c-brand__sizer">Web Developers &amp; Android Developers</span></h2>
                                                </div>
                                            </div>
                                            <ul className="c-header__social-buttons c-social-buttons">
                                                <li className="a-footer">
                                                    <a className="c-social-button t-social-button" href={'http://' + this.state.linkProfile}><i className="fa fa-lg fa-dribbble"></i></a>
                                                </li>
                                                <li className="a-footer">
                                                    <a className="c-social-button t-social-button" href={'http://' + this.state.linkBlog} target='_blank' rel="noopener noreferrer"><i className="fa fa-lg fa-dribbble"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="c-header__contact">
                                            <hr className="a-header c-header__contact-divider"></hr>
                                            <div className="o-grid">
                                                <div className="o-grid__col-md-3 o-grid__col-sm-6">
                                                    <div className="a-header o-content">
                                                        <div className="o-content__body">
                                                            <h4>Location</h4>
                                                            <address>
                                                                Kunciran Indah, Kota Tangerang
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-3 o-grid__col-sm-6">
                                                    <div className="a-header o-content">
                                                        <div className="o-content__body">
                                                            <h4>Phone</h4>
                                                            <p><a href="whatsapp://send?text=zikriramdani.github.io&phone=+6281993477700">0819-934-777-00</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-3 o-grid__col-sm-6">
                                                    <div className="a-header o-content">
                                                        <div className="o-content__body">
                                                            <h4>Web</h4>
                                                            <p>
                                                                <a className="t-link-container" href={'http://' + this.state.linkProfile} target='_blank' rel="noopener noreferrer">
                                                                    <span className="t-link-container__item--blended">{this.state.linkProfile}</span>
                                                                </a>
                                                                <a className="t-link-container" href={'http://' + this.state.linkBlog} target='_blank' rel="noopener noreferrer">
                                                                    <span className="t-link-container__item--blended">{this.state.linkBlog}</span>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-3 o-grid__col-sm-6">
                                                    <div className="a-header o-content">
                                                        <div className="o-content__body">
                                                            <a className="t-link-container" href={'mailto:' + this.state.email} target='_blank' rel="noopener noreferrer">
                                                            <h4>Email</h4>
                                                            <p><span className="t-link-container__item--blended">{this.state.email}</span></p></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Header;