import { useGlobalDispatch, useGlobalState } from "@/context/globalState";
import { useState, useEffect } from "react";

const Notification = () => {
  const [show, setShow] = useState(true);
  const dispatch = useGlobalDispatch();
  const { notifyMessage } = useGlobalState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    setTimeout(() => {
      dispatch({ type: "CLOSE_NOTIFY" });
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 bg-orange-500 text-white rounded-lg p-4 shadow-lg ${
        show
          ? "transition-opacity duration-500 opacity-100"
          : "transition-opacity duration-500 opacity-0 pointer-events-none"
      }`}
    >
      <p className="text-lg">{notifyMessage}</p>
    </div>
  );
};

export default Notification;
