const using = require("jasmine-data-provider")
const { browser, element, by, ElementArrayFinder } = require("protractor");
const { ddlLocation } = require("../pages/DeviceTrackingPage.js");

describe('Login', function(){
var using=require("jasmine-data-provider")
var LoginPage=require("../pages/LoginPage.js")
var d=require("../testdata/TD_Login.js")
var DeviceTrackingPage=require("../pages/DeviceTrackingPage.js")

using(d.dataProvider,function(data){
it('login',function(){  
    browser.ignoreSynchronization=true;
    LoginPage.getURL();
    //browser.sleep(1000);
    LoginPage.userName.sendKeys(data.userName);
    LoginPage.password.sendKeys(data.password);
    LoginPage.submit.click(); 
    browser.sleep(2000);
    LoginPage.viewSite.click();
});
});

it('verifyFilterChennai',function(){
  browser.getAllWindowHandles().then(function(handles){
  //console.log(handles.length);
  browser.switchTo().window(handles[1]);
  ddlLocation.all(by.tagName("option")).each(function(options){
    options.getAttribute("value").getText().then(function(text){
  var opt=text.trim();      
  if(opt=="Chennai"){
  browser.sleep(2000);
  options.click();
  }  
  });
  });
  }); 

  DeviceTrackingPage.searchFilter.click();
  browser.sleep(3000);   
  let el = ddlLocation.element(by.tagName("option")).getAttribute("selected");
  el.getText().then(function(t){
  expect(t).toEqual('Chennai');
  });       
  });    

/*it('verifyListofDevices',function(){
   const listDevice =[ 
   "Oneplus-Oneplus5",
   "Moto-Moto_Z_play",
   "Moto-E3 Power",
   "Apple-iPhone 6 64GB",
   "Samsung-Galaxy Note 8",
   "Samsung-Nexus S",
   "Nokia-Lumia 920",
   "Oppo-V2109",
   "Samsung-Note 3"   
   ];
   
    var li=DeviceTrackingPage.listOfDevices();
    console.log(li);
    console.log(listDevice);    
   // var result=expect(li).toEqual(listDevice);
    console.log(result);
   
   });*/
   it('Request devices',function(){
    DeviceTrackingPage.dev.then(function(dev){
        console.log("No. of devices ="+""+dev.length);
        for(var i=0;i<dev.length;i++){  
        var n=dev[i].getText().then(function(name){  
            return name;                      
          }); 
          n.then(function(nn){
            console.log(nn)
          if(nn=="Samsung-Note 3"){
            console.log("loop entered")            
            var req=DeviceTrackingPage.btnRequest.each(function(button){  
              browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
                browser.sleep(3000);
                button.click(); 
                
                                                            
                 });                      
                  }); 
                  
             } 
            });         
           }
    });
  });
    
});
  
    









