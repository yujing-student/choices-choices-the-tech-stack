module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};

//https://github.com/5t3ph/11ty-egghead-collection/blob/master/lessons/03-11ty-collection/.eleventy.js