
import Header from "./_component/Header";
import "./globals.css";

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}