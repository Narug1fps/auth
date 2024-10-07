
import "./globals.css";


export const metadata = {
  title: "Auth",
  description: "MILA Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
