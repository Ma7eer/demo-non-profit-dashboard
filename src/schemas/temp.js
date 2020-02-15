export default {
  components: [
    {
      autofocus: false,
      input: true,
      tableView: true,
      inputType: "number",
      label: "Number",
      key: "number",
      placeholder: "",
      prefix: "",
      suffix: "",
      defaultValue: "",
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      validate: {
        required: false,
        min: "",
        max: "",
        step: "any",
        integer: "",
        multiple: "",
        custom: ""
      },
      type: "number",
      labelPosition: "top",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {}
    },
    {
      autofocus: false,
      input: true,
      tableView: true,
      label: "Select",
      key: "select",
      placeholder: "",
      data: {
        values: [
          {
            value: "cda",
            label: "cda"
          },
          {
            value: "cdavrv",
            label: "cdavrv"
          },
          {
            value: "vvvv",
            label: "vvvv"
          }
        ],
        json: "",
        url: "",
        resource: "",
        custom: ""
      },
      dataSrc: "values",
      valueProperty: "",
      defaultValue: "",
      refreshOn: "",
      filter: "",
      authenticate: false,
      template: "<span>{{ item.label }}</span>",
      multiple: false,
      protected: false,
      unique: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      validate: {
        required: false
      },
      type: "select",
      labelPosition: "top",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {}
    },
    {
      autofocus: false,
      input: true,
      tableView: true,
      label: "Day",
      key: "day",
      fields: {
        day: {
          type: "number",
          placeholder: "",
          required: false
        },
        month: {
          type: "select",
          placeholder: "",
          required: false
        },
        year: {
          type: "number",
          placeholder: "",
          required: false
        }
      },
      dayFirst: false,
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      validate: {
        custom: ""
      },
      type: "day",
      labelPosition: "top",
      inputsLabelPosition: "top",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {}
    },
    {
      type: "button",
      theme: "primary",
      disableOnInvalid: true,
      action: "submit",
      block: false,
      rightIcon: "",
      leftIcon: "",
      size: "md",
      key: "submit",
      tableView: false,
      label: "Submit",
      input: true,
      autofocus: false
    }
  ]
};
