const Cards = ({ icon, title, content }) => {
    return (
        <div className="card-container">
            <div class="cards">
                <div class="icono">{icon}</div>
                <h2 class="title">{title}</h2>
                <p class="description">{content}</p>
            </div>
        </div>
    )
}

export default Cards;