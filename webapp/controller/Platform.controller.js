sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.syonchev.exercise4.controller.Platform", {
		onInit: function () {

		},
		onPlatformPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				platform: window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
			});
		}
	});
});