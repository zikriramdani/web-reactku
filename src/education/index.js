import React from 'react';

class Education extends React.Component {
    constructor() {
        super();
        this.state = {}
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
                                        Education
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Lazy isn&#39;t in my vocabulary.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  u-pt-0">
                                
                                <div className="o-content">
                                    <div className="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
                                        <div className="c-timeline__end  t-border-color"></div>

                                        <div className="c-timeline__item">
                                            <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                            <div className="o-content">
                                                <div className="o-grid">
                                                    <div className="o-grid__col-md-5">
                                                        <div className="c-work__timeframe">
                                                            2012 &ndash; 2016
                                                        </div>
                                                        <h3 className="c-work__heading">
                                                            STMIK PGRI TANGERANG
                                                        </h3>
                                                        <h4 className="c-work__title">
                                                            Sarjana Komputer
                                                        </h4>
                                                        <div className="c-work__location">
                                                            Tangerang
                                                        </div>
                                                    </div>
                                                    <div className="o-grid__col-md-7">
                                                        <p>
                                                            STMIK PGRI TANGERANG adalah lembaga pendidikan komputer yang berada dibawah naungan Yayasan Pendidikan Tinggi PGRI. Yayasan Pendidikan Tinggi PGRI mengemban misi melaksanakan amanat luhur yang terkandung didalam Pembukaan Undang-undang Dasar 1945, yaitu misi untuk mencerdaskan kehidupan bangsa Indonesia.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="c-timeline__item">
                                            <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                            <div className="o-content">
                                                <div className="o-grid">
                                                    <div className="o-grid__col-md-5">
                                                        <div className="c-work__timeframe">
                                                            2009 &ndash; 2011
                                                        </div>
                                                        <h3 className="c-work__heading">
                                                            SMA KOSGORO
                                                        </h3>
                                                        <h4 className="c-work__title">
                                                            Pelajar
                                                        </h4>
                                                        <div className="c-work__location">
                                                            Tangerang
                                                        </div>
                                                    </div>
                                                    <div className="o-grid__col-md-7">
                                                        <p></p>
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

export default Education;