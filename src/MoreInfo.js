import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import DoneIcon from "material-ui-icons/Done";
import InfoIcon from "material-ui-icons/Info";
import PhoneIcon from "material-ui-icons/Phone";
import moment from "moment";
import geoHelpers from "geo-helpers"; //this is an npm package a friend of mine made while he was at Hack Reactor in san francisco
const statuses = {
  order_placed: "order placed",
  in_transit: "On its way",
  arriving: "was arriving",
  delivered: "was delivered"
};
class MoreInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <FlatButton
          primary={true}
          onClick={this.handleClick}
          label="More info"
          style={{ color: "#5F84A3" }}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              primaryText={
                "Order Placed: " +
                moment(this.props.orderData.timestamps.order_placed).format(
                  "MMMM Do, h:mm a"
                )
              }
            />
            <MenuItem
              primaryText={
                "Most recent update: " +
                statuses[this.props.orderData.current_status] +
                " " +
                moment(
                  this.props.orderData.timestamps[
                    this.props.orderData.current_status
                  ]
                ).fromNow()
              }
            />
            <MenuItem
              primaryText={
                "Your courier is " +
                geoHelpers
                  .findGeodesic(
                    this.props.orderData.current_location.latitude,
                    this.props.orderData.current_location.longitude,
                    this.props.orderData.destination.location.latitude,
                    this.props.orderData.destination.location.longitude
                  )
                  .toFixed(0) +
                " meters away"
              }
            />
            <MenuItem
              primaryText={"Call " + this.props.orderData.transport.name}
              rightIcon={<PhoneIcon />}
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}
export default MoreInfo;
