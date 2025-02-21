import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?university,classroom)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Header */}
      <header className="bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Font_Awesome_5_solid_search-location.svg/1024px-Font_Awesome_5_solid_search-location.svg.png" 
              alt="Campus Hub Logo" 
              style={{ height: '50px', marginRight: '10px' }} 
            />
            <strong className="text-primary" style={{ fontSize: '30px' }}>Campus Hub</strong>
          </div>
          <div className="d-flex">
            <Link to="/signup" className="btn btn-outline-primary me-2">Admin Signup</Link>
            <Link to="/login" className="btn btn-primary">Admin Login</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container d-flex flex-column align-items-center justify-content-center text-center" style={{ flex: 1 }}>
        <h2 className="text-primary">Welcome to Campus Hub!</h2>
        <h3 className="text-secondary">Locate - Connect - Recover</h3>

        {/* Grid Layout for Boxes */}
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mt-4">
          <div className="col">
            <Link to="/lostfound" className="card text-white bg-primary shadow-lg text-center p-4">
              <h5>Lost/Found Item Report</h5>
            </Link>
          </div>
          <div className="col">
            <Link to="/found" className="card text-white bg-success shadow-lg text-center p-4">
              <h5>Found Items</h5>
            </Link>
          </div>
          <div className="col">
            <Link to="/lost" className="card text-white bg-warning shadow-lg text-center p-4">
              <h5>Lost Items</h5>
            </Link>
          </div>
          <div className="col">
            <Link to="/result" className="card text-white bg-info shadow-lg text-center p-4">
              <h5>Check for Results</h5>
            </Link>
          </div>
          <div className="col">
            <Link to="/aboutus" className="card text-white bg-secondary shadow-lg text-center p-4">
              <h5>About Us</h5>
            </Link>
          </div>
          <div className="col">
            <Link to="/contactus" className="card text-white bg-danger shadow-lg text-center p-4">
              <h5>Contact Us</h5>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 text-center">
        <small>
          <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </small>
      </footer>
    </div>
  );
}

export default HomePage;
