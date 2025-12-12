import { Navbar } from "./Navbar";
import logo from "../../assets/Images/logo.png.png";

export function Header() {
  const handleLogoError = (e) => {
    console.error("Logo failed to load");
    const container = e.currentTarget.parentElement;
    e.currentTarget.style.display = 'none';
    
    // Create fallback element
    const fallback = document.createElement('div');
    fallback.className = 'logo-fallback';
    fallback.textContent = 'VT';
    container.appendChild(fallback);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            {/* Logo Image Container */}
            <div className="logo-container">
              <img 
                src={logo} 
                alt="Vireotech Logo" 
                className="logo-image"
                onError={handleLogoError}
              />
            </div>
            
            {/* Logo Text */}
            <div className="logo-text">
              <h1 className="logo-title">Vireotech</h1>
              <span className="logo-tagline">Smart, Sleek, Scalable</span>
            </div>
          </div>

          {/* Navigation */}
          <Navbar />
        </div>
      </div>
      
      {/* Gradient bottom border */}
      <div className="gradient-border"></div>
    </header>
  );
}