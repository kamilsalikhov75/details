export function Button({ buttonText, onClick }) {
    return (
        <>
            <button className='buttonStyle' onClick={() => onClick()}>{buttonText}</button>
        </>
    )
}