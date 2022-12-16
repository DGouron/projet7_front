import React from "react";
import styles from "./Host.module.css";
import HostAvatar from "./HostAvatar";

function HostView({ hostName, hostPicture }) {
  return (
    <aside className={styles.host__container}>
      <span className={styles.host__name}>{hostName}</span>
      <HostAvatar hostName={hostName} hostPicture={hostPicture} />
    </aside>
  );
}

export default HostView;
