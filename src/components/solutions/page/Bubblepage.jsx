import Layout from "./Layout";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ContentSection1 from "./ContentSection1";
import ContentSection2 from "./ContentSection2";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const BubblePage = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <ContentSection1 />
      <ContentSection2 />
      <Footer />
    </Layout>
  );
};

export default BubblePage;
