import React from "react";
import avatar from "../../../../src/images/avatar.svg";
import { Col, Divider, Row } from "antd";

export default function RecentActivity() {
  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Recent activities
        </Divider>
        <div className="activity-boxes-w">
          <div className="activity-box-w">
            <div className="activity-time">10 Min</div>
            <div className="activity-box">
              <div className="activity-avatar">
                <img alt="" src={avatar} />
              </div>
              <div className="activity-info">
                <div className="activity-role">John Mayers</div>
                <strong className="activity-title">Opened New Account</strong>
              </div>
            </div>
          </div>
          <div className="activity-box-w">
            <div className="activity-time">2 Hours</div>
            <div className="activity-box">
              <div className="activity-avatar">
                <img alt="" src={avatar} />
              </div>
              <div className="activity-info">
                <div className="activity-role">Ben Gossman</div>
                <strong className="activity-title">Posted Comment</strong>
              </div>
            </div>
          </div>
          <div className="activity-box-w">
            <div className="activity-time">5 Hours</div>
            <div className="activity-box">
              <div className="activity-avatar">
                <img alt="" src={avatar} />
              </div>
              <div className="activity-info">
                <div className="activity-role">Phil Nokorin</div>
                <strong className="activity-title">Opened New Account</strong>
              </div>
            </div>
          </div>
          <div className="activity-box-w">
            <div className="activity-time">2 Days</div>
            <div className="activity-box">
              <div className="activity-avatar">
                <img alt="" src={avatar} />
              </div>
              <div className="activity-info">
                <div className="activity-role">Jenny Miksa</div>
                <strong className="activity-title">Uploaded Image</strong>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
