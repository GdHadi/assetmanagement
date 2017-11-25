describe("View Asset",function(){
    it("check for link view in Action column",function(){
       browser.get("http://13.228.106.128/");
       
       var assetLink = element(by.css('[href="/assets"]'));
       assetLink.click();

       var viewLink = element(by.xpath('/html/body/div/div/app-root/app-asset/p[3]/ng2-smart-table/table/tbody/tr[1]/td[1]/ng2-st-tbody-custom/a[1]'));
       viewLink.click();

       expect(browser.getCurrentUrl()).toContain("http://13.228.106.128/assets/5a0be74148a7c7139f90");
    });

    var viewAsset_page = require('../AssetManagement/viewAsset_page.js');

    xit("test view link from object page",function(){
  
    viewAsset_page.clickViewAssetLink();     

    });


});