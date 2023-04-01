import "./allPrompts.css"
import PromptCard from "../promptCard/PromptCard"

function AllPrompts (){

//#region buttons
    const trendingClicked=(e)=>{
        e.preventDefault();
    };

    const newClicked = (e) => {
        e.preventDefault();
    };

    const ratedClicked = (e) => {
        e.preventDefault();
    };

    const techClicked = (e) => {
        e.preventDefault();
    };

    const businessClicked = (e) => {
        e.preventDefault();
    };

    const writingClicked = (e) => {
        e.preventDefault();
    };

    const roleplayClicked = (e) => {
        e.preventDefault();
    };

    const emailsClicked = (e) => {
        e.preventDefault();
    };

    const toolsClicked = (e) => {
        e.preventDefault();
    };

    const artClicked = (e) => {
        e.preventDefault();
    };

    const abyssClicked = (e) => {
        e.preventDefault();
    };
//#endregion

    return(
        <div>
            <div className="topMenu">
                <button className="btnT h" onClick={trendingClicked}>Trending</button>
                <button className="btnN h" onClick={newClicked}>New</button>
                <button className="btnR h" onClick={ratedClicked}>Top Rated</button>
                <button className="btnTe h" onClick={techClicked}>Tech</button>
                <button className="btnB h" onClick={businessClicked}>Business</button>
                <button className="btnW h" onClick={writingClicked}>Writing</button>
                <button className="btnRp h" onClick={roleplayClicked}>Roleplay</button>
                <button className="btnE h" onClick={emailsClicked}>Emails</button>
                <button className="btnT h" onClick={toolsClicked}>Tools</button>
                <button className="btnAr h" onClick={artClicked}>Art</button>
                <button className="btnAb h" onClick={abyssClicked}>Abyss</button>
            </div>
            <div className="main">
                <PromptCard />
            </div>
        </div>
    );
}

export default AllPrompts;