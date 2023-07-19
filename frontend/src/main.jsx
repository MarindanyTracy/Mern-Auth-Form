import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.js';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute.jsx';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Profile from './screens/Profile.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="/" index={true} element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    {/* Private routes */}
    <Route path='' element={ <PrivateRoute />}>
    <Route path="/profile" element={<Profile />} />
    </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
  </Provider>
)
