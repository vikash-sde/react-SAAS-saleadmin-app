import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna keller</span>
            <span className="widgetSmallUsernameTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna keller</span>
            <span className="widgetSmallUsernameTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna keller</span>
            <span className="widgetSmallUsernameTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna keller</span>
            <span className="widgetSmallUsernameTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna keller</span>
            <span className="widgetSmallUsernameTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
