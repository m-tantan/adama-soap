import type { Config } from "tailwindcss";
import designTokens from "./design-tokens.json";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: designTokens.colors.primary.DEFAULT,
          light: designTokens.colors.primary.light,
          lighter: designTokens.colors.primary.lighter,
          lightest: designTokens.colors.primary.lightest,
        },
        secondary: {
          DEFAULT: designTokens.colors.secondary.DEFAULT,
          light: designTokens.colors.secondary.light,
          dark: designTokens.colors.secondary.dark,
        },
        accent: {
          peach: {
            DEFAULT: designTokens.colors.accent.peach.DEFAULT,
            dark: designTokens.colors.accent.peach.dark,
          },
          purple: {
            light: designTokens.colors.accent.purple.light,
            DEFAULT: designTokens.colors.accent.purple.DEFAULT,
            dark: designTokens.colors.accent.purple.dark,
            darker: designTokens.colors.accent.purple.darker,
            darkest: designTokens.colors.accent.purple.darkest,
          },
          green: {
            light: designTokens.colors.accent.green.light,
            DEFAULT: designTokens.colors.accent.green.DEFAULT,
            dark: designTokens.colors.accent.green.dark,
            darker: designTokens.colors.accent.green.darker,
            darkest: designTokens.colors.accent.green.darkest,
          },
          blue: {
            light: designTokens.colors.accent.blue.light,
            DEFAULT: designTokens.colors.accent.blue.DEFAULT,
            dark: designTokens.colors.accent.blue.dark,
          },
          brown: {
            DEFAULT: designTokens.colors.accent.brown.DEFAULT,
            dark: designTokens.colors.accent.brown.dark,
          },
        },
        neutral: {
          white: designTokens.colors.neutral.white,
          black: designTokens.colors.neutral.black,
          gray: {
            light: designTokens.colors.neutral.gray.light,
            DEFAULT: designTokens.colors.neutral.gray.DEFAULT,
            dark: designTokens.colors.neutral.gray.dark,
          },
          dark: designTokens.colors.neutral.dark,
        },
        error: designTokens.colors.error,
        info: designTokens.colors.info,
        warning: designTokens.colors.warning,
      },
      fontFamily: {
        title: designTokens.fonts.title.family.split(','),
        heading: designTokens.fonts.headingM.family.split(','),
        body: designTokens.fonts.body.family.split(','),
        menu: designTokens.fonts.menu.family.split(','),
        button: designTokens.fonts.button.family.split(','),
      },
      fontSize: {
        'title': [designTokens.fonts.title.size, { lineHeight: designTokens.fonts.title.lineHeight }],
        'page-title': [designTokens.fonts.pageTitle.size, { lineHeight: designTokens.fonts.pageTitle.lineHeight }],
        'heading-xl': [designTokens.fonts.headingXl.size, { lineHeight: designTokens.fonts.headingXl.lineHeight }],
        'heading-l': [designTokens.fonts.headingL.size, { lineHeight: designTokens.fonts.headingL.lineHeight }],
        'heading-m': [designTokens.fonts.headingM.size, { lineHeight: designTokens.fonts.headingM.lineHeight }],
        'heading-s': [designTokens.fonts.headingS.size, { lineHeight: designTokens.fonts.headingS.lineHeight }],
        'body': [designTokens.fonts.body.size, { lineHeight: designTokens.fonts.body.lineHeight }],
        'menu': [designTokens.fonts.menu.size, { lineHeight: designTokens.fonts.menu.lineHeight }],
        'button': [designTokens.fonts.button.size, { lineHeight: designTokens.fonts.button.lineHeight }],
      },
      spacing: {
        'xs': designTokens.spacing.xs,
        'sm': designTokens.spacing.sm,
        'md': designTokens.spacing.md,
        'lg': designTokens.spacing.lg,
        'xl': designTokens.spacing.xl,
        '2xl': designTokens.spacing['2xl'],
        '3xl': designTokens.spacing['3xl'],
      },
      borderRadius: {
        'none': designTokens.borderRadius.none,
        'sm': designTokens.borderRadius.sm,
        'md': designTokens.borderRadius.md,
        'lg': designTokens.borderRadius.lg,
      },
      boxShadow: {
        'sm': designTokens.boxShadow.sm,
        'md': designTokens.boxShadow.md,
        'lg': designTokens.boxShadow.lg,
      },
      transitionDuration: {
        'default': '400ms',
        'fast': '200ms',
        'slow': '300ms',
      },
      screens: {
        'mobile': { 'max': designTokens.breakpoints.mobile },
        'tablet': { 'max': designTokens.breakpoints.tablet },
        'desktop': { 'min': designTokens.breakpoints.desktop },
      },
    },
  },
  plugins: [],
};

export default config;
