import React from "react";
import classes from "./StyleModal.module.css";
import { Style } from "../../data";
import { Icon } from "@iconify/react";
import instagramIcon from '@iconify-icons/mdi/instagram';

interface ModalProps {
  style: Style;
  onClose: () => void;
}

const InfoItem = (props: {
  label: string;
  value: string;
  color: string;
  bg: string;
  icon: any;
}) => {
  return (
    <div className={classes.infoItem} style={{ backgroundColor: props.bg }}>
      <div className={classes.detailHeader}>
        <span className={classes.label} style={{ color: props.color }}>
          {props.label}
        </span>
        <div className={classes.iconCircle}>{props.icon}</div>
      </div>

      <span className={classes.value} style={{ color: props.color }}>
        {props.value}
      </span>
    </div>
  );
};

const StyleModal = ({ style, onClose }: ModalProps) => {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeBtn} onClick={onClose}>
          ×
        </button>

        <div className={classes.content}>
          <div className={classes.detailHeader}>
            <span className={classes.more} onClick={onClose}>
              More in our Insta <Icon icon={instagramIcon}/>
            </span>
            <button className={classes.mobileCloseBtn} onClick={onClose}>
              ×
            </button>
          </div>

          <img src={style.image} alt={style.name} className={classes.image} />

          <div className={classes.flexColumn}>
            <div className={classes.text}>
              <span className={classes.title}>{style.name}</span>
              <span
                style={{
                  padding: ".15rem 0 1rem 0",
                  fontStyle: "italic",
                  opacity: 0.35,
                }}
              >
                *{style.about}
              </span>
              <InfoItem
                label="Who it's for?"
                value={style.for}
                color="black"
                bg="#c7d9e5b5"
                icon="👥"
              />
              <InfoItem
                label="What to bring?"
                value={style.whatToBring}
                color="black"
                bg="#c7d9e5b5"
                icon="🎒"
              />
            </div>
            <div>
              <button className={classes.btn}>Make a reservation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleModal;
