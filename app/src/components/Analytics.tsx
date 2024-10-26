import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    const track = navigator.doNotTrack;
    // @ts-expect-error - userLanguage is not in the TS types
    const lang = navigator.language || navigator.userLanguage;
    // @ts-expect-error - userAgentData is not yet in the TS types
    const uad = navigator.userAgentData;

    const sendAnalytics = async () => {
      fetch("https://romain-legall.fr/api/analytics/overall", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: lang ?? "bot",
          mobile: uad.mobile ?? false,
          from: document.referrer ?? null,
        }),
      });
    };
    if (track === "yes" || track === "1" || track === null) sendAnalytics();
  }, []);

  return null;
};

export default Analytics;
