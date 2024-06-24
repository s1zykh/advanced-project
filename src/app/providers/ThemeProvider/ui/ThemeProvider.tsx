import React, { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialState?: Theme,
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialState,
        children,
    } = props;

    const [ theme, setTheme ] = useState<Theme>(initialState || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [ theme ]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
