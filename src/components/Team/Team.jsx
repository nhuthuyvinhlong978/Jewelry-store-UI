import React from "react";
import "./team.css";
import team1 from "../../assets/image/team1.jpg";
import team2 from "../../assets/image/team2.jpg";
import team3 from "../../assets/image/team3.jpg";
import team4 from "../../assets/image/team4.jpg";

const Team = () => {
  return (
    <div className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title-2">
              <h4>Our Team</h4>
            </div>
          </div>
        </div>{" "}
        {/* section title end */}
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member">
              <div className="team-thumb img-hover_effect">
                <a>
                  <img src={team1} alt="Our Team Member" />
                </a>
              </div>
              <div className="team-content text-center">
                <h3>Timothy Beck</h3>
                <p>IT Expert</p>
                <a>TimothyBeck@gmail.com</a>
              </div>
            </div>
          </div>{" "}
          {/* end single team member */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member">
              <div className="team-thumb img-hover_effect">
                <a>
                  <img src={team2} alt="Our Team Member" />
                </a>
              </div>
              <div className="team-content text-center">
                <h3>Sarah Sanchez</h3>
                <p>Web Designer</p>
                <a>SarahSanchez@gmail.com</a>
              </div>
            </div>
          </div>{" "}
          {/* end single team member */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member">
              <div className="team-thumb img-hover_effect">
                <a>
                  <img src={team3} alt="Our Team Member" />
                </a>
              </div>
              <div className="team-content text-center">
                <h3>Edwin Adams</h3>
                <p>Content Writer</p>
                <a>EdwinAdams@gmail.com</a>
              </div>
            </div>
          </div>{" "}
          {/* end single team member */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member">
              <div className="team-thumb img-hover_effect">
                <a>
                  <img src={team4} alt="Our Team Member" />
                </a>
              </div>
              <div className="team-content text-center">
                <h3>Anny Adams</h3>
                <p>Marketing officer</p>
                <a>AnnyAdams@gmail.com</a>
              </div>
            </div>
          </div>{" "}
          {/* end single team member */}
        </div>
      </div>
    </div>
  );
};

export default Team;
