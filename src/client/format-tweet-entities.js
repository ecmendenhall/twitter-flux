import twitterText from 'twitter-text';

function replaceAllElements(doc, selector, newElementName, modify) {
  let elementsToReplace = doc.querySelectorAll(selector);
  for (var i=0; i < elementsToReplace.length; i++) {
    let element = elementsToReplace[i];
    let newElement = doc.createElement(newElementName);
    modify(element, newElement);
    element.parentNode.replaceChild(newElement, element);
  }
}

export class FormatTweetEntities {

  static call(tweetText) {
    let tweetHTML = twitterText.autoLink(tweetText);
    let doc = document.implementation.createHTMLDocument('tweetText');
    doc.documentElement.innerHTML = tweetHTML;

    replaceAllElements(doc, 'a.username', 'twitter-flux-mention', (el, newEl) => {
      newEl.setAttribute('screen_name', el.getAttribute('data-screen-name'));
    });

    replaceAllElements(doc, 'a.hashtag', 'twitter-flux-hashtag', (el, newEl) => {
      newEl.setAttribute('tag', el.getAttribute('title'));
    });

    replaceAllElements(doc, 'a.cashtag', 'twitter-flux-cashtag', (el, newEl) => {
      newEl.setAttribute('tag', el.getAttribute('title'));
    });

    replaceAllElements(doc, 'a.list-slug', 'twitter-flux-list', (el, newEl) => {
      newEl.setAttribute('list', el.innerHTML);
    });

    replaceAllElements(doc, 'a', 'twitter-flux-link', (el, newEl) => {
      newEl.setAttribute('href', el.getAttribute('href'));
    });

    return doc.body.innerHTML.replace(/twitter-flux-mention/g, 'Mention')
                             .replace(/twitter-flux-link/g, 'Link')
                             .replace(/twitter-flux-hashtag/g, 'Hashtag')
                             .replace(/twitter-flux-cashtag/g, 'Cashtag')
                             .replace(/twitter-flux-list/g, 'List');
  }
}
