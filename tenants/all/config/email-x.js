const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://randallreilly.serve.email-x.parameter1.com');

config
  .setAdUnits('ccj-breaking-news', [
    {
      name: 'sponsor',
      id: '5fd50754194973b7d35f798f',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ccj-daily', [
    {
      name: 'sponsor',
      id: '5fa8132132dc3ed81df3fed7',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fa813341949731cc25f714a',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fa8135119497380e85f715d',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fa8136832dc3ee2fbf3ff05',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fa8137532dc3e2872f3ff18',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fa813811949732de15f718b',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ccj-technology-weekly', [
    {
      name: 'sponsor',
      id: '5fc7b3db1949735d2d5f75a1',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fc7b40832dc3e83aef4029b',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fc7b4191949737eba5f75f3',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fc7b4281949733ceb5f7606',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fc7b43632dc3ec5daf402c0',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ccj-equipment-weekly', [
    {
      name: 'sponsor',
      id: '5fd50bc132dc3eb4b0f40715',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd50bee32dc3e4e28f40731',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd50c0032dc3e6e96f4074d',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd50c1532dc3ec2a2f40757',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd50c29194973816d5f7a3b',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ccj-weekend-edition', [
    {
      name: 'sponsor',
      id: '5fa8132132dc3ed81df3fed7',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fa813341949731cc25f714a',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fa8135119497380e85f715d',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fa8136832dc3ee2fbf3ff05',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fa8137532dc3e2872f3ff18',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fa813811949732de15f718b',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('eqw-better-roads', [
    {
      name: 'sponsor',
      id: '5fd50ce01949735e935f7ace',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd50d0532dc3e1e01f407fb',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd50d8f194973f95a5f7aea',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd50dae32dc3e1decf40829',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd50dd032dc3e0f31f40845',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('eqw-big-iron-dealer', [
    {
      name: 'sponsor',
      id: '5fd5152b19497312045f7b45',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd5153c32dc3e7da7f40890',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd5156219497317c05f7b6a',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd5157519497350885f7b74',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5158832dc3eb31bf408b5',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('eqw-daily', [
    {
      name: 'sponsor',
      id: '5fd515a519497300285f7ba2',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd515ba19497360835f7bbe',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd515e532dc3eee8ff408fe',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd5160232dc3eb78ef40911',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5161a32dc3ee09ef40924',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd5163232dc3ef8a3f4092e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('eqw-weekend-edition', [
    {
      name: 'sponsor',
      id: '5fd515a519497300285f7ba2',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd515ba19497360835f7bbe',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd515e532dc3eee8ff408fe',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd5160232dc3eb78ef40911',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5161a32dc3ee09ef40924',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd5163232dc3ef8a3f4092e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('hwt-weekly', [
    {
      name: 'sponsor',
      id: '5fd525b41949732ac65f8036',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd525c419497313805f8049',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd525d6194973d8f55f8053',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd525ef1949731d3b5f805d',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5261732dc3ec916f40d65',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ovd-breaking-news', [
    {
      name: 'sponsor',
      id: '5fd5166932dc3ec26ef4096f',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ovd-custom-rigs', [
    {
      name: 'sponsor',
      id: '5fd5167e32dc3e4af9f40982',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd5169b1949736dd95f7c62',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd516b032dc3ef56ff40995',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd516c632dc3e3ae1f409a8',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd516e332dc3e900ef409b2',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ovd-daily', [
    {
      name: 'sponsor',
      id: '5f9c04eb32dc3ebbfaf3efc5',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5f874a0f32dc3e17dff3e9a0',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5f874a1f32dc3e761af3e9aa',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5f874b7a32dc3e2b0ef3e9c6',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5f874baa1949735baf5f5a74',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5f9c04c832dc3ec3e3f3efb2',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ovd-gear', [
    {
      name: 'sponsor',
      id: '60137f3632dc3e5817f52979',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-a',
      id: '60137f4f32dc3e54ccf52983',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-b',
      id: '60137f8a19497372a66097f9',
      width: 300,
      height: 250,
    },
    {
      name: 'fixed-c',
      id: '60137f9d32dc3e67cef5299f',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('ovd-weekend-edition', [
    {
      name: 'sponsor',
      id: '5f9c04eb32dc3ebbfaf3efc5',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5f874a0f32dc3e17dff3e9a0',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5f874a1f32dc3e761af3e9aa',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5f874b7a32dc3e2b0ef3e9c6',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5f874baa1949735baf5f5a74',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5f9c04c832dc3ec3e3f3efb2',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tlc-daily', [
    {
      name: 'sponsor',
      id: '5fd521a019497331c25f7d99',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd521ad32dc3e3e58f40abf',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd521ca1949733ca05f7dbe',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd521e232dc3ebc9ef40ae4',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd5221f19497357ab5f7dda',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd522311949735e705f7de4',
      width: 300,
      height: 250,
    },
  ])

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

  .setAdUnits('tn-weekly', [
    {
      name: 'sponsor',
      id: '603bbca132dc3e1761f57a72',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '603bbcb919497341ee60e481',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '603bbcd3194973e0f960e494',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '603bbce4194973a9dd60e4a7',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '603bbcfa32dc3e5639f57aa9',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tps-daily', [
    {
      name: 'sponsor',
      id: '5fd523ca194973987d5f7f03',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd523e032dc3e4cadf40c24',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd523f232dc3eedecf40c2e',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd524051949730b955f7f28',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd52417194973573a5f7f3b',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '5fd5242e19497372645f7f4e',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tps-successful-dealer', [
    {
      name: 'sponsor',
      id: '5fd52449194973fec45f7f6a',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd524871949731b255f7f7d',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd5249a32dc3e1e63f40c9b',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd524c7194973464b5f7fa2',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd524d732dc3e3204f40ca5',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('tps-weekly', [
    {
      name: 'sponsor',
      id: '5fd524fd32dc3e4ceef40cca',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '5fd52510194973261c5f7fe2',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '5fd52523194973abdb5f7ff5',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '5fd5253532dc3e7d31f40cf8',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '5fd52597194973b1e05f8008',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
