import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://dl2.sgegrv8ergs4sd555dsfa6bv8ajfg545.xyz/Trailer/1399/03/Money.Heist.S03.HD.Trailer.mp4"
      />
    </div>
  );
}