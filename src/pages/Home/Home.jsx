import React from "react";
import Footer from "../../components/Footer";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Review from "./Review";
import Stat from "./Stat";
const Header = React.lazy(() => import("./Header"));

const Home = () => {
  return (
    <section>
      <Header />
      <Products />
      <Review />
      <Stat />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Home;
