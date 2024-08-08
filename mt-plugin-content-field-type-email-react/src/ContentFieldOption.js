function ContentFieldOption(props) {
  props.attr ??= "";
  props.attr ??= null;
  props.hint ??= "";
  props.label ??= "";
  props.required ??= 0;
  props.showHint ??= 0;
  props.showLabel ??= 1;

  const className = props.required ? "form-group required" : "form-group";
  const attrProps = props.attr ? { attr: props.attr } : {};

  let attrShowProps = {};
  if (props.attrShow != null) {
    if (props.attrShow) {
      attrShowProps = {
        style: "",
      };
    } else {
      attrShowProps = {
        hidden: "",
        style: {
          display: "none"
        },
      };
    }
  }

  return (
    <div
      id={props.id + '-field'}
      class={className}
      {...attrProps}
      {...attrShowProps}
    >
      {
        (() => {
          if (props.label && props.showLabel) {
            if (props.required) {
              return (
                <label for={props.id}>
                  {props.label}

                  <span class="badge badge-danger">
                    {window.trans('Required')}
                  </span>
                </label>
              );
            } else {
              return (
                <label for={props.id}>
                  {props.label}
                </label>
              );  
            }
          }
        })()
      }

      { props.children }

      {
        (() => {
          if (props.hint && props.showHint) {
            return (<small id={props.id + '-field-help'} class="form-text text-muted">{props.hint}</small>);
          }
        })()
      }
    </div>
  );
}

export default ContentFieldOption;
