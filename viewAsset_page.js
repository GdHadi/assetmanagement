var viewAsset_page = function (){
    this.clickViewAssetLink = function(){
    element(by.xpath('/html/body/div/div/app-root/app-asset/p[3]/ng2-smart-table/table/tbody/tr[1]/td[1]/ng2-st-tbody-custom/a[1]')).click();
    //update1
    };
};
module.exports = new viewAsset_page();