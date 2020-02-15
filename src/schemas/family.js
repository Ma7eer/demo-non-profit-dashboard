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
              tabindex: 1,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'أخرى',
              key: 'familyCategory.0.other',
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
              lockKey: true
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
              lockKey: true
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
              lockKey: true
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
              key: 'columns2',
              label: 'فئة الاسرة',
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
      key: 'columns3',
      columns: [
        {
          components: [
            {
              tabindex: 5,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ دراسة الحالة',
              key: 'dateOfCaseStudy',
              placeholder: 'YYYY-MM-DD',
              prefix: '',
              // enableDate: true,
              // enableTime: false,
              // format: 'yyyy-MM-dd',
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
              tabindex: 4,
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
              // required: true,
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
          width: 3,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              tabindex: 3,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'رقم الملف',
              key: 'formId',
              placeholder: 'رقم الملف',
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
              tabindex: 1,
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
              tabindex: 7,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'ملاحظة',
              key: 'notes',
              placeholder: 'ملاحظة',
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
              tabindex: 6,
              autofocus: false,
              input: true,
              tableView: true,
              label: 'نوع المساعدة',
              key: 'typeOfAssistanceNeeded',
              placeholder: 'نوع المساعدة',
              data: {
                values: [
                  {
                    value: 'اسرة معسرة',
                    label: 'اسرة معسرة'
                  },
                  {
                    value: 'كفالة ايتام',
                    label: 'كفالة ايتام'
                  },
                  {
                    value: 'موسمي',
                    label: 'موسمي'
                  },
                  {
                    value: 'ارشيف',
                    label: 'ارشيف'
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
      key: 'columns5',
      columns: [
        {
          components: [
            {
              tabindex: 11,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'الحلة',
              key: 'familyAddress.0.neighborhood',
              placeholder: 'الحلة',
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
              tabindex: 10,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'البلدة',
              key: 'familyAddress.0.town',
              placeholder: 'البلدة',
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
              tabindex: 9,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'الولاية',
              key: 'familyAddress.0.state',
              placeholder: 'الولاية',
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
              tabindex: 8,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'المحافظة',
              key: 'familyAddress.0.governorate',
              placeholder: 'المحافظة',
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
      key: 'columns6',
      columns: [
        {
          components: [
            {
              tabindex: 13,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'رقم الهاتف',
              key: 'phone',
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
              tabindex: 12,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ الرسالة',
              key: 'dateOfLetter',
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
          width: 4,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              tabindex: 11,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'مصدر الحالة',
              key: 'sourceOfCase',
              placeholder: 'مصدر الحالة',
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
      key: 'columns7',
      columns: [
        {
          components: [
            {
              tabindex: 16,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ الارشفة',
              key: 'dateOfArchiving',
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
          width: 5,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              tabindex: 15,
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'سبب اللأرشفة',
              key: 'reasonForArchiving',
              placeholder: 'سبب اللأرشفة',
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
          width: 5,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              tabindex: 14,
              autofocus: false,
              input: true,
              inputType: 'checkbox',
              tableView: true,
              label: 'مؤرشف',
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
      key: 'content',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'بيانات الزوج',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns8',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'هاتف',
              key: 'husband.0.husbandPhone',
              placeholder: 'هاتف',
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
              label: 'رقم البطاقة',
              key: 'husband.0.husbandCivilId',
              placeholder: 'رقم البطاقة',
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
              label: 'الجنسية',
              key: 'husband.0.husbandNationality',
              placeholder: 'الجنسية',
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
              label: 'اسم الزوج',
              key: 'husband.0.husbandName',
              placeholder: 'اسم الزوج',
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
      key: 'columns9',
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
              key: 'husband.0.OtherHusbandStatus',
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
              inputType: 'checkbox',
              tableView: true,
              label: 'متوفى',
              dataGridLabel: false,
              key: 'husband.0.husbandIsDeceased',
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
              label: 'مريض',
              dataGridLabel: false,
              key: 'husband.0.husbandIsSick',
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
              label: 'عاجز',
              dataGridLabel: false,
              key: 'husband.0.husbandIsDisabled',
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
              label: 'مسجون',
              dataGridLabel: false,
              key: 'husband.0.husbandIsIncarcerated',
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
              label: 'عاطل',
              dataGridLabel: false,
              key: 'husband.0.husbandIsUnemployed',
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
              label: 'متقاعد',
              dataGridLabel: false,
              key: 'husband.0.husbandIsRetired',
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
              label: 'يعمل',
              dataGridLabel: false,
              key: 'husband.0.husbandIsWorking',
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
          width: 1,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              key: 'columns9Content',
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
              content: ':حالة الزوج',
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
      key: 'columns10',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'مبلغ الراتب',
              key: 'husband.0.husbandSalary',
              placeholder: 'مبلغ الراتب',
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
              label: 'الوظيفة',
              key: 'husband.0.husbandJob',
              placeholder: 'الوظيفة',
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
              label: 'جهة عمل',
              key: 'husband.0.husbandWorksAt',
              placeholder: 'جهة عمل',
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
      key: 'columns11',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'عدد الزوجات',
              key: 'husband.0.husbandNumberOfWives',
              placeholder: 'عدد الزوجات',
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
              label: 'راتب التقاعد',
              key: 'husband.0.husbandRetirementSalary',
              placeholder: 'راتب التقاعد',
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
              label: 'جهة التقاعد',
              key: 'husband.0.husbandRetiredFrom',
              placeholder: 'جهة التقاعد',
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
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'بيانات الزوجة',
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
      key: 'content13',
      label: 'Contentvcd',
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
              inputType: 'text',
              inputMask: '',
              label: 'هاتف',
              key: 'wife.0.wifePhone',
              placeholder: 'هاتف',
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
              inputType: 'text',
              inputMask: '',
              label: 'رقم المدني',
              key: 'wife.0.wifeCivilId',
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
              label: 'الجنسية',
              key: 'wife.0.wifeNationality',
              placeholder: 'الجنسية',
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
              inputType: 'checkbox',
              tableView: true,
              label: 'تعمل',
              dataGridLabel: false,
              key: 'wife.0.wifeIsWorking',
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
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'اسم الزوجة',
              key: 'wife.0.wifeName',
              placeholder: 'اسم الزوجة',
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
    {
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns13',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              inputType: 'checkbox',
              tableView: true,
              label: 'مطلقة',
              dataGridLabel: false,
              key: 'wife.0.wifeIsDivorced',
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
              label: 'متوفاة',
              dataGridLabel: false,
              key: 'wife.0.wifeIsDeceased',
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
              label: 'مريضة',
              dataGridLabel: false,
              key: 'wife.0.wifeIsSick',
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
              label: 'عجز',
              dataGridLabel: false,
              key: 'wife.0.wifeIsDisabled',
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
              label: 'هجر',
              dataGridLabel: false,
              key: 'wife.0.wifeIsAbandoned',
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
              label: 'ارملة',
              dataGridLabel: false,
              key: 'wife.0.wifeIsWidow',
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
              label: 'متقاعدة',
              dataGridLabel: false,
              key: 'wife.0.wifeIsRetired',
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
              label: 'ربة منزل',
              dataGridLabel: false,
              key: 'wife.0.isHouseWife',
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
      key: 'content12',
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
      properties: {},
      isNew: false
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
              label: 'تاريخ الطلاق',
              key: 'wife.0.dateOfDivorce',
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
              label: 'مبلغ التقاعد',
              key: 'wife.0.wifeRetirementSalary',
              placeholder: 'مبلغ التقاعد',
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
              inputType: 'text',
              inputMask: '',
              label: 'جهة التقاعد',
              key: 'wife.0.wifeRetiredFrom',
              placeholder: 'جهة التقاعد',
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
              inputType: 'text',
              inputMask: '',
              label: 'مبلغ الراتب',
              key: 'wife.0.wifeSalary',
              placeholder: 'مبلغ الراتب',
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
              inputType: 'text',
              inputMask: '',
              label: 'جهة العمل',
              key: 'wife.0.wifeWorksAt',
              placeholder: 'جهة العمل',
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
              inputType: 'text',
              inputMask: '',
              label: 'الوظيفة',
              key: 'wife.0.wifeJob',
              placeholder: 'الوظيفة',
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
      key: 'columns15',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'نوع المهنة',
              key: 'wife.0.typeOfProductiveFamily',
              placeholder: 'نوع المهنة',
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
              inputType: 'checkbox',
              tableView: true,
              label: 'هل ترغب الزوجة ان تكون من الاسر المنتجة لمساعدة اسرتها',
              dataGridLabel: false,
              key: 'wife.0.isProductiveFamily',
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
              label: 'رقم حساب الزوجة و البنك',
              key: 'wife.0.wifeBankNumber',
              placeholder: 'رقم حساب الزوجة و البنك',
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
      key: 'content3',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'بيانات الولي الامر والقريب',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns16',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'رقم الهاتف',
              key: 'guardian.0.guardianPhone',
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
              label: 'صلة القرابة',
              key: 'guardian.0.guardianRelation',
              placeholder: 'صلة القرابة',
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
              label: 'الرقم المدني',
              key: 'guardian.0.guardianCivilID',
              placeholder: 'الرقم المدني',
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
              label: 'اسم ولي امر الايتام او الوكيل',
              key: 'guardian.0.guardianName',
              placeholder: 'اسم ولي امر الايتام او الوكيل',
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
              label: 'صلة القرابة',
              key: 'relative.0.relativeRelation',
              placeholder: 'صلة القرابة',
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
              key: 'relative.0.relativePhone',
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
              label: 'اسم احد الاقارب',
              key: 'relative.0.relativeName',
              placeholder: 'اسم احد الاقارب',
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
      key: 'content4',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'بيانات الأسرة',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns18',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'الاناث',
              key: 'femaleUnemployedAdultChildren',
              placeholder: 'الاناث',
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
              label: 'الذكور',
              key: 'maleUnemployedAdultChildren',
              placeholder: 'الذكور',
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
              key: 'columns18Content',
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
              content: ':عدد الابناء فوق 18 سنة بدون عمل',
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
              label: 'عدد افراد الاسرة المقيمين بالمنزل بصفة دائمة',
              key: 'numberOfResidenceInHouseHold',
              placeholder: 'عدد افراد الاسرة المقيمين بالمنزل بصفة دائمة',
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
      key: 'content5',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'عدد الطلبة في المراحل الدراسية',
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
      key: 'content13',
      label: 'Contentvcd',
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
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'المرحلة الجامعية',
              key: 'numberOfChildrenInHigherEducation',
              placeholder: 'المرحلة الجامعية',
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
              label: 'الثانوي',
              key: 'numberOfChildrenInHighSchool',
              placeholder: 'الثانوي',
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
              label: 'الاعدادي',
              key: 'numberOfChildrenInSecondary',
              placeholder: 'الاعدادي',
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
              label: 'الابتدائي',
              key: 'numberOfChildrenInElementary',
              placeholder: 'الابتدائي',
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
      key: 'content6',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'مصادر دخل الاسرة المعدل الشهري',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns20',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'مبلغ جمعية الرحمة',
              key: 'income.0.alrahmaSalary',
              placeholder: 'مبلغ جمعية الرحمة',
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
              label: 'مبلغ الضمان',
              key: 'income.0.socialSecuritySalary',
              placeholder: 'مبلغ الضمان',
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
              label: 'مبلغ التقاعد',
              key: 'income.0.retirementSalary',
              placeholder: 'مبلغ التقاعد',
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
              label: 'مبلغ الراتب',
              key: 'income.0.salary',
              placeholder: 'مبلغ الراتب',
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
              label: 'مبلغ الجمعية العمانية للاعمال الخيرية',
              key: 'income.0.omanCharityOrgSalary',
              placeholder: 'مبلغ الجمعية العمانية للاعمال الخيرية',
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
              label: 'مبلغ بهوان',
              key: 'income.0.bahwanSalary',
              placeholder: 'مبلغ بهوان',
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
              label: 'النفقة',
              key: 'income.0.nafaqaSalary',
              placeholder: 'النفقة',
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
              label: 'مبلغ دار العطاء',
              key: 'income.0.darAlataaSalary',
              placeholder: 'مبلغ دار العطاء',
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
              label: 'مبالغ اخرى',
              key: 'income.0.otherSalary',
              placeholder: 'مبالغ اخرى',
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
      key: 'content7',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'نوع السكن',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns21',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'نوع اخر',
              key: 'livingCondition.0.otherAccommodation',
              placeholder: 'نوع اخر',
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
              inputType: 'checkbox',
              tableView: true,
              label: 'ملحق',
              dataGridLabel: false,
              key: 'livingCondition.0.addition',
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
              label: 'شقة',
              dataGridLabel: false,
              key: 'livingCondition.0.apartment',
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
              label: 'منزل طابقين',
              dataGridLabel: false,
              key: 'livingCondition.0.twoStoryHouse',
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
              label: 'منزل طابق واحد',
              dataGridLabel: false,
              key: 'livingCondition.0.oneStoryHouse',
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
      key: 'content8',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'نوع حيازة المسكن',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns22',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'المتأخر من ايجار المنزل',
              key: 'accommodationStatus.0.lateRentAmount',
              placeholder: 'المتأخر من ايجار المنزل',
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
              label: 'الايجار الشهري',
              key: 'accommodationStatus.0.rentAmount',
              placeholder: 'الايجار الشهري',
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
              inputType: 'checkbox',
              tableView: true,
              label: 'ايجار',
              dataGridLabel: false,
              key: 'accommodationStatus.0.rent',
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
              label: 'مشترك',
              dataGridLabel: false,
              key: 'accommodationStatus.0.combined',
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
              label: 'ورث',
              dataGridLabel: false,
              key: 'accommodationStatus.0.inherited',
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
              label: 'ملك',
              dataGridLabel: false,
              key: 'accommodationStatus.0.owned',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns23',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'مبلغ فاتورة الماء',
              key: 'accommodationStatus.0.lateWaterAmount',
              placeholder: 'مبلغ فاتورة الماء',
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
          width: 5,
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
              label: 'مبلغ فاتورة الكهرباء',
              key: 'accommodationStatus.0.lateElectricalAmount',
              placeholder: 'مبلغ فاتورة الكهرباء',
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
          width: 5,
          offset: 0,
          push: 0,
          pull: 0
        },
        {
          components: [
            {
              key: 'columns23Content',
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
              content: ':المبالغ المتأخرة',
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
      key: 'content9',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'تفاصيل المنزل',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns24',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'عدد الحمامات',
              key: 'homeDetails.0.numberOfBathrooms',
              placeholder: 'عدد الحمامات',
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
              label: 'عدد المطابخ',
              key: 'homeDetails.0.numberOfKitchens',
              placeholder: 'عدد المطابخ',
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
              label: 'عدد الصالات',
              key: 'homeDetails.0.numberOfSittingRooms',
              placeholder: 'عدد الصالات',
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
              inputType: 'text',
              inputMask: '',
              label: 'عدد المجالس',
              key: 'homeDetails.0.numberOfLivingRooms',
              placeholder: 'عدد المجالس',
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
              inputType: 'text',
              inputMask: '',
              label: 'عدد الغرف',
              key: 'homeDetails.0.numberOfRooms',
              placeholder: 'عدد الغرف',
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
      key: 'content10',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'ممتلكات الاسرة',
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
      key: 'content13',
      label: 'Contentvcd',
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
      clearOnHide: false,
      label: 'Columns',
      input: false,
      tableView: false,
      key: 'columns25',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'نوع اخر',
              key: 'possessions.0.otherPossessions',
              placeholder: 'نوع اخر',
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
              inputType: 'text',
              inputMask: '',
              label: 'سيارة نقل مياه',
              key: 'possessions.0.waterTruck',
              placeholder: 'سيارة نقل مياه',
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
              inputType: 'text',
              inputMask: '',
              label: 'سيارة غاز',
              key: 'possessions.0.gasTruck',
              placeholder: 'سيارة غاز',
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
              inputType: 'text',
              inputMask: '',
              label: 'حافلة مدرسة',
              key: 'possessions.0.schoolBus',
              placeholder: 'حافلة مدرسة',
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
              inputType: 'text',
              inputMask: '',
              label: 'سيارة أجرة',
              key: 'possessions.0.rentalVehicles',
              placeholder: 'سيارة أجرة',
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
              inputType: 'text',
              inputMask: '',
              label: 'عدد السيارات الخاصة',
              key: 'possessions.0.privateVehicles',
              placeholder: 'عدد السيارات الخاصة',
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
      key: 'content11',
      label: 'Content',
      input: false,
      tag: 'h3',
      attrs: [
        {
          value: '',
          attr: ''
        }
      ],
      className: 'red',
      content: 'القروض',
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
      input: false,
      key: 'table',
      numRows: 4,
      numCols: 5,
      rows: [
        [
          {
            components: [
              {
                key: 'tableContent8',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'المبلغ المتبقي',
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
            ]
          },
          {
            components: [
              {
                key: 'tableContent7',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'القسط الشهري',
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
            ]
          },
          {
            components: [
              {
                key: 'tableContent6',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'مبلغ القرض',
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
            ]
          },
          {
            components: [
              {
                key: 'tableContent5',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'اسم الجهة المانحة للقرض او التمويل',
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
            ]
          },
          {
            components: [
              {
                key: 'tableContent',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'نوع',
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
            ]
          }
        ],
        [
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.housingLoanAmountDue',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.housingLoanMonthlyPayments',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.housingLoanAmount',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.housingLoaner',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                key: 'tableContent2',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'القروض السكنية',
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
            ]
          }
        ],
        [
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.personalLoanAmountDue',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.personalLoanMonthlyPayments',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.personalLoanAmount',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.personalLoaner',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                key: 'tableContent3',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'القروض الشخصية',
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
            ]
          }
        ],
        [
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.vehicleLoanAmountDue',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.vehicleLoanMonthlyPayments',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.vehicleLoanAmount',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                autofocus: false,
                input: true,
                tableView: true,
                inputType: 'text',
                inputMask: '',
                label: 'Text',
                key: 'loan.0.vehicleLoaner',
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
                labelPosition: 'top',
                inputFormat: 'plain',
                tags: [],
                properties: {},
                hideLabel: true,
                lockKey: true
              }
            ]
          },
          {
            components: [
              {
                key: 'tableContent4',
                label: 'Content',
                input: false,
                tag: 'p',
                attrs: [
                  {
                    value: '',
                    attr: ''
                  }
                ],
                className: '',
                content: 'قروض شراء سيارة',
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
            ]
          }
        ]
      ],
      header: [],
      caption: '',
      striped: false,
      bordered: false,
      hover: false,
      condensed: false,
      tableView: false,
      type: 'table',
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
      key: 'columns26',
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: 'text',
              inputMask: '',
              label: 'تاريخ التحديث',
              key: 'dateOfUpdate',
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
              label: 'تم التحديث بواسطة',
              key: 'updatedBy',
              placeholder: 'تم التحديث بواسطة',
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
      autofocus: false,
      input: true,
      tableView: true,
      label: 'ملاحظات عامة',
      key: 'finalNotes',
      placeholder: 'ملاحظات عامة',
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
      inputType: 'checkbox',
      tableView: true,
      label: 'ادخال الى قائمة الطلبات؟',
      dataGridLabel: false,
      key: 'isWaitList',
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
    },
    {
      autofocus: false,
      input: true,
      inputType: 'checkbox',
      tableView: true,
      label: 'ادخال الى قائمة رمضان؟',
      dataGridLabel: false,
      key: 'isRamadan',
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
    },
    {
      autofocus: false,
      input: true,
      inputType: 'checkbox',
      tableView: true,
      label: 'ادخال الى قائمة عيد الاضحى؟',
      dataGridLabel: false,
      key: 'isEidAlAdha',
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
