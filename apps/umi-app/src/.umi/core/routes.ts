// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/nx-plugin-typegraphql/node_modules/.pnpm/@umijs+runtime@3.4.15_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/a",
    "component": require('@/pages/second').default,
    "exact": true
  },
  {
    "path": "/b",
    "component": require('@/pages/third').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
