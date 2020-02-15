export default {
  components: [
    {
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns6',
      columns: [
        // {
        //   components: [
        //     {
        //       autofocus: false,
        //       input: true,
        //       tableView: true,
        //       inputType: "number",
        //       inputMask: "",
        //       label: "رقم الكفيل",
        //       key: "sponsorId",
        //       placeholder: "رقم الكفيل",
        //       prefix: "",
        //       suffix: "",
        //       multiple: false,
        //       defaultValue: "",
        //       protected: false,
        //       unique: false,
        //       persistent: true,
        //       hidden: false,
        //       clearOnHide: true,
        //       spellcheck: true,
        //       validate: {
        //         required: false,
        //         min: "0",
        //         max: "",
        //         step: "any",
        //         integer: "",
        //         multiple: "",
        //         custom: ""
        //       },
        //       conditional: {
        //         show: "",
        //         when: null,
        //         eq: ""
        //       },
        //       type: "number",
        //       labelPosition: "top",
        //       inputFormat: "plain",
        //       tags: [],
        //       properties: {},
        //       lockKey: true,
        //       disabled: true
        //     }
        //   ],
        //   width: 6,
        //   offset: 0,
        //   push: 0,
        //   pull: 0
        // },
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'number',
              inputMask: '',
              label: 'رقم اليتيم',
              key: 'orphanId',
              placeholder: 'رقم اليتيم',
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
                min: '0',
                max: '',
                step: 'any',
                integer: '',
                multiple: '',
                custom: ''
              },
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              type: 'number',
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
      key: 'columns3',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'حالة الصحية',
              key: 'orphanHealth',
              placeholder: 'حالة الصحية',
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
          width: 3,
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
              label: 'تاريخ الميلاد',
              key: 'orphanDateOfBirth',
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
          width: 2,
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
              label: 'جنسية',
              key: 'orphanNationality',
              placeholder: 'جنسية',
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
          width: 2,
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
              label: 'جنس',
              key: 'orphanSex',
              placeholder: 'جنس',
              data: {
                values: [
                  {
                    value: 'ذكر',
                    label: 'ذكر'
                  },
                  {
                    value: 'انثى',
                    label: 'انثى'
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
          width: 2,
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
              label: 'اسم اليتيم',
              key: 'orphanName',
              placeholder: 'اسم اليتيم',
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
          width: 3,
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
              label: 'حالة اليتيم',
              key: 'sponsorshipStatus',
              placeholder: 'حالة اليتيم',
              data: {
                values: [
                  {
                    value: 'فعال',
                    label: 'فعال'
                  },
                  {
                    value: 'ملف مغلق',
                    label: 'ملف مغلق'
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
          width: 3,
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
              label: 'تاريخ وقف الكفالة',
              key: 'sponsorStopDate',
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
          width: 3,
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
              label: 'تاريخ وفاة الاب',
              key: 'fatherDeathDate',
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
          width: 3,
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
              label: 'مكان الولادة',
              key: 'placeOfBirth',
              placeholder: 'مكان الولادة',
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
          width: 3,
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
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'ملاحظات',
              key: 'notes',
              placeholder: 'ملاحظات',
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
      theme: '',
      type: 'button'
    }
  ]
}
