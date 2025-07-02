import { useState } from "react";
import ContentFieldOption from "./ContentFieldOption";
import ContentFieldOptionGroup from "./ContentFieldOptionGroup";

function Email(props) {
  const id = `field-options-${props.fields[props.fieldIndex].id}`;

  props.fields[props.fieldIndex].options.min_length ??= 0;
  props.fields[props.fieldIndex].options.max_length ??= 255;
  props.fields[props.fieldIndex].options.initial_value ??= "";

  const [minLength, setMinLength] = useState(props.fields[props.fieldIndex].options.min_length);
  const [maxLength, setMaxLength] = useState(props.fields[props.fieldIndex].options.max_length);
  const [initialValue, setInitialValue] = useState(props.fields[props.fieldIndex].options.initial_value);

  const onChangeMinLength = (e) => {
    setMinLength(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.min_length = e.target.value;
      return v;
    });
  };

  const onChangeMaxLength = (e) => {
    setMaxLength(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.max_length = e.target.value;
      return v;
    });
  };

  const onChangeInitialValue = (e) => {
    setInitialValue(() => e.target.value);
    props.fieldsStore.update((v) => {
      v[props.fieldIndex].options.initial_value = e.target.value;
      return v;
    });
  };

  return (
    <ContentFieldOptionGroup
      type="email"
      field={props.fields[props.fieldIndex]}
      fieldIndex={props.fieldIndex}
      fieldsStore={props.fieldsStore}
      id={id}
      options={props.fields[props.fieldIndex].options}
    >
      <ContentFieldOption
        id="email-min_length"
        label={window.trans("Min Length")}
      >
        <input
          type="number"
          name="min_length"
          id="email-min_length"
          class="form-control w-25"
          min="0"
          value={minLength}
          onChange={onChangeMinLength}
        />
      </ContentFieldOption>

      <ContentFieldOption
        id="email-max_length"
        label={window.trans("Max Length")}
      >
        <input
          type="number"
          name="max_length"
          id="email-max_length"
          class="form-control w-25"
          min="1"
          value={maxLength}
          onChange={onChangeMaxLength}
        />
      </ContentFieldOption>

      <ContentFieldOption
        id="email-initial_value"
        label={window.trans("Initial Value")}
      >
        <input
          type="text"
          name="initial_value"
          id="email-initial_value"
          class="form-control"
          value={initialValue}
          onChange={onChangeInitialValue}
        />
      </ContentFieldOption>
    </ContentFieldOptionGroup>
  );
}

export default Email;
