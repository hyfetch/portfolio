import React from 'react';

export default function Skills() {
  return (
    <div className="notable-stuff mb-8">
      <h3>Programming languages</h3>
      <ul>
        <a className='language' href="https://en.wikipedia.org/wiki/C%2B%2B"><img width="32" height="32" src="/img/todo-categorize-this-folder/cpp_logo.svg"></img><span className="language-tooltip">C++</span> </a>
        <a className='language' href="https://www.python.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/python.svg"></img><span className="language-tooltip">Python</span> </a>
        <a className='language' href="https://www.javascript.com/"><img width="32" height="32" src="/img/todo-categorize-this-folder/js.svg"></img><span className="language-tooltip">JavaScript</span> </a>
        <a className='language' href="https://www.rust-lang.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/rust.svg"></img><span className="language-tooltip">Rust</span> </a>
        <a className='language' href="https://en.wikipedia.org/wiki/X86_assembly_language"><img width="32" height="32" src="/img/todo-categorize-this-folder/asm.svg"></img><span className="language-tooltip">Assembly</span> </a>
        <a className='language' href="https://en.wikipedia.org/wiki/C_(programming_language)"><img width="32" height="32" src="/img/todo-categorize-this-folder/c.svg"></img><span className="language-tooltip">C</span> </a>
        <a className='language' href="https://en.wikipedia.org/wiki/TypeScript"><img width="32" height="32" src="/img/todo-categorize-this-folder/ts.svg"></img><span className="language-tooltip">TypeScript</span> </a>
      </ul>

      <h3>Frameworks and Libraries</h3>
      <ul>
        <a className='language' href="https://flask.palletsprojects.com/"><img width="32" height="32" src="/img/todo-categorize-this-folder/flask.svg"></img><span className="language-tooltip">Flask</span> </a>
        <a className='language' href="https://tauri.app/"><img width="32" height="32" src="/img/todo-categorize-this-folder/tauri.svg"></img><span className="language-tooltip">Tauri</span> </a>
        <a className='language' href="https://electronjs.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/electron.svg"></img><span className="language-tooltip">Electron</span> </a>
        <a className='language' href="https://nextjs.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/nextjs.svg"></img><span className="language-tooltip">Next.JS</span> </a>
        <a className='language' href="https://discordpy.readthedocs.io/en/stable/"><img width="32" height="32" src="/img/platforms/discord.svg"></img><span className="language-tooltip">discord.py</span> </a>
        <a className='language' href="https://react.dev"><img width="32" height="32" src="/img/todo-categorize-this-folder/react.svg"></img><span className="language-tooltip">React</span> </a>
      </ul>

      <h3>Tools and Technologies</h3>
      <ul>
        {/* hyper v */} <a className='language' href="https://en.wikipedia.org/wiki/Hyper-V"><img width="32" height="32" src="/img/todo-categorize-this-folder/hyperv.svg"></img><span className="language-tooltip">Hyper-V</span> </a>
        <a className='language' href="https://www.virtualbox.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/virtualbox.svg"></img><span className="language-tooltip">VirtualBox</span> </a>
        <a className='language' href="https://www.vmware.com/products/workstation-pro.html"><img width="32" height="32" src="/img/todo-categorize-this-folder/vmware.svg"></img><span className="language-tooltip">VMWare Workstation</span> </a>
        <a className='language' href="https://www.vmware.com/products/vcenter-server-and-vcenter-standalone.html"><img width="32" height="32" src="/img/todo-categorize-this-folder/exsi.svg"></img><span className="language-tooltip">VMWare EXSI</span> </a>
        <a className='language' href="https://www.proxmox.com/en/"><img width="32" height="32" src="/img/todo-categorize-this-folder/proxmox.svg"></img><span className="language-tooltip">ProxMox</span> </a>
        <a className='language' href="https://www.docker.com/"><img width="32" height="32" src="/img/todo-categorize-this-folder/docker.svg"></img><span className="language-tooltip">Docker</span> </a>
        <a className='language' href="https://www.qemu.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/qemu.svg"></img><span className="language-tooltip">KVM/QEMU</span> </a>
      </ul>

    </div>
  );
}
