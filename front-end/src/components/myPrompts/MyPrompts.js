import "./myPrompts.css"

function MyProp(){
    const editClicked =(e)=>{
        e.preventDefault();       
    };

    const addClicked = (e) => {
        e.preventDefault();
    };

    const publishClicked = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <div className="myNav">
                <div className="dropDown"> my prompts :
                    <select id="dd"> 
                        <option value="0" style={{ display: "none"}}>
                            select a group
                        </option>
                        <option value="1">Css</option>
                        <option value="2">JavaScript</option>
                        <option value="3">MongoDb</option>
                    </select>
                </div>
                <button className="btnAG h" onClick={addClicked} >add group</button>
                <button className="btnEG h" onClick={editClicked} >edit groups</button>
                <button className="btnPub h" onClick={publishClicked} >publish</button>
            </div>
        </div>
    )
}

export default MyProp;