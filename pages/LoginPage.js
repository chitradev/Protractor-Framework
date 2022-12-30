const { element, by } = require("protractor");

function Login(){

    this.getURL=function(){
        browser.get('https://devicetracking.colanapps.in/admin');
    };   
    this.viewSite=element(by.cssContainingText('.btn.btn-success', 'View Site '));
    this.userName=element(by.id("email"));
    this.password=element(by.id("password"));
    this.submit=element(by.id("login_submit"));
}

module.exports= new Login();