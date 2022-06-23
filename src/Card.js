
export default function Card({image, carType, about, backgroundColor}) {

    return(
        <div style={{backgroundColor: backgroundColor}} className="card">
                <img className="img" src={require(`${image}`)} alt="" />
                <h2>{carType}</h2>
                <p>{about}</p>
                <a style={{ color: backgroundColor }} className="card__link" href="#">Learn more</a>
        </div>
    )
}