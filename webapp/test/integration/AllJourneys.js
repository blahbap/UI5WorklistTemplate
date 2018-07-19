/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/namespace/WorklistFromTemplate/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/namespace/WorklistFromTemplate/test/integration/pages/Worklist",
	"com/namespace/WorklistFromTemplate/test/integration/pages/Object",
	"com/namespace/WorklistFromTemplate/test/integration/pages/NotFound",
	"com/namespace/WorklistFromTemplate/test/integration/pages/Browser",
	"com/namespace/WorklistFromTemplate/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.namespace.WorklistFromTemplate.view."
	});

	sap.ui.require([
		"com/namespace/WorklistFromTemplate/test/integration/WorklistJourney",
		"com/namespace/WorklistFromTemplate/test/integration/ObjectJourney",
		"com/namespace/WorklistFromTemplate/test/integration/NavigationJourney",
		"com/namespace/WorklistFromTemplate/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});