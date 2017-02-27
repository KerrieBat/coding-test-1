define(["external/classnames","external/react","modules/clean/comments/annotation_utils","modules/clean/comments/components/ui_constants","modules/clean/react/file_comments/conversation_or_input_card","modules/clean/react/sprite","modules/constants/comments_panel","modules/constants/file_viewer","modules/core/i18n"],function(t,n,o,e,i,s,r,a,u){var p,l,m,d,c;return l=e.DEFAULT_ANNOTATION_COMMENT_INPUT_MAX_HEIGHT,m=i.InputCard,d=u._,c=n.DOM,p=n.createClass({displayName:"AnnotationBubble",mixins:[n.addons.PureRenderMixin],propTypes:{user:n.PropTypes.object,activity:n.PropTypes.object,x:n.PropTypes.number,y:n.PropTypes.number,showBubble:n.PropTypes.bool,in_blank_state:n.PropTypes.bool,annotation:n.PropTypes.object,position:n.PropTypes.string,maxHeight:n.PropTypes.number,shouldShowExpandBubble:n.PropTypes.bool,isMouseOnAnnotation:n.PropTypes.bool,commentText:n.PropTypes.string,actionCreators:n.PropTypes.object.isRequired,isDemoMode:n.PropTypes.bool},getInitialState:function(){return{showExpandBubble:this.props.shouldShowExpandBubble}},getDefaultProps:function(){return{position:"top",maxHeight:l,isDemoMode:!1}},componentWillReceiveProps:function(t){if(this.props.shouldShowExpandBubble)if(t.commentText||this.props.showBubble!==!1||t.showBubble!==!0||this.setState({showExpandBubble:!0}),this.props.isMouseOnAnnotation){if(!t.isMouseOnAnnotation)return this._onAnnotationExpandBubbleMouseLeave()}else if(t.isMouseOnAnnotation)return this._onAnnotationExpandBubbleMouseEnter()},componentWillUnmount:function(){return clearTimeout(this.hideBubbleTimeout)},onInputFocus:function(t){return{}},onInputBlur:function(t){return{}},onMention:function(){return this.props.actionCreators.setMentionedContact(!0)},onAddComment:function(t){return this.props.actionCreators.addInlineAnnotation({text:t})},onAddSticker:function(t){return this.props.actionCreators.addInlineAnnotation({stickerId:t})},onCancelComment:function(){return this.props.actionCreators.cancelAnnotationComment()},_getCommentInputRef:function(){var t;return null!=(t=this.refs.commentInputCard)?t.refs.commentInput:void 0},_focusOnCommentInput:function(){var t;return null!=(t=this._getCommentInputRef())?t.focusInput():void 0},_getRawCommentInput:function(){var t;return(null!=(t=this._getCommentInputRef())?t.getRawCommentInput():void 0)||""},_saveDraft:function(){var t,n;return t=this._getRawCommentInput(),t.length>0&&t!==(null!=(n=this._getCommentInputRef())?n.getPlaceholderText():void 0)?this.props.actionCreators.updateAnnotationText(t):this.props.actionCreators.updateAnnotationText(null)},_onAnnotationExpandBubbleClick:function(){return this.setState({showExpandBubble:!1})},_onAnnotationExpandBubbleMouseEnter:function(){return clearTimeout(this.hideBubbleTimeout)},_onAnnotationExpandBubbleMouseLeave:function(){return this._setHideCommentTimeOut()},_setHideCommentTimeOut:function(){return clearTimeout(this.hideBubbleTimeout),this.hideBubbleTimeout=setTimeout(this._maybeHideComment,3e3)},_maybeHideComment:function(){return this.state.showExpandBubble&&!this.props.isMouseOnAnnotation?this.onCancelComment():void 0},_renderCommentInput:function(){var t,o,e;return t={maxHeight:this.props.maxHeight},o={ref:"commentInput",activity:this.props.activity,metadata:this.props.annotation,usersToNotify:this.props.activity.users_to_notify,targetActivity:this.props.activity,user:this.props.user,initialText:this.props.commentText,enableNoNotifyHint:!1,commentMetadataAllowed:!0,shouldPopupsDropdown:!1,shouldAlwaysInEditMode:!0,shouldEnableCancelButton:!1,shouldInitiallyFocusInput:!0,shouldEnableStickers:r.ALLOW_STICKERS,shouldShowPostText:a.MAESTRO_ENABLED,onAddComment:this.onAddComment,onAddSticker:this.onAddSticker,onCancelComment:this.onCancelComment,onFocus:this.onInputFocus,onBlur:this.onInputBlur,onMention:this.onMention,onChange:this._saveDraft},c.div({className:"annotation-bubble__field",style:t},n.createElement(m,{ref:"commentInputCard",shouldInitiallyShowNotifyHint:this.props.shouldShowExpandBubble,initialUsersToNotify:null!=(e=this.props.activity)?e.users_to_notify:void 0,commentProps:o,actionCreators:this.props.actionCreators,isDemoMode:this.props.isDemoMode}))},_renderExpandBubble:function(){return c.div({className:"expand-bubble-icon",onClick:this._onAnnotationExpandBubbleClick,onMouseEnter:this._onAnnotationExpandBubbleMouseEnter,onMouseLeave:this._onAnnotationExpandBubbleMouseLeave},n.createElement(s,{group:"web",name:"ic_comment_text",alt:d("Comment on text")}))},render:function(){var n,e,i,s,r,a,u,p,l,m;return l=this.props.x||0,m=this.props.y||0,i=this.props.position,e=this.props.position.indexOf("bottom")>=0?"bottom":"top",this.state.showExpandBubble&&(p=o.getExpandBubblePosition(this.props.position,this.props.x,this.props.y),s=p[0],r=p[1],l=r.x,m=r.y,i=s),a={left:l},a[""+e]=m,n=a,c.div({className:"annotation-bubble-container"},c.div({className:t((u={"annotation-bubble":!0,"annotation-bubble--hidden":!this.props.showBubble,"bubble-dropdown":!0,"expand-bubble":this.state.showExpandBubble},u[""+i]=!0,u)),style:n},this.state.showExpandBubble?this._renderExpandBubble():this._renderCommentInput(),c.div({className:"bubble-arrow-border"}),c.div({className:"bubble-arrow"})))}})});
//# sourceMappingURL=annotation_bubble.min.js-vflIA-g4A.map