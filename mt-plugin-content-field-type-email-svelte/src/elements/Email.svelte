<script lang="ts">
  import { Writable } from "svelte/store";

  import ContentFieldOptionGroup from "mt/src/contenttype/elements/ContentFieldOptionGroup.svelte";
  import ContentFieldOption from "mt/src/contenttype/elements/ContentFieldOption.svelte";

  // svelte-ignore unused-export-let
  export let config: MT.ContentType.ConfigSettings;
  export let fieldIndex: number;
  export let fieldsStore: Writable<Array<MT.ContentType.Field>>;
  // svelte-ignore unused-export-let
  export let optionsHtmlParams: MT.ContentType.OptionsHtmlParams;

  const id = `field-options-${$fieldsStore[fieldIndex].id}`;

  $fieldsStore[fieldIndex].options.min_length ??= 0;
  $fieldsStore[fieldIndex].options.max_length ??= 255;
  $fieldsStore[fieldIndex].options.initial_value ??= "";
</script>

<ContentFieldOptionGroup
  type="emails"
  bind:field={$fieldsStore[fieldIndex]}
  {id}
  bind:options={$fieldsStore[fieldIndex].options}
>
  <ContentFieldOption id="emails-min_length" label={window.trans("Min Length")}>
    <input
      {...{ ref: "min_length" }}
      type="number"
      name="min_length"
      id="emails-min_length"
      class="form-control w-25"
      min="0"
      bind:value={$fieldsStore[fieldIndex].options.min_length}
    />
  </ContentFieldOption>

  <ContentFieldOption id="emails-max_length" label={window.trans("Max Length")}>
    <input
      {...{ ref: "max_length" }}
      type="number"
      name="max_length"
      id="emails-max_length"
      class="form-control w-25"
      min="1"
      bind:value={$fieldsStore[fieldIndex].options.max_length}
    />
  </ContentFieldOption>

  <ContentFieldOption
    id="emails-initial_value"
    label={window.trans("Initial Value")}
  >
    <input
      {...{ ref: "initial_value" }}
      type="text"
      name="initial_value"
      id="emails-initial_value"
      class="form-control"
      bind:value={$fieldsStore[fieldIndex].options.initial_value}
    />
  </ContentFieldOption>
</ContentFieldOptionGroup>
