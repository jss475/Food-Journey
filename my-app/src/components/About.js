import React from "react";


function About() {
  return (
    <>
    <div className="about_div">
      <div className="about_div_text">
        <h2>My Food Journey</h2>
          <p>
            My Food Journey allows you to keep a journal of all the places you've
            eaten at. You can easily track if you liked or disliked the
            restaurants you have visited!
          </p>
      </div>
      
      <div className="gallery_div">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
              <img src="item1.jpg" alt="Gallery image 1" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--2">
              <img src="item2.jpg" alt="Gallery image 2" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--3">
              <img src="item3.jpg" alt="Gallery image 3" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--4">
              <img src="item4.jpg" alt="Gallery image 4" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--5">
              <img src="item5.jpg" alt="Gallery image 5" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--6">
              <img src="item6.jpg" alt="Gallery image 6" className="gallery__img"/>
          </figure>
        </div>
      </div>
    </div>
 
  
    </>
  
  );
}

export default About;
