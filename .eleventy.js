

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./css/style.css");

    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
};