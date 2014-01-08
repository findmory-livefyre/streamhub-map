
//Require streamhub-sdk and ContentMapView
var Collection = Livefyre.require('streamhub-sdk/collection');
var ContentMapView = Livefyre.require('streamhub-map/content/content-map-view');

//Create a Collection
var collection = new Collection({
    "network": "client-solutions-turner.fyre.co",
    "siteId": 343292,
    "articleId": "custom-1387221206185"
});

//Create a ContentMapView, passing the DOMElement to render it in (el option).
var view = new ContentMapView({
    "el": document.getElementById("lf_map"),
    "initial": 25,
    "showMore": 25

});
        
    
//Pipe the collection's content into the ContentMapView  
collection.pipe(view);
