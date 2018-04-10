var _ = require('lodash');

const purchases = [
  { month: "February", price: 37.85 },
  { month: "January", price: 73.24 },
  { month: "February", price: 61.41 },
  { month: "April", price: 41.07 },
  { month: "March", price: 34.5 },
  { month: "April", price: 68.52 },
  { month: "March", price: 44.53 },
  { month: "April", price: 44.95 },
  { month: "January", price: 72.86 },
  { month: "February", price: 58.96 },
  { month: "April", price: 88.62 },
  { month: "April", price: 32.53 },
  { month: "January", price: 61.02 },
  { month: "April", price: 22.92 },
  { month: "April", price: 79.4 },
  { month: "April", price: 13.23 },
  { month: "February", price: 26.31 },
  { month: "February", price: 74.3 },
  { month: "March", price: 28.76 },
  { month: "March", price: 85.51 },
  { month: "March", price: 75.88 },
  { month: "January", price: 22.83 },
  { month: "January", price: 44.39 },
  { month: "February", price: 22.04 },
  { month: "April", price: 56.89 },
  { month: "February", price: 86.19 },
  { month: "April", price: 87.99 },
  { month: "January", price: 14.25 },
  { month: "March", price: 60.8 },
  { month: "February", price: 23.65 }
];

const totalByMonth = _.groupBy(purchases,'month');