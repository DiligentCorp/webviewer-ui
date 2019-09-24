/**
 * Diligent
 * 
 * Enable or disable momentum scrolling of documens.
 * @method WebViewer#setMomentumScrollEnabled
 * @param {boolean} momentumScrollEnabled enable or disable momentum scrolling via API
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    instance.setMomentumScrollEnabled(false);
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  instance.setMomentumScrollEnabled(false);
});
 */

import TouchEventManager from 'helpers/TouchEventManager';

export default momentumScrollEnabled => {
  TouchEventManager.momentumScrollEnabled = momentumScrollEnabled;
};
