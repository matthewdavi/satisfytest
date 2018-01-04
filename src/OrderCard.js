import React, { Component } from "react";
import { CardHeader, Card } from "material-ui/Card";
import ItemsList from "./ItemsList.js";
import LinearProgress from "material-ui/LinearProgress";
import moment from "moment";
import foot from "./foot.svg";
import bicycle from "./bicycle.svg";
import car from "./car.svg";
import MoreInfo from './MoreInfo';
const statuses = {
  order_placed: { word: "was placed", doneness: 25 },
  accepted: { word: "was accepted", doneness: 40 },
  in_transit: { word: "is in transit", doneness: 55 },
  arriving: { word: "is arriving", doneness: 90 },
  delivered: { word: "was delivered", doneness: 100 }
};
const vehicles = { bicycle: bicycle, car: car, foot: foot }; //this object shouldn't be necessary but JSX was freaking out about the img src
class OrderCard extends Component {
  render() {
    console.log(this.props.orderData);
    console.log(moment.format);
    return <Card className="orderCard">
        <CardHeader title="Thank you for ordering from Satisfy" titleStyle={{ fontSize: "20px", fontFamily: "Open Sans" }} subtitle="Here is your order summary" />
        <ItemsList orderData={this.props.orderData} />
        <h3>
          Your order {statuses[this.props.orderData.current_status].word} {statuses[this.props.orderData.current_status].doneness > 40 ? ` with ${this.props.orderData.transport.name} ` : " "}
          <img src={vehicles[this.props.orderData.transport.type]} style={{ position: "relative", left: 10, top: 10 }} height="50px" width="50px" alt={"vehicle icon"} />
        </h3>
        <LinearProgress color={"#75A1C7"} mode="determinate" value={statuses[this.props.orderData.current_status].doneness} />
        <h3>
          Your order should arrive by {moment(this.props.orderData.arrival_estimate).format("h:mm a") + " "}
          {"(" + moment(this.props.orderData.arrival_estimate).fromNow() + ")"}
        </h3>
        <MoreInfo orderData={this.props.orderData} />
      </Card>;
  }
}

export default OrderCard;
