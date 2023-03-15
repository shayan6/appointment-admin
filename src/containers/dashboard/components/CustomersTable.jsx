import { Button, Typography } from "antd";
import React from "react";

export default function CustomersTable() {
  return (
    <div class="table-responsive">
      <table class="table table-padded">
        <thead>
          <tr>
            <th>Assigned Doctor</th>
            <th>Last Comment</th>
            <th>Reply Date</th>
            <th class="text-center">Ticket</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>John Mayers</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Today</span>
              <span class="smaller lighter">1:52am</span>
            </td>
            <td class="text-center">
              <Button class="badge badge-success-inverted">
                Shopping
              </Button>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller green"></span>
              <span>Active</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>Mike Bishop</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                Please approve this request so we can move...
              </div>
            </td>
            <td>
              <span>Jan 19th</span>
              <span class="smaller lighter">3:22pm</span>
            </td>
            <td class="text-center">
              <Typography.Text class="badge badge-danger-inverted">
                Cafe
              </Typography.Text>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller red"></span>
              <span>Closed</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>Terry Crews</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                We will need some login credentials to make...
              </div>
            </td>
            <td>
              <span>Yesterday</span>
              <span class="smaller lighter">7:45am</span>
            </td>
            <td class="text-center">
              <Typography.Text class="badge badge-warning-inverted">
                Restaurants
              </Typography.Text>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>Pending</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>Phil Collins</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Jan 23rd</span>
              <span class="smaller lighter">2:12pm</span>
            </td>
            <td class="text-center">
              <Typography.Text class="badge badge-primary-inverted">
                Shopping
              </Typography.Text>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>Pending</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>Katy Pilsner</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                I have tried this solution but it does not open...
              </div>
            </td>
            <td>
              <span>Jan 12th</span>
              <span class="smaller lighter">9:51am</span>
            </td>
            <td class="text-center">
              <Typography.Text class="badge badge-danger-inverted">
                Groceries
              </Typography.Text>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller green"></span>
              <span>Active</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img alt="" src="https://avatars.githubusercontent.com/u/42208796?v=4" />
                <span>Wes Morgan</span>
              </div>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Jan 9th</span>
              <span class="smaller lighter">12:45pm</span>
            </td>
            <td class="text-center">
              <Typography.Text class="badge badge-primary-inverted">
                Business
              </Typography.Text>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>Pending</span>
            </td>
            <td class="row-actions">
              <Button>
                <i class="os-icon os-icon-grid-10"></i>
              </Button>
              <Button>
                <i class="os-icon os-icon-ui-44"></i>
              </Button>
              <Button class="danger">
                <i class="os-icon os-icon-ui-15"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}