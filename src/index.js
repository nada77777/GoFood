import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import CartPage from './pages/cart_page/cart_page';
import ItemDetailPage from './pages/item_detail_page/item_detail_page';
import ItemListPage from './pages/item_list_page/item_list_page';
import MainPage from './pages/main_page/main_page';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/foodlist',
        element: <ItemListPage />
      },
      {
        path: '/foodinfo',
        element: <ItemDetailPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
    ],
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
