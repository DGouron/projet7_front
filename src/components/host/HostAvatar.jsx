import React from "react";
import styles from "./Host.module.css";

function HostAvatar({ hostName, hostPicture }) {
  return (
    <div>
      <img src={hostPicture} alt={hostName} className={styles.host__avatar} />
    </div>
  );
}

export default HostAvatar;
