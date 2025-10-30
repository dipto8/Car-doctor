import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-black">{title}</h2>
        <p className="text-orange-600">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-soft btn-success">Book  Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
