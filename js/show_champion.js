// Dados dos campeões por organização
const championsData = {
    WBC: [
      {
        img: "champions_imgs/usyk.jpg",
        name: 'Oleksandr Usyk "The Cat"',
        category: "Heavyweight (91 kg)"
      },
      {
        img: "champions_imgs/beterbiev.jpg",
        name: "Artur Beterbiev",
        category: "Light Heavyweight (79 kg)"
      },
      {
        img: "champions_imgs/canelo.jpg",
        name: 'Canelo Alvarez "Chapo"',
        category: "Super Middleweight (76 kg)"
      }
    ],
    WBA: [
      {
        img: "champions_imgs/usyk.jpg",
        name: 'Oleksandr Usyk "The Cat"',
        category: "Heavyweight (91 kg)"
      },
      {
        img: "champions_imgs/beterbiev.jpg",
        name: "Artur Beterbiev",
        category: "Light Heavyweight (79 kg)"
      },
      {
        img: "champions_imgs/canelo.jpg",
        name: 'Canelo Alvarez "Chapo"',
        category: "Super Middleweight (76 kg)"
      }
    ],
    IBF: [
      {
        img: "champions_imgs/daniel-dubois.jpg",
        name: 'Daniel Dubois "Dynamite"',
        category: "Heavyweight (91 kg)"
      },
      {
        img: "champions_imgs/beterbiev.jpg",
        name: "Artur Beterbiev",
        category: "Light Heavyweight (79 kg)"
      },
      {
        img: "champions_imgs/william_scull.jpg",
        name: 'William Scull "The Indomitable"',
        category: "Super Middleweight (76 kg)"
      }
    ],
    WBO: [
      {
        img: "champions_imgs/usyk.jpg",
        name: 'Oleksandr Usyk "The Cat"',
        category: "Heavyweight (91 kg)"
      },
      {
        img: "champions_imgs/beterbiev.jpg",
        name: "Artur Beterbiev",
        category: "Light Heavyweight (79 kg)"
      },
      {
        img: "champions_imgs/canelo.jpg",
        name: 'Canelo Alvarez "Chapo"',
        category: "Super Middleweight (76 kg)"
      }
    ]
  };

  // Função para exibir os campeões de acordo com a organização
  function showChampions(organization) {
    const championsContainer = document.getElementById("champions-container");
    championsContainer.innerHTML = ""; // Limpa o conteúdo atual

    const champions = championsData[organization]; // Obtém os campeões da organização escolhida

    champions.forEach(champion => {
      // Cria o HTML para cada campeão
      const championCard = document.createElement("div");
      championCard.classList.add("champion-card");

      championCard.innerHTML = `
        <img src="${champion.img}" alt="${champion.name}">
        <h3>${champion.name}</h3>
        <p>${champion.category}</p>
      `;

      // Adiciona o cartão ao container
      championsContainer.appendChild(championCard);
    });
  }

  // Exibir os campeões da WBC por padrão ao carregar a página
  document.addEventListener("DOMContentLoaded", () => {
    showChampions("WBC");
  });