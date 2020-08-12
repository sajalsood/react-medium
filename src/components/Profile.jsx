import React, { useState } from 'react';

function Profile() {
  return (
    <div className="Profile White-card Grid-rows Gap-one">
        <div className="Profile-pic">
            <i className="fa fa-medium Profile-logo"></i>
        </div>

        <div className="Profile-info">
            <h3><span className="profile-info-header">ReactMedium </span> We do things differently.</h3>
            <div>
              ReactMedium is not like any other platform on the internet. 
              Its sole purpose is to help you find compelling ideas, knowledge, 
              and perspectives. We don’t serve ads—we serve you, the curious reader who loves 
              to learn new things. ReactMedium is home to thousands of independent voices, 
              and we combine humans and technology to find the best reading for you—and
              filter out the rest.
            </div>
        </div>
    </div>
  );
}
export default Profile;
