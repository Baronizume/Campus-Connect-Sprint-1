function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Campus Connect</h3>
          <p>Connecting students with campus experiences.</p>
        </div>

        <div>
          <p>
            © {currentYear} Campus Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
