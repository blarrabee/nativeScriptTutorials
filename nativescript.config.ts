import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.firstApp',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;