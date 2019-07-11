function HtmlImageElement(src) {
   this.src = src;

   this.render = function () {
      return `<img src="${this.src}" />`
   }
}



HtmlImageElement.prototype = new HtmlElement;
HtmlImageElement.prototype.constructor = HtmlImageElement;