[1] Modules ::

    => We Should Split our code in multiple files (files === modules)
    => Benefits :
        [A] Maintainability
        [B] Reuse
        [C] Abstraction  == hide complexity and show essantail.

    => There are 2 Type of Modules:
        [1] CommonJs      === Node.js
        [2] ES6 Modules   === Browser

    ==> Principle of Cohesion 
            === Things are related go together...

# // --------------------------------- //
[2]  CommonJs ::
    => Things are Highly related go together... in one place.

    => Abstraction in Action .

    >>>         module.exports = Circle;     for exporting
    >>>         const Circle = require('./1-Circle');     for importing
 
# // --------------------------------- //
[3] ES6 Modules ::
    => Using 

    >>>        export class .... {}             for exporting
    >>>        import {...} from './......';    for importing

# // --------------------------------- //
[3] ES6 Tooling ::if build Browser App.
        [A] Transpiler
        [B] Bundler

        > Transpiler  === (Translator + Compiler)
                ==> For modern JS code and convert our JS code into code that all browser can understand.  (Babel).

        > Bundler   === combining all our Js Files into a single file. (Bundle)
                ==> (Webpack)

# // --------------------------------- //
[4] Babel ::
    => We need to install Node.js to get NPM (Node package Manager)
    => By NPM initialize anew node project === 
            $ npm init --yes
    
    => Now install 3 package 
            $ npm i 
                babel-cli@6.26.0 
                babel-core@6.26.0 
                babel-preset-env@1.6.1 
                --save- dev


    => create index.js  ====>    const a = "love";

    => In package.json File ..
            => "scripts" : {
                    "babel": "babel --presets env index.js -o build/index.js"
                }

            => create build folder

    => In Terminal
            $ npm run babel


# // --------------------------------- //
[5]  Webpack ::

    => install webpack-cli 
        $ npm i -g webpack-cli

        $ webpack-cli init

            -  no
            - ./src/index
            - enter
            - Y
            - no
            - enter
            - default (webpack.config.js)

        $ npm init --yes          to create package.json

    => in scripts 
            "build": "webpack -w"     (w === watch)

    => in index.html
            script= src"dist/main.bundle.js"
