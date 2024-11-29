
export const Video1 = () => {
  return (
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
  )
}
