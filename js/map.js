Livefyre.require(['streamhub-sdk/collection','streamhub-map/content/content-map-view'], function(Collection,ContentMapView){
    var collection = new Collection({
        network: "client-solutions.fyre.co",
        siteId: 333682,
        articleId: "sn-1389203417469"
    });
    var view = new ContentMapView({
        el: document.getElementById("lf_map"),
        initial: 300, //not supported in this version of ContentMapView
        showMore: 25 //not supported in this version of ContentMapView
    });
    collection.pipe(view);
})