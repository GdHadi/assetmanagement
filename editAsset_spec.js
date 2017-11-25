describe("Edit Asset",function(){
    it("Ensure asset page load with data", function(){

        browser.get("http://13.228.106.128/");

        var assetLink = element(by.css('[href="/assets"]'));
		assetLink.click();

        var tableContent = element(by.xpath('/html/body/div/div/app-root/app-asset/p[3]/ng2-smart-table/table/tbody/tr[2]/td[1]/ng2-st-tbody-custom/a[2]'));     
        expect (tableContent.isDisplayed()).toBe(true);
       
     
    });


});