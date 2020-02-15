export default {
  components: [
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
              inputType: 'checkbox',
              tableView: true,
              label: 'حالة جديدة',
              dataGridLabel: false,
              key: 'newCase',
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
              tags: [],
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              properties: {},
              style: {
                'margin-right': '0px',
                'margin-left': '10px',
                'margin-top': '25px'
              },
              lockKey: true,
              hideLabel: false
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
              label: 'تاريخ الزيارة',
              key: 'date',
              placeholder: 'YYYY-MM-DD',
              prefix: '',
              enableDate: true,
              enableTime: false,
              suffix: '',
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
              description: '',
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
              inputType: 'number',
              label: 'رقم الأسرة',
              key: 'familyId',
              placeholder: 'رقم الأسرة',
              prefix: '',
              suffix: '',
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: true,
                min: 0,
                max: '',
                step: 'any',
                integer: '',
                multiple: '',
                custom: ''
              },
              type: 'number',
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
              inputType: 'number',
              label: 'رقم الزیارة',
              key: 'receptionNumber',
              placeholder: 'رقم الزیارة',
              prefix: '',
              suffix: '',
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: true,
                min: 0,
                max: '',
                step: 'any',
                integer: '',
                multiple: '',
                custom: ''
              },
              type: 'number',
              labelPosition: 'top',
              tags: [],
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              properties: {},
              labelWidth: 30,
              labelMargin: 3,
              description: '',
              errorLabel: '',
              tabindex: '',
              style: {
                'margin-right': '0px'
              },
              overlay: {
                style: ''
              },
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
      key: 'columns6',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'العنوان',
              key: 'address',
              placeholder: 'العنوان',
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
              label: 'الهاتف',
              key: 'visitorPhone',
              placeholder: 'الهاتف',
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
              label: 'مقدم الطلب',
              key: 'visitorName',
              placeholder: 'مقدم الطلب',
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
      key: 'columns10',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              label: 'سبب الزيارة',
              key: 'purposeOfVisit',
              placeholder: 'سبب الزيارة',
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
            },
            {
              clearOnHide: false,
              label: 'Columns',
              input: false,
              tableView: false,
              key: 'columns10Columns',
              columns: [
                {
                  components: [
                    {
                      autofocus: false,
                      input: true,
                      tableView: true,
                      label: 'تعليق القسم',
                      key: 'response',
                      placeholder: 'تعليق القسم',
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
              clearOnHide: false,
              label: 'Columns',
              input: false,
              tableView: false,
              key: 'columns12',
              columns: [
                {
                  components: [
                    {
                      autofocus: false,
                      input: true,
                      tableView: true,
                      label: 'تم اتخاذ الاجراءات المذكورة ادناه',
                      key: 'solutionGiven',
                      placeholder: 'تم اتخاذ الاجراءات المذكورة ادناه',
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
              tags: [],
              conditional: {
                show: '',
                when: null,
                eq: ''
              },
              properties: {},
              hideLabel: true
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
      key: 'columns14',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تصنيف الحالة',
              key: 'caseCategory',
              placeholder: 'تصنيف الحالة',
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
              label: 'الإحالة إلى',
              key: 'caseMovedTo',
              placeholder: 'الإحالة إلى',
              data: {
                values: [
                  {
                    value: 'طلبات الراشن',
                    label: 'طلبات الراشن'
                  },
                  {
                    value: 'طلبات الايتام',
                    label: 'طلبات الايتام'
                  },
                  {
                    value: 'طلبات الايجار',
                    label: 'طلبات الايجار'
                  },
                  {
                    value: 'طلبات فواتير الكهرباء',
                    label: 'طلبات فواتير الكهرباء'
                  },
                  {
                    value: 'طلبات الالكترونيات',
                    label: 'طلبات الالكترونيات'
                  },
                  {
                    value: 'اعادة دراسة الحالة',
                    label: 'اعادة دراسة الحالة'
                  },
                  {
                    value: 'طلبات منتهية',
                    label: 'طلبات منتهية'
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
      key: 'columns17',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'المستندات المطلوبة',
              key: 'documentsMissing',
              placeholder: 'المستندات المطلوبة',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns19',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              inputType: 'checkbox',
              tableView: true,
              label: 'تم انهاء الاجرات المطلوبة',
              dataGridLabel: false,
              key: 'caseClosed',
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
          push: 6,
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
      tags: ['submit'],
      conditional: {
        show: '',
        when: null,
        eq: ''
      },
      properties: {},
      lockKey: true
    }
  ]
}
