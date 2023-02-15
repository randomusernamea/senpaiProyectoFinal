export const tipoAcolor = (tipo) => {
  switch (tipo) {
    case "Normal":
      return "#AAA67f";
    case "Rock":
      return "#B69E31";
    case "Ghost":
      return "#70559B";
    case "Steel":
      return "#B7B9D0";
    case "Water":
      return "#6493EB";
    case "Fighting":
      return "#C12239";
    case "Flying":
      return "#A891EC";
    case "Poison":
      return "#A43E9E";
    case "Fairy":
      return "#E69EAC";
    case "Dragon":
      return "#7037FF";
    case "Dark":
      return "#75574C";
    case "Electric":
      return "#F9CF30";
    case "Ice":
      return "#9AD6DF";
    case "Fire":
      return "#F57D31";
    case "Psychic":
      return "#FB5584";
    case "Bug":
      return "#A7B723";
    case "Grass":
      return "#74CB48";
    case "Ground":
      return "#DEC168";
    default:
      return "#666666";
  }
};

export const getPrevious = (id) => {
  switch (id) {
    case "001":
      return "645";
    case "004":
      return "001";
    case "007":
      return "004";
    case "012":
      return "007";
    case "025":
      return "012";
    case "065":
      return "025";
    case "092":
      return "065";
    case "132":
      return "092";
    case "145":
      return "132";
    case "151":
      return "145";
    case "202":
      return "151";
    case "212":
      return "202";
    case "304":
      return "212";
    case "497":
      return "304";
    case "645":
      return "497";
    default:
      return "000";
    }
};

export const getNext = (id) => {
  switch (id) {
    case "001":
      return "004";
    case "004":
      return "007";
    case "007":
      return "012";
    case "012":
      return "025";
    case "025":
      return "065";
    case "065":
      return "092";
    case "092":
      return "132";
    case "132":
      return "145";
    case "145":
      return "151";
    case "151":
      return "202";
    case "202":
      return "212";
    case "212":
      return "304";
    case "304":
      return "497";
    case "497":
      return "645";
    case "645":
      return "001";
    default:
      return "000";
  }
};
