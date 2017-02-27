define(["external/underscore","external/react","external/react-dom","external/reflux","modules/core/exception","modules/constants/comments_panel","modules/clean/analytics","modules/clean/comments/components/file_preview_annotations","modules/clean/comments/components/file_preview_overlay","modules/clean/comments/components/switch_revision_ui_container","modules/clean/comments/events","modules/clean/comments/flux","modules/clean/comments/more_option_helpers","modules/clean/comments/store","modules/clean/comments/url_handler","modules/clean/comments/utils","external/eventemitter3","modules/clean/file_activity/clients/file_activity_data_source","modules/clean/file_viewer_interface_controller","modules/clean/react/file_comments/file_comments_pane","modules/clean/react/file_comments/shared_link_signup_modals","modules/clean/react/file_viewer/more_dropdown/more_option_registry"],function(e,t,n,o,i,r,s,a,l,u,c,m,d,p,h,v,w,C,f,y,g,F){var R,_,I,P,S,A,O,assert;return assert=i.assert,I=s.CommentsVortexLogger,O=u.SwitchRevisionUIContainer,_=c.CommentsEventsMixin,P=y.FileCommentsPaneClass,R="annotation-overlay",A="switch-revision-container",S=t.createClass({displayName:"FileCommentsPaneContainer",mixins:[m.sync(p),_],propTypes:{actorId:t.PropTypes.number,context:t.PropTypes.number,contextData:t.PropTypes.string,currentFile:t.PropTypes.object,isDemoMode:t.PropTypes.bool,oref:t.PropTypes.string,previewSelector:t.PropTypes.string.isRequired,shouldInitiallyFocusInput:t.PropTypes.bool,initialCommentsCount:t.PropTypes.number,actionCreators:t.PropTypes.object.isRequired,showToggleButton:t.PropTypes.bool},componentDidMount:function(){return null!=this.props.context&&null!=this.props.contextData&&this.onFileViewerOpen(this.props),this.initAnnotationReadyQueue(),this.props.isDemoMode||this.initSignUpModalIfNecessary(),this.props.actionCreators.showOnboardingIfNecessary(),this.updateCommentsMoreOptionGroup(),this.renderSwitchRevisionUI(),this.onCommentsEvent("preview-and-comments-ready",this.onPreviewAndCommentsReady),this.onCommentsEvent("revision-did-change",this.onViewingRevisionDidChange),this.onCommentsEvent("reveal-annotation",this.onRevealAnnotation),this.props.isDemoMode||this.onCommentsEvent("show-sign-up-modal",this.onShowSignUpModal),this.props.isDemoMode?p.demoLoadData():void 0},componentWillReceiveProps:function(e){return this.state.viewing.contextData!==e.contextData?this.state.viewing.contextData?this.onFileViewerFlip(e):this.onFileViewerOpen(e):void 0},componentDidUpdate:function(){return this.updateCommentsMoreOptionGroup()},componentWillUnmount:function(){return this.clearAnnotationReadyQueue(),this.removeCommentsMoreOptionGroup(),this.unmountSwitchRevisionUI(),this.onFileViewerClose()},_onViewingFileWillChange:function(e){var t;return I.log("load-comments-attempt"),this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.props.actionCreators.startViewingComments({actorId:e.actorId,context:e.context,contextData:e.contextData,oref:e.oref,file:e.currentFile,previewSelector:e.previewSelector,showCommentsOverride:e.shouldInitiallyFocusInput?e.shouldInitiallyFocusInput:null,showTutorialOverride:e.isDemoMode?!0:null}),this.asyncMountFilePreviewComponents(),r.SHOW_REVISIONS&&null!=(null!=(t=e.currentFile)?t.fq_path:void 0)?this.props.actionCreators.fetchRevisions(e.currentFile.fq_path):void 0},onFileViewerOpen:function(e){return this._onViewingFileWillChange(e)},onFileViewerFlip:function(e){return this._onViewingFileWillChange(e),h.onFileViewerFlip()},onFileViewerClose:function(){return this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.props.actionCreators.stopViewingComments(),h.onFileViewerClose()},onViewingRevisionDidChange:function(){return this.isAnnotationReady=!1,this.unmountFilePreviewComponents(),this.asyncMountFilePreviewComponents()},onPreviewAndCommentsReady:function(){return assert(null!=this.fileViewerInterfaceController,"File viewer interface controller is not initialized"),this.unmountFilePreviewAnnotations(),this.unmountFilePreviewOverlay(),this.mountFilePreviewAnnotations(),this.mountFilePreviewOverlay(),this.isAnnotationReady=!0,this.processAnnotationReadyQueue(),h.onPreviewAndCommentsReady(this.props.actionCreators)},renderSwitchRevisionUI:function(){return n.render(t.createElement(O,{actionCreators:this.props.actionCreators}),this.getOrCreateSwitchRevisionUIContainerNode())},unmountSwitchRevisionUI:function(){var e;return e=this.getSwitchRevisionUIContainerNode(),null!=e?n.unmountComponentAtNode(e):void 0},getSwitchRevisionUIContainerNode:function(){return document.getElementById(A)},getOrCreateSwitchRevisionUIContainerNode:function(){var e;return e=this.getSwitchRevisionUIContainerNode(),null==e&&(e=document.createElement("div"),e.id=A,document.body.appendChild(e)),e},asyncMountFilePreviewComponents:function(){return this.createFileViewerInterfaceController()},unmountFilePreviewComponents:function(){var e;return this.unmountFilePreviewAnnotations(),this.unmountFilePreviewOverlay(),this.destroyFileViewerInterfaceController(),"function"==typeof(e=this.state).unsubscribePreviewAndCommentsReady?e.unsubscribePreviewAndCommentsReady():void 0},mountFilePreviewAnnotations:function(){return this.filePreviewAnnotations=a.create(this.props.actionCreators),this.filePreviewAnnotations.mount(this.fileViewerInterfaceController)},unmountFilePreviewAnnotations:function(){var e;return(null!=(e=this.filePreviewAnnotations)?e.isMounted():void 0)?this.filePreviewAnnotations.unmount():void 0},getOrCreateFilePreviewOverlayContainer:function(e){var t;return t=document.getElementById(R),t||(t=document.createElement("div"),t.id=R,e.appendChild(t)),t},mountFilePreviewOverlay:function(){var e,o;return(o=document.querySelector(this.props.previewSelector))?(this.overlayContainerNode=this.getOrCreateFilePreviewOverlayContainer(o),e=t.createElement(l,{previewContainer:o,actionCreators:this.props.actionCreators,isDemoMode:this.props.isDemoMode}),n.render(e,this.overlayContainerNode)):void console.error("Preview container does not exist!")},unmountFilePreviewOverlay:function(){return this.overlayContainerNode?n.unmountComponentAtNode(this.overlayContainerNode):void 0},createFileViewerInterfaceController:function(){var e,t,n;return n=p.state.viewing,e=n.context,t=n.file,this.fileViewerInterfaceController=new f(e,v.getPreviewType(e,t.preview_type),this.props.previewSelector),this.fileViewerInterfaceController.on("page-rendered",function(e){return function(t){var n;return n=null!=(null!=t?t.page:void 0),!n||n&&!e.state.isPreviewReady&&!(null!=t?t.isFullscreen:void 0)?e.props.actionCreators.notifyPreviewReady():void 0}}(this)),this.fileViewerInterfaceController.dispatchEvent("file-feedback-ui-ready")},destroyFileViewerInterfaceController:function(){var e;return null!=(e=this.fileViewerInterfaceController)?e.destroy():void 0},initAnnotationReadyQueue:function(){return this.annotationReadyQueue=new w},clearAnnotationReadyQueue:function(){return this.annotationReadyQueue.removeAllListeners()},processAnnotationReadyQueue:function(){return this.annotationReadyQueue.emit("reveal-annotation")},onRevealAnnotation:function(t){return this.isAnnotationReady?this.doRevealAnnotation(t):(this.annotationReadyQueue.removeAllListeners("reveal-annotation"),this.annotationReadyQueue.once("reveal-annotation",e.partial(this.doRevealAnnotation,t)))},doRevealAnnotation:function(e){return this.fileViewerInterfaceController.dispatchEvent("scroll-to-annotation",e)},onShowSignUpModal:function(e){var t,n;return t=e.fileActivityKey,n=e.variant,this.props.isDemoMode?void 0:(assert(null!=this.signUpModal,"Sign-up modal not initialized!"),this.signUpModal.set_activity_key(t),this.signUpModal.show_sign_in_modal(n))},initSignUpModalIfNecessary:function(){return v.getActivityUser(this.state.actorId).is_signed_in?void 0:this.signUpModal=new g},_getRelevantStoreState:function(){return{isFileActivityReady:p.isFileActivityReady(),isCommentingEnabled:p.isCommentingEnabled(),isUserSubscribed:p.isUserSubscribed(this.props.actorId),showResolvedComments:p.state.showResolvedComments,canEnableComments:p.canEnableComments()&&!this.props.isDemoMode}},updateCommentsMoreOptionGroup:function(){var e;return e=d.generateMoreOptionGroup(this._getRelevantStoreState(),this.props,this.props.actionCreators),null==e?this.removeCommentsMoreOptionGroup():null==this._moreOptionGroup?F.addOption(e):F.replaceOption(this._moreOptionGroup,e),this._moreOptionGroup=e},removeCommentsMoreOptionGroup:function(){return null!=this._moreOptionGroup?F.removeOption(this._moreOptionGroup):void 0},getInitialCommentsCount:function(){var e,t;return null!=this.props.initialCommentsCount?this.props.initialCommentsCount:null!=(null!=(e=this.props.currentFile)?e.unresolved_comment_count:void 0)?null!=(t=this.props.currentFile)?t.unresolved_comment_count:void 0:null},render:function(){var e;return e=this.getInitialCommentsCount(),t.createElement(P,{ref:"fileCommentsPane",feedbackId:"file-comments",activity:this.state.activity,showLoadingSpinner:0!==e&&this.state.showLoadingSpinner,context:this.state.viewing.context,contextData:this.state.viewing.contextData,userId:this.state.actorId,file:this.props.currentFile,oref:this.state.oref,isPreviewReady:this.state.isPreviewReady,showResolvedComments:this.state.showResolvedComments,showTutorial:p.isTutorialShown(),currentTutorialStep:this.state.currentTutorialStep,revisions:this.state.revisions,isCommentsHidden:p.areCommentsHidden(),enableImport:!1,previewSelector:this.props.previewSelector,shouldAutoLinkify:!0,shouldInitiallyFocusInput:this.props.shouldInitiallyFocusInput,shouldUseSimpleModals:!1,showButtonColor:"white",initialCommentsCount:e,isUserSubscribed:p.isUserSubscribed(this.state.actorId),isRegionCreationEnabled:this.state.regionCreationEnabled,actionCreators:this.props.actionCreators,isDemoMode:this.props.isDemoMode,isCommentingEnabled:p.isCommentingEnabled(),showToggleButton:this.props.showToggleButton})}})});
//# sourceMappingURL=file_comments_pane_container.min.js-vflKTw-3u.map