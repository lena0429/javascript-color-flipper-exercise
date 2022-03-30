# JavaScript Exercise 1 - Color Flipper
#### Original repo can be found <a href="https://github.com/john-smilga/javascript-basic-projects">here</a>.

### What is DOM?
The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. 

### What is DOM event listener? 
The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. 

### Math.floor()
The Math.floor() function returns the largest integer less than or equal to a given number.

### Math.random()
The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range.

### Differences between innerText & textContent
* `textContent` gets the content of all elements, including <script> and <style> elements. In contrast, `innerText` only shows "human-readable" elements.
* `textContent` returns every element in the node. In contrast, `innerText` is aware of styling and won't return the text of "hidden" elements.
* Both `textContent` and `innerText` remove child nodes when altered, but altering `innerText` in Internet Explorer (version 11 and below) also permanently destroys all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so. 
* Check full documentation <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">here</a>

