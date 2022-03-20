import logoS from '../images/search-s.png';
import logoM from '../images/search-m.png';
import logoL from '../images/search-l.png';
import Image from './Image';

const Header = () => {
  return (
    <header>
      <Image small={logoS} medium={logoS} />

      <p>
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
