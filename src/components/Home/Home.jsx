// components/Home/Home.jsx
import Courses from "../Courses/Courses";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = ({ handleAsideTitle, asidetitle, credits, prices, credit }) => {
    return (
        <>
            {/* <Navbar/> */}
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-10">
                <Courses handleAsideTitle={handleAsideTitle} />
                <Aside
                    asidetitle={asidetitle}
                    credit={credits}
                    price={prices}
                    creditOnly={credit}
                />
            </div>
            <Footer/>
        </>
    );
};

export default Home;
