import MessengerLayoutDesktop from "../components/messengerLayoutDesktop";
import MessengerLayoutMobile from "../components/messengerLayoutMobile";
import { useMediaQuery } from "../utilities/mediaQuery";
const Inbox = () => {
  let isPageWide = useMediaQuery("(min-width: 900px)");
  return (
    <div className="w-screen h-screen">
      {isPageWide ? (
        <MessengerLayoutDesktop />
      ) : (
        <MessengerLayoutMobile>
          <div>heyyy</div>
        </MessengerLayoutMobile>
      )}
    </div>
  );
};

export default Inbox;
