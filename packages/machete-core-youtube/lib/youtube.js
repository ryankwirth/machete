!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Machete-Core-YouTube",[],t):"object"==typeof exports?exports["Machete-Core-YouTube"]=t():e["Machete-Core-YouTube"]=t()}(window,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,i),u.l=!0,u.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(r,u,function(t){return e[t]}.bind(null,u));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e){e.exports={context:{client:{clientName:"WEB_REMIX",clientVersion:"0.1",hl:"en",gl:"CA",experimentIds:[],utcOffsetMinutes:-420,locationInfo:{locationPermissionAuthorizationStatus:"LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"},musicAppInfo:{musicActivityMasterSwitch:"MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",musicLocationMasterSwitch:"MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE"}},capabilities:{},request:{internalExperimentFlags:[{key:"kevlar_use_vimio_behavior",value:"true"},{key:"music_web_disable_mobile_miniplayer",value:"true"},{key:"music_web_session_check_interval_millis",value:"120000"},{key:"music_web_fill_page_type_in_playlist_endpoints",value:"true"},{key:"music_web_enable_album_details_more_button",value:"true"},{key:"music_enable_you_there",value:"true"},{key:"polymer2_not_shady_build",value:"true"},{key:"music_enable_responsive_list_item_mobile_web_treatment",value:"true"},{key:"music_web_enable_scraper_metadata_for_detail_pages",value:"true"},{key:"music_enable_navigation_client_streamz",value:"true"},{key:"kevlar_attach_vimio_behavior",value:"true"},{key:"music_web_enable_madison_account_support",value:"true"},{key:"attach_child_on_gel_web",value:"true"},{key:"log_sequence_info_on_gel_web",value:"true"},{key:"music_web_enable_signed_out_playlist_sharing",value:"true"},{key:"music_web_teamfood_dogfood_logos",value:"true"},{key:"music_web_play_buttons_on_album_detail_page",value:"true"},{key:"music_web_like_buttons_on_album_detail_page",value:"true"},{key:"music_web_serve_app_for_scrapers",value:"true"},{key:"music_web_enable_audio_only_playback",value:"true"},{key:"music_enable_prelive_bylines",value:"true"},{key:"music_entitlement_subscription_reads",value:"true"},{key:"flush_onbeforeunload",value:"true"},{key:"kevlar_enable_vimio_callback",value:"true"},{key:"web_gel_debounce_ms",value:"10000"},{key:"music_web_handle_active_session_changes",value:"true"},{key:"log_foreground_heartbeat_music_web",value:"true"},{key:"music_enable_start_radio_for_search_albums",value:"true"},{key:"music_web_red_subscriber_icon_border",value:"true"},{key:"ad_to_video_use_gel",value:"true"},{key:"music_web_disable_home_background_fetch",value:"true"},{key:"music_enable_album_entity_getbrowse",value:"true"},{key:"enable_playability_filtering_in_entity_manager",value:"true"},{key:"music_web_send_initial_endpoint_for_playlist_urls",value:"true"},{key:"music_web_enable_rtl",value:"true"},{key:"music_web_enable_scraper_metadata",value:"true"},{key:"music_web_enable_kav_prompt",value:"true"},{key:"music_web_hide_carousel_buttons_on_non_hover_devices",value:"true"},{key:"music_web_app_non_teamfood",value:"true"},{key:"user_preference_collection_initial_browse_id",value:"FEmusic_tastebuilder"},{key:"force_music_enable_outertube_tastebuilder_browse",value:"true"},{key:"music_enable_nitrate_based_tastebuilder_onboarding_flow",value:"true"},{key:"music_playlist_detail_use_country_restrictions_from_ytms",value:"true"},{key:"music_enable_mix_free_tier_curated_playlists",value:"true"},{key:"enable_client_streamz_web",value:"true"},{key:"music_enable_playlist_context_menu_share_endpoint",value:"true"},{key:"music_web_signup_canonical_base_urls",value:"true"},{key:"kevlar_import_vimio_behavior",value:"true"},{key:"enable_video_list_browse_for_topical_mixes",value:"true"},{key:"web_logging_max_batch",value:"100"},{key:"client_streamz_web_flush_interval_seconds",value:"60"},{key:"music_web_service_worker_caching_strategy",value:""},{key:"music_enable_share_for_search_albums",value:"true"},{key:"music_web_send_initial_endpoint_for_landing_page_urls",value:"true"},{key:"debug_forced_promo_id",value:""},{key:"client_streamz_web_flush_count",value:"2"},{key:"force_music_enable_outertube_artist_detail_channel_browse",value:"true"},{key:"music_web_enable_channel_alerts",value:"true"},{key:"enable_web_music_player_error_message_renderer",value:"true"},{key:"music_enable_see_all_expand_buttons",value:"true"},{key:"music_web_enable_impressum",value:"true"},{key:"music_web_title_line_height",value:"1.2"},{key:"music_web_enable_corrected_tastebuilder_ordering",value:"true"},{key:"music_web_playlist_id_in_responsive_list_play_button",value:"true"},{key:"music_library_shelf_item_fetch_count_override",value:"25"},{key:"music_web_enable_player_attestation",value:"true"},{key:"music_enable_improve_your_recommendations_setting",value:"true"},{key:"polymer_simple_endpoint",value:"true"},{key:"video_to_ad_use_gel",value:"true"},{key:"music_web_enable_prelive_bylines",value:"true"},{key:"music_web_body_line_height",value:"1.4"},{key:"music_display_empty_playlists",value:"true"},{key:"music_fill_text_endpoints_in_two_row_item_renderer",value:"true"},{key:"music_mobile_web_app_install_page",value:"true"},{key:"music_web_autoplay_blocked_prompt",value:"true"},{key:"enable_premium_voluntary_pause",value:"true"},{key:"music_web_show_player_bezel",value:"true"},{key:"music_web_enable_start_radio_from_album",value:"true"},{key:"music_enable_album_page_alternate_releases_shelf",value:"true"},{key:"music_enable_responsive_list_items_for_search",value:"true"},{key:"music_show_buffering_spinner_in_player_bar",value:"true"},{key:"music_web_enable_prebuffering",value:"true"},{key:"kevlar_enable_vimio_logging",value:"true"},{key:"music_web_confirm_add_existing_song_to_playlist",value:"true"}],sessionIndex:{}},user:{enableSafetyMode:!1}},browseId:"FEmusic_home"}},function(e,t,i){"use strict";i.r(t);var r="https://www.youtube.com",u=Object.freeze({slug:"youtube",urls:{iframeApiUrl:"".concat(r,"/iframe_api"),musicUrl:"https://music.youtube.com/youtubei/v1/browse?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30",playlistUrl:"".concat(r,"/playlist?list="),searchUrl:"".concat(r,"/results?search_query="),thumbnailUrl:"https://img.youtube.com/vi/"},playlistIds:{mostPopular:"PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"}});function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],r=!0,u=!1,n=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){u=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(u)throw n}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a={encodeId:function(e,t){return"".concat(u.slug,"://").concat(e,":").concat(t)},decodeId:function(e){var t=n(e.split(":"),2);return{type:t[0],assetId:t[1]}},parseLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=(e=e.replace(/ (\(|\[)(?!feat|ft|Remix).+(\)|\])/g,"")).match(/^(.+) - (.+)/);return i&&(t=i[1],e=i[2]),{title:e=e.replace(/(^")|("$)/g,""),artist:t=(t=t.replace(/ - Topic$/,"")).replace(/(feat|ft)\.?/i,"ft.")}},parseTimestamp:function(e){return e}};function l(e,t){var i=e.find(t.label).text(),r=e.find(t.owner).text(),n=e.data(t.videoId),l=a.encodeId("video",n),_="".concat(u.urls.thumbnailUrl).concat(n,"/mqdefault.jpg"),o=a.parseLabel(i.trim(),r.trim());return{id:l,title:o.title,subtitle:o.artist,thumbnail:_}}var _={init:function(e){return this.injectable=e,Promise.resolve()},search:function(e){return this.injectable.get(u.urls.searchUrl+e).then(function(e){return e(".yt-lockup-video").map(function(t,i){return function(e,t){return l(e(t),{label:".yt-lockup-title a",owner:".yt-lockup-byline",videoId:"context-item-id"})}(e,i)}).get()})},scrapePlaylist:function(e){return this.injectable.get(u.urls.playlistUrl+e).then(function(e){return e("tr").map(function(t,i){return function(e,t){return l(e(t),{label:".pl-video-title-link",owner:".pl-video-owner a",videoId:"video-id"})}(e,i)}).get()})}},o=i(0),s=i.t(o,2);function c(e){return{title:e.header.musicCarouselShelfBasicHeaderRenderer.title.runs[0].text,contents:e.contents.map(function(e){return function(e){var t=e.title.runs[0].text,i=e.thumbnailOverlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId,r=e.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails[0].url;return{id:a.encodeId("playlist",i),title:t,subtitle:"YouTube Playlist",thumbnail:r}}(e.musicTwoRowItemRenderer)})}}var m={init:function(e){return this.injectable=e,Promise.resolve()},scrapeShowcase:function(){return this.injectable.post(u.urls.musicUrl,s).then(function(e){return e.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.map(function(e){return e.musicImmersiveCarouselShelfRenderer||e.musicCarouselShelfRenderer}).filter(function(e){return!!e}).map(c)})}},b=function(e){return Promise.all([_.init(e),m.init(e)])},y=function(e){return _.search(e)},d=function(e){return _.scrapePlaylist(e)},p=function(){return m.scrapeShowcase()};function v(){var e=this;return new Promise(function(t){var i=document.createElement("div");i.id="player",i.style="position: absolute",document.body.appendChild(i),e.player=new YT.Player("player",{height:"0",width:"0",events:{onReady:function(){return t()},onStateChange:function(t){return function(e){this.player.isMuted()&&this.player.unMute();var t=this.player.getVideoData(),i=this.player.getDuration(),r=a.encodeId("video",t.video_id),n=a.parseLabel(t.title,t.author),l=n.artist,_=n.title,o="".concat(u.urls.thumbnailUrl).concat(t.video_id,"/mqdefault.jpg");this.injectable.dispatch("metadata",{id:r,title:_,artist:l,thumbnail:o,duration:i});var s=1===e.data;this.injectable.dispatch("status",{isPlaying:s})}.call(e,t)}}})})}function f(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}var h={init:function(e){var t=this;return this.injectable=e,new Promise(function(e){var t=document.createElement("script");t.src=u.urls.iframeApiUrl,document.body.appendChild(t),window.onYouTubeIframeAPIReady=e}).then(function(){return v.call(t)})},play:function(e){if(e){var t=a.decodeId(e),i=t.type,r=t.assetId;"video"===i?this.player.loadVideoById(r):this.player.loadPlaylist({list:r})}else this.player.playVideo();(function(){var e=this;this.intervalId||(this.intervalId=setInterval(function(){e.injectable.dispatch("timestamp",e.player.getCurrentTime())},1e3))}).call(this)},pause:function(){this.player.pauseVideo(),f.call(this)},stop:function(){this.player.stopVideo(),f.call(this)},seekTo:function(e){this.player.seekTo(e)},setVolume:function(e){this.player.setVolume(e)}},k={init:function(e){return Promise.all([b(e),h.init(e)]).then(function(){return u.slug})},play:function(e){h.play(e)},pause:function(){h.pause()},stop:function(){h.stop()},seekTo:function(e){h.seekTo(e)},setVolume:function(e){h.setVolume(e)},search:function(e){return y(e+", official")},getShowcase:function(){return p()},getMostPopular:function(){return d(u.playlistIds.mostPopular)}};t.default=k}])});