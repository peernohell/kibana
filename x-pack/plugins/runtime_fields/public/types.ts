/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { DataPublicPluginStart } from 'src/plugins/data/public';

import { RUNTIME_FIELD_TYPES } from './constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PluginSetup {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PluginStart {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SetupPlugins {}

export interface StartPlugins {
  data: DataPublicPluginStart;
}

export type RuntimeType = typeof RUNTIME_FIELD_TYPES[number];

export interface RuntimeField {
  name: string;
  type: RuntimeType;
  script: string;
}

export interface ComboBoxOption<T = unknown> {
  label: string;
  value?: T;
}
