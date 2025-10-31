import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

export default function CheckOut() {
  const service = useLoaderData();
  const { title, _id, price } = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const date = form.date.value;

    const order ={
        customerName : name,
        email,
        price,
        date,
        service: _id
    }
    console.log(order);
  };
  return (
    <div>
      <h2 className="text-3xl text-center text-orange-600">
        Check Out: {title}
      </h2>

      <form onSubmit={handleCheckOut} className="card-body">
        <div className=" grid  md:grid-cols-2 gap-4 border border-lime-400 p-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
              defaultValue={user?.name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              name="date"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered"
              name="email"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered"
              name="price"
             disabled
            defaultValue={"$" + price}
            />
          </div>
        </div>
        <div className="form-control mt-6 ">
          <button
            className="btn-success p-2 btn-block "
            type="submit"
            value="Order confirme"
          >
            Order confirme
          </button>
        </div>
      </form>
    </div>
  );
}
