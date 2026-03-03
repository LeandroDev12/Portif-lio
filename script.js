// ----------------------- Lista de vídeos -----------------------
const videos = [
  {
    title: "Vídeo de Apresentação",
    thumb: "https://img.youtube.com/vi/6V5hf0XxIWM/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/6V5hf0XxIWM",
    isIntro: true
  },
  {
    title: "Prenda a atenção dos seus clientes",
    thumb: "https://img.youtube.com/vi/E3b03WCMaJc/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/E3b03WCMaJc"
  },
  {
    title: "O surgimento da Smart Fit",
    thumb: "https://img.youtube.com/vi/8oAgSAGhGq0/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/8oAgSAGhGq0"
  },
  {
    title: "A importância de ter um seguro de vida",
    thumb: "https://img.youtube.com/vi/VocoRi6TbdE/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/VocoRi6TbdE"
  },
  {
    title: "Quanto custa um seguro de vida?",
    thumb: "https://img.youtube.com/vi/jBssoMUcpC8/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/jBssoMUcpC8"
  },
  {
    title: "Análise da Silhouette Cameo 5",
    thumb: "https://img.youtube.com/vi/RZVH8Esq0s4/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/RZVH8Esq0s4"
  },
  {
    title: "Instalando o Programa Affinity",
    thumb: "https://img.youtube.com/vi/DuTXhxiRVlw/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/DuTXhxiRVlw"
  },
  // NOVOS VÍDEOS INSERIDOS AQUI
  {
    title: "A relação entre gravidade e tempo",
    thumb: "https://img.youtube.com/vi/7WaUe7u5GWg/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/7WaUe7u5GWg"
  },
  {
    title: "Escala Kardashev",
    thumb: "https://img.youtube.com/vi/2Hqw6WQjS-A/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/2Hqw6WQjS-A"
  },
  // FIM DOS NOVOS VÍDEOS
  { title: "Somos poeira das estrelas", thumb: "https://img.youtube.com/vi/qHwA0o4pmZQ/maxresdefault.jpg", url: "https://www.youtube.com/embed/qHwA0o4pmZQ" },
  { title: "Quando iremos a Marte?", thumb: "https://img.youtube.com/vi/Bsug3KoTWaM/maxresdefault.jpg", url: "https://www.youtube.com/embed/Bsug3KoTWaM" },
  { title: "O que acontece se cair num buraco negro?", thumb: "https://img.youtube.com/vi/YI9zRN7wJIU/maxresdefault.jpg", url: "https://www.youtube.com/embed/YI9zRN7wJIU" },
  { title: "Pálido Ponto Azul", thumb: "https://img.youtube.com/vi/fBgNSIRWIns/maxresdefault.jpg", url: "https://www.youtube.com/embed/fBgNSIRWIns" },
  { title: "O que é ser estoico?", thumb: "https://img.youtube.com/vi/r_uEUM_A1Xc/maxresdefault.jpg", url: "https://www.youtube.com/embed/r_uEUM_A1Xc" },
  { 
    title: "Discurso de salvação de Jesus", 
    thumb: "https://img.youtube.com/vi/JNU0gHHmhXo/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/JNU0gHHmhXo" 
  },
  {
    title: "O problema do apego",
    thumb: "https://img.youtube.com/vi/XaZ9B4-V-2o/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/XaZ9B4-V-2o"
  },
  {
    title: "Peter Jordan era ateu?",
    thumb: "https://img.youtube.com/vi/_y5d4QaIZ60/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/_y5d4QaIZ60"
  },
  { 
    title: "Por que Peter acredita em Deus", 
    thumb: "https://img.youtube.com/vi/b9fk6DWdYC8/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/b9fk6DWdYC8" 
  },
  { title: "Earth Song - Michael Jackson", thumb: "earth.jpg", url: "https://www.youtube.com/embed/JblVfbUBtmE" },
  { title: "Thriller - Michael Jackson", thumb: "thriller.jpg", url: "https://www.youtube.com/embed/l8gfm6u5ES4" },
  { title: "A franquia Resident Evil é super estimada", thumb: "resi.jpg", url: "https://www.youtube.com/embed/_2iyuu1E2jw", description: "Contém palavrão" },
  { title: "5 Coisas que o Kratos fez de bom", thumb: "kratos.jpg", url: "https://www.youtube.com/embed/c6W6k6s9HEo", description: "Contém palavrão" },
  { title: "Os privilégios dos políticos brasileiros", thumb: "kkk.jpg", url: "https://www.youtube.com/embed/KCW7t33yjZc" },
  { title: "Origem da lei Magnitsky", thumb: "lei.jpg", url: "https://www.youtube.com/embed/5-xSb2SIhRc" },
  { title: "Adultização", thumb: "felca.jpg", url: "https://www.youtube.com/embed/Bq1vE7TV6II" },
  { title: "O nepotismo no governo Lula", thumb: "nepotismo.jpg", url: "https://www.youtube.com/embed/lK-d0vVb3SI" },
  { title: "As hipocrisias de Lula", thumb: "lula.jpg", url: "https://www.youtube.com/embed/j6zOTaiyUeU" },
  { title: "As leis mais INÚTEIS DO BRASIL", thumb: "leis.jpg", url: "https://www.youtube.com/embed/PjMPwfiQNqo" },
  { 
    title: "BiTinCorp", 
    thumb: "bit.jpg", 
    url: "https://www.youtube.com/embed/fUnRJUhzQ-Y" 
  }
];