import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoute } from "./routes/PublicRoutes";
import ProtectedRoute from "./auth/ProtectedRoute";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrders from "./pages/Dashboard/user/MyOrders";
import AddAReview from "./pages/Dashboard/user/AddAReview";
import ManageAllOrders from "./pages/Dashboard/Admin/ManageAllOrders";
import AddAProduct from "./pages/Dashboard/Admin/AddAProduct";
import MakeAdmin from "./pages/Dashboard/Admin/MakeAdmin";
import ManageProducts from "./pages/Dashboard/Admin/ManageProducts";
import Payment from "./pages/Dashboard/Payment/Payment";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="bg-accent">
      <Navbar />
      <div className=" w-7xl mx-auto mt-16">
        <Routes>
          {PublicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route
            path="purchase/:id"
            element={
              <ProtectedRoute>
                <PurchasePage />
              </ProtectedRoute>
            }
          />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="add-review" element={<AddAReview />} />

            <Route path="manage-all-orders" element={<ManageAllOrders />} />
            <Route path="add-product" element={<AddAProduct />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="manage-products" element={<ManageProducts />} />
          </Route>
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
