var formSchema = {
    "_id": "57aa1d2a5b7a477b002717fe",
    "machineName": "examples:example",
    "modified": "2022-12-09T17:14:46.932Z",
    "title": "Example",
    "display": "form",
    "type": "form",
    "name": "example",
    "path": "example",
    "project": "5692b91fd1028f01000407e3",
    "created": "2016-08-09T18:12:58.126Z",
    "components": [
        {
            "input": false,
            // "html": "\u003Ch1\u003E\u003Ca href=\"https://form.io\"\u003EForm.io\u003C/a\u003E Example Form\u003C/h1\u003E\n\n\u003Cp\u003EThis is a dynamically rendered JSON form&nbsp;built with \u003Ca href=\"https://form.io\"\u003EForm.io\u003C/a\u003E. Using a simple&nbsp;drag-and-drop form builder, you can create any form that includes e-signatures, wysiwyg editors, date fields, layout components, data grids, surveys, etc.\u003C/p\u003E\n",
            "type": "content",
            "conditional": {
                "show": "",
                "when": null,
                "eq": ""
            },
            "key": "content",
            "placeholder": "",
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": null,
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "refreshOn": "",
            "redrawOn": "",
            "tableView": false,
            "modalEdit": false,
            "label": "Content",
            "dataGridLabel": false,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "hideLabel": false,
            "tabindex": "",
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": null,
            "attributes": {

            },
            "validateOn": "change",
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {

            },
            "allowMultipleMasks": false,
            "id": "e4w5wnn",
            "addons": []
        },
        {
            "input": false,
            "columns": [
                {
                    "components": [
                        {
                            "tabindex": "1",
                            "tags": [],
                            "clearOnHide": true,
                            "hidden": false,
                            "input": true,
                            "tableView": true,
                            "inputType": "text",
                            "inputMask": "",
                            "label": "First Name",
                            "key": "firstName",
                            "placeholder": "Enter your first name",
                            "prefix": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": "",
                            "protected": false,
                            "unique": false,
                            "persistent": true,
                            "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false,
                                "strictDateValidation": false,
                                "multiple": false,
                                "unique": false
                            },
                            "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                            },
                            "type": "textfield",
                            "customClass": "",
                            "refreshOn": "",
                            "redrawOn": "",
                            "modalEdit": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "calculateServer": false,
                            "widget": {
                                "type": "input"
                            },
                            "attributes": {

                            },
                            "validateOn": "change",
                            "overlay": {
                                "style": "",
                                "left": "",
                                "top": "",
                                "width": "",
                                "height": ""
                            },
                            "allowCalculateOverride": false,
                            "encrypted": false,
                            "showCharCount": false,
                            "showWordCount": false,
                            "properties": {

                            },
                            "allowMultipleMasks": false,
                            "mask": false,
                            "inputFormat": "plain",
                            "spellcheck": true,
                            "id": "ek1pl3",
                            "addons": [],
                            "displayMask": "",
                            "truncateMultipleSpaces": false
                        },
                        {
                            "tabindex": "3",
                            "tags": [],
                            "clearOnHide": true,
                            "hidden": false,
                            "input": true,
                            "tableView": true,
                            "inputType": "email",
                            "label": "Email",
                            "key": "email",
                            "placeholder": "Enter your email address",
                            "prefix": "",
                            "suffix": "",
                            "defaultValue": "",
                            "protected": false,
                            "unique": false,
                            "persistent": true,
                            "type": "email",
                            "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                            },
                            "kickbox": {
                                "enabled": false
                            },
                            "customClass": "",
                            "multiple": false,
                            "refreshOn": "",
                            "redrawOn": "",
                            "modalEdit": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "calculateServer": false,
                            "widget": {
                                "type": "input"
                            },
                            "attributes": {

                            },
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false,
                                "strictDateValidation": false,
                                "multiple": false,
                                "unique": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": ""
                            },
                            "overlay": {
                                "style": "",
                                "left": "",
                                "top": "",
                                "width": "",
                                "height": ""
                            },
                            "allowCalculateOverride": false,
                            "encrypted": false,
                            "showCharCount": false,
                            "showWordCount": false,
                            "properties": {

                            },
                            "allowMultipleMasks": false,
                            "mask": false,
                            "inputFormat": "plain",
                            "inputMask": "",
                            "spellcheck": true,
                            "id": "en2328",
                            "addons": [],
                            "displayMask": "",
                            "truncateMultipleSpaces": false
                        }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "md",
                    "currentWidth": 6
                },
                {
                    "components": [
                        {
                            "tabindex": "2",
                            "tags": [],
                            "clearOnHide": true,
                            "hidden": false,
                            "input": true,
                            "tableView": true,
                            "inputType": "text",
                            "inputMask": "",
                            "label": "Last Name",
                            "key": "lastName",
                            "placeholder": "Enter your last name",
                            "prefix": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": "",
                            "protected": false,
                            "unique": false,
                            "persistent": true,
                            "validate": {
                                "required": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": "",
                                "custom": "",
                                "customPrivate": false,
                                "strictDateValidation": false,
                                "multiple": false,
                                "unique": false
                            },
                            "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                            },
                            "type": "textfield",
                            "customClass": "",
                            "refreshOn": "",
                            "redrawOn": "",
                            "modalEdit": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "calculateServer": false,
                            "widget": {
                                "type": "input"
                            },
                            "attributes": {

                            },
                            "validateOn": "change",
                            "overlay": {
                                "style": "",
                                "left": "",
                                "top": "",
                                "width": "",
                                "height": ""
                            },
                            "allowCalculateOverride": false,
                            "encrypted": false,
                            "showCharCount": false,
                            "showWordCount": false,
                            "properties": {

                            },
                            "allowMultipleMasks": false,
                            "mask": false,
                            "inputFormat": "plain",
                            "spellcheck": true,
                            "id": "ex6xzd",
                            "addons": [],
                            "displayMask": "",
                            "truncateMultipleSpaces": false
                        },
                        {
                            "tabindex": "4",
                            "tags": [],
                            "clearOnHide": true,
                            "hidden": false,
                            "input": true,
                            "tableView": true,
                            "inputMask": "(999) 999-9999",
                            "label": "Phone Number",
                            "key": "phoneNumber",
                            "placeholder": "Enter your phone number",
                            "prefix": "",
                            "suffix": "",
                            "multiple": false,
                            "protected": false,
                            "unique": false,
                            "persistent": true,
                            "defaultValue": "",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false,
                                "strictDateValidation": false,
                                "multiple": false,
                                "unique": false,
                                "minLength": "",
                                "maxLength": "",
                                "pattern": ""
                            },
                            "type": "phoneNumber",
                            "conditional": {
                                "show": "",
                                "when": null,
                                "eq": ""
                            },
                            "customClass": "",
                            "refreshOn": "",
                            "redrawOn": "",
                            "modalEdit": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "calculateServer": false,
                            "widget": {
                                "type": "input"
                            },
                            "attributes": {

                            },
                            "validateOn": "change",
                            "overlay": {
                                "style": "",
                                "left": "",
                                "top": "",
                                "width": "",
                                "height": ""
                            },
                            "allowCalculateOverride": false,
                            "encrypted": false,
                            "showCharCount": false,
                            "showWordCount": false,
                            "properties": {

                            },
                            "allowMultipleMasks": false,
                            "mask": false,
                            "inputType": "tel",
                            "inputFormat": "plain",
                            "spellcheck": true,
                            "inputMode": "decimal",
                            "id": "ecee6s",
                            "addons": [],
                            "displayMask": "",
                            "truncateMultipleSpaces": false
                        }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "md",
                    "currentWidth": 6
                }
            ],
            "type": "columns",
            "conditional": {
                "show": "",
                "when": null,
                "eq": ""
            },
            "key": "columns",
            "placeholder": "",
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": null,
            "protected": false,
            "unique": false,
            "persistent": false,
            "hidden": false,
            "clearOnHide": false,
            "refreshOn": "",
            "redrawOn": "",
            "tableView": false,
            "modalEdit": false,
            "label": "Columns",
            "dataGridLabel": false,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "hideLabel": false,
            "tabindex": "",
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": null,
            "attributes": {

            },
            "validateOn": "change",
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {

            },
            "allowMultipleMasks": false,
            "tree": false,
            "autoAdjust": false,
            "id": "e2i9r0c",
            "addons": [],
            "lazyLoad": false
        },
        {
            "tabindex": "5",
            "tags": [],
            "clearOnHide": true,
            "hidden": false,
            "input": true,
            "tableView": true,
            "label": "Survey",
            "key": "survey",
            "questions": [
                {
                    "value": "howWouldYouRateTheFormIoPlatform",
                    "label": "How would you rate the Form.io platform?"
                },
                {
                    "value": "howWasCustomerSupport",
                    "label": "How was Customer Support?"
                },
                {
                    "value": "overallExperience",
                    "label": "Overall Experience?"
                }
            ],
            "values": [
                {
                    "value": "excellent",
                    "label": "Excellent"
                },
                {
                    "value": "great",
                    "label": "Great"
                },
                {
                    "value": "good",
                    "label": "Good"
                },
                {
                    "value": "average",
                    "label": "Average"
                },
                {
                    "value": "poor",
                    "label": "Poor"
                }
            ],
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "type": "survey",
            "conditional": {
                "show": "",
                "when": null,
                "eq": ""
            },
            "placeholder": "",
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "unique": false,
            "refreshOn": "",
            "redrawOn": "",
            "modalEdit": false,
            "dataGridLabel": false,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "hideLabel": false,
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": null,
            "attributes": {

            },
            "validateOn": "change",
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {

            },
            "allowMultipleMasks": false,
            "id": "ek3vrnp",
            "addons": []
        },
        {
            "tags": [],
            "clearOnHide": true,
            "hidden": false,
            "input": true,
            "tableView": true,
            "label": "Signature",
            "key": "signature",
            "placeholder": "",
            "footer": "Sign above",
            "width": "100%",
            "height": "150px",
            "penColor": "black",
            "backgroundColor": "rgb(245,245,235)",
            "minWidth": "0.5",
            "maxWidth": "2.5",
            "protected": false,
            "persistent": true,
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "type": "signature",
            "hideLabel": true,
            "conditional": {
                "show": "",
                "when": null,
                "eq": ""
            },
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": null,
            "unique": false,
            "refreshOn": "",
            "redrawOn": "",
            "modalEdit": false,
            "dataGridLabel": false,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "tabindex": "",
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": {
                "type": "input"
            },
            "attributes": {

            },
            "validateOn": "change",
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {

            },
            "allowMultipleMasks": false,
            "id": "e4zac8j",
            "addons": [],
            "keepOverlayRatio": true
        },
        {
            "tabindex": "6",
            "conditional": {
                "eq": "",
                "when": null,
                "show": ""
            },
            "tags": [],
            "input": true,
            "label": "Submit",
            "tableView": false,
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "type": "button",
            "placeholder": "",
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": null,
            "protected": false,
            "unique": false,
            "persistent": false,
            "hidden": false,
            "clearOnHide": true,
            "refreshOn": "",
            "redrawOn": "",
            "modalEdit": false,
            "dataGridLabel": true,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "hideLabel": false,
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": {
                "type": "input"
            },
            "attributes": {

            },
            "validateOn": "change",
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {

            },
            "allowMultipleMasks": false,
            "id": "et5j8rn",
            "addons": []
        }
    ],
    "owner": "554806425867f4ee203ea861",
    "submissionAccess": [
        {
            "roles": [
                "5692b920d1028f01000407e6"
            ],
            "type": "create_own"
        },
        {
            "roles": [],
            "type": "create_all"
        },
        {
            "roles": [],
            "type": "read_own"
        },
        {
            "roles": [],
            "type": "read_all"
        },
        {
            "roles": [],
            "type": "update_own"
        },
        {
            "roles": [],
            "type": "update_all"
        },
        {
            "roles": [],
            "type": "delete_own"
        },
        {
            "roles": [],
            "type": "delete_all"
        },
        {
            "roles": [],
            "type": "team_read"
        },
        {
            "roles": [],
            "type": "team_write"
        },
        {
            "roles": [],
            "type": "team_admin"
        }
    ],
    "access": [
        {
            "type": "create_own",
            "roles": []
        },
        {
            "type": "create_all",
            "roles": []
        },
        {
            "type": "read_own",
            "roles": []
        },
        {
            "type": "read_all",
            "roles": [
                "5692b920d1028f01000407e4",
                "5692b920d1028f01000407e5",
                "5692b920d1028f01000407e6",
                "000000000000000000000000",
                "6556376d043f6ce752e40641"
            ]
        },
        {
            "type": "update_own",
            "roles": []
        },
        {
            "type": "update_all",
            "roles": []
        },
        {
            "type": "delete_own",
            "roles": []
        },
        {
            "type": "delete_all",
            "roles": []
        },
        {
            "type": "team_read",
            "roles": []
        },
        {
            "type": "team_write",
            "roles": []
        },
        {
            "type": "team_admin",
            "roles": []
        }
    ],
    "tags": [],
    "_vid": 0,
    "revisions": "",
    "plan": "commercial"
}