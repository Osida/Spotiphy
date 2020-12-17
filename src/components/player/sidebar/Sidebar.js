import React from "react";

import { SidebarOption } from "../index";

import { useDataLayerValue } from "../../../DataLayer";
import { getTokenFromURL } from "../../../spotify";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import "./Sidebar.css";

export default function Sidebar() {
  const [{ playlist }, dispatch] = useDataLayerValue();
  console.log("playlist = ", playlist);

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlist?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}
