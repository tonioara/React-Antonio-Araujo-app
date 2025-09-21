const allCaracters = [
  {
    id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    name: "Harry Potter",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
    price: 25.99,
    stock: 10,
    description: "El niño que vivió, marcado por el destino y la cicatriz en su frente, Harry es el protagonista de una profecía que lo enfrenta al mago tenebroso más temido de todos los tiempos."
  },
  {
    id: "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
    name: "Hermione Granger",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
    price: 22.50,
    stock: 10,
    description: "La bruja más brillante de su generación, Hermione es conocida por su inteligencia excepcional, su sed de conocimiento y su lealtad inquebrantable a sus amigos."
  },
  {
    id: "c3b1f9a5-b87b-48bf-b00d-95b093ea6390",
    name: "Ron Weasley",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
    price: 20.00,
    stock: 10,
    description: "El fiel amigo de Harry, Ron aporta humor, valentía y un corazón de oro a sus aventuras. A pesar de sus inseguridades, siempre está dispuesto a defender a quienes ama."
  },
  {
    id: "af95bd8a-dfae-45bb-bc69-533860d34129",
    name: "Draco Malfoy",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/draco.jpg",
    price: 24.00,
    stock: 10,
    description: "Hijo de una familia de magos de sangre pura, Draco es un rival complejo, atrapado entre la lealtad a su familia y las consecuencias de sus elecciones."
  },
  {
    id: "ca3827f0-375a-4891-aaa5-f5e8a5bad225",
    name: "Minerva McGonagall",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
    price: 30.00,
    stock: 10,
    description: "La estricta pero justa jefa de Gryffindor y Subdirectora de Hogwarts, la Profesora McGonagall es una bruja formidable con un gran sentido de la justicia."
  },
  {
    id: "d5c4daa3-c726-426a-aa98-fb40f3fba816",
    name: "Cedric Diggory",
    species: "human",
    house: "Hufflepuff",
    image: "https://ik.imagekit.io/hpapi/cedric.png",
    price: 23.50,
    stock: 10,
    description: "Un estudiante destacado de Hufflepuff, conocido por su amabilidad, honestidad y habilidades en Quidditch. Su participación en el Torneo de los Tres Magos tuvo un trágico final."
  },
  {
    id: "8f9aa40b-5d7c-441e-ad32-4564ecda3b70",
    name: "Cho Chang",
    species: "human",
    house: "Ravenclaw",
    image: "https://ik.imagekit.io/hpapi/cho.jpg",
    price: 21.00,
    stock: 10,
    description: "Una talentosa buscadora de Ravenclaw y el primer interés amoroso de Harry Potter. Cho es una bruja inteligente y sensible."
  },
  {
    id: "3569d265-bd27-44d8-88e8-82fb0a848374",
    name: "Severus Snape",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/snape.jpg",
    price: 28.00,
    stock: 10,
    description: "El enigmático y a menudo temido profesor de Pociones, Snape es una figura compleja con un pasado turbulento y lealtades ocultas."
  },
  {
    id: "36bfefd0-e0bb-4d11-be98-d1ef6117a77a",
    name: "Rubeus Hagrid",
    species: "half-giant",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/hagrid.png",
    price: 19.00,
    stock: 10,
    description: "El amable y leal guardián de las llaves y terrenos de Hogwarts, Hagrid es un semi-gigante con un gran corazón y una debilidad por las criaturas mágicas peligrosas."
  },
  {
    id: "3db6dc51-b461-4fa4-a6e4-b1ff352221c5",
    name: "Neville Longbottom",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/neville.jpg",
    price: 21.50,
    stock: 10,
    description: "Inicialmente torpe y olvidadizo, Neville se transforma en un héroe valiente y decidido, demostrando que la verdadera fuerza proviene del interior."
  },
  {
    id: "861c4cde-2f0f-4796-8d8f-9492e74b2573",
    name: "Luna Lovegood",
    species: "human",
    house: "Ravenclaw",
    image: "https://ik.imagekit.io/hpapi/luna.jpg",
    price: 23.00,
    stock: 10,
    description: "Una chica excéntrica y soñadora de Ravenclaw, Luna ve el mundo de una manera única y a menudo ofrece perspectivas sorprendentemente sabias."
  },
  {
    id: "1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1",
    name: "Ginny Weasley",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/ginny.jpg",
    price: 22.00,
    stock: 10,
    description: "La hermana menor de Ron, Ginny, evoluciona de una chica tímida a una bruja poderosa y decidida, demostrando gran valentía y habilidad."
  },
  {
    id: "2cfd2d4b-5d1e-4dc5-8837-37a97c7e2f2f",
    name: "Sirius Black",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/sirius.JPG",
    price: 35.00,
    stock: 10,
    description: "El padrino de Harry y un leal miembro de la Orden del Fénix. A pesar de su pasado problemático, Sirius es un personaje de gran coraje y amor."
  },
  {
    id: "b8f9095b-9de6-4d7d-83e0-4391af8f22e4",
    name: "Remus Lupin",
    species: "werewolf",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/lupin.jpg",
    price: 29.50,
    stock: 10,
    description: "Un hombre amable y sabio, el Profesor Lupin es un licántropo que lucha contra su condición, pero siempre ofrece guía y apoyo a Harry."
  },
  {
    id: "dd925874-e800-4eb4-9f0d-4d0fed15634b",
    name: "Arthur Weasley",
    species: "human",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/arthur.jpg",
    price: 23.00,
    stock: 10,
    description: "El patriarca de la familia Weasley, el Sr. Weasley es un hombre bondadoso y divertido con una fascinación particular por los objetos muggles."
  },
  {
    id: "6afb1960-febd-418d-b604-e50c1b59459b",
    name: "Bellatrix Lestrange",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/bellatrix.jpg",
    price: 32.00,
    stock: 10,
    description: "Una de las Mortífagos más leales y crueles de Lord Voldemort, Bellatrix es una bruja poderosa y sádica, sin remordimientos por sus actos."
  },
  {
    id: "efa802c8-ae18-4ae1-a524-49df21d05939",
    name: "Lord Voldemort",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/voldemort.jpg",
    price: 40.00,
    stock: 10,
    description: "El mago oscuro más temido de todos los tiempos, Lord Voldemort, también conocido como Tom Riddle, busca la inmortalidad y el dominio del mundo mágico."
  },
  {
    id: "2fb675cd-5505-4c8e-a54e-579e73bf4174",
    name: "Horace Slughorn",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/slughorn.JPG",
    price: 26.00,
    stock: 10,
    description: "El excéntrico profesor de Pociones y exjefe de Slytherin, Slughorn es conocido por su gusto por coleccionar estudiantes influyentes y por guardar secretos importantes."
  },
  {
    id: "106cf68d-a86a-415e-ad75-6ad9a4ae24e4",
    name: "Kingsley Shacklebolt",
    species: "human",
    house: "",
    image: "https://ik.imagekit.io/hpapi/kingsley.jpg",
    price: 27.00,
    stock: 10,
    description: "Un poderoso auror y miembro de la Orden del Fénix, Kingsley es un mago leal y confiable que trabaja incansablemente para proteger el mundo mágico."
  },
  {
    id: "d58e7249-19d1-40bd-a43f-1da0497fe8aa",
    name: "Dolores Umbridge",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/umbridge.jpg",
    price: 25.50,
    stock: 10,
    description: "Una bruja oscura y cruel, Dolores Umbridge se infiltra en el Ministerio de Magia y Hogwarts para ejercer su control, mostrando una faceta retorcida de la autoridad."
  },
  {
    id: "43403619-70cb-4a0c-b70a-6d5cae20e602",
    name: "Lucius Malfoy",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/lucius.jpg",
    price: 33.00,
    stock: 10,
    description: "El orgulloso y manipulador padre de Draco Malfoy, Lucius es un Mortífago que busca poder e influencia dentro del Ministerio de Magia."
  },
  {
    id: "04f9eb45-d843-4e29-a7d3-0bd49ed87f85",
    name: "Vincent Crabbe",
    species: "human",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/crabbe.jpg",
    price: 18.00,
    stock: 10,
    description: "Un secuaz leal pero poco inteligente de Draco Malfoy, Vincent Crabbe es conocido por su fuerza bruta y su lealtad incondicional a su amo."
  }
]

 export function ObtenerDatosApi() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!reject){
            reject(new Error('400 - No se pudo conectar a la base de datos'))
        }
        else{
          resolve(allCaracters);
        }
   }, 2000);

 
}) 
}



export function GetItemById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const character = allCaracters.find(char => String(char.id) === id); 

      if (character) {
        resolve(character);
      } else {
        reject(new Error(`Personaje con ID ${id} no encontrado.`)); 
      }
    }, 3000); 
  });
}
