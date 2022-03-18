import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="/assets/Person/7.jpg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="/assets/Person/5.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">ROMUALYAKASIN</h4>
                        <span className="profileInfoDesc">Padayon la ghap nga iba naman</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    )
}
