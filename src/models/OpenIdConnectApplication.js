/*!
 * Copyright (c) 2017-2020, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const OAuthApplicationCredentials = require('./OAuthApplicationCredentials');
const OpenIdConnectApplicationSettings = require('./OpenIdConnectApplicationSettings');

/**
 * @class OpenIdConnectApplication
 * @extends Application
 * @property { OAuthApplicationCredentials } credentials
 * @property { object } name
 * @property { OpenIdConnectApplicationSettings } settings
 */
class OpenIdConnectApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new OAuthApplicationCredentials(resourceJson.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new OpenIdConnectApplicationSettings(resourceJson.settings);
    }
  }

}

module.exports = OpenIdConnectApplication;
