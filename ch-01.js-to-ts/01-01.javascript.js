/**
 * Performs a painter painting a particular painting.
 * @param {Painting} painter
 * @param {string} painting
 * @returns {boolean} Wheather the painter painted the painting.
 */
function paintPainting(painter, painting) {
  return painter.prepare().patint(painting, painter.ownMaterials).finish();
}
