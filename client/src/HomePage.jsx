import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{
      backgroundImage: "url('/campu1s1.png')",
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
              src="data:image/png;base64,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" 
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
