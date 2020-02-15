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
              label: 'الزوجة',
              key: 'wifeName',
              placeholder: 'الزوجة',
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
              label: 'الزوج',
              key: 'husbandName',
              placeholder: 'الزوج',
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
              inputType: 'number',
              label: 'رقم ملف الكفالة',
              key: 'sponsorshipFormId',
              placeholder: 'رقم ملف الكفالة',
              prefix: '',
              suffix: '',
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: false,
                min: '',
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
              inputType: 'number',
              label: 'رقم استمارة ارشفة',
              key: 'formId',
              placeholder: 'رقم استمارة ارشفة',
              prefix: '',
              suffix: '',
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: false,
                min: '',
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
              inputType: 'number',
              label: 'رقم',
              key: 'sponsorshipId',
              placeholder: 'رقم',
              prefix: '',
              suffix: '',
              defaultValue: '',
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: true,
                min: '',
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
          width: 2,
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
              label: 'نوع الكفالة',
              key: 'typeOfSponsorship',
              placeholder: 'نوع الكفالة',
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
              label: 'فئة الاسرة',
              key: 'familyCategory',
              placeholder: 'فئة الاسرة',
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
              label: 'الهاتف',
              key: 'phone',
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
              label: 'هاتف المستفيد',
              key: 'recipientPhone',
              placeholder: 'هاتف المستفيد',
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
              label: 'المستفيد - بالانجليزي',
              key: 'recipientNameEnglish',
              placeholder: 'المستفيد - بالانجليزي',
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
              label: 'المستفيد',
              key: 'recipientName',
              placeholder: 'المستفيد',
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
              inputType: 'text',
              inputMask: '',
              label: 'البنك',
              key: 'bank',
              placeholder: 'البنك',
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
              label: 'رقم حساب',
              key: 'bankAccount',
              placeholder: 'رقم حساب',
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
              label: 'تاريخ نهاية الكفالة',
              key: 'endDate',
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
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ بدء الكفالة',
              key: 'startDate',
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
            },
            {
              key: 'columns6Content',
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
      key: 'columns7',
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
              label: 'ملف مغلق',
              dataGridLabel: false,
              key: 'isClosed',
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
      type: 'button',
      theme: 'primary',
      disableOnInvalid: true,
      action: 'submit',
      block: true,
      rightIcon: '',
      leftIcon: '',
      size: 'md',
      key: 'submit',
      tableView: false,
      label: 'ادخال البيانات',
      input: true,
      autofocus: false,
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
