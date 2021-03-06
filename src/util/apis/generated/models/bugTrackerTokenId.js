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
 * Contains the token ID for a bug tracker
 *
 */
class BugTrackerTokenId {
  /**
   * Create a BugTrackerTokenId.
   * @property {string} [tokenId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BugTrackerTokenId
   *
   * @returns {object} metadata of BugTrackerTokenId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BugTrackerTokenId',
      type: {
        name: 'Composite',
        className: 'BugTrackerTokenId',
        modelProperties: {
          tokenId: {
            required: false,
            serializedName: 'token_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BugTrackerTokenId;
