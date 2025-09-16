interface job {
  userId: String;
  title: String;
  discription: String;
  company: String;
  location: String;
}

const Cards = ({job}:{job:job}) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{job?.title}</h2>
        <p>
          {job?.discription}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;


