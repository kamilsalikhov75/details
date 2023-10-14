export function Pagination({n}){

    const pagArr = [];
    if (n) for (let i = 1; i<= n;) pagArr.push(i++);
       

    const pagItems = pagArr.map(pagItem =>(
        <li key={pagItem.id}>
            <a key={pagItem.id} href="#" className="pag__item">{pagItem}</a>
        </li>)
    )
    return <ul key={"pagUl"} className="filter__pagination-ul">
        <a key={"pagBack"} className="pag__item">&#60;</a>
        {pagItems}
        <a key={"pagNext"} className="pag__item">&#62;</a>
        </ul>
}


