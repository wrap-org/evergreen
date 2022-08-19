// Ignore the sass module imports
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}