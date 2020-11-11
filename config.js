import config from "./src/config.json";

// Create-react-app has strict requirements to not allow imports outside of src/. This is a workaround.
export const aPIKey = () => console.log(config.aPIKey);

export default config;
