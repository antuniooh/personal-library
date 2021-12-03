import "./styles.css"
function Book ( { name, imgUri, id } ) {
    return (
        <div className="order-card-container">
            <img 
                src={imgUri}
                alt={name}
                className="order-card-image"
            />
            <h3 className="order-card-title">
                {name}
            </h3>
            <div className="order-card-description">
             
            </div>
        </div>
    )
}

export default Book;