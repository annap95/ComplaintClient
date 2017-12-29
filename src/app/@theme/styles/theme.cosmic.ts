export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'default',
  variables: {

    temperature: [
      '#2ec7fe',
      '#31ffad',
      '#7bff24',
      '#fff024',
      '#f7bd59',
    ],

    solar: {
      gradientLeft: '#7bff24',
      gradientRight: '#2ec7fe',
      shadowColor: '#19977E',
      radius: ['70%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      lineBg: '#d1d1ff',
      lineShadowBlur: '14',
      itemColor: '#BEBBFF',
      itemBorderColor: '#ffffff',
      itemEmphasisBorderColor: '#ffffff',
      shadowLineDarkBg: '#655ABD',
      shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
      gradFrom: 'rgba(118, 89, 255, 0.4)',
      gradTo: 'rgba(164, 84, 255, 0.5)',
    },

    chartjs: {
      axisLineColor: '#a1a1e5',
      textColor: '#ffffff',
    },
  },
};
