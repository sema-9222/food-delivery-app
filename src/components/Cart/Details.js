export function Details() {
  return (
    <>
      <h3
        style={{
          textAlign: "initial",
        }}
      >
        Shopping Cart
      </h3>
      <div className="cartinfo">
        <div className="details-head">
          <p>Details</p>
        </div>
        <div className="details-info">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
    </>
  );
}
