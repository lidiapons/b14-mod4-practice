export function showContent(content: any): any {
    const appElement = document.getElementById("app");
    if (appElement !== null) {
      appElement.innerHTML += `<pre>${JSON.stringify(
        content,
        undefined,
        2
      )}</pre>`;
    }
  }