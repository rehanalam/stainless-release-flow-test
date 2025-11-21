// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ReleaseFlowWithSampleAPI } from '../client';

export abstract class APIResource {
  protected _client: ReleaseFlowWithSampleAPI;

  constructor(client: ReleaseFlowWithSampleAPI) {
    this._client = client;
  }
}
