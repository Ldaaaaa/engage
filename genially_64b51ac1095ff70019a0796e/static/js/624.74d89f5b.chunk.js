"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[624],{76091:(i,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GeniallyScript=void 0;e.GeniallyScript=class{constructor(i,e){this.events={},this.script=i,this.geniallyEngine=e}}},42624:(i,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});const t=n(76091),l=n(56132);class o extends t.GeniallyScript{constructor(i,e){super(i,e),this.events={onEnteringSlide:this.initialize.bind(this)}}initialize(){this.initializeRotation(),this.initializeMove()}initializeRotation(){const i=this.geniallyEngine.findElementsByTag("rotateItems"),e=this.geniallyEngine.getConfigurationValue("rotateItems");i.forEach((i=>{this.geniallyEngine.addEventListener(i.id,l.EventScript.click,(()=>{const n=e.find((e=>e.itemId===i.id)),t=null===n||void 0===n?void 0:n.configuration.rotateElement.value,l=null===n||void 0===n?void 0:n.configuration.rotate.value;this.geniallyEngine.getItemById(t).rotate(l)}))}))}initializeMove(){this.initializeMoveX(),this.initializeMoveY()}initializeMoveX(){const i=this.geniallyEngine.findElementsByTag("moveX"),e=this.geniallyEngine.getConfigurationValue("moveX");i.forEach((i=>{this.geniallyEngine.addEventListener(i.id,l.EventScript.click,(()=>{const n=e.find((e=>e.itemId===i.id)),t=null===n||void 0===n?void 0:n.configuration.moveElement.value,l=null===n||void 0===n?void 0:n.configuration.move.value;this.geniallyEngine.getItemById(t).move(l,0)}))}))}initializeMoveY(){const i=this.geniallyEngine.findElementsByTag("moveY"),e=this.geniallyEngine.getConfigurationValue("moveY");i.forEach((i=>{this.geniallyEngine.addEventListener(i.id,l.EventScript.click,(()=>{const n=e.find((e=>e.itemId===i.id)),t=null===n||void 0===n?void 0:n.configuration.moveElement.value,l=null===n||void 0===n?void 0:n.configuration.move.value;this.geniallyEngine.getItemById(t).move(0,l)}))}))}}e.default=o}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/624.74d89f5b.chunk.js.map