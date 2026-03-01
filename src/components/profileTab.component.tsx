import React from "react";

import game1 from "../assets/images/games-1.jpg";
import game2 from "../assets/images/games-2.jpg";
import game3 from "../assets/images/games-3.jpg";
import game4 from "../assets/images/games-4.jpg";
import game5 from "../assets/images/games-5.jpg";
import game6 from "../assets/images/games-6.jpg";
import game7 from "../assets/images/games-7.jpg";
import game8 from "../assets/images/games-8.jpg";

import { myProfileInfo } from "../assets/data/myProfileInfo.data";
import { tournaments } from "../assets/data/tournaments.data";

const ProfileTab: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        {myProfileInfo.map((item) => (
          <div
            key={item.id}
            className="flex-1 flex items-center justify-center gap-2 border border-border-color rounded-xs p-2 bg-bg-tertiary shadow-xs"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-15 h-15 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-text-primary">{item.value}</p>
              <h1 className="text-xs text-text-secondary">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex flex-col gap-2 bg-bg-tertiary shadow-xs rounded-xs border border-border-color p-2">
          <h3 className="text-xs font-bold">Favourite Games</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <img src={game1} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game2} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game3} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game4} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game5} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game6} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game7} alt="game" className="h-10 w-10 rounded-xs" />
              <img src={game8} alt="game" className="h-10 w-10 rounded-xs" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 text-xs border border-border-color rounded-xs p-2">
            <h3 className="font-bold border-b border-border-color">About</h3>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between gap-2">
                <p>Joined: </p>
                <span className="text-text-secondary">26 January, 2026</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p>Location: </p>
                <span className="text-text-secondary">New York, USA</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p>Level: </p>
                <span className="text-text-primary bg-status-success px-2 py-1 rounded-xs">
                  Pro
                </span>
              </div>
              <p className="text-text-secondary">
                Experienced and creative professional with a passion great as a
                commitment to best excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-2 bg-bg-tertiary shadow-xs border border-border-color rounded-xs p-2 text-xs">
          <div className="flex flex-col justify-center gap-2">
            <h3>Isabella's Tournaments</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              {tournaments.map((x) => (
                <div key={x.id} className="flex flex-col justify-center gap-2">
                  <div className="flex flex-col justify-center gap-2 bg-bg-primary border border-border-color rounded-xs p-2">
                    <img
                      src={x.image}
                      alt="tournament"
                      className="w-full h-50 rounded-xs"
                    />
                    <div className="flex items-center gap-2">
                      <img
                        src={x.logo}
                        alt="logo"
                        className="w-10 h-10 rounded-xs"
                      />
                      <div className="flex flex-col justify-center gap-1">
                        <h1 className="font-bold">{x.name}</h1>
                        <span className="text-text-secondary">{x.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      {x.tags.map((y) => (
                        <div className="p-2 border border-border-color rounded-xs font-bold">
                          {y}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
