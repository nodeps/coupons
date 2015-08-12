/**
* @@@guides@@@ 基于参考线切图.jsx 2015.8.12
*37991842@qq.com
*/

#target photoshop
//定义一个变量[guides]，用来表示Photoshop当前文档中的所有参考线。
var guides = app.activeDocument.guides;

//定义一个变量[count]，用来表示参考线总的数量。
var count  = guides.length;

//添加一个循环语句，用来遍历所有参考线。
for(var i=0; i＜count; i++)
{
    //调用[alert]语句，弹出警告框，提示参考线的方向以及坐标值。
    alert(guides[i].direction + "\r\n" + guides[i].coordinate);
}