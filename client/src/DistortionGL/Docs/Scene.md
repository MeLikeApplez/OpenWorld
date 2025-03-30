## Modules

<dl>
<dt><a href="#module_Scene">Scene</a> : <code><a href="#_Scene">_Scene</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#_Scene">_Scene</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_Scene"></a>

## Scene : [<code>\_Scene</code>](#_Scene)

* [Scene](#module_Scene) : [<code>\_Scene</code>](#_Scene)
    * [module.exports](#exp_module_Scene--module.exports) ⏏
        * [new module.exports(camera)](#new_module_Scene--module.exports_new)
        * [.add(...sceneObjects)](#module_Scene--module.exports+add)
        * [._loadObjectMaterials(gl)](#module_Scene--module.exports+_loadObjectMaterials)
        * [.render(gl)](#module_Scene--module.exports+render)

<a name="exp_module_Scene--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_Scene--module.exports_new"></a>

#### new module.exports(camera)

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 

<a name="module_Scene--module.exports+add"></a>

#### module.exports.add(...sceneObjects)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Scene--module.exports)  

| Param | Type |
| --- | --- |
| ...sceneObjects | <code>GameObject</code> | 

<a name="module_Scene--module.exports+_loadObjectMaterials"></a>

#### module.exports.\_loadObjectMaterials(gl)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Scene--module.exports)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 

<a name="module_Scene--module.exports+render"></a>

#### module.exports.render(gl)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Scene--module.exports)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 

<a name="_Scene"></a>

## \_Scene : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| objects | <code>Array.&lt;GameObject&gt;</code> | 
| enabled | <code>boolean</code> | 
| _hasLoadedObjectMaterials | <code>boolean</code> | 

