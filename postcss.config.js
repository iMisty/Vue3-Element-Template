/*
 * PostCSS config.
 * Tailwind v4 is handled by @tailwindcss/vite, so only autoprefixer
 * remains here for the project's hand-written CSS/Less.
 */
export default {
  plugins: {
    autoprefixer: {},
  },
};
