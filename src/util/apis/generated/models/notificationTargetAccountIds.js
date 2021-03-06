/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Notification per Account IDs
 *
 * @extends models['NotificationTarget']
 */
class NotificationTargetAccountIds extends models['NotificationTarget'] {
  /**
   * Create a NotificationTargetAccountIds.
   * @property {array} accountIds List of account IDs to target
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationTargetAccountIds
   *
   * @returns {object} metadata of NotificationTargetAccountIds
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'account_ids_target',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationTarget',
        className: 'NotificationTargetAccountIds',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          accountIds: {
            required: true,
            serializedName: 'account_ids',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationTargetAccountIds;
