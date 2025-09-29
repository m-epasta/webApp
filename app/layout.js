export const metadata = {
  title: 'StopSin App',
  description: 'Welcome to StopSin Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}