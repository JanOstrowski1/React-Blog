import React from 'react';
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.cyberpunk.net/build/images/home3/screen-image-mercenary-e79283ec.jpg" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    You got Cyberfucked
                </span>

                <hr/>
                <span className="postDate">1hour ago</span>
            </div>
            <p className="postDecryption">
                Polskie studio postanowiło nas solidnie zaskoczyć i ogłosiło wczoraj, że trwają prace nad nową odsłoną serii Wiedźmin. Domniemany Wiedźmin 4 ma rozpocząć zupełnie "nową sagę", co oznacza, że już na dobre pożegnaliśmy Geralta z Rivii i jego towarzyszy. Wśród natłoku informacji o nowym Wiedźminie, łatwo było przeoczyć istotny komunikat dotyczący Cyberpunk 2077.

                Polski deweloper potwierdził bowiem, że trwają prace nad "rozszerzeniem do gry Cyberpunk 2077", które w przeciwieństwie do nowych projektów studia wciąż będzie korzystać z silnika REDengine. Co istotne, jest to pierwszy, tak konkretny, komunikat w sprawie DLC do gry od dnia jej premiery.
            </p>

        </div>
    )
}
