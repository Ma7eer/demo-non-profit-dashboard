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
              inputType: 'checkbox',
              tableView: true,
              label: 'غير فعال',
              dataGridLabel: false,
              key: 'isArchived',
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
              lockKey: true,
              disabled: true
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
              label: 'نوع المساعدة',
              key: 'typeOfAssistanceNeeded',
              placeholder: 'نوع المساعدة',
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
              disabled: true,
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
              label: 'تاريخ دراسة الحالة',
              key: 'dateOfCaseStudy',
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
              lockKey: true,
              disabled: true
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
              label: 'اسم صاحب الطلب',
              key: 'claimMadeBy',
              placeholder: 'اسم صاحب الطلب',
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
              lockKey: true,
              disabled: true
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
              label: 'رقم ملف الاسرة',
              key: 'formId',
              placeholder: 'رقم ملف الاسرة',
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
              disabled: true,
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
              label: 'رقم الاستمارة',
              key: 'familyId',
              placeholder: 'رقم الاستمارة',
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
              lockKey: true,
              disabled: true
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
              label: 'أخرى',
              key: 'familyCategory.0.other',
              placeholder: 'أخرى',
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
              lockKey: true,
              disabled: true
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
              inputType: 'checkbox',
              tableView: true,
              label: 'أخرى',
              dataGridLabel: false,
              key: 'familyCategory.0.isOther',
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
              lockKey: true,
              disabled: true
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
              inputType: 'checkbox',
              tableView: true,
              label: 'عجز',
              dataGridLabel: false,
              key: 'familyCategory.0.financialIssues',
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
              lockKey: true,
              disabled: true
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
              inputType: 'checkbox',
              tableView: true,
              label: 'أسرة ضمانية',
              dataGridLabel: false,
              key: 'familyCategory.0.socialSecurity',
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
              lockKey: true,
              disabled: true
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
              inputType: 'checkbox',
              tableView: true,
              label: 'دخل محدود',
              dataGridLabel: false,
              key: 'familyCategory.0.limitedIncome',
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
              lockKey: true,
              disabled: true
            }
          ],
          width: 1,
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
              label: 'الايتام',
              dataGridLabel: false,
              key: 'familyCategory.0.orphan',
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
              lockKey: true,
              disabled: true
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
              key: 'columns3Content',
              label: 'Content',
              input: false,
              tag: 'p',
              attrs: [
                {
                  value: '',
                  attr: ''
                }
              ],
              className: 'title',
              content: ':فئة الاسرة',
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
          width: 1,
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
      tag: 'hr',
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
      tableView: true,
      label: 'تقرير الباحث الاجتماعي عن حالة الاسرة',
      key: 'report',
      placeholder: 'تقرير الباحث الاجتماعي عن حالة الاسرة',
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
      autofocus: false,
      input: true,
      tableView: true,
      label: 'اقتراحات الباحث',
      key: 'suggestions',
      placeholder: 'اقتراحات الباحث',
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
              label: 'تاريخ البحث',
              key: 'dateOfReport',
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
              label: 'رقم الهاتف',
              key: 'fieldAgentPhone',
              placeholder: 'رقم الهاتف',
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
              label: 'اسم الباحث',
              key: 'fieldAgentName',
              placeholder: 'اسم الباحث',
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
      key: 'content2',
      label: 'Content',
      input: false,
      tag: 'h2',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: '',
      content: 'توصيات اللجنة',
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
              label: '1',
              key: 'panelRecFirst',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
              lockKey: true
            }
          ],
          width: 12,
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
              label: '2',
              key: 'panelRecSecond',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
              lockKey: true
            }
          ],
          width: 12,
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
              label: '3',
              key: 'panelRecThird',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
              lockKey: true
            }
          ],
          width: 12,
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
              label: '4',
              key: 'panelRecFourth',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
              lockKey: true
            }
          ],
          width: 12,
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
              label: '5',
              key: 'panelRecFifth',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
              lockKey: true
            }
          ],
          width: 12,
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
              label: '6',
              key: 'panelRecSixth',
              placeholder: '',
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
              labelPosition: 'right-left',
              inputFormat: 'plain',
              tags: [],
              properties: {},
              labelWidth: 1,
              labelMargin: 3,
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
