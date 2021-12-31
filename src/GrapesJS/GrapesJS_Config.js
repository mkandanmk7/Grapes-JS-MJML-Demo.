// import grapesJSMJML from "grapesjs-mjml";
export const GrapesJS_Config = (params) => {
  return {
    plugins: ["grapesjs-mjml"],
    pluginsOpts: {
      "grapesjs-mjml": {
        resetDevices: false, // so we can use the device buttons
      },
    },
  };
};
