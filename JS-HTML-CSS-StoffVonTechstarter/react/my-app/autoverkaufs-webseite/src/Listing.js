function Listing ({Name, Preis, imageURL}){
return (

    <div>

    <img 
    src={imageURL}
    alt="NeuerText"

    style={{width: "300px", height: "auto"}}
    />
    <h2>Name: {Name}</h2>
    <h2>Preis: {Preis}€</h2>

    </div>
)

}

export default Listing;