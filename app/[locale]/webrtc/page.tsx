import Breadcrumb from "../components/Common/Breadcrumb";
import Contact from "../components/Contact";

const WebRTC = () => {
  return (
    <>
      <Breadcrumb
        pageName="Test WebRTC"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <iframe
        src={`/webRtcDemo/index.html`}
        width="100%"
        height="100%"
        className="min-h-[900px]"
        title="Embedded Content"
      ></iframe>
    </>
  );
};

export default WebRTC;