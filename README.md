# Snow

```javascript
var sys_id = "e31bdf71db130010629a5385ca9619df", service;
		service = new ngSnowService();
		service.getFile(sys_id, service.operations_table_name, response, '/');

```

```javascript
// Script Include
var ngSnowService = Class.create();

ngSnowService.prototype = {
	
    initialize: function() {
		this.attachments_table_name = 'sys_attachment';
		this.operations_table_name = 'sys_ws_operation';
    },
	
	getFile: function(sys_id, table_name, response, fileName){
		var bytesInFile = new GlideSysAttachment().getBytes(table_name, sys_id), dataAsString;
		dataAsString = Packages.java.lang.String(bytesInFile);
		return this.getResponse(String(dataAsString), response, fileName);
	},
	
	getResponse: function(dataAsString, response, fileName){
			if (fileName.indexOf('.js')>0){ 
				response.setContentType('text/javascript');
			}
			else if (fileName.indexOf('.css')>0){
				response.setContentType('text/css');
			}
			else { response.setContentType('text/html'); }
			response.setStatus(200);
			response.getStreamWriter().writeString(dataAsString);
	},
	
	getContent : function(sys_id, file_name){
		var attachments = new GlideSysAttachment().getAttachments(this.operations_table_name, sys_id),id, record, dataAsString;
		while (attachments.next()){
			if (attachments.getValue('file_name') == file_name ){
				id = attachments.getValue('sys_id');
				record = this.getRecord(sys_id, file_name);
				dataAsString = new GlideSysAttachment().getContent(record);
				return dataAsString;
				//return { 
				//	sys_id: attachments.getValue('sys_id'), 
				//	table_name: attachments.getValue('table_name')
				//}; 
			}
		}
		return "File Not Found";
	},
	
	getRecord: function(sys_id, fileName){
		var att = new GlideRecord(this.attachments_table_name);
		att.addQuery('table_sys_id', sys_id);
		att.addQuery('file_name', fileName);
		att.query();
		if (att.next()){
			return att;
		}
		else {return "File not found";}
	},
	
    type: 'ngSnowService'
};
		
```