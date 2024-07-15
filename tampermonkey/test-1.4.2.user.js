// ==UserScript==
// @name K2-acttix
// @namespace helloworld.lol
// @version 1.1.3
// @description 使用Chrome以及stylus插件获得完整体验
// @author wxruints
// @grant GM_addStyle
// @run-at document-start

// @include https://translate.google.com/*
// @include https://www.galmoe.com/*
// @include https://zh.annas-archive.org/*
// @include https://musicaldown.com/*
// @include https://www.pcjs.org/*
// @include https://gh.api.99988866.xyz/*
// @include https://fabiaoqing.com/*
// @include https://imglarger.com/*
// @include https://oktools.net/*
// @include https://123apps.com/*
// @include https://convertio.co/*
// @include http://www.xbinweb.com/*
// @include https://www.52blc.com/*
// @include https://www.51kim.com/*
// @include https://www.moulem.com/*
// @include https://pc.woozooo.com/*
// @include https://*.lanzou.com/*
// @include https://xbeibeix.com/*
// @include https://www.sojson.com/*
// @include https://www.omnicalculator.com/*
// @include https://bt1207so.top/
// @include http://www.iqdb.org/*
// @include https://ip.900cha.com/*
// @include https://yiso.fun/*
// @include https://sc.panda321.com/*
// @include https://www.chemsrc.com/*
// @include https://saucenao.com/*
// @include https://fanyi.baidu.com/*
// @include
// @include https://baike.so.com/*
// @include http://baidu.com/*
// @include https://baidu.com/*
// @include http://*.baidu.com/*
// @include https://*.baidu.com/*
// @include http://google.com/*
// @include https://google.com/*
// @include http://*.google.com/*
// @include https://*.google.com/*
// @include http://moehui.com/*
// @include https://moehui.com/*
// @include http://*.moehui.com/*
// @include https://*.moehui.com/*
// @include http://bilibili.com/*
// @include https://bilibili.com/*
// @include http://*.bilibili.com/*
// @include https://*.bilibili.com/*
// @include http://send2boox.com/*
// @include https://send2boox.com/*
// @include http://*.send2boox.com/*
// @include https://*.send2boox.com/*
// @include http://bing.com/*
// @include https://bing.com/*
// @include http://*.bing.com/*
// @include https://*.bing.com/*
// @include https://www.baidu.com/*
// @include https://www.asmrgay.com/*
// @include https://web.telegram.org/*
// ==/UserScript==

      /*修改自yui的优化脚本*/

(function() {
let css = "";
if (new RegExp("^(?:.*)\$").test(location.href)) {
  css += `
  body:before
    {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -100;
      background-image: url(https://okgo.top/168517581389387.jpg);
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      opacity: .4 /*暗图.4*/
      }

  `;
}
if ((location.hostname === "baidu.com" || location.hostname.endsWith(".baidu.com"))) {
  css += `
      
      #content_right,.se-ft-promlink, .c-line-clamp1{display: none!important}
      #head{background: rgba(0,0,0,0);}
      #form{background: rgba(255, 255, 255, .2);}
      #rs,#page-relative{opacity: .4}
      .bdsug{background: rgba(255, 255, 255, .8);}
      .wrapper_new .sam_newgrid~#page {background-color: rgba(0,0,0,0);}
      .wrapper_new #foot {background-color: rgba(0,0,0,0);}
      .wrapper_new #foot #help {background-color: rgba(0,0,0,0);}
      body .se-page-hd {background: rgba(0,0,0,0);}
      #page-bd, .se-head-tablink,.c-container, .se-page-controller .new-pagenav, .se-page-copyright, .se-page-ft {background: rgba(0,0,0,0);}
      .banner{opacity:0!important}
      .se-form,.s_ipt_wr{background: rgba(0,0,0,0)}
      div[tpl="recommend_list"],.c-recomm-wrap{display: none!important}
  `;
}
if (location.href === "https://www.baidu.com/") {
  css += `

      #s_wrap,#bottom_layer,.s-top-nav{display: none!important}
      #s_top_wrap{background: rgba(0,0,0,0);}
      #form{opacity:.5}
      #lg{opacity:0}`;
}
if ((location.hostname === "google.com" || location.hostname.endsWith(".google.com"))) {
  css += `
      .sfbg,.yg51vc,.appbar,.kp-blk,.f6F9Be,.minidiv,.s8GCU,.Lj9fsd,.jZWadf,.qcTKEe,.ECgenc,.sbib_a,.c93Gbe{background: rgba(255,255,255,0)!important}
      .I6TXqe,.RNNXgb,.sbibod{background: rgba(255,255,255,0.5)!important}
  `;
}
if ((location.hostname === "moehui.com" || location.hostname.endsWith(".moehui.com"))) {
  css += `
      body{background: rgba(0,0,0,0);}
      .sec-panel{background: rgba(0,0,0,0)!important}
      header{opacity:0.6}
      .post-loop-default .item:hover{background:transparent}
      `;
}
if ((location.hostname === "bilibili.com" || location.hostname.endsWith(".bilibili.com"))) {
  css += `
      body, #app,.bb-comment,.mini-type,.v-wrap{background: rgba(0,0,0,0)!important;}
      .textarea-container textarea{background-color: rgba(255,255,255,0.6)!important;}
      .main-container .ep-list-wrapper,#danmukuBox{opacity:0.6}
      .bilibili-player-video-popup,.bilibili-player-video-top-follow{display: none!important}
      .timeline-header,.timeline-wrapper,.tl-head .tl-day{background:transparent}
      .timeline-header .tl-weeks:after{display: none}
      #activity_vote,#right-bottom-banner,.ad-report,#reportFirst2,#live_recommand_report{display: none!important;}
      .bili-avatar-pendent-dom,.bili-avatar-pendent,.b-danmaku-high-icon,.bilibili-player-dm-tip-wrap,.h .space-theme-trigger{display: none!important;}
      
      .h-inner{
      background-image: url(https://i0.hdslb.com/bfs/album/77d0a7be17f0d08bbd12719ad011c4ade4095e0a.jpg)!important;
      background-position: 60% 77%!important;
      /*background-repeat: repeat-x;
      background-size: contain!important;*/
      }
      #page-index .col-1,.col-full{background:transparent}
      .card[data-v-2dbadba2],.feed-title[data-v-87ed4514],#page-dynamic .col-2 .section{background-color: rgba(255,255,255,0.6)}
      #page-index .col-2{opacity:0.6}
      .n .n-inner{background-color: rgba(255,255,255,0.7)}
      .fixed-bg{background-image:none!important}
      .left-panel,.right-panel{opacity:0.8}
      .center-panel{opacity:0.9}
      .page-container,.history-list .r-info{background:transparent}
      .forw-area,.pager,.input-wrap{background:transparent!important}
      .comment-send-lite{background:rgba(255,255,255,0.6)!important}
      .nav-search-box{opacity:0.8}
      div.bb-comment > div.reply-notice,div.proxy-box > div > a,.bilibili-player-video-toast-bottom,.bilibili-player-link.bilibili-player-show,.unlogin-popover,.login-tip{display: none!important;}
      .bpx-player-toast-wrap,.bpx-player-dialog-wrap,img[alt^="[神楽Mea"], img[alt^="神楽Mea"]{display:none}
      .input-suggest{opacity:0.8}
      .video-container,.post-content,.shop-list,.card{background:rgba(255,255,255,.4)!important}
      .bili-layout>:nth-child(3),.bili-layout>:nth-child(6),.recommended-swipe{display: none!important;}
      .recommend-container__2-line>*:nth-of-type(1n + 8){display:block!important}
      .red-num--message,.message-inner-list> a:nth-child(4)>.message-inner-list__item--num{display: none!important;}
      .nav-item-message>.t>.num{display: none!important;}
      a[href="//message.bilibili.com/#/system"]>span{display: none!important;}
      .video-page-special-card,.video-page-special-card-small,.side-bar>.list>li:nth-child(4)>a>.notify-number{display: none!important;}
      .topic-panel{display: none!important;}
      .pop-live-small-mode,.bpx-player-cmd-dm-wrap{display: none!important;}

      `;
}
if ((location.hostname === "send2boox.com" || location.hostname.endsWith(".send2boox.com"))) {
  css += `
      /*.AppHeader{background:transparent}
      .list-container, .page-container{background:transparent}
      body{overflow-y:auto;height:200%}
      .el-table__body-wrapper{height:auto!important}
      #adpp{height:auto!important}
      240%*/
      html{overflow-y:visible;height:1444px}
      .push-container .push-menu{width:150px!important}
      .list-container, .page-container{background:transparent}
      .push-file-header{opacity:0.7}
      .gb-table,.el-table{opacity:0.9}
  `;
}
if ((location.hostname === "bing.com" || location.hostname.endsWith(".bing.com"))) {
  css += `
      #b_header,#b_results>li,#b_context .b_ans, #b_context #wpc_ag,.b_footer,#b_pole .b_wpTabsWrapper{background:transparent!important}
      .b_searchboxForm, .sa_as .sa_drw{background: rgba(255,255,255,0.6)}
  `;
}
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
