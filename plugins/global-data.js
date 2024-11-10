import _ from "lodash";
import publicResumeData from "../resume-data.json";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      resumeData: publicResumeData,
    },
  };
});
