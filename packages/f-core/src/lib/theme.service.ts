import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from './storage';

export type TemplateSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';
export type SidebarMode = 'expanded' | 'icon-only';

export interface ThemeSettings {
  themes: ThemeMode;
  sidebar: SidebarMode;
  template_size: TemplateSize;
}

const DEFAULT_SETTINGS: ThemeSettings = {
  themes: 'light',
  sidebar: 'expanded',
  template_size: 'md',
};

/**
 * Theme service — manages dark/light mode, sidebar, template size.
 * Settings persisted in localStorage.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private settings: ThemeSettings;
  private subject = new BehaviorSubject<ThemeSettings>(DEFAULT_SETTINGS);

  readonly changes$: Observable<ThemeSettings> = this.subject.asObservable();

  constructor() {
    this.settings = { ...DEFAULT_SETTINGS, ...(Storage.get<ThemeSettings>('settings') || {}) };
    this.applyTheme();
    this.subject.next(this.settings);
  }

  // --- Theme ---

  get isDarkMode(): boolean {
    return this.settings.themes === 'dark';
  }

  switchToDarkMode(): void {
    this.settings.themes = 'dark';
    this.applyTheme();
    this.save();
  }

  switchToLightMode(): void {
    this.settings.themes = 'light';
    this.applyTheme();
    this.save();
  }

  toggleTheme(): void {
    this.isDarkMode ? this.switchToLightMode() : this.switchToDarkMode();
  }

  // --- Sidebar ---

  get isSidebarExpanded(): boolean {
    return this.settings.sidebar === 'expanded';
  }

  toggleSidebar(): void {
    this.settings.sidebar = this.isSidebarExpanded ? 'icon-only' : 'expanded';
    this.save();
  }

  // --- Template Size ---

  get template_size(): TemplateSize {
    return this.settings.template_size;
  }

  set template_size(size: TemplateSize) {
    this.settings.template_size = size;
    this.save();
  }

  // --- CSS custom property reader ---

  getCSSProperty(key: string): string {
    if (typeof document === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(key).trim();
  }

  // --- Internal ---

  private applyTheme(): void {
    if (typeof document === 'undefined') return;
    if (this.settings.themes === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  private save(): void {
    Storage.set('settings', this.settings);
    this.subject.next({ ...this.settings });
  }
}
