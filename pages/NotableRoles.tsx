// NotableRoles.js
import React from 'react';

export default function NotableRoles() {
  return (
    <div className="notable-stuff mb-8">
      <h2 className="text-2xl font-bold mb-4">Roles</h2>
      <div className="flex flex-wrap"> {/* Using Flexbox for horizontal alignment */}
        <a className='server mr-4' href="https://discord.gg/ntts">
          <img
            width="32"
            height="32"
            src="https://cdn.discordapp.com/icons/820745488231301210/47bbc019cf49283db25358e45650d2c8.webp?size=1024&format=webp&width=0&height=256"
            alt="NTTS"
          />
          <span className="server-tooltip">Mod @ NTTS</span>
        </a>
        <a className='server mr-4' href="https://discord.gg/narpy">
          <img
            width="32"
            height="32"
            src="https://cdn.discordapp.com/icons/866749259209900084/fe8918044626715ebd5de24189e45f49.webp?size=1024&format=webp&width=0&height=281"
            alt="Narpy"
          />
          <span className="server-tooltip">Helper @ Narpy</span>
        </a>
        <a className='server mr-4' href="https://discord.gg/kuromicord">
          <img
            width="32"
            height="32"
            src="https://cdn.discordapp.com/icons/1033955294193123338/fd2748b2a8e1bae3713f656aa9268da2.webp?size=1024&format=webp&width=0&height=281"
            alt="Kuromicafe"
          />
          <span className="server-tooltip">Mod @ Kuromicafe</span>
        </a>
      </div>
    </div>
  );
}
