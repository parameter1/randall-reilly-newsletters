const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://randallreilly.serve.email-x.parameter1.com');

config
  .setAdUnits('ovd-daily', [
    {
      name: 'sponsor',
      id: '5f9c04eb32dc3ebbfaf3efc5',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'rotation-a',
      id: '5f874a0f32dc3e17dff3e9a0',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'rotation-b',
      id: '5f874a1f32dc3e761af3e9aa',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'rotation-c',
      id: '5f874b7a32dc3e2b0ef3e9c6',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'rotation-d',
      id: '5f874baa1949735baf5f5a74',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'rotation-e',
      id: '5f9c04c832dc3ec3e3f3efb2',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'sponsor',
      id: '5fa8132132dc3ed81df3fed7',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'rotation-a',
      id: '5fa813341949731cc25f714a',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'rotation-b',
      id: '5fa8135119497380e85f715d',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'rotation-c',
      id: '5fa8136832dc3ee2fbf3ff05',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'rotation-d',
      id: '5fa8137532dc3e2872f3ff18',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'rotation-e',
      id: '5fa813811949732de15f718b',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
