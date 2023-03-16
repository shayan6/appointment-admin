import React from "react";
import avatar from "../../../../src/images/avatar.svg"

export default function RecentActivity() {
  return (
    <div class="activity-boxes-w">
      <div class="activity-box-w">
        <div class="activity-time">10 Min</div>
        <div class="activity-box">
          <div class="activity-avatar">
            <img alt="" src={avatar} />
          </div>
          <div class="activity-info">
            <div class="activity-role">John Mayers</div>
            <strong class="activity-title">Opened New Account</strong>
          </div>
        </div>
      </div>
      <div class="activity-box-w">
        <div class="activity-time">2 Hours</div>
        <div class="activity-box">
          <div class="activity-avatar">
            <img alt="" src={avatar} />
          </div>
          <div class="activity-info">
            <div class="activity-role">Ben Gossman</div>
            <strong class="activity-title">Posted Comment</strong>
          </div>
        </div>
      </div>
      <div class="activity-box-w">
        <div class="activity-time">5 Hours</div>
        <div class="activity-box">
          <div class="activity-avatar">
            <img alt="" src={avatar} />
          </div>
          <div class="activity-info">
            <div class="activity-role">Phil Nokorin</div>
            <strong class="activity-title">Opened New Account</strong>
          </div>
        </div>
      </div>
      <div class="activity-box-w">
        <div class="activity-time">2 Days</div>
        <div class="activity-box">
          <div class="activity-avatar">
            <img alt="" src={avatar} />
          </div>
          <div class="activity-info">
            <div class="activity-role">Jenny Miksa</div>
            <strong class="activity-title">Uploaded Image</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
