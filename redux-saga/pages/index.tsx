import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncSetUser, reset, selectUser, setUser } from "slices/user-slice";

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
      <header>
        <p>
          <i>
            Learn <code>redux-saga</code>
          </i>{" "}
          they said. <i>It&#39;s gonna be fun</i> they said.
        </p>
      </header>
      <main>
        <figure>
          <blockquote cite="https://www.goodreads.com/work/quotes/62221762-atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-one">
            <p>
              <i>
                Every action you take is a vote for the type of person you wish to become. No single instance will
                transform your beliefs, but as the votes build up, so does the evidence of your new identity.
              </i>
            </p>
          </blockquote>
          <figcaption>
            —James Clear, <cite>Atomic Habits</cite>
          </figcaption>
        </figure>

        <p>
          The current user is {user.username} and has the {user.id} id
        </p>
        <button onClick={() => dispatch(reset())}>Reset state</button>
        <button onClick={() => dispatch(asyncSetUser())}>Set user async with a saga</button>
      </main>
      <footer>Built with ❤️‍🩹 by Răzvan Sbîngu</footer>
    </>
  );
}
