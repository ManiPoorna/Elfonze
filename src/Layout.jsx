/* eslint-disable no-unused-vars */
/* layout components */
import Header from "./ParentContComponents/Header";
import Footer from "./ParentContComponents/Footer";
import Body from "./ParentContComponents/Body";
import PageBlackenContext from "./context/PageBlackenContext";

function Layout() {
  return (
    /* root div for web app */
    <div>
      {/* first child of root div */}
      <div>
        <PageBlackenContext>
          <Body />
        </PageBlackenContext>
      </div>
    </div>
  );
}

export default Layout;
