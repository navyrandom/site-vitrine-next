import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Home.module.css";

function description(props) {
  return (
    <div className={styles.descriptionpage}>
      <h4>
        <a href="/">back</a>
      </h4>
      <div className={styles.description}>
        <h2>Pourquoi consulter une naturopathe?</h2>
        <p>
          Les sphères d'action de la naturopathie sont multiples, dès lors que
          vous êtes confronté(e)s à des maux récurrents, il y a recherche de
          leurs causes et rééquilibrage du corps en fonction de ce que nous
          avons mis en lumière.
        </p>
        <div className={styles.bigdescription}>
          <span className={styles.minidescription}>
            <CardHeader
              action={<IconButton aria-label=""></IconButton>}
              title="Troubles génito-urinaires"
              subheader="Aménorrhée, dysménorrhée, cystite, mycose génitale, pertes génitales, ..."
            />
          </span>
          <span className={styles.minidescription}>
            <CardHeader
              title="Troubles ostéo-articulaires "
              subheader="Troubles ostéo-articulaires 
    Tendinite, goutte, arthrose, polyarthrite rhumatoïde, ostéoporose, spondylarthrite ankylosante, fibromyalgie, ..."
            />
          </span>
          <span className={styles.minidescription}>
            <CardHeader
              title="Troubles ORL"
              subheader="Nez encombré, bronchite chronique, angine et amygdalite à répétition, sinusite, otite, ..."
            />
          </span>
          <span className={styles.minidescription}>
            <CardHeader
              title="Troubles digestifs "
              subheader="Ballonnements, constipation, diarrhée, difficulté à digérer, reflux gastriques, ulcère, gastrite, colopathie fonctionnelle, maladie de Crohn, rectocolite hémorragique, ..."
            />
          </span>
          <span className={styles.minidescription}>
            <CardHeader
              title="Troubles de la peau"
              subheader="Acné, psoriasis, eczéma, herpès, mycoses, ..."
            />
          </span>
          <span className={styles.minidescription}>
            <CardHeader
              title="Ainsi que:"
              subheader="Volonté de perte ou prise de poids, fatigue chronique, stress, dépression, insomnie, problèmes circulatoires, hémorroïdes, ..."
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default description;
