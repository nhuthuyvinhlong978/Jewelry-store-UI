import React from 'react';
import { getOwnerID } from '../../../auth/auth';
import { useEffect, useState} from 'react';
import { changeProfile, getProfile } from '../../../api/api';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  const history = useHistory();
  const ownerID = getOwnerID();
  const [profile, setProfile] = useState();
  const [data, setData] = useState({
    ownerID: ownerID,
    fullName: "",
    password: "",
    confirmPassword: ""
  })
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    if(ownerID){
      await getProfile(ownerID).then(res => {
        setProfile(res.data);
        setData({
          ownerID: ownerID,
          fullName:res.data.fullName,
          password:"", 
          confirmPassword:""
        })
      })
    }
  },[ownerID, loading])

  const handleChangeData = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(data.password !== data.confirmPassword){
      alert('Password and Confirm Password not success');
    }

    if(data.fullName === ''){
      alert('Full name is required field');
    }
    await changeProfile(data).then(res => {
      alert("Change Profile successfully");
      setLoading(!loading);
    })
    
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push("/")
  }
  return (
    <div className="container">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 mt-5">
        <form>
          <div className="login-form">
            <div className="row">
              <div className="col-md-12 col-12 mb--20">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" defaultValue={profile?.fullName} key={profile?.fullName} name="fullName" onChange={(event) => {handleChangeData(event)}}/>
              </div>

              <div className="col-md-12">
                <label>Email Address*</label>
                <input type="email" placeholder="Email Address" defaultValue={profile?.email} key={profile?.email} disabled/>
              </div>
              <div className="col-md-6">
                <label>New Password</label>
                <input type="password" placeholder="New Password" name="password" onChange={(event) => {handleChangeData(event)}}/>
              </div>
              <div className="col-md-6">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm New Password" name="confirmPassword" onChange={(event) => {handleChangeData(event)}}/>
              </div>
              <div className="col-12">
                <button className="hiraola-register_btn" onClick={(event) => {handleSubmit(event)}}>Save Change</button>
                <button className="hiraola-register_btn" onClick={(event) => {handleLogout(event)}} style={{float: "right"}}>Logout</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
