describe("Test for List of asset category",function(){
    
   beforeEach(function(){
    browser.get("http://13.228.106.128/");

    var catLink = element(by.css('[href="/categories"]'));
    catLink.click();

   });
    
    it("accessing asset category page", function(){
        //check for correct page    
        expect(browser.getCurrentUrl()).toEqual('http://13.228.106.128/categories');
    });

    it ("check for action button and link",function(){
                
        //check for add button
        var addCatlink = element(by.css('[href="/categories/create"]'));
        expect(addCatlink.isDisplayed()).toBe(true);

        //check for edit link
        var editCatlink = element(by.xpath('/html/body/div/div/app-root/app-category/p[2]/ng2-smart-table/table/tbody/tr[1]/td[1]/ng2-st-tbody-edit-delete/a[1]'));
        expect (editCatlink.isDisplayed()).toBe(true);
        
        //check for delete link
        var deleteCatlink = element(by.xpath('/html/body/div/div/app-root/app-category/p[2]/ng2-smart-table/table/tbody/tr[1]/td[1]/ng2-st-tbody-edit-delete/a[2]'));
        expect(deleteCatlink.isDisplayed()).toBe(true);
    });

});