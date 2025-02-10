
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("card", function(planet, au, size) {
    let idPlanet = planet.toLowerCase();
    let title = size == 'lg' ? `<h2>${planet}</h2>` : `<h3>${planet}</h3>`;
    return `
    <div id="${idPlanet}" class="card ${size}">
      <div id="${idPlanet}-icon" class="icon"></div>
      ${title}
      <p>${au}</p>
    </div>
    `;
  });
};