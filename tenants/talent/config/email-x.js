const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://delivery.mindfulcms.com/rr/default/compat/email-banner');

config

  .setAdUnits('tn-daily', [
    {
      name: 'sponsor',
      id: '5fd5227832dc3e465df40b51',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd5228f194973e2885f7e36',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd5229e19497383ac5f7e49',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd522b71949738b4c5f7e5c',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd522d21949736f1b5f7e6f',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd522e319497303c85f7e82',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tn-gear', [
    {
      name: 'sponsor',
      id: '60137e5432dc3e16d6f52900',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-a',
      id: '60137e7f32dc3e2406f52913',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-b',
      id: '60137e9132dc3e1c01f52926',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-c',
      id: '60137e9d32dc3ec262f52942',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tn-she-drives', [
    {
      name: 'sponsor',
      id: '5fd522fb194973af135f7e9e',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd5230932dc3e7885f40bb5',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd52319194973f3bb5f7eba',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd5233632dc3e36caf40bd1',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5234f32dc3eff7bf40be4',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tn-weekend-edition', [
    {
      name: 'sponsor',
      id: '5fd5227832dc3e465df40b51',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd5228f194973e2885f7e36',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd5229e19497383ac5f7e49',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd522b71949738b4c5f7e5c',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd522d21949736f1b5f7e6f',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd522e319497303c85f7e82',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
