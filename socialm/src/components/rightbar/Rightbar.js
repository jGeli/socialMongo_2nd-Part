import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"




export default function rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Mark Alby</b> and <b>420 others</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/shift.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle"> User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Tacloban:</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Ukraine</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Twin Pack</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Alby</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jim</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Deym</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Kurt</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/8.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Aki</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Douglas</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
