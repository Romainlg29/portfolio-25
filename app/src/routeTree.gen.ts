/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsSplatImport } from './routes/posts/$'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PostsSplatRoute = PostsSplatImport.update({
  path: '/posts/$',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/posts/$': {
      id: '/posts/$'
      path: '/posts/$'
      fullPath: '/posts/$'
      preLoaderRoute: typeof PostsSplatImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/posts/$': typeof PostsSplatRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/posts/$': typeof PostsSplatRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/posts/$': typeof PostsSplatRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/posts/$'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/posts/$'
  id: '__root__' | '/' | '/posts/$'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  PostsSplatRoute: typeof PostsSplatRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  PostsSplatRoute: PostsSplatRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts/$"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/posts/$": {
      "filePath": "posts/$.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
