import {extendTheme, ThemeConfig} from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode:"dark"
}

const theme = extendTheme({ //*assigning different colors to the color code numbers used by Chakra (50, 100, 200, etc)
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111',
        }
    }
});

export default theme;