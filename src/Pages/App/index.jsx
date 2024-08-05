import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { HospitalCard } from "../../Components/HospitalCard";
import { Navbar } from "../../Components/Navbar";
import { Appointments } from "../Appointments";
import { NewAppointment } from "../NewAppointment";
import { AppointmentProvider } from "../../Context";

const AppRoutes = () => {
  let routes = useRoutes([
    //{ path: "/", element: <Home /> },
    { path: "/newAppointment", element: <NewAppointment /> },
    { path: "/appointments", element: <Appointments /> },
    /*{ path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },*/
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <AppointmentProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </AppointmentProvider>
    </>
  );
};

export default App;
