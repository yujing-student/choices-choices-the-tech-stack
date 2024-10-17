export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./css/style.css");
    // deze regel code kopieert de css naar de outpyt

    // hou de css file in de gaten voor aanpassingen
    eleventyConfig.addWatchTarget('css');
    return {
        dir: {//naam van het project
            input: 'src',//dat is de map
            includes: '_includes',//includes daar staan de tempaltes en partials in
            output: '_site',//de templates worden in de output gegenereert
        },
        templateFormats: ['md', 'njk', 'html'],//dit zijn de template formats
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}