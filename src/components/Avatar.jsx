import styles from "./Avatar.module.css"

export function Avatar({ image, hasBorder = true }) {
    return (
        <div>
            <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={image} alt="foto perfil github" />
        </div>
    )
}