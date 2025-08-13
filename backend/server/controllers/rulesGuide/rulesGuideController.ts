import { MarkdownContent, ComponentContent } from '@srd/common/interfaces/ChapterInterfaces'
import { Request, Response } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapter(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')

    const chapterContents: (MarkdownContent | ComponentContent)[] = [
        {
            type: 'markdown',
            body: `# Chapter ${chapter} in the ${book}

react-markdown is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
// * Renders actual React elements instead of using dangerouslySetInnerHTML
// * Lets you define your own components (to render MyHeading instead of h1)
* Has a lot of plugins

## Table of contents

## Syntax highlighting

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
["remark-gfm"](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support  |
| ---------: | :------------------- |
| CommonMark | 100%     |
| GFM        | 100% w/ "remark-gfm" |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use ["rehype-raw"](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
["rehype-sanitize"](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:


## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)

| Feature    | Support  |
| ---------: | :------------------- |
| CommonMark | 100%     |
| GFM        | 100% w/ "remark-gfm" |`
        },
        {
            type: 'component',
            component: 'characteristicGenerator'
        },
        {
            type: 'markdown',
            body: 'And thus it was ended'
        }
    ]

    const navigation: { section: string, id: string, type: 'h1' | 'h2' }[] = [
        {
            section: `Chapter ${chapter} in the ${book}`,
            id: `chapter-${chapter}-in-the-${book}`,
            type: 'h1'
        },
        {
            section: `Overview`,
            id: `overview`,
            type: 'h2'
        },
        {
            section: `Table of contents`,
            id: `table-of-contents`,
            type: 'h2'
        },
        {
            section: `Syntax highlighting`,
            id: `syntax-highlighting`,
            type: 'h2'
        },
        {
            section: `GitHub flavored markdown (GFM)`,
            id: `gitHub-flavored-markdown-gfm`,
            type: 'h2'
        },
        {
            section: `HTML in markdown`,
            id: `html-in-markdown`,
            type: 'h2'
        },
        {
            section: `Components`,
            id: `components`,
            type: 'h2'
        },
        {
            section: `More info?`,
            id: `more-info`,
            type: 'h2'
        }
    ]

    checkForContentTypeBeforeSending(response, { book, chapter, chapterContents, navigation })
}