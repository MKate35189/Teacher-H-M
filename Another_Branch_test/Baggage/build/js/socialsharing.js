/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2015-2019 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
;window.onerror=function(){return false;};if($("div#navigationmenu").is(":visible")){hmWebHelp.hamburgerMenu();}if($(window.twttr).length>0){$(window.twttr).remove();}window.twttr=(function(f,b,g){var a,e,c=f.getElementsByTagName(b)[0];if(f.getElementById(g)){}e=f.createElement(b);e.id=g;e.src="https://platform.twitter.com/widgets.js";c.parentNode.insertBefore(e,c);return window.twttr||(a={_e:[],ready:function(d){a._e.push(d);}});}(document,"script","twitter-wjs"));if(typeof FB=="object"){delete (FB);}$.ajaxSetup({cache:false});$.getScript("//connect.facebook.net/en_US/all.js",function(){if(""!==""){FB.init({appId:"",xfbml:true,version:"v2.5"});}else{FB.init({xfbml:true,version:"v2.5"});}(function(e,a,f){var c,b=e.getElementsByTagName(a)[0];if(e.getElementById(f)){return;}c=e.createElement(a);c.id=f;c.src="//connect.facebook.net/en_US/sdk.js";b.parentNode.insertBefore(c,b);}(document,"script","facebook-jssdk"));});hmXPopup.fb_content='<div id="fb-root"></div><div class="fb-like" data-href="'+hmpage.currentURI+'" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div> ';if(""!==""){hmXPopup.twtr_account='data-via=""';}else{hmXPopup.twtr_account="";}if(hmDevice.phone){hmWebHelp.closeTopNav();}hmLoadPopup({hmTitle:"Share This Topic",hmBody:'<table id="sharingcontainer" border="0"><tr><td colspan="2">'+hmXPopup.fb_content+'</td><td><div class="twitter-button"><a id="tweetthis" href="https://twitter.com/share" class="twitter-share-button" data-url="'+hmpage.currentURI+'" data-text=""'+hmXPopup.twtr_account+'>Tweet This</a></div></td></tr><tr class="tablet phone"><td><span class="phone">&nbsp;</span></td><td><span class="phone">&nbsp;</span></td><td><span class="phone">&nbsp;</span></td></tr><tr><td><div class="sharebymail-button"><a href="mailto:?subject=Re: '+document.title+"&amp;body="+document.location.protocol+"//"+document.location.hostname+document.location.pathname+'" title="Share topic by mail"><img src="./images/social_mail.png" height="20"></a></div></td><td><div class="googleplusone-button"><g:plusone size="medium" count="true" data-annotation="none" href="'+hmpage.currentURI+'"></g:plusone></div></td><td><div id="linkedin-button" class="linkedin-button"></div></td></tr></table>',dims:{height:"3rem",width:"14rem"}});if(typeof(IN)!=="undefined"){delete IN;}$.getScript("http://platform.linkedin.com/in.js",function(){$("div#linkedin-button").html('<script type="IN/Share" data-url="'+hmpage.currentURI+'" data-counter="right"><\/script>');IN.init();});window.___gcfg={lang:"en-US"};if($("script#gplus_script").length>0){$("script#gplus_script").remove();}var po=document.createElement("script");po.type="text/javascript";po.async=true;po.src="https://apis.google.com/js/platform.js";po.id="gplus_script";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s);
