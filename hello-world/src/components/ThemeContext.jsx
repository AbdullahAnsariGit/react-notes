const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    // Toggle between light and dark themes
    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  