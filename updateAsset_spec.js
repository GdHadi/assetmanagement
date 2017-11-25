describe ("Asset", function(){
		//Validate edit page
		it ("Validate asset page",function(){
		browser.get("http://13.228.106.128/");
			
		var assetLink = element(by.css('[href="/assets"]'));
		assetLink.click();
		
		//assert URL
		//expect(browser.getCurrentUrl()).toEqual('http://13.228.106.128/assets/edit/5a12370999058f0591a2ea13');
		var editLink =element(by.xpath('/html/body/div/div/app-root/app-asset/p[3]/ng2-smart-table/table/tbody/tr[2]/td[1]/ng2-st-tbody-custom/a[2]'));

		editLink.click();	

		expect(browser.getCurrentUrl()).toContain("http://13.228.106.128/assets/edit/");
	
		});
		
});