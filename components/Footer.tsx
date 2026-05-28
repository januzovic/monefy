import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-top">
          <div className="grid-col">
            <p className="logo">Monefy</p>
            <p className="site-footer-tagline">Saving, set in print.</p>
            <p className="site-footer-text">
              The pocket ledger for people who never wanted a spreadsheet.
              Daily, deliberate, durable.
            </p>
          </div>
          <div className="grid-col">
            <p className="grid-col-title">Pages</p>
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
            <a href="/register" className="nav-link">
              Get Started
            </a>
          </div>
          <div className="grid-col">
            <p className="grid-col-title">Office Hours</p>
            <a href="mailto:hello@monefy.app" className="nav-link">
              hello@monefy.app
            </a>
            <a href="/privacy" className="nav-link">
              Privacy
            </a>
            <a href="/terms" className="nav-link">
              Terms
            </a>
          </div>
          <div className="grid-col">
            <p className="grid-col-title">Wire</p>
            <div className="site-footer-social">
              <Link href="https://www.instagram.com/" aria-label="Instagram">
                <InstagramIcon size={16} />
              </Link>
              <Link href="https://www.facebook.com/" aria-label="Facebook">
                <FacebookIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© Monefy MMXXVI</span>
          <span>
            Printed on the open web <span className="pip">●</span> All rights
            unreserved
          </span>
          <span>Made for daily use</span>
        </div>
      </div>
    </footer>
  );
}
