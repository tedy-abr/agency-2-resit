import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Essayas Abraham Hailu",
  description: "Portfolio of Essayas Abraham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-[#10b981]/30 relative overflow-x-hidden font-sans">
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[#030712]">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-125 w-200 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.15)_0%,rgba(3,7,18,0)_70%)]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] h-150 w-150 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,rgba(3,7,18,0)_70%)]"></div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
