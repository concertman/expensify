module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "rules": {
        "react/jsx-filename-extension": false,
        "react/destructuring-assignment": false,
        "react/button-has-type": false,
        "react/prop-types": false,
        "react/jsx-one-expression-per-line": false,
        "babel/new-cap": 1,
        "babel/no-invalid-this": 1,
        "babel/object-curly-spacing": 0,
        "babel/quotes": 0,
        "babel/semi": 1,
        "babel/no-unused-expressions": 1,
        "babel/valid-typeof": 0,
        "no-underscore-dangle": 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "arrow-body-style": 0
    },
    "plugins": [
        "babel",
        "jest"
      ]
};