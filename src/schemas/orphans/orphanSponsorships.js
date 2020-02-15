export default {
  components: [
    // {
    //   clearOnHide: false,
    //   label: "Columns",
    //   input: false,
    //   tableView: false,
    //   key: "columns",
    //   columns: [
    //     {
    //       components: [
    //         {
    //           autofocus: false,
    //           input: true,
    //           tableView: true,
    //           inputType: "text",
    //           inputMask: "",
    //           label: "كود اليتيم",
    //           key: "orphanId",
    //           placeholder: "كود اليتيم",
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
    //           inputType: "text",
    //           inputMask: "",
    //           label: "رقم الكفالة",
    //           key: "sponsorshipId",
    //           placeholder: "رقم الكفالة",
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
    //           inputType: "text",
    //           inputMask: "",
    //           label: "كود الكفيل",
    //           key: "sponsorId",
    //           placeholder: "كود الكفيل",
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
    //       width: 4,
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
      key: 'columns2',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ الانتهاء',
              key: 'endDate',
              enableDate: true,
              enableTime: false,
              format: 'yyyy-MM-dd',
              placeholder: 'YYYY-MM-DD',
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
              type: 'datetime',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              lockKey: true
            }
          ],
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
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ البدء',
              key: 'startDate',
              placeholder: 'YYYY-MM-DD',
              prefix: '',
              suffix: '',
              enableDate: true,
              enableTime: false,
              format: 'yyyy-MM-dd',
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
              type: 'datetime',
              labelPosition: 'top',
              inputFormat: 'plain',
              tags: [],
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns3',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              label: 'الحالة',
              key: 'sponsorshipStatus',
              placeholder: 'الحالة',
              data: {
                values: [
                  {
                    value: 'فعال',
                    label: 'فعال'
                  },
                  {
                    value: 'غير فعال',
                    label: 'غير فعال'
                  }
                ],
                json: '',
                url: '',
                resource: '',
                custom: ''
              },
              dataSrc: 'values',
              valueProperty: '',
              defaultValue: '',
              refreshOn: '',
              filter: '',
              authenticate: false,
              template: '<span>{{ item.label }}</span>',
              multiple: false,
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: true
              },
              type: 'select',
              labelPosition: 'top',
              tags: [],
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              properties: {},
              lockKey: true,
              isNew: false
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
              label: 'نوع الدفع',
              key: 'paymentMethod',
              placeholder: 'نوع الدفع',
              data: {
                values: [
                  {
                    value: 'نقد شهري',
                    label: 'نقد شهري'
                  },
                  {
                    value: 'نقد عدة أشهر',
                    label: 'نقد عدة أشهر'
                  },
                  {
                    value: 'نقد سنوى',
                    label: 'نقد سنوى'
                  },
                  {
                    value: 'ايداع شهري',
                    label: 'ايداع شهري'
                  },
                  {
                    value: 'ايداع عدة اشهر',
                    label: 'ايداع عدة اشهر'
                  },
                  {
                    value: 'ايداع سنوي',
                    label: 'ايداع سنوي'
                  },
                  {
                    value: 'تحويل ثابت',
                    label: 'تحويل ثابت'
                  },
                  {
                    value: 'تحويل سنوي',
                    label: 'تحويل سنوي'
                  }
                ],
                json: '',
                url: '',
                resource: '',
                custom: ''
              },
              dataSrc: 'values',
              valueProperty: '',
              defaultValue: '',
              refreshOn: '',
              filter: '',
              authenticate: false,
              template: '<span>{{ item.label }}</span>',
              multiple: false,
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: false
              },
              type: 'select',
              labelPosition: 'top',
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
              label: 'المبلغ',
              key: 'amount',
              placeholder: 'المبلغ',
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
      key: 'columns4',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              label: 'ملاحظات',
              key: 'notes',
              placeholder: 'ملاحظات',
              prefix: '',
              suffix: '',
              rows: 3,
              multiple: false,
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              wysiwyg: false,
              clearOnHide: true,
              spellcheck: true,
              validate: {
                required: false,
                minLength: '',
                maxLength: '',
                pattern: '',
                custom: ''
              },
              type: 'textarea',
              labelPosition: 'top',
              inputFormat: 'plain',
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
      theme: 'primary',
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
