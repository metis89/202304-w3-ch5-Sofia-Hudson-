import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import "./style.css";
import { Card } from "./components/pokeCard";

new Header("#app", "POKEMON API");
new Main("#app");
new Card(".main");
new Footer("#app");
