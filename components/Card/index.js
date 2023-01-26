import styles from '../../styles/Home.module.css'

export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return (
        <div className={styles.Oct} style={{ backgroundColor: colour, fontSize: font }}>
            {
                colour === "red" ? <img src={'icon/person.png'} width='50' /> :
                    colour === "blue" ? <img src={'icon/personThree.png'} width='50' /> :
                        <img src={image} width='50' />
            }
            <div className={styles.Word}>{degree}</div>
        </div>
    )
}