export const themes = {
  light: {
    primary: '#F4A261',
    text: '#1c1c1c',
    footerBackground: '#f6f6f6',
  },
} as const;

export type Theme = typeof themes.light;
