const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@assets": path.resolve(__dirname, "public/assets/"),
            "@design": path.resolve(__dirname, "src/components/design/"),
            "@functional": path.resolve(__dirname, "src/components/functional/"),
            "@layouts": path.resolve(__dirname, "src/layouts/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@graphql": path.resolve(__dirname, "src/graphql/"),
            "@routes": path.resolve(__dirname, "src/routes/"),
            "@services": path.resolve(__dirname, "src/services/"),

        }
    }
};
