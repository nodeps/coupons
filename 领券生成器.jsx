
// Written by 王小洲 37991842
// create date:2015-08-12

/*
领券生成器.jsx 1.0
*/

#target photoshop

app.preferences.rulerUnits = Units.PIXELS; // set Pixel for checking bounds
var doc = app.activeDocument;
var buttonB,coupon,button,buttonB,rule,foot;
var names = new Array();
function getLayerY (name) {
	var currentLayer = doc.layers[i].merge();
	var Ypoint = currentLayer.bounds[1];
	return Ypoint;
	
}
for(var i =0; i<doc.layers.length; i++){
	
	if(doc.layers[i].visible==false){
		//第一级图层为不可见
	}else if(doc.layers[i].typename == 'LayerSet' ){
		
		if (doc.layers[i].name == 'coupon'){
			coupon = getLayerY('coupon');
		}
		if (doc.layers[i].name == 'button'){
			var currentLayer = doc.layers[i].merge();
			button = currentLayer.bounds[1];
			buttonB = currentLayer.bounds[3];
		}
		if (doc.layers[i].name == 'rule'){
			rule = getLayerY('rule');
		}
		if (doc.layers[i].name == 'foot'){
			foot = getLayerY('foot');
		}
		
	}else if(doc.layers[i].name == 'rule-txt'){
		var ruleTxt = doc.layers[i];
		var rr =ruleTxt.textItem.contents;
		
	}
}

names =[coupon/2,coupon,button,buttonB,rule,foot];
alert(names);
doc.close(SaveOptions.DONOTSAVECHANGES);


