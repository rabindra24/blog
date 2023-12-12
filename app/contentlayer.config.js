import {defineDocument, defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type{import ('contentlayer/source-files').ComputedFields} */

const computedFields = {
    slug : {
        type : 'string',
        resolve : (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParam : {
        type : 'string',
        resolve : (doc) => doc._raw.flattenedPath.split('/').slice(1).join,
    },
}

export const Doc = defineDocumentType(()=>({
    name : 'Doc',
    filePathPattern : `complete-nextjs/**/*`,
    contentType : 'mdx',
    fields : {
        title : {
            type : 'string',
            required : true,
        },
        description : {
            type : 'string'
        }
    }
}))