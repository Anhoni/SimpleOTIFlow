sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast ,UIcomponent ) {
	"use strict";
	return Controller.extend("SimpleOTIFlow.controller.First", {
		onInit : function (){
			MessageToast.show("yay inside first controller"); 
		},

		onPress : function () {
			//declaring variable for conclude global authenfication 
			var auth;
			//below will give you view for current controller
			//console.log(this.getView());
			//get user name from screen 
			var user =  this.getView().byId("userName").getValue();
			//get password from screen 
			var pass =  this.getView().byId("password").getValue();
			//tell user to fill the details passowd nad user name 
			if ( ( user == "" )|| ( pass == "") )
				MessageToast.show("fill the user name and password");
			else	
			$.ajax({
				type: "GET",
				contentType: "application/json",
				url: "data/Logon.json",
				dataType: "json",
				async: false,
				error :  function(data, textStatus, jqXHR) {
					console.log("error getting data " + textStatus );},
				success: function(data, textStatus, jqXHR) {
					for ( var i = 0 ; i < data.length ; i++)
						{						
						if ( data[i].User == user )
							if ( pass == data[i].Password)
							{
								MessageToast.show("autheticated go ahead do shit")
								auth = true;								
							}						
						}
						if ( auth != true )
							MessageToast.show("go to hell");
				  }
				});	
			if ( auth == true )
				{
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("second");
				}
			// read msg from i18n model
			
			//console.log(this.getView().getModel());

			//var oBundle = this.getView().getModel("i18n").getResourceBundle();
			//var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			//var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			//MessageToast.show("hello native person whar are you doing here");
			//console.log(this);
			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("second");
		}
		
	});
/*	return UIComponent.extend("sales_repo.Component", {
		onPress : function( ){
			  var oRouter = UIComponent.getRouterFor(this);
			  oRouter.navTo("second");
		}
	});*/

});