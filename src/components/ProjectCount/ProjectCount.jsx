import React from 'react';
import projectCount from './projectCount.css';
const ProjectCount = () => {
  return (
    <div className="project-count-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-count text-center">
              <div className="count-icon">
                <span className="ion-ios-briefcase-outline" />
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ fontSize: '50px' }}
                ></i>
              </div>
              <div className="count-title">
                <h2 className="count">2169</h2>
                <span>Project Done</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-count text-center">
              <div className="count-icon">
                <span className="ion-ios-wineglass-outline" />
                <i
                  className="fa-solid fa-wine-glass"
                  style={{ fontSize: '50px' }}
                ></i>
              </div>
              <div className="count-title">
                <h2 className="count">869</h2>
                <span>Awards Winned</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-count text-center">
              <div className="count-icon">
                <span className="ion-ios-lightbulb-outline" />
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ fontSize: '50px' }}
                ></i>
              </div>
              <div className="count-title">
                <h2 className="count">689</h2>
                <span>Hours Worked</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-count text-center">
              <div className="count-icon">
                <span className="ion-happy-outline" />
                <i
                  className="fa-solid fa-face-smile"
                  style={{ fontSize: '50px' }}
                ></i>
              </div>
              <div className="count-title">
                <h2 className="count">2169</h2>
                <span>Happy Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
