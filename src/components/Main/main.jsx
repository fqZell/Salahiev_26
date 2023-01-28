import Menu from "../Menu/menu";
import Product from "../Product/product";

const Main = () => {
    return (
        <>
      <div className="main__cont">
      <div className="main__wrapper">
        <h2>Экспресс-доставка от Яндекс.Еды</h2>

        <h1>Быстро и вкусно.</h1>

        <h3>Сеть быстрого питания #1 в Казани</h3>

        <div className="main__delivery">
          <button>Сделать заказ</button>
          <h5>бесплатная доставка<br></br>от 500 рублей</h5>
        </div>
      </div>
      <img src="src/images/collection/img1.png" alt=""/>
    </div>

    <div className="main__cont-cards">
      <h1>Наше Меню</h1>
      <div className="main__cont-line"></div>

      <Menu />
    </div>

    <div className="main__cont-product">
        <Product />
    </div>

    <button className="button__more">Показать ещё</button>
        </>
    )
}

export default Main;