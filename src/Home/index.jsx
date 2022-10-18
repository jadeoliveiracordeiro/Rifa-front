import './style.css';

import Header from '../components/Header';
import Content from "../Content";
import Footer from "../Footer";
import Produto from '../Produto';
import Rifas from '../Rifas';

const Home = () => {
  return (
    <main>
      <Header/>
      <Produto />
      <Rifas />
      <Content />
      <Footer />
    </main>
  );
}

export default Home;
