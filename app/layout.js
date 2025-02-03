import Header from '../components/main-header.js'

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>        
        {children}
      </body>
    </html>
  );
}
