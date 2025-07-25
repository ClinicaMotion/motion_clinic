import { BsFillPlayBtnFill } from "react-icons/bs";
import { useState } from 'react'

import './style.scss'

import thumbnail from '../../assets/images/img_01.jpg'

export default function HomeSpaceVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className='video_section' id='nosso_espaco'>
      <h2>NOSSO ESPAÇO</h2>

      <div className='iframe_section'>
        <div className="iframe">
          {/* <iframe
          src="https://firebasestorage.googleapis.com/v0/b/curso-8c607.appspot.com/o/videos%2Fmotion.mp4?alt=media&token=bd642e62-b2c6-4f4e-afbb-9c4c7fe2bb80"
          allow="autoplay; muted"
          allowFullScreen
          ></iframe> */}

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/uxX9VmnUFwg?si=xkJ5_UHht7HNWtJ7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           */}
           <iframe width="560" height="315" src="https://www.youtube.com/embed/YZyITStnq9s?si=zXZwQbL4BW_WTE94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {/* {!isPlaying ? (
          <div className='iframe_thumb' onClick={playVideo }>
            <img src={thumbnail} alt='Sala de espera da clinica Motion' />
            <BsFillPlayBtnFill className='icon_player' />
          </div>
        ) : (
          <div className="iframe">
            <iframe
            src="https://firebasestorage.googleapis.com/v0/b/curso-8c607.appspot.com/o/videos%2Fmotion.mp4?alt=media&token=bd642e62-b2c6-4f4e-afbb-9c4c7fe2bb80"
            allow="autoplay; muted"
            allowFullScreen
            ></iframe>
          </div>
         
         )} */}
        
      </div>
    </section>
  )
}
