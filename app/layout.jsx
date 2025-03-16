
import Header from "./_component/Header";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "My App description",
}
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