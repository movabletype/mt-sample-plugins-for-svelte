import React, { useEffect, useRef, useState } from "react";

import ContentFieldOption from "./ContentFieldOption";

import { recalcHeight } from "./Utils";

function ContentFieldOptionGroup(props) {
  if (!props.options.display) {
    props.options.display = "default";
  }

  let mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return;
    }

    const root = getRoot();
    if (!root) {
      return;
    }

    const elms = root.querySelectorAll("*");
    Array.prototype.slice.call(elms).forEach(function (v) {
      if (
        v.hasAttribute("id") &&
        !v.classList.contains("mt-custom-contentfield") // do not change id in Custom.svelte
      ) {
        v.setAttribute("id", v.getAttribute("id") + "-" + props.id);
      }
      if (v.tagName.toLowerCase() === "label" && v.hasAttribute("for")) {
        v.setAttribute("for", v.getAttribute("for") + "-" + props.id);
      }
    });

    mounted.current = true;
 });

  const closePanel = () => {
    const root = getRoot();
    if (!root) {
      return;
    }

    let className = root.className;
    root.className = className.replace(/\s*show\s*/, "");
    const target = document.getElementsByClassName("mt-draggable__area")[0];
    recalcHeight(target);

    // eslint-disable-next-line no-undef
    jQuery("a[aria-controls='field-options-" + props.field.id + "']").attr(
      "aria-expanded",
      "false",
    );
  };

  // added in Svelte
  const getRoot = () => {
    return document.querySelector("#field-options-" + props.field.id);
  };
  
  const [label, setLabel] = useState(props.field.label);
  const [description, setDescription] = useState(props.options.description);
  const [required, setRequired] = useState(props.options.required);
  const [display, setDisplay] = useState(props.options.display);

  const onChangeLabel = (e) => {
    setLabel(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].label = e.target.value;
      return v;
    })
  };

  const onChangeDescription = (e) => {
    setDescription(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.description = e.target.value;
      return v;
    })
  };

  const onChangeRequired = (e) => {
    setRequired(() => e.target.checked ? 1 : 0);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.required = e.target.checked ? 1 : 0;
      return v;
    })
  };

  const onChangeDisplay = (e) => {
    setDisplay(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.display = e.target.value;
      return v;
    })
  };

  return (
    <>
      <input
        type="hidden"
        name="id"
        id={props.type + "-id"}
        class="form-control"
        value={props.field.isNew ? `id:${props.field.id}` : props.field.id}
      />

      <ContentFieldOption
        id={props.type + "-label"}
        label={window.trans("Label")}
        required={1}
      >
        <input
          type="text"
          name="label"
          id={props.type + "-label"}
          class="form-control html5-form"
          value={label}
          onChange={onChangeLabel}
          required
          data-mt-content-field-unique
        />
      </ContentFieldOption>

      <ContentFieldOption
        id={props.type + "-description"}
        label={window.trans("Description")}
        showHint={1}
        hint={window.trans("The entered message is displayed as a input field hint.")}
      >
        <input
          type="text"
          name="description"
          id="{type}-description"
          class="form-control"
          aria-describedby={props.type + "-description-field-help"}
          value={description}
          onChange={onChangeDescription}
        />
      </ContentFieldOption>

      <ContentFieldOption
        id={props.type + '-required'}
        label={window.trans("Is this field rquired?")}
      >
        <input
          type="checkbox"
          class="mt-switch form-control"
          id={props.type + "-required"}
          name="required"
          checked={required}
          onChange={onChangeRequired}
        />
        <label for={props.type + "-required"}>
          {window.trans("Is this field required?")}
        </label>
      </ContentFieldOption>

      <ContentFieldOption
        id={props.type + '-display'}
        label={window.trans("Display options")}
        required={1}
        showHint={1}
        hint={window.trans("Choose the display options for this content field in the listing screen.")}
      >
        <select
          name="display"
          id={props.type + '-display'}
          class="custom-select form-control form-select"
          value={display}
          onChange={onChangeDisplay}
        >
          <option value="force">{window.trans("Force")}</option>
          <option value="default">{window.trans("Default")}</option>
          <option value="optional">{window.trans("Optional")}</option>
          <option value="none">{window.trans("None")}</option>
        </select>
      </ContentFieldOption>

      { props.children }

      <div class="form-group-button">
        <button type="button" class="btn btn-default" onClick={closePanel}>
          {window.trans("Close")}
        </button>
      </div>
    </>
  );
}

export default ContentFieldOptionGroup;
