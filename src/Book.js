import "./styles.css"
function Book ( { name, imgUri, id } ) {
    return (
        <div className="order-card-container">
            <img 
                src={imgUri}
                alt={name}
                className="order-card-image"
            />
        </div>
    )
}

export default Book;