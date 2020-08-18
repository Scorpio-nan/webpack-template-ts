import esriLoader from 'esri-loader';
export default{
    loadMapAPI(vue:any){
        const options = {
            url: 'http://mds.nmdis.org.cn/arcgis_js_api/library/3.27/3.27/init.js'
        };
        esriLoader.loadModules ([
			"esri/config",
            "esri/map",
			"esri/units",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/layers/FeatureLayer",
            "esri/tasks/query",
            "esri/InfoTemplate",
            "esri/toolbars/draw",
            "esri/graphic",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleLineSymbol",
			 "esri/symbols/SimpleFillSymbol",
            "esri/layers/GraphicsLayer",
            "esri/symbols/Font",
            "esri/Color",
            "esri/symbols/TextSymbol",
            "esri/toolbars/navigation",
            "esri/dijit/HomeButton",
            "esri/geometry/Point",
            "esri/symbols/PictureMarkerSymbol",
            "esri/SpatialReference",
            "esri/dijit/Measurement",
            "esri/renderers/SimpleRenderer",
            "esri/layers/ArcGISDynamicMapServiceLayer",
			"esri/tasks/query",
			"esri/tasks/QueryTask",
			"esri/geometry/Polyline",
			"esri/tasks/Geoprocessor",
			"esri/layers/LayerDataSource",
			"esri/tasks/DataFile",
			"plugins/RasterLayer",
			"esri/dijit/Legend",
			 "esri/request",
			 "esri/layers/WebTiledLayer",
            "dojo/domReady!"
        ], options).then (([
			esriConfig,
            Map,
			Units,
            ArcGISTiledMapServiceLayer,
            FeatureLayer,
            Query,
            InfoTemplate,
            Draw,
            Graphic,
            SimpleMarkerSymbol,
            SimpleLineSymbol,
			SimpleFillSymbol,
            GraphicsLayer,
            Font,
            Color,
            TextSymbol,
            Navigation,
            HomeButton,
            Point,
            PictureMarkerSymbol,
            SpatialReference,
            Measurement,
            SimpleRenderer,
            ArcGISDynamicMapServiceLayer,
			query,
			QueryTask,
			Polyline,
			Geoprocessor,
			LayerDataSource,
			DataFile,
			RasterLayer,
			Legend,
			esriRequest,
			WebTiledLayer
            ]) => 
        {
			vue.prototype.esriConfig = esriConfig;
            vue.prototype.Map = Map;
			vue.prototype.Units = Units;
            vue.prototype.ArcGISTiledMapServiceLayer = ArcGISTiledMapServiceLayer;
            vue.prototype.Query = Query;
            vue.prototype.Draw = Draw;
            vue.prototype.Graphic = Graphic;
            vue.prototype.SimpleMarkerSymbol = SimpleMarkerSymbol;
            vue.prototype.SimpleLineSymbol = SimpleLineSymbol;
            vue.prototype.SimpleFillSymbol = SimpleFillSymbol;
            vue.prototype.Font = Font;
            vue.prototype.Color = Color;
            vue.prototype.TextSymbol = TextSymbol;
            vue.prototype.Navigation = Navigation;
            vue.prototype.HomeButton = HomeButton;
            vue.prototype.Point = Point;
            vue.prototype.InfoTemplate = InfoTemplate;
            vue.prototype.FeatureLayer = FeatureLayer;
            vue.prototype.PictureMarkerSymbol = PictureMarkerSymbol;
            vue.prototype.GraphicsLayer = GraphicsLayer;
            vue.prototype.SpatialReference = SpatialReference;
            vue.prototype.Measurement = Measurement;
            vue.prototype.SimpleRenderer = SimpleRenderer;
            vue.prototype.ArcGISDynamicMapServiceLayer = ArcGISDynamicMapServiceLayer;
			vue.prototype.query = query;
			vue.prototype.QueryTask = QueryTask;
			vue.prototype.Polyline = Polyline;
			vue.prototype.Geoprocessor = Geoprocessor;
			vue.prototype.LayerDataSource = LayerDataSource;
			vue.prototype.DataFile = DataFile;
			vue.prototype.RasterLayer = RasterLayer;
			vue.prototype.esriRequest = esriRequest;
			vue.prototype.Legend = Legend;
			vue.prototype.WebTiledLayer = WebTiledLayer;
        }, reason => {
            console.log (reason);
        })
    }
}