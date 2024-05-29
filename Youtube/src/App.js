import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import DemoTwo from "./components/DemoTwo"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <DemoTwo />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="py-10 z-0">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
