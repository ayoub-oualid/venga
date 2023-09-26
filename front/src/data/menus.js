import {

  faHome,
  faPenToSquare,
  faStore,
  faSackDollar,
  faNoteSticky,
  faPlane,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Acceuil",
    path: "/",
    icon: faHome,
  },
  {
    label: 'Admin.'
  },
  {
    label: "Validation inscription 1",
    path: "/validation1",
    icon: faPenToSquare,
  },
  {
    label: "Validation inscription 2",
    path: "/validation2",
    icon: faPenToSquare,
  },
  {
    label: "fichier des voyages",
    path: "/flights",
    icon: faPlane,
  },
  {
    label: "fichier des tickets",
    path: "/tickets",
    icon: faTicket,
  },
  
  {
    label: 'Commande.'
  },
  {
    label: "Commande",
    path: "/404",
    icon: faStore,
  },
  {
    label: "Vos points",
    path: "/points",
    icon: faSackDollar,
  },
  {
    label: 'Vos cadeaux'
  },
  {
    label: "Les bons d'achats",
    path: "/auth/register",
    icon: faNoteSticky,
  },
];

export default initMenu