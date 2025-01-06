function resetDefaultLocale() {
    // Reset the default locale to 'en-US'
    const defaultLocale = 'en-US';
    document.defaultView.navigator.globalization.setPreferredLanguage(
        function () {
            console.log('Default locale reset to ' + defaultLocale);
        },
        function () {
            console.log('Failed to reset default locale');
        },
        {language: defaultLocale}
    );
}
