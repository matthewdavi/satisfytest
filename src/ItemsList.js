import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import DoneIcon from "material-ui-icons/Done";
import InfoIcon from "material-ui-icons/Info";
import Divider from "material-ui/Divider";
import Item from "./Item.js";
function parsePrice(cents) {
  return "$" + (cents / 100).toFixed(2);
}
const Address = function(props) {
  return (
    <div>
      <h4>{props.address.line1} </h4>
      {props.address.line2 != null ? (
        <h4>Apartment number: {props.address.line2}</h4>
      ) : null}
      <h4>
        {props.address.city}, {props.address.state}, {props.address.zip}
      </h4>
    </div>
  );
};

class ItemsList extends Component {
  render() {
    const items = this.props.orderData.order.items;
    return (
      <div>
        <List>
          {items.map((item, ind) => (
            <Item
              key={ind}
              name={item.item.name}
              size={item.item.size}
              price={item.item.price}
              quantity={item.quantity}
              currency={item.item.currency}
              provider={item.provider.name}
              paid={item.paid}
              category={item.item.category}
            />
          ))}
        </List>
        <div style={{ marginLeft: 15 }}>
          <h4>Subtotal: {parsePrice(this.props.orderData.order.sub_total)} </h4>
          <h4>Tax: {parsePrice(this.props.orderData.order.tax)}</h4>
          <h2>Total: {parsePrice(this.props.orderData.order.total)}</h2>
        </div>
        <Divider />
        <h2>Delivery to </h2>
        <Address address={this.props.orderData.destination.address} />{" "}
        <Divider />
      </div>
    );
  }
}

export default ItemsList;
