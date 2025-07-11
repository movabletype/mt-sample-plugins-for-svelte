import React from 'react';
import ReactDOM from 'react-dom/client';

import Email from "./Email";

function mountEmailReact(props, target) {
  const unsubscribe = props.fieldsStore.subscribe((value) => {
    props.fields = value;
  })

  const root = ReactDOM.createRoot(target);
  root.render(
    <React.StrictMode>
      <Email {...props} />
    </React.StrictMode>
  );

  return {
    component: root,
    gather: () => {
      const data = {
        id: target.querySelector('input[name=id]').value,
        label: target.querySelector('input[name=label]').value,
        description: target.querySelector('input[name=description]').value,
        required: target.querySelector('input[name=required]').checked ? 1 : 0,
        display: target.querySelector('select[name=display]').value,
        min_length: target.querySelector('input[name=min_length]').value,
        max_length: target.querySelector('input[name=max_length]').value,
        initial_value: target.querySelector('input[name=initial_value]').value
      };
      return data;
    },
    destroy: () => {
      root.unmount();
      unsubscribe();
    },
  };
}

window.mountEmailReact = mountEmailReact;
