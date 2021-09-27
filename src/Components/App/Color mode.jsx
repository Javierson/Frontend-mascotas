

import React, { createContext, useContext, useState, useMemo } from 'react'
import { Box, IconButton } from '@mui/material'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material'


const ColorModeContext = createContext({ toggleColorMode: () => {} })

/*
function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
} */

export default function ToggleColorMode({ children }) {

    const [ mode, setMode ] = useState('light'),
    colorMode = useMemo( () => ({ toggleColorMode: () => setMode( prevMode => prevMode === 'light' ? 'dark' : 'light' ) }), [ ] ), theme = useMemo( () => createTheme( /* getDesignTokens(mode) */ { palette: { mode } } ), [ mode ] )

  return <ColorModeContext.Provider value = { colorMode }>
      <ThemeProvider theme = { theme }>
        { /* <MyApp /> */ }
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>

}
