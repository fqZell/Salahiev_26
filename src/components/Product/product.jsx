import {PRODUCTS} from "../data/products.jsx";
import Item from "../Item/item.jsx";

const Product = () => {

    return (
        <>
<div className="product__cards">

<div className="product__card">
    <img src="src/images/cards/product.png" alt="product" />
</div>

{PRODUCTS.map((item) => <Item key={item.id} item={item} />)}


{/* <div className="product__card">
    <img src="src/images/cards/product2.png" alt="product2" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div>

<div className="product__card">
    <img src="src/images/cards/product3.png" alt="product3" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div>

<div className="product__card">
    <img src="src/images/cards/product4.png" alt="product4" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div>

<div className="product__card">
    <img src="src/images/cards/product1.png" alt="product1" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div>

<div className="product__card">
    <img src="src/images/cards/product2.png" alt="product2" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div>

<div className="product__card">
    <img src="src/images/cards/product3.png" alt="product3" />

    <div className="product__name">
      <h3>Салат “Греческий”</h3>
      <h4>300 грамм - 1 порция</h4>
      <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
      <h2>Добавить в корзину</h2>
    </div>
</div> */}

</div>
        </>
    )
}

export default Product;