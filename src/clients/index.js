import React from 'react';

import Github from '../assets/images/clients/github.png';
import Google from '../assets/images/clients/google.png';
import Html5 from '../assets/images/clients/html5.png';
import Youtube from '../assets/images/clients/youtube.png';

class Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, url: 'http://github.com/zikriramdani', image: Github, target: true},
                {id: 2, url: '/', image: Google, target: false},
                {id: 3, url: '/', image: Html5, target: false},
                {id: 4, url: '/', image: Youtube, target: false}
            ]
        }
    }

    render() {
        const items = this.state.data.map(
            (item, key) => {
                return(
                    <li key={item.id}>
                        <a href={item.url} target='_blank' rel="noopener noreferrer">
                            <img src={item.image} alt=""/>
                        </a>
                    </li>
                )
            }
        )
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
                                        Clients
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Happy people.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  ">
                                
                                <ul className="c-clients  o-content">
                                    {items}

                                    {/* <li>
                                        <a href={'http://' + this.state.linkGithub} target='_blank' rel="noopener noreferrer">
                                            <img src={Github} alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' rel="noopener noreferrer">
                                            <img src={Google} alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' rel="noopener noreferrer">
                                            <img src={Html5} alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' rel="noopener noreferrer">
                                            <img src={Youtube} alt=""/>
                                        </a>
                                    </li> */}
                                </ul>

                            </div>

                        </div>
                    </div>

                    </section>
            </div>
        )
    }

}

export default Clients;