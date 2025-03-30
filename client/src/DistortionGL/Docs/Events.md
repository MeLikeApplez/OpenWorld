## Modules

<dl>
<dt><a href="#module_Events">Events</a> : <code><a href="#_Events">_Events</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#_Events">_Events</a> : <code>Map</code></dt>
<dd></dd>
</dl>

<a name="module_Events"></a>

## Events : [<code>\_Events</code>](#_Events)

* [Events](#module_Events) : [<code>\_Events</code>](#_Events)
    * [.createEvent(eventName)](#module_Events+createEvent)
    * [.removeEvent(eventName)](#module_Events+removeEvent)
    * [.dispatchEvent(eventName, ...data)](#module_Events+dispatchEvent) ⇒ <code>boolean</code>
    * [.listen(eventName, callback)](#module_Events+listen) ⇒ <code>string</code> \| <code>Error</code>
    * [.unlisten(eventName, uuid)](#module_Events+unlisten) ⇒ <code>true</code> \| <code>Error</code>

<a name="module_Events+createEvent"></a>

### events.createEvent(eventName)
**Kind**: instance method of [<code>Events</code>](#module_Events)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 

<a name="module_Events+removeEvent"></a>

### events.removeEvent(eventName)
**Kind**: instance method of [<code>Events</code>](#module_Events)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 

<a name="module_Events+dispatchEvent"></a>

### events.dispatchEvent(eventName, ...data) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Events</code>](#module_Events)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 
| ...data | <code>\*</code> | 

<a name="module_Events+listen"></a>

### events.listen(eventName, callback) ⇒ <code>string</code> \| <code>Error</code>
**Kind**: instance method of [<code>Events</code>](#module_Events)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 
| callback | <code>function</code> | 

<a name="module_Events+unlisten"></a>

### events.unlisten(eventName, uuid) ⇒ <code>true</code> \| <code>Error</code>
**Kind**: instance method of [<code>Events</code>](#module_Events)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 
| uuid | <code>string</code> | 

<a name="_Events"></a>

## \_Events : <code>Map</code>
**Kind**: global typedef  
