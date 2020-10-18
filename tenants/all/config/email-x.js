const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://randallreilly.serve.email-x.parameter1.com');

config
  .setAdUnits('ovd-daily', [
    {
      name: 'ad-slot-1',
      id: '5f874a0f32dc3e17dff3e9a0',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'ad-slot-2',
      id: '5f874a1f32dc3e761af3e9aa',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'ad-slot-3',
      id: '5f874b7a32dc3e2b0ef3e9c6',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'ad-slot-4',
      id: '5f874baa1949735baf5f5a74',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
