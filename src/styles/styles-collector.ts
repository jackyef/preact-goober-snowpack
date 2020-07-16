import { css as originalCss, glob as originalGlob } from 'goober';

let context: Object;

export const setupStylesCollector = (ctx: Object) => {
  context = ctx;
};

export const css = (tag: TemplateStringsArray | string, ...props: any[]) => {
  if (context) {
    return originalCss.bind({ target: context })(tag, ...props);
  }

  return originalCss(tag, ...props);
};

export const glob = (tag: TemplateStringsArray | string, ...props: any[]) => {
  if (context) {
    return originalGlob.bind({ target: context })(tag, ...props);
  }

  return originalGlob(tag, ...props);
};
