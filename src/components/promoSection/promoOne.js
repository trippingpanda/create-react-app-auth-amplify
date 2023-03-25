import React, { Component } from 'react';
import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json/themeOnePromoSection";

class promoOne extends Component {
    state = {
        data: {},
        promoData: [   {
            "id": 1,
            "promoImage": "/img/promo_img_1.png",
            "promoTitle": "Learn From Scratch",
            "promoText": "Our courses and resources are designed to help anyone, regardless of their level of experience, learn how to invest in the stock market from the ground up. Whether you're a complete beginner or have some experience, we can help you build a solid foundation in investing principles."
        },
            {
                "id": 2,
                "promoImage": "/img/promo_img_2.png",
                "promoTitle": "Revision Classes",
                "promoText": " Investing is an ongoing process that requires continuous learning and improvement. Our advanced courses and resources are designed to help you refine your investing skills and stay up-to-date with the latest market trends. Our \"Revision Classes\" are the perfect way to take your investing to the next level."
            },
            {
                "id": 3,
                "promoImage": "/img/promo_img_3.png",
                "promoTitle": "Live Q&A Sessions",
                "promoText": "We understand that investing can be complex and sometimes confusing. That's why we offer \"Live Q&A Sessions\" with experienced investors who can answer your questions and provide personalized guidance. Whether you're struggling with a specific investment or just looking for advice, our experts are here to help." },
            {
                "id": 4,
                "promoImage": "/img/promo_img_4.png",
                "promoTitle": "Track Portfolio",
                "promoText": "Keeping track of your investments is essential to making informed decisions and maximizing your returns. Our platform provides tools and resources that will help you track your investments and make more informed decisions based on your investment goals. With our \"Track Portfolio\" feature, you'll always know how your investments are performing."
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