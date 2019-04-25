# Formik + Nextjs SSR bug

## Steps

1. `npm i`
2. `npm run bs`

## Error

```
TypeError: Cannot read property 'values' of undefined
    at t.render (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/formik/dist/formik.cjs.production.js:1:11336)
    at c (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:35:231)
    at Sa (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:1)
    at a.render (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:41:467)
    at a.read (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:41:58)
    at renderToString (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:53:83)
    at render (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/next-server/dist/server/render.js:86:16)
    at renderPage (/Users/dmitry/projects/tmp/next-formik-bug/node_modules/next-server/dist/server/render.js:211:20)
    at Function.value (/Users/dmitry/projects/tmp/next-formik-bug/.next/server/static/UbGu0lVv6x2Nd4p3fdJFP/pages/_document.js:8
```

## Note 

It seems to be some issue with production build of Formik. `npm run dev` work just fine.
