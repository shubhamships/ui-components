

export const Video = () => {
  return (
    <video
          id="3d7cd374-364f-a498-fb2e-e286fb890fc0-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            backgroundImage:
              "url('https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/622e1a52d844b9bdb681136f_2022-03-13-12-22-13-poster-00001.jpg')",
          }}
        >
          <source
            src="https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/622e1a52d844b9bdb681136f_2022-03-13-12-22-13-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/622e1a52d844b9bdb681136f_2022-03-13-12-22-13-transcode.webm"
            type="video/webm"
          />
        </video>
  )
}
