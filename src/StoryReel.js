import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"
        image="https://images.pexels.com/photos/13878092/pexels-photo-13878092.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Soham Mukherjee"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600"
        image="https://images.pexels.com/photos/13914972/pexels-photo-13914972.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Ritam Mandal"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600"
        image="https://images.pexels.com/photos/13299956/pexels-photo-13299956.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Sanket Ghosh"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=600"
        image="https://images.pexels.com/photos/13248508/pexels-photo-13248508.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Suprio Kundu"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600"
        image="https://images.pexels.com/photos/13918727/pexels-photo-13918727.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Wasim Reja"
      />
    </div>
  );
}

export default StoryReel;
