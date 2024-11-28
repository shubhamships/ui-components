import React from "react";

export const CardItems: React.FC = () => {
  return (
    <div>
      <div>
        

        <div>
          <h1>Allura Case Studies</h1>
          <p>
            <span>
              Allura coffee app <br />
            </span>
            <span>"Coffee Made for the Soul"</span>
          </p>
        </div>
      </div>
      <div className="background-video-3 w-background-video w-background-video-atom">
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      backgroundImage:
        "url('https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/623204675204df36ec4aeedc_2022-03-16-11-37-39-poster-00001.jpg')",
    }}
  >
    <source
      src="https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/623204675204df36ec4aeedc_2022-03-16-11-37-39-transcode.mp4"
      type="video/mp4"
    />
    <source
      src="https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/623204675204df36ec4aeedc_2022-03-16-11-37-39-transcode.webm"
      type="video/webm"
    />
  </video>
  <div className="div-block-66 v1">
    <h1 className="heading-3 v1">Zura Case Studies</h1>
    <p className="zurafront">
      <span className="text-span-33">Zura music app</span>
      <br />
      <span className="text-span-32">"Live Life Loud"</span>
    </p>
  </div>
</div>
<div className="div-block-185">
  <div className="div-block-59">
    <h1 className="heading-3">ES Jewelry</h1>
    <p className="paragraphsmall14">
      Es jewelry was a project aimed to create a brand that incorporates unique cultural heritage.
    </p>
  </div>
</div>

    </div>
  );
};
