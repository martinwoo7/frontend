export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette for light mode
					primary: {
						main: "#6200ee",
						dark: "#3700b3",
					},
					secondary: {
						main: "#03dac6",
						dark: "#018786",
					},
					error: {
						main: "#b00020",
					},
					divider: "#004282",
					background: {
						default: "#ffffff",
					},
					surface: {
						default: "#ffffff",
					},
					on_primary: {
						default: "#ffffff",
					},
					on_secondary: {
						default: "#000000",
					},
					on_background: {
						default: "#000000",
					},
					on_surface: {
						default: "#000000",
					},
					on_error: {
						default: "#ffffff",
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: "#bb86fc",
						dark: "#3700b3",
					},
					secondary: {
						main: "#03dac6",
					},
					error: {
						main: "#cf6679",
					},
					divider: "rgba(255,255,255,0.12)",
					// divider: "red",
					background: {
						default: "#121212",
					},
					surface: {
						default: "#121212",
					},
					on_primary: {
						high: "#000000",
						medium: "rgba(0,0,0,0.74)",
						disabled: "rgba(0,0,0,0.38)",
					},
					on_secondary: {
						main: "#000000",
						dark: "rgba(0,0,0,0.87)",
						light: "rgba(0,0,0,0.60)",
					},
					on_background: {
						default: "#ffffff",
					},
					on_surface: {
						main: "#ffffff",
						high: "rgba(255,255,255,0.87)",
						medium: "rgba(255,255,255,0.60)",
						disabled: "rgba(255,255,255,0.38)",
					},
					on_error: {
						default: "#000000",
					},
					elevation: {
						one: "#1e1e1e",
						two: "#232323",
					},
					outline: {
						default: "rgba(255,255,255,0.12)",
					},
			  }),
	},
	// typography: {
	// 	fontSize:
	// }
});
