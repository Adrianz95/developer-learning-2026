
import type { ThemeToggleProps } from '../types/todo';

export function ThemeToggle({ isDark, onToggleTheme }: ThemeToggleProps) {
    return (
        <div className="theme-toggle-wrapper">
            <label className="theme-switch-label">
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={onToggleTheme}
                    className="theme-checkbox-input"
                />
                <span className="theme-slider">
                    {isDark ? '🌙' : '☀️'}
                </span>
                <span className="theme-text">
                    {isDark ? 'Modo Oscuro' : 'Modo Claro'}
                </span>
            </label>
        </div>
    );
}
