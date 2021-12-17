`注意：`DOM 是一种适用于多种环境和多种程序设计语言的通用型 API。如果想把从本书学到的 DOM 技巧运用在 Web 浏览器以外的应用环境里，严格遵循“第一级 DOM”能够让你避免与兼容性相关的任何问题。

## childNodes 属性

在一颗节点树上，childNodes 属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组。

## nodeType 属性

nodeType 属性总共有 12 种可取值，但其中仅有 3 具有实用价值。

- 元素节点的 nodeType 属性值是 1
- 属性节点的 nodeType 属性值是 2
- 文本节点的 nodeType 属性值是 3

## nodeValue 属性

如果想改变一个文本节点的值，那使用 DOM 提供的 nodeValue 属性，它用来得到（和设置）一个节点的值

注意：在用 nodeValue 属性获取 p 对象的值时，得到的并不是包含在这个段落里的文本。
正确写法：p[0].nodeValue 或 p.firstChild.nodeValue

## firstChild 和 lastChild 属性

我们可以通过 firstChild 来访问数组的第一个元素，lastChild 来访问数组的最后一个元素。
