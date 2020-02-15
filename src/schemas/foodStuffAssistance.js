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
              label: 'مركز التسوق',
              key: 'shoppingCenter',
              placeholder: 'مركز التسوق',
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
              label: 'رقم الاسرة',
              key: 'familyId',
              placeholder: 'رقم الاسرة',
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
              label: 'رقم الاستمارة',
              key: 'assistanceId',
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
              label: 'اسم المستلم',
              key: 'nameOfRecipient',
              placeholder: 'اسم المستلم',
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
              label: 'تاريخ وقف المساعدة',
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
              label: 'تاريخ بدء المساعدة',
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
              label: 'سبب وقف المساعدة',
              key: 'reasonForSupportStopping',
              placeholder: 'سبب وقف المساعدة',
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
              key: 'phoneOfRecipient',
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
              label: 'رقم مدني',
              key: 'civilIdOfRecipient',
              placeholder: 'رقم مدني',
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
              label: 'بموافقة من',
              key: 'orderedBy',
              placeholder: 'بموافقة من',
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
