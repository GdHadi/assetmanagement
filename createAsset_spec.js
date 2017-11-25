describe ("Asset", function(){

	beforeEach(function(){
		browser.get("http://13.228.106.128/");
		var assetLink = element(by.css('[href="/assets"]'));
		assetLink.click();
		
	});
	    it("Access view asset page", function(){	
		var viewAssetLink = element (by.xpath('/html/body/div/div/app-root/app-asset/p[3]/ng2-smart-table/table/tbody/tr[1]/td[1]/ng2-st-tbody-custom/a[1]'));
		viewAssetLink.click();
		expect(browser.getCurrentUrl()).toContain("http://13.228.106.128/assets/5a0be74148a7c7139f90f");

		});	
	
		it ("Access create page",function(){	
		
		//var assetCreateLink = element(by.css('[href="/assets/create"]'));
		//assetCreateLink.click(); 	
		   // validate 
		   //expect(browser.getCurrentUrl()).toEqual("http://13.228.106.128/assets/create");

		element(by.id('asset-new-btn')).click();
			
		element(by.name('description')).sendKeys("AutoPen04");
		element(by.name('model')).sendKeys("mod123456");
		element(by.name('serial')).sendKeys("ser123456");
		element(by.name('batchNo')).sendKeys("batch123456");
		element(by.name('productionDate')).sendKeys("12/01/2001");
		
		//element(by.xpath('//button[.="Create"]')).click();
		element(by.id("asset-create-btn")).click();
		browser.driver.sleep(1000);
		browser.waitForAngular();
		
		expect(browser.getCurrentUrl()).toEqual("http://13.228.106.128/assets");

		});
		
});