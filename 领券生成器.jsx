// Written by 王小洲 37991842
// create date:2015-08-12
//edit 2015-08-24

/*
领券生成器.jsx 1.0
*/

#target photoshop

#include "utils/json2.js"

app.preferences.rulerUnits = Units.PIXELS; // set Pixel for checking bounds
var doc = app.activeDocument;
var buttonB,coupon,button,buttonB,rule,foot,buttonText,ruleText;
var names = new Array();
function getLayerY (name) {
	var currentLayer = doc.layers[i].merge();
	var Ypoint = currentLayer.bounds[1];
	return Ypoint;
}
function getText (name) {
	for( var j = 0; j < doc.layers[i].artLayers.length; j++) {
		if(doc.layers[i].artLayers[j].name == name){
			var layerText = doc.layers[i].artLayers[j].textItem.contents;
			return layerText;
		}
	}
}
function getColor (name) {
	for( var j = 0; j < doc.layers[i].artLayers.length; j++) {
		if(doc.layers[i].artLayers[j].name == name){
			var layerColor = doc.layers[i].artLayers[j].textItem.color.rgb["hexValue"];
			return layerColor;
		}
	}
}
for(var i =0; i<doc.layers.length; i++){
	
	 if(doc.layers[i].typename == 'LayerSet' ){

		if (doc.layers[i].name == 'coupon'){
			coupon = getLayerY('coupon');
		}
		if (doc.layers[i].name == 'button'){
			//按钮文字和颜色
			buttonText = getText('button-text');
			buttonTextColor = getColor('button-text');
			var currentLayer = doc.layers[i].merge();
			button = currentLayer.bounds[1];
			buttonB = currentLayer.bounds[3];
		}
		if (doc.layers[i].name == 'rule'){
			//活动规则标题&内容 文字+颜色
    		ruleTitle = getText('rule-title');
    		ruleTitleColor = getColor('rule-title');
    		ruleText = getText('rule-text');
    		ruleTextColor = getColor('rule-text');
			rule = getLayerY('rule');
		}
		if (doc.layers[i].name == 'foot'){
			foot = getLayerY('foot');
		}
		if (doc.layers[i].name == 'success'){
			successButtonText = getText('success-button-text');
			successButtonTextColor = getColor('success-button-text');
			successText = getText('success-text');
			successTextColor = getColor('success-text');
			successTitle = getText('success-title');
			successTitleColor = getColor('success-title');
		}
		if (doc.layers[i].name == 'reget'){
			regetButtonText = getText('reget-button-text');
			regetButtonTextColor = getColor('reget-button-text');
			regetText = getText('reget-text');
			regetTextColor = getColor('reget-text');
			regetTitle = getText('reget-title');
			regetTitleColor = getColor('reget-title');
		}
		if (doc.layers[i].name == 'fail'){
			failButtonText = getText('fail-button-text');
			failButtonTextColor = getColor('fail-button-text');
			failText = getText('fail-text');
			failTextColor = getColor('fail-text');
			failTitle = getText('fail-title');
			failTitleColor = getColor('fail-title');
		}
		if (doc.layers[i].name == 'none'){
			noneButtonText = getText('none-button-text');
			noneButtonTextColor = getColor('none-button-text');
			noneText = getText('none-text');
			noneTextColor = getColor('none-text');
			noneTitle = getText('none-title');
			noneTitleColor = getColor('none-title');
		}
		
	}
}



function run() {
  var layer = app.activeDocument.activeLayer;
  var obj = {};
  obj["cut"] = {
  	banner:(coupon/2).toString(),
  	coupon:coupon.toString(),
  	button:button.toString(),
  	buttonB:buttonB.toString(),
  	rule:rule.toString(),
  	foot:foot.toString()
  };
  obj["button"] = {
  	buttonText:buttonText,
  	buttonTextColor:buttonTextColor
  };
  obj["rule"] = {
  	ruleTitle:ruleTitle,
  	ruleTitleColor:ruleTitleColor,
  	ruleText:ruleText,
  	ruleTextColor:ruleTextColor
  };
  obj["success"] = {
  	successButtonText:successButtonText,
  	successButtonTextColor:successButtonTextColor,
  	successText:successText,
  	successTextColor:successTextColor,
  	successTitle:successTitle,
  	successTitleColor:successTitleColor
  };
  obj["reget"] = {
  	regetButtonText:regetButtonText,
  	regetButtonTextColor:regetButtonTextColor,
  	regetText:regetText,
  	regetTextColor:regetTextColor,
  	regetTitle:regetTitle,
  	regetTitleColor:regetTitleColor
  };
  obj["fail"] = {
  	failButtonText:failButtonText,
  	failButtonTextColor:failButtonTextColor,
  	failText:failText,
  	failTextColor:failTextColor,
  	failTitle:failTitle,
  	failTitleColor:failTitleColor
  };
  obj["none"] = {
  	noneButtonText:noneButtonText,
  	noneButtonTextColor:noneButtonTextColor,
  	noneText:noneText,
  	noneTextColor:noneTextColor,
  	noneTitle:noneTitle,
  	noneTitleColor:noneTitleColor
  };
	saveFile(JSON.stringify(obj,null,"\t"));
	return true;
}

function saveFile(str){
    var fileName = app.activeDocument.name.substring(0,app.activeDocument.name.lastIndexOf("."));
    var path = app.activeDocument.path.fsName;
    var fullPath = path+"/"+fileName+".json";
    var file = new File(fullPath);
    file.open('w');
    file.write(str);
    file.close();
    alert(str);
   	alert("json成功生成"+fullPath);
}

run();

doc.close(SaveOptions.DONOTSAVECHANGES);
