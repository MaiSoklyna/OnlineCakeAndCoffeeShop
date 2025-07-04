import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Components
import Header from './components/Headers/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// Pages
import HomePage from './components/page/HomePage.jsx';
import AboutPage from './components/page/AboutPage.jsx';
import Contact from './components/page/Contact.jsx';

// Categories
import Categories from './components/Categories/Categories.jsx';
import BeveragesPage from './components/Categories/BeveragesPage';
import BiscuitsSnacksPage from './components/Categories/BiscuitsSnacksPage';
import BreadsBakeryPage from './components/Categories/BreadsBakeryPage';
import BreakfastDairyPage from './components/Categories/BreakfastDairyPage';
import FrozenFoodsPage from './components/Categories/FrozenFoodsPage';
import FruitsVegetablesPage from './components/Categories/FruitsVegetablesPage';
import GroceryStaplesPage from './components/Categories/GroceryStaplesPage';
import MeatsSeafoodPage from './components/Categories/MeatsSeafoodPage';

// Auth Components
import { AuthProvider } from './auth/AuthContext';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import { PrivateRoute, AdminRoute } from './auth/PrivateRoute';
import UnauthorizedPage from './auth/UnauthorizedPage';

// Admin Component
import AdminDashboard from './admin/AdminDashboard';

export const MyContext = createContext();

function App() {
  const [state, setState] = useState({});

  return (
    <div className="App">
      <AuthProvider>
        <MyContext.Provider value={{ state, setState }}>
          <Router>
            <Routes>
              {/* Auth Routes - No Header/Footer */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              
              {/* Admin Routes */}
              <Route element={<AdminRoute />}>
                <Route path="/admin" element={
                  <>
                    <Header />
                    <AdminDashboard />
                    <Footer />
                  </>
                } />
              </Route>

              {/* Protected Routes with Header/Footer */}
              <Route element={<PrivateRoute />}>
                <Route path="/" element={
                  <>
                    <Header />
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path="/about" element={
                  <>
                    <Header />
                    <AboutPage />
                    <Footer />
                  </>
                } />
                <Route path="/contact" element={
                  <>
                    <Header />
                    <Contact />
                    <Footer />
                  </>
                } />

                {/* Categories */}
                <Route path="/categories" element={
                  <>
                    <Header />
                    <Categories />
                    <Footer />
                  </>
                } />
                <Route path="/category/beverages" element={
                  <>
                    <Header />
                    <BeveragesPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/biscuits-snacks" element={
                  <>
                    <Header />
                    <BiscuitsSnacksPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/breads-bakery" element={
                  <>
                    <Header />
                    <BreadsBakeryPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/breakfast-dairy" element={
                  <>
                    <Header />
                    <BreakfastDairyPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/frozen-foods" element={
                  <>
                    <Header />
                    <FrozenFoodsPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/fruits-vegetables" element={
                  <>
                    <Header />
                    <FruitsVegetablesPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/grocery-staples" element={
                  <>
                    <Header />
                    <GroceryStaplesPage />
                    <Footer />
                  </>
                } />
                <Route path="/category/meats-seafood" element={
                  <>
                    <Header />
                    <MeatsSeafoodPage />
                    <Footer />
                  </>
                } />
              </Route>
            </Routes>
          </Router>
        </MyContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
