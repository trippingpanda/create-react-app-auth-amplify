import React, { Component } from 'react';

import ScrollupSection from '../components/scrollupSection/scrollUp';
import Header from '../components/headerSection/headerOne';
import WelcomeSection from '../components/welcomeSection/welcomeOne';
import PromoSection from '../components/promoSection/promoOne';
import AboutSection from '../components/aboutSection/aboutOne';
import WorkSection from '../components/workSection/workOne';
import FeatureSection from '../components/featureSection/featureOne';
import ScreenshotSection from '../components/screenshotSection/screenshot';
import PricingSection from '../components/pricingSection/pricingOne';
import ReviewSection from '../components/reviewSection/reviewOne';
import TeamSection from '../components/teamSection/teamOne';
import SubscribeSection from '../components/subscribeSection/subscribeOne';
import DownloadSection from '../components/downloadSection/downloadOne';
import BlogSection from '../components/blogSection/blogOne';
import ContactSection from '../components/contactSection/contact';
import FooterSection from '../components/footerSection/footer';

class ThemeOne extends Component {
    render() {
        return (
            <div className="miami">
                <ScrollupSection />
                <div className="all-area">
                    <Header imageData={"/img/logo.png"} />
                    <WelcomeSection />
                    <PromoSection />
                    {/*<AboutSection />*/}
                    {/*<WorkSection />*/}
                    {/*<FeatureSection />*/}
                    {/*<ScreenshotSection />*/}
                    {/*<PricingSection />*/}
                    {/*<ReviewSection />*/}
                    <TeamSection />
                    {/*<SubscribeSection />*/}
                    {/*<DownloadSection />*/}
                    {/*<BlogSection />*/}
                    <ContactSection />
                    {/*<FooterSection />*/}
                </div>
            </div>
        );
    }
}

export default ThemeOne;