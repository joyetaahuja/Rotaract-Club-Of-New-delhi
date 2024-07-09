import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "SERVICE",
      description:"The Rotaract Club of New Delhi, emphasizes service above self. Members are committed to serving their communities and addressing global challenges through various projects and initiatives."

    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "INTEGRITY",
      description:"Members of our club adhere to high ethical standards in all their interactions and activities, ensuring honesty, fairness, and accountability in their service efforts."

    },
    {
      id: 3,
      image: "/impact.avif",
      title: "DIVERSITY AND INCLUSION",
      description:"Members of our club adhere to high ethical standards in all their interactions and activities, ensuring honesty, fairness, and accountability in their service efforts."
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR VALUES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
