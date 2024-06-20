const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'tn-daily': {
    name: 'Daily Report',
    ...brands.tn,
  },
  'tn-gear': {
    name: 'Gear',
    ...brands.tn,
  },
  'tn-she-drives': {
    name: 'She Drives',
    ...brands.tn,
  },
  'tn-weekend-edition': {
    name: 'Weekender',
    ...brands.tn,
  },
};

module.exports = config;
