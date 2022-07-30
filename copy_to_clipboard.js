/** Copy-to-clipboard for code sections (FeatherWiki#39) */
(() => {
  const app = window.FW;
  const html = window.html;

  app.use((state, emitter, app) => {
    const insert = () => {
      setTimeout(() => {
        [...document.getElementsByTagName('pre')].forEach(codeblock => {
          if (codeblock.getElementsByClassName('ext_ctc').length > 0) return;
          const b = html`<button class=ext_ctc aria-label="Copy to Clipboard">\uD83D\uDCCB</button>`;
          b.onclick = () => {
            const p = codeblock.cloneNode(true);
            p.removeChild(p.getElementsByClassName('ext_ctc')[0]);
            const c = () => prompt("Press Ctrl+C and press Enter", p.textContent);
            try {
              navigator.clipboard.writeText(p.textContent).then(()=>alert("Copied!"),c);
            } catch (e) { c(); }
          };
          codeblock.insertBefore(b, codeblock.childNodes[0]);
        });
        document.body.appendChild(html`<style>pre{position:relative;}pre:hover .ext_ctc{display:block;}.ext_ctc{display:none;padding:3px 6px;position:absolute;top:3px;right:3px;}</style>`);
      }, 0);
    };
    emitter.on('render', insert);
    insert();
  });
})();
