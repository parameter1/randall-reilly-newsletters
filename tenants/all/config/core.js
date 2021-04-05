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
  'ccj-breaking-news': {
    name: 'Breaking News Alert',
    ...brands.ccj,
  },
  'ccj-daily': {
    name: 'Daily Report',
    weekendName: 'Weekend Edition',
    ...brands.ccj,
  },
  'ccj-equipment-weekly': {
    name: 'Equipment Weekly',
    ...brands.ccj,
  },
  'ccj-final-mile': {
    name: 'Final Mile',
    ...brands.ccj,
  },
  'ccj-technology-weekly': {
    name: 'Technology Weekly',
    ...brands.ccj,
  },
  'ccj-weekend-edition': {
    name: 'Weekend Edition',
    ...brands.ccj,
  },
  'eqw-better-roads': {
    name: 'Better Roads',
    ...brands.eqw,
  },
  'eqw-big-iron-dealer': {
    name: 'Big Iron Dealer',
    ...brands.eqw,
  },
  'eqw-daily': {
    name: 'Daily Report',
    ...brands.eqw,
  },
  'eqw-technology-weekly': {
    name: 'Technology Weekly',
    ...brands.ovd,
  },
  'eqw-weekend-edition': {
    name: 'Weekend Edition',
    ...brands.eqw,
  },
  'hwt-weekly': {
    name: 'Weekly Report',
    ...brands.hwt,
  },
  'ovd-breaking-news': {
    name: 'Breaking News Alert',
    ...brands.ovd,
  },
  'ovd-custom-rigs': {
    name: 'Custom Rigs',
    ...brands.ovd,
  },
  'ovd-daily': {
    name: 'Daily Report',
    ...brands.ovd,
  },
  'ovd-weekend-edition': {
    name: 'Weekend Edition',
    ...brands.ovd,
  },
  'ovd-gear': {
    name: 'Gear',
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
  'tps-daily': {
    name: 'Daily Report',
    ...brands.tps,
  },
  'tps-successful-dealer': {
    name: 'Successful Dealer',
    ...brands.tps,
  },
  'tps-weekly': {
    name: 'Weekly Report',
    ...brands.tps,
  },
};

module.exports = config;
