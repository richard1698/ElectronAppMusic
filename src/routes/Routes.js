import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Artist from "../pages/Artist";
import Artists from "../pages/Artists";
import Albums from "../pages/Albums";
import Album from "../pages/Album";
import Search from "../pages/Search";

export default function Routes(props) {
  const { user, setReloadApp, playerSong } = props;
  console.log(props);

  return (
    <Switch>
      <Route path="/" exact>
        <Home playerSong={playerSong} />
      </Route>
      <Route path="/artists" exact>
        <Artists />
      </Route>
      <Route path="/artist/:id" exact>
        <Artist playerSong={playerSong} />
      </Route>
      <Route path="/albums" exact>
        <Albums />
      </Route>
      <Route path="/album/:id" exact>
        <Album playerSong={playerSong} />
      </Route>
      <Route path="/settings" exact>
        <Settings user={user} setReloadApp={setReloadApp} />
      </Route>
      <Route path="/search/:findString" exact>
        <Search />
      </Route>
    </Switch>
  );
}
