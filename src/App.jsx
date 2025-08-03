import { Routes, Route } from "react-router-dom";
import { publicLayout as routes } from "./Routes";
import DefaultLayout from "./component/Layouts/DefaultLayout";
import { Fragment, useEffect } from "react";

const App = () => {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, [])
  const onRenderRoutes = () => {
    let result;
    if (routes && routes.length > 0) {
      result = routes.map((rou, i) => {
        let Page = rou.component;
        let Layout = DefaultLayout;

        if (rou.layout) {
          Layout = rou.layout;
        } else if (rou.layout === null) {
          Layout = Fragment;
        }

        return (
          <Route
            path={rou.route}
            key={i + "route"}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      });
    }

    return <Routes>{result}</Routes>;
  };

  return <Fragment>{onRenderRoutes()}</Fragment>;
};

export default App;
