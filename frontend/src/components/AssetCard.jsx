function AssetCard({item}) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Type: {item.type}</p>
      <p>Qty: {item.quantity}</p>
      <p>Base: {item.base}</p>
    </div>
  );
}

export default AssetCard;