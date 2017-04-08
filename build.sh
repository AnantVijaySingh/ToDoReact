# js transform
babel --presets react,es2015 js/source -d js/build
# js package
browserify js/build/app.js -o /bundle.js
# css package
type css\components\* css\* > bundle.css
# css string replace
(Get-Content bundle.css).replace("../../images", "images") | Set-Content bundle.css
# done
date; echo;