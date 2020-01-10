module.exports = {
    target: 'serverless', // <- add here
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }

        if (!process.env.BUNDLE_AWS_SDK) {
            config.externals = config.externals || [];
            config.externals.push({ "aws-sdk": "aws-sdk" });
        } else {
            console.warn("Bundling aws-sdk. Only doing this in development mode");
        }
        
        return config
    }
}