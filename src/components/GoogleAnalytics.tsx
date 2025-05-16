import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              const params = new URLSearchParams(window.location.search);
              const campaignCode = params.get('c');
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              campaign_code: campaignCode
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
