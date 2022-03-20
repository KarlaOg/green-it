import logoS from '../../images/search-s.png';
import logoM from '../../images/search-m.png';
import Image from '../Image';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Image small={logoS} medium={logoM} />
      <p className='paragraph'>
        L'indice de fragilité numérique, par sa représentation graphique, révèle
        les zones d'exclusion numérique sur un territoire donné. Cet outil
        permet, que vous soyez une commune, un département ou une région de
        comparer votre indice de fragilité numérique avec les autres
        territoires.
      </p>
    </header>
  );
};

export default Header;
