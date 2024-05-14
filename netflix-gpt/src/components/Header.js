import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { chanageLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  //here we are dipstching an action to chanage the Language
  const handleLanguageChange = (e) => {
    dispatch(chanageLanguage(e.target.value));
    //console.log(e.target.value);
  };

  return (
    <div className="absolute justify-between w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row">
      <img src={LOGO} alt="Logo" className="w-44 cursor-pointer mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2 justify-between">
          {/* here showGptSearch is true then this <select> will come other wise it will not i.e it will show on only GPT page  */}
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 mx-4 my-2 bg-purple-800 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}{" "}
            {/* here we are chnaging the name of btn when we are on GPT search it will show HomePage to go back on netflix if it on listing page it will show GPT search */}
          </button>
          <img className=" hidden md:inline-block w-12 h-12" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
