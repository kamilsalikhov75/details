export function Header({headerArr}){
    const headerItems = headerArr.map((headerItem, index) =>{
        return <li className="header__menu-item" key={index}>{headerItem}</li>
    })
    return(
        <header className="header">
            <nav className="header__menu">
                <ul className="header__menu-ul">
                    {headerItems}
                </ul>
            </nav>
        </header>
    )
}
