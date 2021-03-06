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

/**
 * Class representing a ExternalAppId.
 */
class ExternalAppId {
  /**
   * Create a ExternalAppId.
   * @property {string} [externalId] The identifier for external apps that map
   * to an App Center app
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExternalAppId
   *
   * @returns {object} metadata of ExternalAppId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExternalAppId',
      type: {
        name: 'Composite',
        className: 'ExternalAppId',
        modelProperties: {
          externalId: {
            required: false,
            serializedName: 'external_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExternalAppId;
