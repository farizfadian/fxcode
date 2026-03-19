// @fxcode/f-core — shared utilities, services, and base classes

// Utilities
export { Device } from './lib/device';
export { Storage } from './lib/storage';

// Services
export { ThemeService } from './lib/theme.service';
export type { TemplateSize, ThemeMode, SidebarMode, ThemeSettings } from './lib/theme.service';

// Base classes
export { AutoDestroyable } from './lib/auto-destroyable';
export { BaseInput, BaseTextInput } from './lib/base-input';

// Types
export { PatternRef } from './lib/types';
export type {
  InputType, AutoComplete, AutoCorrect, AutoCapitalize,
  InputMode, OnEnterCallback, ButtonHelper,
} from './lib/types';
