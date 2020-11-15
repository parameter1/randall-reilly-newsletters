const brands = require('./brands');
const emailX = require('./email-x');

const config = {
  emailX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'ccj-breaking-news': {
    name: 'Breaking News Alert',
    ...brands.ccj,
  },
  'ccj-daily': {
    name: 'Daily Report',
    ...brands.ccj,
  },
  'eqw-daily': {
    name: 'Daily Report',
    ...brands.eqw,
  },
  'ovd-breaking-news': {
    name: 'Breaking News Alert',
    ...brands.ovd,
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
