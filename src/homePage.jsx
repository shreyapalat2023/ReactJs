import React from "react";
// import ReactDOM from 'react-dom/client';



// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from './Component/headerFile.jsx';
import Slider from './Component/sliderFile.jsx';
import Footer from './Component/footerFile.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));



const HomePage = () => {
    return <>
    {/* data from home */}
        <header><Header /></header>
        <section><Slider /></section>
        <section><Footer /></section>
    </>

}
// root.render(<Header/>);



export default HomePage;