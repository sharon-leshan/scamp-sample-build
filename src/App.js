// import React from 'react';
// import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import routes from './routes/routes';

// function App() {
//   return (
//     <>
//       <Header />
//       {routes()}
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import BlogPostPage from './pages/Blog';
import ListingPage from './pages/Listing';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ListingPage />} />
          <Route path="/blog-post" element={<BlogPostPage />}>
            <Route path=":blogId" element={<BlogPostPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
