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

## Status and contribution
The project is supported by Halo lab development team, we're not working on it regularly, but trying to invest in it when we have time between clients' project. <br />
Though, feel free to open issues and you're very welcome to contribute. 
 <br />
  <br />
<a href="https://www.halo-lab.com/?utm_source=github-brifinator-3000">
    <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg" alt="Developed in Halo lab" height="60">
</a>
