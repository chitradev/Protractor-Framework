const { element, by } = require("protractor");

function DeviceTracking(){
    
this.searchFilter=element(by.buttonText("Search/Filter"));
this.ddlLocation=element(by.id("location"));
this.listOfDevices = function(){
        element.all(by.css("h5[class='name'] a:nth-child(1)")).getText().then(function(text){
            console.log(text);
        });
      };
this.btnRequest=element.all(by.xpath("//button[@class='btn btn-info']"));
this.dev=element.all(by.css("h5[class='name'] a:nth-child(1)"));

      
}

module.exports= new DeviceTracking();