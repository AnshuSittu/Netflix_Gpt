import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //whenever useEffect will be called and auth status will it will 
  //automaticakky redurect us accordingly 

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //Whenever user Sign Out this part will be exuated
        dispatch(removeUser);
        navigate("/");
      }
    });
    // this unsubscribe will called when component unmounts 
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-full z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img
        src={LOGO}
        alt="Logo"
        className="w-44 cursor-pointer"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
