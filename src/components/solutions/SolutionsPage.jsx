import Footer from "../Footer";
import Navbar from "../Navbar";
import SolutionsHome from "./SolutionsHome";

export default function SolutionsPage() {
  return (
    <div>
      <Navbar />
      <SolutionsHome />
      <Footer next={'Blogs'}/>
    </div>
  );
}
