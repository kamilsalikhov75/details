export function handleResetCheckbox (setIsChecked, isCheckedArr, seIsCheckedArr, checkboxArr){
    seIsCheckedArr(false);
    seIsCheckedArr(checkboxArr.map(li => li.name));
    if (isCheckedArr) {
        setIsChecked([]);
    }
}