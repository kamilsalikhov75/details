export function Select({selectTitle, selectArr}){
    const selectItems = selectArr.map(selectItem =>
        <option key={selectItem.id} value={selectItem.title}>{selectItem.title}</option>);
    return(
        <div className="select__items">
            <p className="filter__sort-title">{selectTitle}</p>
            <select key="selectKey" className="filter__sort-select">{selectItems}</select>
        </div>
        
    ) 
}

