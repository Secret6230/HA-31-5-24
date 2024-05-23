function Listing({ Name, Preis, imageURL }) {
  return (
    <div>
      
      <img
        src={imageURL}
        alt="NeuerText"
      />

      <h2>Name: {Name}</h2>
      <h2>Preis: {Preis}€</h2>

    </div>
  );
}

export default Listing;