import React from 'react';
import InfoNavbar from '../../components/Info/InfoNavbar';
import InfoTop from '../../components/Info/InfoTop';
import InfoNew from '../../components/Info/InfoNew';
import InfoOurProducts from '../../components/Info/InfoOurProducts';
import Footer from '../../components/Info/Footer';

const InfoPage = () => {
    return (
        <div>
            <InfoNavbar />
            <InfoTop />
            <InfoNew />
            <InfoOurProducts />
            <Footer />
        </div>
    );
};

export default InfoPage;