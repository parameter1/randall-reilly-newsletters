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
    unsubscribeLink: 'https://sample.dragonforms.com/loading.do?omedasite=CCJ_prefcntr&r=@{encrypted_customer_id}@',
    ...brands.ccj,
  },
  'ccj-equipment-weekly': {
    name: 'Equipment Weekly',
    unsubscribeLink: 'https://sample.dragonforms.com/loading.do?omedasite=CCJ_prefcntr&r=@{encrypted_customer_id}@',
    ...brands.ccj,
  },
  'ccj-final-mile': {
    name: 'Final Mile',
    ...brands.ccj,
  },
  'ccj-maintenance-matters': {
    name: 'Maintenance Matters',
    ...brands.ccj,
  },
  'ccj-regulatory-rundown': {
    name: 'Regulatory Rundown',
    unsubscribeLink: 'https://sample.dragonforms.com/loading.do?omedasite=CCJ_prefcntr&r=@{encrypted_customer_id}@',
    ...brands.ccj,
  },
  'ccj-safety-tech': {
    name: 'Safety Tech',
    ...brands.ccj,
  },
  'ccj-technology-weekly': {
    name: 'Technology Weekly',
    unsubscribeLink: 'https://sample.dragonforms.com/loading.do?omedasite=CCJ_prefcntr&r=@{encrypted_customer_id}@',
    ...brands.ccj,
  },
  'ccj-weekend-edition': {
    name: 'Weekend Edition',
    unsubscribeLink: 'https://sample.dragonforms.com/loading.do?omedasite=CCJ_prefcntr&r=@{encrypted_customer_id}@',
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
    ...brands.eqw,
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
  'ovd-maintenance-matters': {
    name: 'Maintenance Matters',
    ...brands.ovd,
  },
  'ovd-haul-with-authority': {
    name: 'Haul With Authority',
    ...brands.ovd,
  },
  'ovd-regulatory-rundown': {
    name: 'Regulatory Rundown',
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
  'tps-maintenance-matters': {
    name: 'Maintenance Matters',
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
  'conexpo-special-report': {
    name: 'CONEXPO Special Report',
    ...brands.eqw,
  },
  'clean-trucking': {
    name: 'Clean Trucking',
    unsubscribeLink: '',
    ...brands.ct,
  },
};

module.exports = config;
