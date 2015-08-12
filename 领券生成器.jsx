/**
* @@@BUILDINFO@@@ 根据参考图层组命名其它图层组.jsx !Version! Fri Apr 19 2013 17:46:01 GMT+0800
*kingmax_res@163.com
*/
#target photoshop
app.bringToFront();
function SaveLayerNameFromLayerSet(ref)
{
        var names = new Array();
        var cLayerSet = ref.activeLayer;        
        
        if(cLayerSet.typename == 'LayerSet')
        {
                for(var i = 0; i<cLayerSet.layers.length; i++)
                {
                        if(cLayerSet.layers[i].typename == 'ArtLayer')
                        {
                                 names.push(cLayerSet.layers[i].name);
                        }
                }
        }
    
        return names;
}
function RenameLayerSet(selectedLayerSet, namesArray)
{
        if(selectedLayerSet.typename == 'LayerSet' && selectedLayerSet.layers.length == namesArray.length)
        {
                for(var i = 0; i<selectedLayerSet.layers.length; i++)
                {
                    selectedLayerSet.layers[i].name = namesArray[i];
                }
        }
        else
        {
                alert('图层数量不一致!', selectedLayerSet.name);
        }
}
function Main()
{
        var win = new Window('dialog','根据参考图层组命名其它图层组');
        win.size = [200,120];
        
         var names = new Array();
         var refLayerSet;
        
        //var panel = win.add('panel',undefined,'test');
        var btSave = win.add('button', undefined, '存储当前图层组中层名');
        //btSave.enabled = false;
        var btRename = win.add('button', undefined, '---重命名选择图层组---');
        btRename.enabled = false;
        
        var cbAllLayerSet = win.add('checkBox', undefined, '对所有图层组有效!');
        cbAllLayerSet.value = true;
        /*
        btSave.enabled = function()
        {
                return activeDocument.activeLayer.typename == 'LayerSet';
        }
        */
    
        btSave.onClick = function()
        {
                    names = SaveLayerNameFromLayerSet (activeDocument);
                    
                    if(names.length != 0)
                    {
                            btRename.enabled = true;
                            refLayerSet = activeDocument.activeLayer;
                            alert (names, '保存完毕');
                    }
                    else
                    {
                            alert('当前选择可能不是图层组!','错误');
                    }
        }
    
        btRename.onClick = function()
        {
                //alert(cbAllLayerSet.value);
                var doc = activeDocument;
                if(cbAllLayerSet.value)
                {
                        for(var i =0; i<doc.layers.length; i++)
                        {
                                if(doc.layers[i].typename == 'LayerSet' && doc.layers[i] != refLayerSet)
                                {
                                    RenameLayerSet(doc.layers[i], names);
                                }
                        }
                }
                else
                {
                        RenameLayerSet(doc.activeLayer, names);
                }
        }
        
        win.show();
}
if(documents.length > 0)
{
        Main();
}