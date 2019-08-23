module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk' (browser) {
        const mainQuery = 'Elon Musk';

        const mainQueryInputSelector = 'input[name="as_q"]';
    
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .saveScreenshot('tests_output/google.png')
    }
}