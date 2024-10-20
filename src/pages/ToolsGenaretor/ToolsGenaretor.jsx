const ToolsGenaretor = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-sans text-center"> All Tools </h1>
      <div className="mt-5">
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto border">
          <figure>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </figure>
          <div className="card-body bg-blue-300">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsGenaretor;
