const Header = () => {
    return (
        <div className="header__cont">
            <h1 className="header__logo">foodHouse</h1>

            <div className="header__nav">
                <nav>
                    <h3 className="header__button">Главная</h3>
                    <h3>Меню</h3>
                    <h3>Сервис</h3>
                    <h3>О нас</h3>
                </nav>
            </div>

            <div className="header__basket">
                <i className="fa-sharp fa-solid fa-basket-shopping"></i>
            </div>
        </div>
    )
}

export default Header;