import "./listItem.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
  } from "@material-ui/icons";
  import { useState } from "react";


export default function Listitem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
    "https://dl5.sgegrv8ergs4sd555dsfa6bv8ajfg545.xyz/Series5/1400/DOTA.Dragons.Blood/DOTA.Dragons.Blood.Trailer.mp4";
    return (
        <div className="listItem" 
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
         onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <img src="https://images.unsplash.com/photo-1589261820052-f9b9075c186c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcyfHxtb3ZpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
            {isHovered && (
                <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                <PlayArrow className="icon" />
                 <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                 <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
            </div>
            </>
            )}
        </div>
    )
}
