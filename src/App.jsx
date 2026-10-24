
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Orders() {
  return (
    <div>
      <h2>Order Management System</h2>

      <Link to="/orders/current">Current Orders</Link>{" | "}
      <Link to="/orders/history">Order History</Link>{" | "}
      <Link to="/orders/cancelled">Cancelled Orders</Link>

      <hr />
      <Outlet />
    </div>
  );
}

function CurrentOrders() {
  return <h3>Current Orders: Order 101, Order 102</h3>;
}

function OrderHistory() {
  return <h3>Order History: Order 90, Order 91</h3>;
}

function CancelledOrders() {
  return <h3>Cancelled Orders: Order 80</h3>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/orders" element={<Orders />}>
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
