# Stylelint halo lab config

## Installation
```
npm install --save-dev stylelint-config-halo-lab
```

## Usage
In ```.stylelintrc.js```:
```js
module.exports = {
  extends: ["stylelint-config-halo-lab"],
};
```

Add ```package.json``` сheck the project for errors: 
```json
{
  "scripts": {
    "stylelint": "stylelint 'src/**/*{.css,.scss}'",
    "stylelint:fix": "stylelint 'src/**/*{.css,.scss}' --fix"
  },
}
```

If you need to add global styles or reset for tags ```_global.scss```, ```_reset.scss```, ```_normalize.scss``` you need add front the name file of ```_```. And add ignore file.
```json
{
  "ignoreFiles": [
    "src/**/_*.scss",
    "src/**/_*.css",
  ],
}
```

## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
