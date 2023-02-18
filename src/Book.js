import "./styles.css"
function Book ( { name, imgUri, id, notReaded } ) {
    return (
        <div className={`order-card-container ${notReaded ? 'selected' : ''}`}>
            <img 
                src={imgUri}
                alt={name}
                className="order-card-image"
            />
        </div>
    )
}

export default Book;