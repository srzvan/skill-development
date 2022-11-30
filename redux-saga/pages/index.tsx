import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { reset, selectUser, setUser } from "../store/slices/user-slice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    dispatch(
      setUser({
        username: "cconnor",
        id: 2,
      })
    );
  }, []);

  return (
    <>
      <h1>
        <i>
          Learn <code>redux-saga</code>
        </i>{" "}
        they said. <i>It&#39;s gonna be fun</i> they said.
      </h1>
      <p>
        The current user is {user.username} and has the {user.id} id
      </p>
      <button onClick={() => dispatch(reset())}>Reset state</button>
    </>
  );
}
