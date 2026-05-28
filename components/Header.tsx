export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-wrapper">
          <a href="/" className="logo">
            Monefy
          </a>
        </div>
        <nav className="site-nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <a href="/login" className="nav-link-ghost">
            Login
          </a>
          <a href="/register" className="btn-primary">
            Get Started
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
