import "./globals.css";
import Navbar from "./Components/Shared/Navbar";
import { Poppins } from 'next/font/google'
import StateProvider from "./Components/Shared/StateProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Shared/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "AlifCodes - Home",
  description: "Your Vision, My Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body
          className={`${poppins.className} antialiased px-12`}
        >
          <ToastContainer />
          <Navbar />
          {children}
          <hr className="mt-6 border-b border-green-300" />
          <Footer />
        </body>
      </StateProvider>
    </html>
  );
}
