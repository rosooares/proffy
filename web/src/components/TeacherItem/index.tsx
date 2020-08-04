import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/16246420?s=460&u=22d41183957818f07108f9a1e8175f8d9095f59b&v=4"
          alt="Roberta Soares"
        />
        <div>
          <strong>Roberta Soares</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Hello! Welcome wave to my profile rocket <br />
        I'm Roberta Soares, I'm a Software Engineer Front-end woman_technologist
        who is passionate about technology and innovation, crazy about
        challenges and I want to help transform the world into a more digital
        place!
        <br />
        telescope I'm currently working on React apps/systems
        <br />
        seedling I’m currently learning Vue and Node.js.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
