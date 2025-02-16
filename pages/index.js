import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [popupText, setPopupText] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    
    const descriptions = {
        weapon1: 'A devastatingly adorable multi-barrel cannon, wrapped in pastel ribbons and covered in plush charms. Fires lethal rounds with the force of a mecha-sized love letter. Don’t let the hearts fool you—this baby shreds through anything unlucky enough to be in its path. Vets using it? Pure meatriders, getting hard carried while they flail around uselessly.',
        weapon2: 'A high-powered launcher repurposed from construction equipment. Each shot sends a reinforced brick flying with enough force to rewrite history and skull shapes alike. Comes with an optional “Sorry, not sorry” sticker.',
        weapon3: 'Just a cute lil guy. Look at him. He’s vibing. No sharp edges, no deadly intent—just pure, unfiltered serotonin in feline form. Might judge you silently, though.'
    };

    const toggleAudio = () => {
        if (!audio) {
            const newAudio = new Audio('/APTOII.mp3');
            setAudio(newAudio);
            newAudio.loop = true;
            newAudio.play();
            setIsPlaying(true);
        } else {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const showDescription = (weapon) => {
        setPopupText(descriptions[weapon]);
        setPopupVisible(true);
    };

    const hideDescription = () => {
        setPopupVisible(false);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Kawaii Weapon Shop</title>
            </Head>

            <audio id="bg-music" autoPlay loop>
                <source src="/APTOII.mp3" type="audio/mpeg" />
            </audio>

            <header>
                <h1>SHOOT VETS ON SIGHT</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="shop">
                <h2>Weapons</h2>
                <div className={styles.weaponStore}>
                    <div className={styles.weapon} onClick={() => showDescription('weapon1')}>
                        <Image src="/VET EATER.jpg" alt="Weapon 1" width={200} height={200} />
                        <p>Vet F*cker 3000</p>
                    </div>
                    <div className={styles.weapon} onClick={() => showDescription('weapon2')}>
                        <Image src="/sryntsry.png" alt="Weapon 2" width={200} height={200} />
                        <p>Brick Shooter</p>
                    </div>
                    <div className={styles.weapon} onClick={() => showDescription('weapon3')}>
                        <Image src="/lil guy.png" alt="Weapon 3" width={200} height={200} />
                        <p>Meat Cleaver</p>
                    </div>
                </div>
            </section>

            {popupVisible && (
                <div id="popup" className={styles.popup}>
                    <span className={styles.close} onClick={hideDescription}>&times;</span>
                    <p>{popupText}</p>
                </div>
            )}

            <div className={styles.ticker}>
                <p>virgins 4 paizley virgins 4 paizley virgins 4 paizley virgins 4 paizley</p>
            </div>

            <footer>
                <p>&copy; 2025 Kawaii Weapon Shop</p>
                <button onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'} Music</button>
            </footer>
        </div>
    );
}
