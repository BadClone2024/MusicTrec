import React from 'react'
import settings from '../../public/icons/settings.svg'
import playlists from '../../public/icons/playlists.svg'
import home from '../../public/icons/home.svg'
import Tab from './Tab'


const Bar = () => {
    const imagesAndText = [
        {image: home, text: "Home"},
        {image: playlists, text: "Playlists"},
        {image: settings, text: "Settings"}
    ];
    const setTabs = () => {
        return imagesAndText.map((item) => {
            return <Tab key={item.text} image={item.image} text={item.text}></Tab>
        })
    }
  return (
    <div>
        {setTabs()}
    </div>
  )
}

export default Bar