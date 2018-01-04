import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import DoneIcon from "material-ui-icons/Done";
import InfoIcon from "material-ui-icons/Info";
import MoreInfo from "./MoreInfo.js";
import DrinkIcon from "material-ui-icons/LocalDrink";
function parsePrice(cents) {
  return "$" + (cents / 100).toFixed(2);
}
class Item extends Component {
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
      <ListItem>
        {this.props.category === "drink" ? (
          <FlatButton
            labelStyle={{ textTransform: "none" }}
            onClick={this.handleClick}
            label={this.props.quantity + " " + this.props.name}
            icon={<DrinkIcon />}
          />
        ) : (
          <FlatButton
            labelStyle={{ textTransform: "none" }}
            onClick={this.handleClick}
            label={this.props.quantity + " " + this.props.name}
            icon={<InfoIcon />}
          />
        )}

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
                "Price: " +
                parsePrice(this.props.price * this.props.quantity) +
                " "
              }
            />
            <MenuItem primaryText={"From: " + this.props.provider} />
            {this.props.size != null ? (
              <MenuItem primaryText={"Size: " + this.props.size} />
            ) : null}
            {this.props.paid ? (
              <MenuItem
                primaryText="Paid"
                rightIcon={<DoneIcon style={{ color: "blue" }} />}
              />
            ) : (
              <MenuItem primaryText="Payment required" />
            )}
          </Menu>
        </Popover>
      </ListItem>
    );
  }
}
export default Item;
