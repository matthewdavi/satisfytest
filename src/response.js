const response = {
  arrival_estimate: "2018-01-02T10:55:00.000Z",
  timestamps: {
    order_placed: "2018-01-02T10:37:00.000Z",
    accepted: "2018-01-02T10:37:00.000Z",
    preparing: "2018-01-02T10:39:00.000Z",
    in_transit: "2018-01-02T10:45:00.000Z",
    arriving: null,
    delivered: null
  },
  current_status: "in_transit", // One of "order_placed", "accepted", "preparing", "in_transit", "arriving", "delivered"
  current_location: {
    latitude: 37.785873,
    longitude: -122.4082367
  },
  destination: {
    address: {
      line1: "906 Mason St",
      line2: null,
      city: "San Francisco",
      state: "CA",
      zip: "94108",
      country: "usa"
    },
    location: {
      latitude: 37.792341,
      longitude: -122.4116597
    }
  },
  transport: {
    id: "5917d3ae-aade-4cdd-a3a0-32ed44a22d10",
    name: "John",
    type: "bicycle" // One of "car", "bicycle", "foot"
  },
  order: {
    sub_total: 3800, // in cents
    tax: 276, // in cents
    total: 4076, // in cents
    items: [
      {
        item: {
          id: "c808c4a6-0dd8-4bf1-b143-7e5a9d985ef3",
          category: "food",
          name: "Chicken Tikka Masala",
          size: null,
          price: 1200, // Price, in cents
          currency: "usd"
        },
        quantity: 2,
        paid: true,
        provider: {
          // The restaurant preparing this food
          id: "5917d3ae-aade-4cdd-a3a0-32ed44a22d10",
          name: "Pakwan",
          logo: "[LOGO URL]" // Logo URL, nothing here yet so feel free to leave out
        }
      },
      {
        item: {
          id: "83f55b5f-94c3-4d87-bb25-01db94f955bc",
          category: "food",
          name: "Golden Gate Burger",
          size: null,
          price: 900, // Price, in cents
          currency: "usd"
        },
        quantity: 1,
        paid: true,
        provider: {
          // The restaurant preparing this food
          id: "c8030857-5618-4c57-a1e5-c52e01b7f58e",
          name: "San Francisco Burger Co.",
          logo: "[LOGO URL]" // Logo URL, nothing here yet so feel free to leave out
        }
      },
      {
        item: {
          id: "83f55b5f-94c3-4d87-bb25-01db94f955bc",
          category: "drink",
          name: "Coke",
          size: "Large",
          price: 250, // Price, in cents
          currency: "usd"
        },
        quantity: 2,
        paid: true,
        provider: {
          // The restaurant preparing this food
          id: "c8030857-5618-4c57-a1e5-c52e01b7f58e",
          name: "San Francisco Burger Co.",
          logo: "[LOGO URL]" // Logo URL, nothing here yet so feel free to leave out
        }
      }
    ]
  }
};
module.exports = response;
