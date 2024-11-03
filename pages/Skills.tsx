import React from 'react';
import { useLocalization } from './LocalizationContext';

export default function Skills() {
  const { localization } = useLocalization();

  return (
    <div className="notable-stuff mb-8">
      <h3>{localization ? localization['programmingLanguages'] : 'Loading...'}</h3>
      <ul>
        <a className='language' href="https://en.wikipedia.org/wiki/C%2B%2B">
          <img width="32" height="32" src="/img/skills/cpp_logo.svg" alt="C++" />
          <span className="language-tooltip">C++</span>
        </a>
        <a className='language' href="https://www.python.org/">
          <img width="32" height="32" src="/img/skills/python.svg" alt="Python" />
          <span className="language-tooltip">Python</span>
        </a>
        <a className='language' href="https://www.javascript.com/">
          <img width="32" height="32" src="/img/skills/js.svg" alt="JavaScript" />
          <span className="language-tooltip">JavaScript</span>
        </a>
        <a className='language' href="https://www.rust-lang.org/">
          <img width="32" height="32" src="/img/skills/rust.svg" alt="Rust" />
          <span className="language-tooltip">Rust</span>
        </a>
        <a className='language' href="https://en.wikipedia.org/wiki/X86_assembly_language">
          <img width="32" height="32" src="/img/skills/asm.svg" alt="Assembly" />
          <span className="language-tooltip">Assembly</span>
        </a>
        <a className='language' href="https://en.wikipedia.org/wiki/C_(programming_language)">
          <img width="32" height="32" src="/img/skills/c.svg" alt="C" />
          <span className="language-tooltip">C</span>
        </a>
        <a className='language' href="https://en.wikipedia.org/wiki/TypeScript">
          <img width="32" height="32" src="/img/skills/ts.svg" alt="TypeScript" />
          <span className="language-tooltip">TypeScript</span>
        </a>
      </ul>

      <h3>{localization ? localization['frameworksAndLibraries'] : 'Loading...'}</h3>
      <ul>
        <a className='language' href="https://flask.palletsprojects.com/">
          <img width="32" height="32" src="/img/skills/flask.svg" alt="Flask" />
          <span className="language-tooltip">Flask</span>
        </a>
        <a className='language' href="https://tauri.app/">
          <img width="32" height="32" src="/img/skills/tauri.svg" alt="Tauri" />
          <span className="language-tooltip">Tauri</span>
        </a>
        <a className='language' href="https://electronjs.org/">
          <img width="32" height="32" src="/img/skills/electron.svg" alt="Electron" />
          <span className="language-tooltip">Electron</span>
        </a>
        <a className='language' href="https://nextjs.org/">
          <img width="32" height="32" src="/img/skills/nextjs.svg" alt="Next.JS" />
          <span className="language-tooltip">Next.JS</span>
        </a>
        <a className='language' href="https://discordpy.readthedocs.io/en/stable/">
          <img width="32" height="32" src="/img/platforms/discord.svg" alt="discord.py" />
          <span className="language-tooltip">discord.py</span>
        </a>
        <a className='language' href="https://react.dev">
          <img width="32" height="32" src="/img/skills/react.svg" alt="React" />
          <span className="language-tooltip">React</span>
        </a>
      </ul>

      <h3>{localization ? localization['Virtualization'] : 'Loading...'}</h3>
      <ul>
        <a className='language' href="https://en.wikipedia.org/wiki/Hyper-V">
          <img width="32" height="32" src="/img/skills/hyperv.svg" alt="Hyper-V" />
          <span className="language-tooltip">Hyper-V</span>
        </a>
        <a className='language' href="https://www.virtualbox.org/">
          <img width="32" height="32" src="/img/skills/virtualbox.svg" alt="VirtualBox" />
          <span className="language-tooltip">VirtualBox</span>
        </a>
        <a className='language' href="https://www.vmware.com/products/workstation-pro.html">
          <img width="32" height="32" src="/img/skills/vmware.svg" alt="VMWare Workstation" />
          <span className="language-tooltip">VMWare Workstation</span>
        </a>
        <a className='language' href="https://www.vmware.com/products/vcenter-server-and-vcenter-standalone.html">
          <img width="32" height="32" src="/img/skills/exsi.svg" alt="VMWare EXSI" />
          <span className="language-tooltip">VMWare EXSI</span>
        </a>
        <a className='language' href="https://www.proxmox.com/en/">
          <img width="32" height="32" src="/img/skills/proxmox.svg" alt="ProxMox" />
          <span className="language-tooltip">ProxMox</span>
        </a>
        <a className='language' href="https://www.docker.com/">
          <img width="32" height="32" src="/img/skills/docker.svg" alt="Docker" />
          <span className="language-tooltip">Docker</span>
        </a>
        <a className='language' href="https://www.qemu.org/">
          <img width="32" height="32" src="/img/skills/qemu.svg" alt="KVM/QEMU" />
          <span className="language-tooltip">KVM/QEMU</span>
        </a>
      </ul>
    </div>
  );
}
