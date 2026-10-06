function AuthLayout({ children }) {
  return (
    <main>
      {children || <p>Authentication content goes here.</p>}
    </main>
  );
}

export default AuthLayout;
