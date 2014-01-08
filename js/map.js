/*
//Require streamhub-sdk and ContentMapView
var Collection = Livefyre.require('streamhub-sdk/collection');
var ContentMapView = Livefyre.require('streamhub-map/content/content-map-view');
var JQuery

//Create a Collection
var collection = new Collection({
    network: "client-solutions-turner.fyre.co",
    siteId: 343292,
    articleId: "custom-1387221206185"
});

//Create a ContentMapView, passing the DOMElement to render it in (el option).
var view = new ContentMapView({
    el: document.getElementById("lf_map"),
    initial: 25, //not supported in this version of ContentMapView
    showMore: 25 //not supported in this version of ContentMapView

});
        
//Pipe the collection's content into the ContentMapView  
collection.pipe(view);

*/


//preferred format
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