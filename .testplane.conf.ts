module.exports = {
    sets: {
        desktop: {
            files: "test/testplane",
        },
    },

    browsers: {
        chrome: {
            automationProtocol: "devtools",
            desiredCapabilities: {
                browserName: "chrome",
            },
            screenshotDelay: 200,
        },
        mobileChrome: {
            automationProtocol: "devtools",
            desiredCapabilities: {
                browserName: "chrome",
            },
            windowSize: {
                width: 400,
                height: 700
            },
            screenshotDelay: 200,
        },
    },

    plugins: {
        "html-reporter/testplane": {
            enabled: true,
        },
    },
};
