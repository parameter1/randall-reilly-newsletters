const brands = require('./brands');
const emailX = require('./email-x');

const config = {
  emailX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'ccj-daily': {
    name: 'Daily Report',
    ...brands.ccj,
  },
  'eqw-daily': {
    name: 'Daily Report',
    ...brands.eqw,
  },
  'ovd-daily': {
    name: 'Daily Report',
    ...brands.ovd,
  },
  'tlc-daily': {
    name: 'Daily Report',
    ...brands.tlc,
  },
  'tn-daily': {
    name: 'Daily Report',
    ...brands.tn,
  },
  'tps-daily': {
    name: 'Daily Report',
    ...brands.tps,
  },
};

module.exports = config;
