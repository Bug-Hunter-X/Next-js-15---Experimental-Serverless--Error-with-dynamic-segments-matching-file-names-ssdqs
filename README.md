# Next.js 15 - Experimental Serverless Bug

This repository demonstrates a bug in Next.js 15 when using the experimental serverless feature.  The bug occurs when a dynamic segment in an app route matches the name of a file in the `pages` directory.

## Bug Description

When using serverless functions with dynamic routes and a file in the `pages` directory matches the route dynamic segment, an error may occur.  This issue can lead to unexpected behavior or prevent your application from rendering correctly.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a route that triggers the dynamic segment (e.g., `/about` if the dynamic segment is `[slug]`).

## Expected Behavior

The application should render the correct content based on the dynamic route.

## Actual Behavior

The application throws an error or renders the wrong content.

## Solution

The solution involves ensuring the dynamic route segment does not conflict with any existing file names in the `pages` directory.  Renaming the file or adjusting the route may resolve this issue.
