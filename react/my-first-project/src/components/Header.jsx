

function Header(props) {
    console.log(props)
    console.log(props.dataOne)
    
    return (
        <div>
            <h1>This is heading</h1>
            <h3>This is sub heading</h3>
            <i>{props.dataOne}</i>
        </div>
    )
}





export default Header