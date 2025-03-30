## Modules

<dl>
<dt><a href="#module_Shader">Shader</a> : <code><a href="#Shader">Shader</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Shader">Shader</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_Shader"></a>

## Shader : [<code>Shader</code>](#Shader)

* [Shader](#module_Shader) : [<code>Shader</code>](#Shader)
    * [module.exports](#exp_module_Shader--module.exports) ⏏
        * [new module.exports(name)](#new_module_Shader--module.exports_new)
        * [.preloadSourceCode(vertexCode, shaderCode)](#module_Shader--module.exports+preloadSourceCode)
        * [.compileSourceCode(gl, vertexCode, shaderCode)](#module_Shader--module.exports+compileSourceCode) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>
        * [.loadSourceCode(gl, [vertexCode], [shaderCode])](#module_Shader--module.exports+loadSourceCode) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>
        * [.load(gl, [vertexSrc&#x3D;], [shaderSrc&#x3D;])](#module_Shader--module.exports+load) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>

<a name="exp_module_Shader--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_Shader--module.exports_new"></a>

#### new module.exports(name)

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_Shader--module.exports+preloadSourceCode"></a>

#### module.exports.preloadSourceCode(vertexCode, shaderCode)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Shader--module.exports)  

| Param | Type |
| --- | --- |
| vertexCode | <code>string</code> | 
| shaderCode | <code>string</code> | 

<a name="module_Shader--module.exports+compileSourceCode"></a>

#### module.exports.compileSourceCode(gl, vertexCode, shaderCode) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Shader--module.exports)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| vertexCode | <code>string</code> | 
| shaderCode | <code>string</code> | 

<a name="module_Shader--module.exports+loadSourceCode"></a>

#### module.exports.loadSourceCode(gl, [vertexCode], [shaderCode]) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Shader--module.exports)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| [vertexCode] | <code>string</code> | 
| [shaderCode] | <code>string</code> | 

<a name="module_Shader--module.exports+load"></a>

#### module.exports.load(gl, [vertexSrc&#x3D;], [shaderSrc&#x3D;]) ⇒ <code>Array.&lt;(WebGLProgram\|null), (Error\|null)&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Shader--module.exports)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| [vertexSrc=] | <code>string</code> | 
| [shaderSrc=] | <code>string</code> | 

<a name="Shader"></a>

## Shader : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vertexCode | <code>string</code> \| <code>null</code> | 
| shaderCode | <code>string</code> \| <code>null</code> | 
| program | <code>WebGLProgram</code> \| <code>null</code> | 
| ready | <code>boolean</code> | 
| error | <code>Error</code> \| <code>null</code> | 

