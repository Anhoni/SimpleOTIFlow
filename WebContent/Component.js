sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("SimpleOTIFlow.Component", {

		metadata : {
			manifest: "json",
			
		},

		init : function () {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			console.log(this);
			this.getRouter().initialize();
			
			//set data model from saledata jsonfile			
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
			type: "GET",
			contentType: "application/json",
			url: "data/Logon.json",
			dataType: "json",
			async: false,
			success: function(data, textStatus, jqXHR) {
				oModel = new JSONModel(data);
				console.log("success");
			  }});	
			this.setModel(oModel);
			//console.log(this);
			//var table1 = sap.ui.getCore().byId("__xmlview0--Table1");
			//table1.setModel(oModel);
			//console.log(table1);
					
		}
	});

});