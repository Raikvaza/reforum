import Header from "../Header/Header";
import Body from "../Body/Body";
import './Layout.css'
function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header/>
      <Body>
        {children}
      </Body>
    </div>
  );
}

export default Layout;
