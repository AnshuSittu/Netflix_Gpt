import { createBrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //Whenever user Sign In this part will be exuated 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email, displayName: displayName }));
       
        // ...
      } else {
        //Whenever user Sign Out this part will be exuated 
       dispatch(removeUser);
     
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
