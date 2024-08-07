import Email from "./elements/Email.svelte";

function mountEmailSvelte(
  props: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  target: Element,
  /* @ts-expect-error : MT is not defined */
): MT.ContentType.CustomContentFieldObject {
  const emailSvelte = new Email({
    props: props,
    target: target,
  });
  return {
    component: emailSvelte,
    destroy: () => {
      emailSvelte.$destroy();
    },
  };
}

export { Email, mountEmailSvelte };
