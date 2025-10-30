import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";

function Products() {
  return (
    <div>
      <div className="text-center mb-24">
        <p className="text-orange-500">Popular Products</p>
        <h1 className="text-2xl font-bold">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={product1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={product2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={product3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card border-lg w-96 shadow-sm">
          <figure className="px-10 pt-10 bg-[#F3F3F3]">
            <img src={product4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card  w-96 shadow-sm">
          <figure className="px-10 pt-10 bg-[#F3F3F3]">
            <img src={product5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-96 shadow-sm">
          <figure className="px-10 pt-10 bg-[#F3F3F3]  ">
            <img src={product6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
