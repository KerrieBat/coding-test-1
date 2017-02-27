var bind=function(e,t){return function(){return e.apply(t,arguments)}};define(["external/modernizr","jquery","modules/clean/ajax","modules/core/browser","modules/core/html","modules/core/i18n","modules/core/notify","modules/core/uri","modules/clean/legacy_pyxl_controllers/ajax_form","modules/clean/em_string","modules/clean/gandalf_util","modules/clean/unity/features","modules/clean/unity/features/web_destiny"],function(e,t,i,n,o,_,r,s,a,l,c,d,u){var h,y;return y=_._,h=function(){function t(e){this._fill_login_error=bind(this._fill_login_error,this),this._show_unity_server_error=bind(this._show_unity_server_error,this),this._show_unity_client_error=bind(this._show_unity_client_error,this),this._web_destiny_login=bind(this._web_destiny_login,this),this._show_web_destiny=bind(this._show_web_destiny,this),this._web_destiny_connect_callback=bind(this._web_destiny_connect_callback,this),this._check_if_previous_login_failed=bind(this._check_if_previous_login_failed,this),this.maybe_show_web_destiny=bind(this.maybe_show_web_destiny,this),this.$login_form=e.find(".login-form"),this.cont=this.$login_form.find("input[name='cont']").val(),this.$web_destiny_container=e.find("#web-destiny-container"),this.button=this.$web_destiny_container.find("#continue-as-button")}return t.prototype.maybe_show_web_destiny=function(){return this._is_destiny_enabled()?this._check_if_previous_login_failed()?void this._show_unity_server_error():(this._web_destiny=new u,this._web_destiny.start_connection(this._web_destiny_connect_callback)):void 0},t.prototype._check_if_previous_login_failed=function(){return this.cont.indexOf("/login_complete?refresh_token=")>=0},t.prototype._is_destiny_enabled=function(){return 0===this.$web_destiny_container.length?!1:null!=u&&("/login"===window.location.pathname||c.getGandalfRule("unity-web-destiny-all-pages"))&&!this._is_safari_private_mode()&&this._is_path_allowed(window.location.pathname)},t.prototype._is_path_allowed=function(e){var t,i,n,o;for(t=["/dropins","/chooser","/saver","/fb"],n=0,o=t.length;o>n;n++)if(i=t[n],0===e.indexOf(i))return!1;return!0},t.prototype._is_safari_private_mode=function(){return n.safari&&!e.localstorage},t.prototype._web_destiny_connect_callback=function(e){var t,i;return t=this._make_display_name_text(e),i=this.$web_destiny_container.find(".continue-as-user-name"),i.text(t),this.button.click(this._web_destiny_login),this._show_web_destiny()},t.prototype._make_display_name_text=function(e){return y("Continue as %(real_name)s",{comment:"Log in automatically as NAME"}).format({real_name:e})},t.prototype._show_web_destiny=function(){return this.button.attr("disabled",!1),this.$web_destiny_container.hide().css({visibility:"visible",display:""}).fadeIn("fast")},t.prototype._web_destiny_login=function(){var t,i,o,_;return"/login"!==window.location.pathname&&""===this.cont&&(this.cont=window.location.pathname+window.location.search),n.msie||!e.localstorage||this._web_destiny.is_direct_allowed()?(i=this.cont,o="/"):(i="/",o=this.cont),e.localstorage&&localStorage.setItem("web-destiny-redirect-uri",o),t=this._get_check_signed_in_ajax_callback(this._show_unity_client_error),_=this._get_unity_client_error_callback(t,this._show_unity_client_error),this._web_destiny.continue_as_user(i,_),r.warning(y("We’re trying to log you in automatically")),this.button.attr("disabled",!0)},t.prototype._get_unity_client_error_callback=function(e,t){return function(){return new i.SilentBackgroundRequest({url:"/is_signed_in",success:e,error:t})}},t.prototype._get_check_signed_in_ajax_callback=function(e){return function(t){return"ok"===t?n.reload():e()}},t.prototype._show_unity_client_error=function(){return this._fill_login_error(y("Sorry, we weren’t able to sign you in. Please enter your email and password to sign in.")),this.button.attr("disabled",!0)},t.prototype._show_unity_server_error=function(){return this._fill_login_error(y("Please enter your email and password to sign in."))},t.prototype._fill_login_error=function(e){return a.fill_errors(this.$login_form,{login_email:{message_text:e}})},t}()});
//# sourceMappingURL=web_destiny_ui.min.js-vfl71kmqg.map