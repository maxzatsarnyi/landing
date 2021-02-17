import React, {useState} from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import Header from '../components/Header/index';
import InfoSection from '../components/InfoSection/index';
import UsersSection from '../components/UsersSection/index';
import RegisterSection from '../components/RegisterSection/index';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {/* <Header /> */}
            {/* <InfoSection /> */}
            {/* <UsersSection /> */}
            <RegisterSection/>
            <Footer/>
        </>
    )
}

export default Home;
