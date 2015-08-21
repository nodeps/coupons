#target photoshop
//调用[prompt]命令，弹出输入框，引导用户输入图层名称的前缀，并把输入结果存储在[prefix]变量中。
var prefix = prompt("请输入图层名称的前缀：");

//定义一个变量[layers]，表示当前文档的所有图层。
var layers = app.activeDocument.layers;

//添加一个循环，用来遍历所有图层。
for(var i =0; i<layers.length; i++)

{
    //将遍历到的图层的名称，修改为前缀名加序号的格式。您可以根据实际情况，自定义图层名格式。
    layers[i].name = prefix + i;
    alert(layers[i].name);
}