export function CheckboxUL({ checkboxArr, isChecked, dispatch }) {

    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        if (checked) {
            dispatch({
                type: 'add_checkbox', name
            });
        } else {
            dispatch({
                type: 'remove_checkbox', name
            })
        }
    }

    const checkboxItems = checkboxArr.map(({ name, id }) =>
        <li key={id}>
            <label>
                <input id={id} type="checkbox" name={name} onChange={handleCheckboxChange} checked={isChecked.includes(name)} /> {name}
            </label>
        </li>);
    return (
        <ul className="filter__genres-ul">{checkboxItems}</ul>
    )

}