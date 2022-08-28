const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
        colors: {
            'mantis': '#74C365',
            'silver': '#C6C6C6',
        },
    },
    fontFamily: {
      'ComicMono': ['ComicMono'],
    },
  },
};

module.exports = config;
