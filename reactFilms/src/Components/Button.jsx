export function Button({ onClick, children }) {
    return (
        <>
            <button className='buttonStyle' onClick={() => onClick()}>{children}</button>
        </>
    )
}