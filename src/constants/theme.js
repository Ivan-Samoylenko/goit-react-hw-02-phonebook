export const theme = {
  colors: {
    main: '#000000',
    bcg: {
      input: '#ffc800',
      secondary: '#ffff77',
    },
    accent: {
      btn: '#ff4600',
    },
  },
  space: ['0', '4px', '8px', '16px', '32px'],
  fontSizes: {
    text: '24px',
    deleteBtn: '8px',
    addBtn: '24px',
    fields: '15px',
    contact: '12px',
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: [1.2],
  breakpoints: ['480px', '768px', '1280px'],
  mediaQueries: {
    small: `@media screen and (min-width: 480px)`,
    medium: `@media screen and (min-width: 768px)`,
    large: `@media screen and (min-width: 1280px)`,
  },
  sizes: {
    mobile: 480,
    tablet: 768,
    desctop: 1280,
  },
  borders: {
    btn: `2px dashed #A638F5`,
  },
  radii: {
    addBtn: '10px',
    main: '8px',
  },
  shadows: {
    btn: `0 0 2px 1px #A638F5`,
    btnHover: `0 0 8px 4px #A638F5`,
  },
  transition: 'ease-in-out 200ms',
};
