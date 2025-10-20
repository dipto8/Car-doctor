import img1 from "../../../assets/images/about_us/parts.jpg";
import img2 from "../../../assets/images/about_us/person.jpg";
function About() {
  return (
    <div className="hero bg-base-200 my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={img1}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-8 p-4">
        
          <h1 className="text-5xl font-bold  text-black">
            We are qualified <br />& of experience <br /> in this field
          </h1>
          <p className="py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="btn btn-outline btn-secondary">Get more info</button>
        </div>
      </div>
    </div>
  );
}

export default About;
