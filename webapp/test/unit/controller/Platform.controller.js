/*global QUnit*/

sap.ui.define([
	"com/syonchev/exercise4/controller/Platform.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Platform Controller");

	QUnit.test("I should test the Platform controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});