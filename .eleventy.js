export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./css/style.css");
    // deze regel code kopieert de css naar de outpyt

    // hou de css file in de gaten voor aanpassingen
    eleventyConfig.addWatchTarget('css');

}