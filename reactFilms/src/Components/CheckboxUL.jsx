export function CheckboxUL({ checkboxArr, isChecked, setIsChecked }) {

    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        if (checked) {
            setIsChecked((prevChecked) => [...prevChecked, name]);
        } else {
            setIsChecked((prevChecked) =>
                prevChecked.filter((item) => item !== name)
            );
        }
    }

    const checkboxItems = checkboxArr.map(({ name, id }) =>
        <li key={id}>
            <label>
                <input id={id} type="checkbox" name={name} onChange={handleCheckboxChange} checked={isChecked.includes(name)} /> {name}
            </label>
        </li>);
    return <ul className="filter__genres-ul">{checkboxItems}</ul>

}