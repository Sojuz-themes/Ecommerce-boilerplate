/** [project-name] DEFAULT CSS */
/** this file is generated automaticly from SOJUZ CLI */
/** mode info: https://github.com/sojuz-project */
const { SOJUZ_PROJECT } = require('/project/projects_archive/nuxt.project.js');
const { layout } = require(`/project/projects_archive/${SOJUZ_PROJECT}/nuxt.layout.js`);
let outCss;
if (layout == 'default') {
  outCss = [
    /** files list start tag */
'~/css/global/_reset/megazine.css',
'~/css/global/aligments/breakable_default_px.css',
'~/css/global/aligments/default.css',
'~/css/global/buttons/default.css',
'~/css/global/colors/bg-colors-light.css',
'~/css/global/colors/button-colors-before-sunrise.css',
'~/css/global/colors/font-colors-default.css',
'~/css/global/decorators/separator-default.css',
'~/css/global/fonts/dimentions-fat.css',
'~/css/global/fonts/family-poppins.css',
'~/css/global/nav-list/nav-list-mono-decoration.css',
'~/css/global/nav-list/nav-list-px.css',
'~/css/global/spacing/blocks-default.css',
'~/css/global/spacing/fonts-default.css',
'~/css/global/spacing/padding-px.css',
'~/css/global/transitions/default.css',
    /** !files list stop tag */
  ];
} else {
  outCss = [];
}
export const css = outCss;

