function WBP() {} // This is needed so we can extend the object

//Properties
WBP.prototype.namespace = '';
WBP.prototype.apiKey = '';
WBP.prototype.host = '{{DOMAIN}}';
WBP.prototype.appQuery = '';
WBP.prototype.asyncRequests = true;
WBP.prototype.driveCallback = null;
WBP.prototype.onReady = null;
WBP.prototype.isAlive = false;
WBP.prototype.onAliveCallback = null;


//Scope
WBP.prototype.helpers = {};
WBP.prototype.modules = {};
WBP.prototype.components = {};

var scope = new WBP();
