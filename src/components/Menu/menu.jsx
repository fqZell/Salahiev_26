import { CATEGORIES } from "../data/categories";

console.log(CATEGORIES);

const Menu = () => {

  const name = "Салаты";

    return (
        <>
<div className="main__wrapper-cards">

<div className="main__menu-cards">
  <img src="src/images/collection/menu11.png" alt="menu1" />
  <h4>{name}</h4>
</div>

<div className="main__menu-card">
  <img src="src/images/collection/menu2.png" alt="menu2" />
  <h3>Напитки</h3>
</div>

<div className="main__menu-card">
  <img src="src/images/collection/menu3.png" alt="menu3" />
  <h3>Бургеры</h3>
</div>

<div className="main__menu-card">
  <img src="src/images/collection/menu4.png" alt="menu4" />
  <h3>Закуски</h3>
</div>

<div className="main__menu-card">
  <img src="src/images/collection/menu5.png" alt="menu5" />
  <h3>Пицца</h3>
</div>

<div className="main__menu-card">
  <img src="src/images/collection/menu6.png" alt="menu6" />
  <h3>Акции</h3>
</div>
</div>
        </>
    )
}

export default Menu;