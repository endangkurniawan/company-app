import Home from "presentation/container/page/Home";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Halaman tidak ditemukan</h1>,
  },
];

export default routeConfig;
