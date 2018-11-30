// Defer the types, refer to https://webpack.js.org/guides/typescript/#importing-other-assets

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}
