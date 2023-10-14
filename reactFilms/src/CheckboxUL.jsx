
export function Checkbox({checkboxArr}){
    const checkboxItems = checkboxArr.map(checkboxItem => 
        <li key={checkboxItem.id}>
            <label>
                <input type="checkbox" defaultValue={checkboxItem.name} /> {checkboxItem.name}
            </label>
        </li>);
    return <ul className="filter__genres-ul">{checkboxItems}</ul>
}
