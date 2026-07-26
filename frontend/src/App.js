import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import ThankYou from './ThankYou';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminBlogList from './pages/AdminBlogList';
import AdminBlogEditor from './pages/AdminBlogEditor';
import Course from './pages/Course';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/blogs" element={<AdminBlogList />} />
          <Route path="/admin/blogs/new" element={<AdminBlogEditor />} />
          <Route path="/admin/blogs/edit/:id" element={<AdminBlogEditor />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}


export default App;
