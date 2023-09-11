/* eslint-disable @next/next/no-img-element */
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { openSource, portfolioList } from "@/lib/data";

const Portfolio = () => {
  return (
    <div className="px-[2rem] lg:px-[12rem] bg-[#f8fdfd] py-20 w-full" id='projects'>
      <h2 className="text-[2.5rem] text-shadow-md tracking-widest">Projects</h2>
      <p className="text-lg">
        Collections of some of out recent projects for {new Date().getFullYear()}.
      </p>
      <div className="flex items-stretch mt-14 flex-wrap">
        {
          portfolioList.map((item, i) =>
            <div key={i} className="md:w-1/3 w-full mb-14 px-3">
              <div className="rounded-3xl shadow-lg px-4 py-4 bg-white text-center relative border">
                <div className="relative flex justify-center mb-6">
                  <div className="absolute top-[-3rem] text-6xl">
                    {
                      item.image.type === 'icon' ?
                        <FontAwesomeIcon icon={faGithub} /> :
                        <img src={item.image.link as string} alt="" className="max-h-[3.5rem]" />
                    }
                  </div>
                </div>
                <h2 className="text-xl my-3 text-shadow-sm tracking-widest">{item.title}</h2>
                <p className="text-md font-thin">
                  {item.description}
                </p>
                <p className="text-md font-thin my-3">
                  {
                    item.stack.map((stack, m) => <span key={m}>{stack}{item.stack.length == m + 1 ? '.' : ','} </span>)
                  }
                </p>
                <div>
                  {
                    item.links.map((link, u) =>
                      <a key={u} href={link.url} className="text-xl p-1">
                        <FontAwesomeIcon icon={link.icon} />
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
      <h2 className="text-[2.5rem] mt-5 text-shadow-md tracking-widest">Open Source</h2>
      <p className="text-lg">
        We also give back to the community. Our open source projects.
      </p>
      <div className="flex items-stretch mt-14 flex-wrap">
        {
          openSource.map((item, i) =>
            <div key={i} className="md:w-1/3 w-full mb-14 px-3">
              <div className="rounded-3xl shadow-lg px-4 py-4 bg-white text-center relative border">
                <div className="relative flex justify-center mb-6">
                  <div className="absolute top-[-3rem] text-6xl">
                    {
                      item.image.type === 'icon' ?
                        <FontAwesomeIcon icon={faGithub} /> :
                        <img src={item.image.link as string} alt="" className="max-h-[3.5rem]" />
                    }
                  </div>
                </div>
                <h2 className="text-xl my-3 text-shadow-sm tracking-widest">{item.title}</h2>
                <p className="text-md font-thin">
                  {item.description}
                </p>
                <p className="text-md font-thin my-3">React, Javascript, HTML, CSS</p>
                <div>
                  {
                    item.links.map((link, u) =>
                      <a key={u} href={link.url} className="text-xl p-1">
                        <FontAwesomeIcon icon={link.icon} />
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Portfolio;
