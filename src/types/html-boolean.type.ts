// Because our components are sometimes used in a web context,
// we need to be able to accept boolean values as strings.
// This type is a union of the string values 'true' and 'false'
// and the boolean values true and false.
export type HtmlBoolean = 'true' | 'false' | boolean;
