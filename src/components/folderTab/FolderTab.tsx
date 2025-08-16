import React from 'react'
import TopPannel from './topPannel/TopPannel'
import LeftBottomPannel from './leftBottomPannel/LeftBottomPannel'
import RightBottomPannel from './rightBottomPannel/RightBottomPannel'

const FolderTab = () => {
    return (
        <div style={{
            backgroundColor: "gray", color: "white", height: "50vh", width: "50vw",
            position: "fixed", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
            <div style={{ backgroundColor: "blue", height: "30%", width: "100%" }}>
                <TopPannel />
            </div>
            <div style={{backgroundColor:"yellow",height:"80%", width:"100%", display:"flex"}}>

                <div style={{backgroundColor:"red",width:"20%"}}>
                    <LeftBottomPannel />
                </div>
                <div style={{backgroundColor:"green", width:"80%"}}>
                    <RightBottomPannel />
                </div>
            </div>
        </div>
    )
}

export default FolderTab
