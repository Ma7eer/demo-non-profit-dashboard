export default {
  components: [
    {
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'رقم هاتف الكفيل',
              key: 'sponsorPhone',
              placeholder: 'رقم هاتف الكفيل',
              prefix: '',
              suffix: '',
              multiple: false,
              defaultValue: '',
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              spellcheck: true,
              validate: {
                required: false,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: '',
                customPrivate: false
              },
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              type: 'textfield',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              lockKey: true
            }
          ],
          width: 4,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'اسم الكفيل',
              key: 'sponsorName',
              placeholder: 'اسم الكفيل',
              prefix: '',
              suffix: '',
              multiple: false,
              defaultValue: '',
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              spellcheck: true,
              validate: {
                required: false,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: '',
                customPrivate: false
              },
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              type: 'textfield',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              lockKey: true
            }
          ],
          width: 4,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'رقم الكفيل',
              key: 'sponsorId',
              placeholder: 'رقم الكفيل',
              prefix: '',
              suffix: '',
              multiple: false,
              defaultValue: '',
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              spellcheck: true,
              validate: {
                required: true,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: '',
                customPrivate: false
              },
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              type: 'textfield',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              lockKey: true
            }
          ],
          width: 4,
          offset: 0,
          push: 0,
          pull: 0
        }
      ],
      type: 'columns',
      hideLabel: true,
      tags: [],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {}
    },
    // {
    //   clearOnHide: false,
    //   label: 'Columns',
    //   input: false,
    //   tableView: false,
    //   key: 'columns2',
    //   columns: [
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: 'text',
    //           inputMask: '',
    //           label: 'تاريخ الدفع',
    //           key: 'dateOfPayment',
    //           placeholder: 'YYYY-MM-DD',
    //           prefix: '',
    //           suffix: '',
    //           multiple: false,
    //           defaultValue: '',
    //           protected: false,
    //           unique: false,
    //           persistent: true,
    //           hidden: false,
    //           clearOnHide: true,
    //           spellcheck: true,
    //           validate: {
    //             required: false,
    //             minLength: '',
    //             maxLength: '',
    //             pattern: '',
    //             custom: '',
    //             customPrivate: false
    //           },
    //           conditional: {
    //             show: '',
    //             when: null,
    //             eq: ''
    //           },
    //           type: 'textfield',
    //           labelPosition: 'top',
    //           inputFormat: 'plain',
    //           tags: [],
    //           properties: {},
    //           lockKey: true
    //         }
    //       ],
    //       width: 4,
    //       offset: 0,
    //       push: 0,
    //       pull: 0
    //     },
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: 'text',
    //           inputMask: '',
    //           label: 'المبلغ',
    //           key: 'paymentAmount',
    //           placeholder: 'المبلغ',
    //           prefix: '',
    //           suffix: '',
    //           multiple: false,
    //           defaultValue: '',
    //           protected: false,
    //           unique: false,
    //           persistent: true,
    //           hidden: false,
    //           clearOnHide: true,
    //           spellcheck: true,
    //           validate: {
    //             required: false,
    //             minLength: '',
    //             maxLength: '',
    //             pattern: '',
    //             custom: '',
    //             customPrivate: false
    //           },
    //           conditional: {
    //             show: '',
    //             when: null,
    //             eq: ''
    //           },
    //           type: 'textfield',
    //           labelPosition: 'top',
    //           inputFormat: 'plain',
    //           tags: [],
    //           properties: {},
    //           lockKey: true
    //         }
    //       ],
    //       width: 4,
    //       offset: 0,
    //       push: 0,
    //       pull: 0
    //     },
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: 'text',
    //           inputMask: '',
    //           label: 'طريقة الدفع',
    //           key: 'paymentMethod',
    //           placeholder: 'طريقة الدفع',
    //           prefix: '',
    //           suffix: '',
    //           multiple: false,
    //           defaultValue: '',
    //           protected: false,
    //           unique: false,
    //           persistent: true,
    //           hidden: false,
    //           clearOnHide: true,
    //           spellcheck: true,
    //           validate: {
    //             required: false,
    //             minLength: '',
    //             maxLength: '',
    //             pattern: '',
    //             custom: '',
    //             customPrivate: false
    //           },
    //           conditional: {
    //             show: '',
    //             when: null,
    //             eq: ''
    //           },
    //           type: 'textfield',
    //           labelPosition: 'top',
    //           inputFormat: 'plain',
    //           tags: [],
    //           properties: {},
    //           lockKey: true
    //         }
    //       ],
    //       width: 4,
    //       offset: 0,
    //       push: 0,
    //       pull: 0
    //     }
    //   ],
    //   type: 'columns',
    //   hideLabel: true,
    //   tags: [],
    //   conditional: {
    //     show: '',
    //     when: null,
    //     eq: ''
    //   },
    //   properties: {}
    // },
    // {
    //   clearOnHide: false,
    //   label: "Columns",
    //   input: false,
    //   tableView: false,
    //   key: "columns3",
    //   columns: [
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: "text",
    //           inputMask: "",
    //           label: "اسم الاسرة",
    //           key: "familyName",
    //           placeholder: "اسم الاسرة",
    //           prefix: "",
    //           suffix: "",
    //           multiple: false,
    //           defaultValue: "",
    //           protected: false,
    //           unique: false,
    //           persistent: true,
    //           hidden: false,
    //           clearOnHide: true,
    //           spellcheck: true,
    //           validate: {
    //             required: false,
    //             minLength: "",
    //             maxLength: "",
    //             pattern: "",
    //             custom: "",
    //             customPrivate: false
    //           },
    //           conditional: {
    //             show: "",
    //             when: null,
    //             eq: ""
    //           },
    //           type: "textfield",
    //           labelPosition: "top",
    //           inputFormat: "plain",
    //           tags: [],
    //           properties: {},
    //           lockKey: true
    //         }
    //       ],
    //       width: 6,
    //       offset: 0,
    //       push: 0,
    //       pull: 0
    //     },
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: "text",
    //           inputMask: "",
    //           label: "رقم الاسرة",
    //           key: "lowIncomeFamilyId",
    //           placeholder: "رقم الاسرة",
    //           prefix: "",
    //           suffix: "",
    //           multiple: false,
    //           defaultValue: "",
    //           protected: false,
    //           unique: false,
    //           persistent: true,
    //           hidden: false,
    //           clearOnHide: true,
    //           spellcheck: true,
    //           validate: {
    //             required: false,
    //             minLength: "",
    //             maxLength: "",
    //             pattern: "",
    //             custom: "",
    //             customPrivate: false
    //           },
    //           conditional: {
    //             show: "",
    //             when: null,
    //             eq: ""
    //           },
    //           type: "textfield",
    //           labelPosition: "top",
    //           inputFormat: "plain",
    //           tags: [],
    //           properties: {},
    //           lockKey: true
    //         }
    //       ],
    //       width: 6,
    //       offset: 0,
    //       push: 0,
    //       pull: 0
    //     }
    //   ],
    //   type: "columns",
    //   hideLabel: true,
    //   tags: [],
    //   conditional: {
    //     show: "",
    //     when: null,
    //     eq: ""
    //   },
    //   properties: {}
    // },
    {
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns4',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'الملاحظات',
              key: 'notes',
              placeholder: 'الملاحظات',
              prefix: '',
              suffix: '',
              multiple: false,
              defaultValue: '',
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              spellcheck: true,
              validate: {
                required: false,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: '',
                customPrivate: false
              },
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              type: 'textarea',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              lockKey: true
            }
          ],
          width: 12,
          offset: 0,
          push: 0,
          pull: 0
        }
      ],
      type: 'columns',
      hideLabel: true,
      tags: [],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {}
    },
    {
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns5',
      columns: [
        {
          components: [],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              autofocus: false,
              input: true,
              inputType: 'checkbox',
              tableView: true,
              label: 'غير فعال',
              dataGridLabel: false,
              key: 'isActive',
              defaultValue: false,
              protected: false,
              persistent: true,
              hidden: false,
              name: '',
              value: '',
              clearOnHide: true,
              validate: {
                required: false
              },
              type: 'checkbox',
              labelPosition: 'right',
              hideLabel: false,
              tags: [],
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              properties: {},
              lockKey: true
            }
          ],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0
        }
      ],
      type: 'columns',
      hideLabel: true,
      tags: [],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {}
    },
    {
      key: 'content',
      label: 'Content',
      input: false,
      tag: 'br',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: '',
      content: '',
      type: 'htmlelement',
      hideLabel: true,
      tags: [],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {}
    },
    {
      autofocus: false,
      input: true,
      label: 'ادخال البيانات',
      tableView: false,
      key: 'submit',
      size: 'md',
      leftIcon: '',
      rightIcon: '',
      block: true,
      action: 'submit',
      disableOnInvalid: false,
      theme: '',
      type: 'button',
      tags: [],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {}
    }
  ]
}
