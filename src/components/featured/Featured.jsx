import "./featured.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { InfoOutlined } from "@material-ui/icons";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                      <span>{type === "movie" ? "Movies" : "Series"}</span>
                      <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                      </select>
                </div>
            )}
            <img
            width="100%"
            src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt=""
                />
            <div className="info">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1199px-Friends_logo.svg.png"
                alt=""
                 />
                    <span className="desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                    sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                    temporibus eum earum?
                    </span>
                    <div className="buttons">
                        <button className="play">
                            <PlayArrowIcon />
                            <span>play</span>
                        </button>
                        <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}
