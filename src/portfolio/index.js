import React from 'react';

// Import images
import Yamisok from '../assets/images/portfolio/YAMISOK.png';
import YamisokThumb from '../assets/images/portfolio/YAMISOK_thumb.png';

import WorldOfWonders from '../assets/images/portfolio/WORLD-OF-WONDERS.png';
import WorldOfWondersThumb from '../assets/images/portfolio/WORLD-OF-WONDERS_thumb.png';

import Karada from '../assets/images/portfolio/KA-RA-DA-INDONESIA.png';
import KaradaThumb from '../assets/images/portfolio/KA-RA-DA-INDONESIA_thumb.png';


import Estore from '../assets/images/portfolio/ESTORE.png';
import EstoreThumb from '../assets/images/portfolio/ESTORE_thumb.png';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, image: Yamisok, imageThumb: YamisokThumb, name: 'www.yamisok.com'},
                {id: 2, image: WorldOfWonders, imageThumb: WorldOfWondersThumb, name: 'www.worldofwonders.co.id'},
            ]
        }
    }

    render() {
        const items = this.state.data.map(
            (item, key) => {
                return(
                    <div className="o-grid__col-sm-6 o-grid__col-xs-6" key={item.id}>
                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href={item.image} data-lightbox-hidpi="" title={item.name} data-lightbox-gallery="portfolio">
                            <img src={item.imageThumb} alt=""/>
                            <div className="c-image-overlay__content">
                                <h3>
                                    {item.name}
                                </h3>
                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                <p></p>
                            </div>
                        </a>
                    </div>
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
                                        Portfolio
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Here it gets interesting.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  o-section__full-bottom-space">
                                
                                <div className="o-grid  o-grid--gallery">

                                    {items}

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href={Karada} data-lightbox-hidpi="" title="KA.RA.DA INDONESIA" data-lightbox-gallery="portfolio">
                                            <img src={KaradaThumb} alt=""/>
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    KA.RA.DA INDONESIA
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href={Estore} data-lightbox-hidpi="" title="Estore" data-lightbox-gallery="portfolio">
                                            <img src={EstoreThumb} alt=""/>
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    Estore
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/THECONVERSION.png" data-lightbox-hidpi="" title="www.theconversion.com" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/THECONVERSION_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    www.theconversion.com
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/BANDAR-DJAKARTA.png" data-lightbox-hidpi="" title="www.bandar-djakarta.com" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/BANDAR-DJAKARTA_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    www.bandar-djakarta.com
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/PLAN-ADS.png" data-lightbox-hidpi="" title="PLANADS" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/PLAN-ADS_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    PLANADS
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/PT-ADEHA.png" data-lightbox-hidpi="" title="PT. ADEHA" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/PT-ADEHA_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    PT. ADEHA
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/ASURANSI.png" data-lightbox-hidpi="" title="ASURANSI" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/ASURANSI_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    ASURANSI
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/ALENA-WU.png" data-lightbox-hidpi="" title="ALENA WU" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/ALENA-WU_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    ALENA WU
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/MEGATRONIX.png" data-lightbox-hidpi="" title="MEGATRONIX" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/MEGATRONIX_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    MEGATRONIX
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/TOKO-ONLINE.png" data-lightbox-hidpi="" title="TOKO ONLINE" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/TOKO-ONLINE_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    TOKO-ONLINE
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/TOKO-ONLINE-2.png" data-lightbox-hidpi="" title="TOKO ONLINE 2" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/TOKO-ONLINE-2_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    TOKO-ONLINE-2
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/PT-GLOBAL-INDOBANGUN.png" data-lightbox-hidpi="" title="PT.GLOBAL INDOBANGUN" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/PT-GLOBAL-INDOBANGUN_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    PT GLOBAL INDOBANGUN
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/PT-BRI-PERSERO.png" data-lightbox-hidpi="" title="PT.BRI PERSERO" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/PT-BRI-PERSERO_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    PT-BRI-PERSERO
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/PT-HEKSA-NENGGALA-INDONUSA.png" data-lightbox-hidpi="" title="PT HEKSA NENGGALA INDONUSA" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/PT-HEKSA-NENGGALA-INDONUSA_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    PT HEKSA NENGGALA INDONUSA
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/CLOUD-STORAGE.png" data-lightbox-hidpi="" title="CLOUD STORAGE" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/CLOUD-STORAGE_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    CLOUD STORAGE
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/DUNIA-GAMES.png" data-lightbox-hidpi="" title="DUNIA-GAMES" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/DUNIA-GAMES_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    DUNIA GAMES
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/employee-management.png" data-lightbox-hidpi="" title="Employee Management" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/employee-management_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    https://employee-management.netlify.app/
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/piri-aplikasi-indonesia.png" data-lightbox-hidpi="" title="Piri Aplikasi Indonesia" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/piri-aplikasi-indonesia_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    https://piri-aplikasi-indonesia.netlify.app/
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="o-grid__col-sm-6 o-grid__col-xs-6">
                                        <a className="c-image-overlay  t-image-overlay  js-lightbox" href="assets/images/portfolio/blog-angular-sederhana.png" data-lightbox-hidpi="" title="Blog Angular Sederhana" data-lightbox-gallery="portfolio">
                                            {/* <img src="assets/images/portfolio/blog-angular-sederhana_thumb.png" alt=""/> */}
                                            <div className="c-image-overlay__content">
                                                <h3>
                                                    https://aplikasi-sederhana-angular.netlify.app
                                                </h3>
                                                <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                                                <p></p>
                                            </div>
                                        </a>
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

export default Portfolio;