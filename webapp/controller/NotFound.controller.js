sap.ui.define([
		"com/namespace/WorklistFromTemplate/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.namespace.WorklistFromTemplate.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);