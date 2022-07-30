# FeatherWiki Extensions

> These are unofficial extensions made by pipythonmc. Use at your own risk.

> [For more information about FeatherWiki, visit https://feather.wiki.](https://feather.wiki)

[You can find a demo for extensions at https://featherdev.tiddlyhost.com/.](https://featherdev.tiddlyhost.com/)

## Hide Sidebar

### Install

Add the following to the Custom JS section of Wiki Settings:

```js
document.body.appendChild(html`<script src="https://pythonmcpi.github.io/fw_ext/hide_sidebar.min.js"><\/script>`);
```

Save and reload to enable the extension.

### Usage

Add `&sidebar=hide` to hide the sidebar for the session. The sidebar will become visible again after reloading the page without the `sidebar=hide`.

## Copy (Code Snippet) to Clipboard

### Install

Add the following to the Custom JS section of Wiki Settings:

```js
document.body.appendChild(html`<script src="https://pythonmcpi.github.io/fw_ext/copy_to_clipboard.min.js"><\/script>`);
```

Save and reload to enable the extension.

### Usage

Add a code block to a wiki page and save the page. Hover over the code block to see the copy button. (Clipboard emoji in the top right corner.)

You can customize the button appearance by styling the `ext_ctc` class.
