/** Input type for HTML input elements */
export type InputType =
  | 'text' | 'search' | 'password' | 'email' | 'tel' | 'url'
  | 'color' | 'date' | 'datetime-local' | 'month' | 'week' | 'time'
  | 'file' | 'number' | 'range' | 'switch' | 'checkbox' | 'radio' | 'textarea';

export type AutoComplete = 'on' | 'off' | 'new-password' | 'current-password';
export type AutoCorrect = 'on' | 'off';
export type AutoCapitalize = 'on' | 'off' | 'sentence' | 'none' | 'words' | 'characters';

export type InputMode = 'input' | 'text';

/** Well-known regex patterns for input filtering */
export enum PatternRef {
  PersonName = "^[a-zA-ZÀ-ÿ `&'\\-¿¡]+$",
  AlphanumericNumber = '^[a-zA-Z0-9]+$',
  Number = '^[0-9.]+$',
  Email = '^[a-zA-Z0-9._\\-@]+$',
  Username = '^[a-zA-Z0-9._\\-]+$',
  Domain = '^[a-zA-Z0-9._\\-]+$',
  Phone = '^[0-9. \\-+()]+$',
}

export interface ButtonHelper {
  id: string;
  label?: string;
  icon: string;
  tooltip?: string;
}

export type OnEnterCallback = 'submit' | 'nextTabIndex';
