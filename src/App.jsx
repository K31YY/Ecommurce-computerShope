import React from "react";
import { Route, Routes } from "react-router-dom";
import UserScreen from "./client/UserScreen";
import UserHome from "./client/UserHome";
import UserBrand from "./client/UserBrand";
import UserProduct from "./client/UserProduct";
import UserCategory from "./client/UserCategory";
import NotFoundPage from "./NotFoundPage";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import AdminBrand from "./Admin/AdminBrand";
import AdminProduct from "./Admin/AdminProduct";
import AdminCategory from "./Admin/AdminCategory";
import Protect from "./Security/Protect";
import AdminLogin from "./Admin/AdminLogin";
import Brand from './brand'
import ProductDetails from "./client/ProductDetails";
import ProductByBrand from "./client/ProductByBrand";
import Product from './product'
const App = () => {
  // these 3 variables are get data from localStorage 
 
  // 
  return (
    
    <Routes>
      {/* User */}

      <Route path="/" element={<UserScreen />}>
        {" "}
        <Route index element={<UserHome  />} />
        <Route path="/Ecommerce/Product/:id" element={<ProductDetails />} />
        <Route path="Ecommerce/Products" element={<UserProduct/>} />
        <Route path="Ecommerce/Category" element={<UserCategory />} />
        <Route path="Ecommerce/Brand" element={<UserBrand />} />
        <Route path="/Ecommerce/Brand/:id" element={<ProductByBrand />} />

      </Route>

      {/* End of User */}

      {/* Admin */}

      <Route path="/admin_login" element={<AdminLogin />} />

      <Route element={<Protect />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="brand" element={<AdminBrand />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      {/* End of Admin */}
    </Routes>
  );
};

export default App;
