import PropTypes from "prop-types";
// import "../../../styles/Layout.css";

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
