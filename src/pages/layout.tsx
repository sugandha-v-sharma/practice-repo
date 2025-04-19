// components/Layout.js
import React from 'react';
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="flex h-screen">
    <div className="w-64 bg-gray-800 text-white p-4">
      <Sidebar />
    </div>
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  </div>
);

export default Layout;
