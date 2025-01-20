// ==UserScript==
// @name         幻想次元-深色模式
// @namespace    http://hxcy.top/
// @version      0.0.1
// @description  深色模式
// @author       huan_kong
// @author       https://huankong.top
// @match        https://hxcy.top/*
// @icon         https://hxcy.top/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

;(function () {
  GM_addStyle(`html.dark #main-content {
  background: none repeat scroll 0 0 #212121;
}

html.dark #top-bar,
html.dark .body-wrap,
html.dark #main-nav ul ul,
html.dark #main-nav ul li,
html.dark .dropdown-menu {
  background: #2f2f2f;
}

html.dark #breadcrumb,
html.dark #top-announce,
html.dark #post-header {
  background: #373737;
  border-bottom: none;
  color: gray;
}

html.dark #breadcrumb a,
html.dark #top-announce a,
html.dark #post-header a {
  color: gray;
}

html.dark .widget-content,
html.dark .archive-thumb h2,
html.dark #archive-head,
html.dark .widget-title,
html.dark .su-spoiler-style-fancy {
  background: #2f2f2f !important;
  color: gray;
}

html.dark .widget-content a {
  color: gray;
}

html.dark .page-nav a {
  color: white;
  background: #2f2f2f;
}

html.dark article .more-link {
  color: white !important;
}

html.dark input.jump-page {
  background: #575757;
  margin-top: 2px;
  width: 30px;
  -webkit-text-fill-color: white;
}

html.dark .su-spoiler-title,
html.dark .entry table,
html.dark .entry table td,
html.dark .sc_act,
html.dark .su-box-content,
html.dark blockquote {
  background: #575757;
  color: gray;
}

html.dark .sc_act:hover {
  background: #8b8b8b;
}

html.dark .su-spoiler-content {
  background: #474747;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

html.dark .entry img {
  border: none;
  background: none;
}

html.dark .dlbox,
html.dark #author-box h3,
html.dark #related-posts h3,
html.dark #comments h3,
html.dark #commentform textarea,
html.dark .searchform div input,
html.dark .user-center {
  background: #474747;
}

html.dark .dlbox .dlbox-title,
html.dark #author-box .author-info,
html.dark .comment-body,
html.dark .commentlist .comment,
html.dark .comment-form,
html.dark #submit-bt,
html.dark #user-menu li {
  background: #353535 !important;
}

html.dark #commentform textarea,
html.dark #submit-bt {
  -webkit-text-fill-color: white;
}
`)

  GM_registerMenuCommand('跟随系统', () => {
    GM_setValue('mode', 'auto')
    mode = 'auto'
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    checkMode()
    switchMode()
  })

  GM_registerMenuCommand(`浅色模式`, () => {
    GM_setValue('mode', 'light')
    mode = 'light'
    isDark = false
    switchMode()
  })

  GM_registerMenuCommand('深色模式', () => {
    GM_setValue('mode', 'dark')
    mode = 'dark'
    isDark = true
    switchMode()
  })

  let mode = GM_getValue('mode', 'auto')
  let isDark = mode === 'dark' || (mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  function checkMode() {
    if (mode !== 'auto') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      isDark = e.matches
      switchMode()
    })
  }
  checkMode()

  function switchMode() {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  switchMode()
})()
