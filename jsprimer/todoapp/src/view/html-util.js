export function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}


/**
 * return HTML elements from HTML Strings
 * @parm {string} html
 */

 export function htmlToElement(html) {
     const template = document.createElement("template");
     template.innerHTML = html;
     return template.content.firstElementChild;
 }

 /**
  * Tag function that create and return DOM Node from HTML Strings
  * @return {Element}
  */

  export function element(strings, ...values) {
      const htmlString = strings.reduce((result, str, i) => {
          const value = values[i -1];
          if (typeof value === "string") {
              return result + escapeSpecialChars(value) + str;
          } else {
              return result + String(value) + str;
          }
      });
      return htmlToElement(htmlString);
  }

  /**
   * update container elements with bodyElements
   * @parm {Element} bodyElement :container elements contents
   * @poarm {Element} containerElement Contaier elements
   */

   export function render(bodyElement, containerElement) {
       //Empty containerElement
       containerElement.innerHTML = "";
       // add bodyElement on containerElement directory
       containerElement.appendChild(bodyElement);
   }