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
			console.log("intoComponent");
			// call the init function of the parent
			console.log(this);
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
			error :  function(data, textStatus, jqXHR) {
				oModel = new JSONModel(data);
				console.log("error getting data " + textStatus );
			  },
			success: function(data, textStatus, jqXHR) {
				oModel = new JSONModel(data);
			  }
			});	
			this.setModel(oModel);
			//console.log("outta component");
			//var table1 = sap.ui.getCore().byId("__xmlview0--Table1");
			//table1.setModel(oModel);
			//console.log(table1);
					
		}
	});

});