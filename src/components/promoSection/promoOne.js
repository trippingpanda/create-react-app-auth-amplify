import React, { Component } from 'react';
import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json/themeOnePromoSection";

class promoOne extends Component {
    state = {
        data: {},
        promoData: [   {
            "id": 1,
            "promoImage": "/img/promo_img_1.png",
            "promoTitle": "Start Investing Today",
            "promoText": "Discover the world of investing with our comprehensive and beginner-friendly stock market courses. Master the essentials of trading strategies, portfolio building, and smart investing decisions to confidently embark on your financial journey. Start investing today with a solid foundation that will help you achieve your financial goals."
        },
            {
                "id": 2,
                "promoImage": "/img/promo_img_2.png",
                "promoTitle": "Upgrade Your Skills",
                "promoText": "Stay ahead in the ever-evolving world of investing with our advanced courses and specialized resources. Our \"Upgrade Your Skills\" program delves into specific investing topics, ensuring you remain up-to-date with market trends and refine your investment acumen."
            },
            {
                "id": 3,
                "promoImage": "/img/promo_img_3.png",
                "promoTitle": "Expert Insights: Live Q&A",
                "promoText": "Learn from seasoned investors and receive personalized advice during our interactive \"Expert Insights: Live Q&A\" sessions. Pose your unique investment questions and benefit from the collective wisdom of experienced professionals, guiding you towards smarter financial decisions." },
            {
                "id": 4,
                "promoImage": "/img/promo_img_4.png",
                "promoTitle": "Optimize Your Portfolio",
                "promoText": "Efficiently monitor and manage your investments with our powerful tools and resources designed for tracking and decision-making. Utilize our \"Optimize Your Portfolio\" feature to stay informed, make data-driven choices, and maximize your investment returns."
            }]
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             promoData: res.data.promoData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="benifits" className="section benifits-area ptb_100">
                <div className="container">
                    <div className="row">
                        {/* Benifits Item */}
                        {this.state.promoData.map((item, idx) => {
                            return(
                                <div key={`po_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                                    <div className="benifits-item text-center p-3">
                                        <div className="feature-icon">
                                            <img src={item.promoImage} alt="" />
                                        </div>
                                        {/* Benifits Text */}
                                        <div className="benifits-text">
                                            <h3 className="mb-2">{item.promoTitle}</h3>
                                            <p>{item.promoText}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default promoOne;