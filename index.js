// ==UserScript==
// @name         幻想次元-深色模式
// @namespace    https://github.com/huankong233/hxcy.top
// @version      0.0.4
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
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/524229/%E5%B9%BB%E6%83%B3%E6%AC%A1%E5%85%83-%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.user.js
// @updateURL https://update.greasyfork.org/scripts/524229/%E5%B9%BB%E6%83%B3%E6%AC%A1%E5%85%83-%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.meta.js
// ==/UserScript==

;(function () {
  GM_addStyle(`
:root {
  --darkhx-l0: #0c0d0f;
  --darkhx-l1: #1e1f20;
  --darkhx-l2: #2f3031;
  --darkhx-l3: #414244;
  --darkhx-l4: #545556;
  --darkhx-l5: #68686a;
  --darkhx-l6: #7c7d7f;
  --darkhx-l7: #919293;
  --darkhx-l8: #a6a7a9;
  --darkhx-l9: #bcbdbf;
  --darkhx-accent-0: #a7f0d7;
}


/* level 0 */
html.dark {
  background: var(--darkhx-l0);
}

html.dark #main-content {
  background: none repeat scroll 0 0 var(--darkhx-l0);
}


html.dark #top-bar,
html.dark .body-wrap,
html.dark #main-nav ul ul,
html.dark #main-nav ul li,
html.dark .dropdown-menu,
html.dark .footer-info {
  background: var(--darkhx-l1);
}

html.dark #breadcrumb,
html.dark #top-announce,
html.dark #post-header {
  background: var(--darkhx-l2);
  border-bottom: none;
  color: var(--darkhx-l8);
}

html.dark #breadcrumb a,
html.dark #top-announce a,
html.dark #post-header a {
  color: var(--darkhx-l8);
}

/* article flow items */
html.dark .widget-content,
html.dark .archive-thumb h2,
html.dark #archive-head,
html.dark .widget-title,
html.dark .su-spoiler-style-fancy {
  background: var(--darkhx-l1) !important;
  color: var(--darkhx-l8);
}

html.dark .widget-content a {
  color: var(--darkhx-l9);
}

html.dark .archive-list li:hover h2 a {
  color: var(--darkhx-accent-0);
}

/* page navigation */
html.dark .page-nav a {
  color: var(--darkhx-l9);
  background: var(--darkhx-l1);
}

html.dark article .more-link {
  color: var(--darkhx-l1) !important;
  font-weight: 600;
}

html.dark input.jump-page {
  background: var(--darkhx-l0);
  margin-top: 2px;
  width: 30px;
  -webkit-text-fill-color: var(--darkhx-l9);
}

html.dark .su-spoiler-title,
html.dark .entry table,
html.dark .entry table td,
html.dark .sc_act,
html.dark .su-box-content,
html.dark blockquote {
  background: var(--darkhx-l5);
  color: var(--darkhx-l7);
}

html.dark .sc_act:hover {
  background: #8b8b8b;
}

/* spoiler */
html.dark .su-spoiler-style-fancy > .su-spoiler-title {
  background: var(--darkhx-l2);
}

html.dark .su-spoiler-content {
  background: var(--darkhx-l4);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* article page */
html.dark .entry p,
html.dark .entry strong {
  color: var(--darkhx-l9);
}

html.dark .entry img {
  border-color: var(--darkhx-l3);
  background: none;
}

html.dark .dlbox .dlbox-title {
  color: var(--darkhx-l8);
  background: var(--darkhx-l2);
}

html.dark #author-box h3,
html.dark #related-posts h3,
html.dark #comments h3,
html.dark #commentform textarea,
html.dark .searchform div input,
html.dark .user-center,
html.dark .post-toolbar-report,
html.dark .box-title span {
  background: var(--darkhx-l2);
}

html.dark .dlbox,
html.dark #author-box .author-info,
html.dark .comment-body,
html.dark .commentlist .comment,
html.dark .comment-form,
html.dark #submit-bt,
html.dark #user-menu li {
  background: var(--darkhx-l1) !important;
}

html.dark #commentform textarea,
html.dark #submit-bt {
  -webkit-text-fill-color: var(--darkhx-l7);
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
