'use client';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Posts from './components/pages/Posts';
import Comments from './components/pages/Comments';

const navLinks = [
  { name: 'Home', href: "/" },
  { name: 'Posts', href: "/posts" },
  { name: 'Comments', href: "/comments" },
];

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          {navLinks.map((link) => (
            <li id="menu" key={link.name}>
              <NavLink to={link.href} key={link.name}>
                {link.name}
              </NavLink>
            </li>)
          )}
        </ul>

        <Routes>
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<h1>Домашняя страница</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
