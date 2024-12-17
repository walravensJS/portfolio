const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@assets": path.resolve(__dirname, "public/assets/"),
            "@design": path.resolve(__dirname, "src/components/design/"),
            "@functional": path.resolve(__dirname, "src/components/functional/"),

        }
    }
};
