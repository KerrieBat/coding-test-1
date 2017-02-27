define(["require","exports","tslib","modules/clean/flux/flux_store","modules/clean/react/shared_link_folder/constants","modules/clean/react/shared_link_folder/dispatcher"],function(e,i,t,r,n,s){"use strict";var o=function(e){function i(i){var t=e.call(this,i)||this;return t.files=[],t.fileSharedLinkInfos=[],t.fileSharePermissions=[],t.fileShareTokens=[],t.folders=[],t}return t.__extends(i,e),i.prototype.getFolders=function(){return this.folders},i.prototype.getFiles=function(){return this.files},i.prototype.getFileSharePermissions=function(){return this.fileSharePermissions},i.prototype.getFileShareTokens=function(){return this.fileShareTokens},i.prototype.getFileSharedLinkInfos=function(){return this.fileSharedLinkInfos},i.prototype.handleInitializeFolder=function(e){this.files=e.files,this.fileSharedLinkInfos=e.fileSharedLinkInfos,this.fileSharePermissions=e.fileSharePermissions,this.fileShareTokens=e.fileShareTokens,this.folders=e.folders,this.__emitChange()},i.prototype.__onDispatch=function(e){e.action.type===n.SharedLinkFolderAction.InitializeFolder&&this.handleInitializeFolder(e.action.data)},i}(r);i.sharedLinkFolderStore=new o(s.sharedLinkFolderDispatcher)});
//# sourceMappingURL=store.min.js-vflXb_aLU.map