function Header(props) {
    const { title = "Home", title2 } = props
    return (
        <div style={{ width: "100%", height: 70, backgroundColor: "yellow" }}>
            <h1>{title}</h1>
        </div>
    );
}

export default Header