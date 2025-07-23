import Email from "./elements/Email.svelte";
import type { EmailOptions } from "./@types/email";

import type { CustomContentFieldMountFunction } from "@sixapart/mt-toolkit/contenttype";

const mountEmailSvelte: CustomContentFieldMountFunction<EmailOptions> =
  function (props, target) {
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
  };

export { Email, mountEmailSvelte };
