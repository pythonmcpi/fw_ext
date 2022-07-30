# FeatherWiki Extensions

> These are unofficial extensions made by pipythonmc. Use at your own risk.

> [For more information about FeatherWiki, visit https://feather.wiki](https://feather.wiki).

## Hide Sidebar

### Install

Add the following to the Custom JS section of Wiki Settings:

```js
document.body.appendChild(html`<script src="https://pythonmcpi.github.io/fw_ext/hide_sidebar.min.js"><\/script>`);
```

Save and reload to enable the extension.

### Usage

Add `&sidebar=hide` to hide the sidebar for the session. The sidebar will become visible again after reloading the page without the `sidebar=hide`.
