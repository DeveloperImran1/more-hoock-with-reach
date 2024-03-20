import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2'
import 'animate.css';
import { useRef } from "react";
const Home = () => {
    // ai useNavigation() and useLocation() ai hoock gulo root folder a likhta hoi.
    const navigation = useNavigation();

    // useLocation() ai hoocks er maddhome kokhon kon path a jassi,, home, about, users, posts airokom path er namgulo show kore.
    const location = useLocation();
    console.log(location)

    const sweetAlertButton = () => {
        Swal.fire("SweetAlert2 is working!");
    }

    // animate css react component use korbo:
    const textRef = useRef();

    const handleAnimation = () => {
        // console.log(textRef.current);   jei elemnt a refference hisabe add koresi, sei elemt k pabo.

        // Add animation classes
        textRef.current.classList.add("animate__animated", "animate__bounce");

        // Remove animation classes after animation ends
        textRef.current.addEventListener('animationend', () => {
            textRef.current.classList.remove("animate__animated", "animate__bounce");
        }, { once: true });
    };


    return (
        <div>

            {/* using sweet allert react component  */}
            <button onClick={sweetAlertButton}>Sweet Alert</button>

            {/* using animate css react component  */}
            {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
            {/* onClick a use korar jonno upore akta funtion er moddhe korte hobe. */}
            <h2 ref={textRef}>Animate CSS ami</h2>
            <button onClick={handleAnimation}>Start Animate CSS</button>

            <Header></Header>
            {    // 1st a useNavigation() method k call kore akta variable er moddhe rakhte hobe. Than oi variabler value jotokkhon porjonto loading thakbe totokkhon loading paragraph ta show thakbe. loading ses hole automaticly porer element show korbe.Jeita amrra age bivinno condition dia kortam. sei kaj useNavigation() er maddhome khub easily kora jai.
                navigation.state === 'loading' ?
                    <p>Loading...</p> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;