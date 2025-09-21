// Productos (se mantienen igual que antes)
const products = {
  datejust: [
    {
      id: 1,
      name: "CrownMods Datejust 'Panda'",
      price: "$189.95",
      originalPrice: "$219.99",
      image: "./img/seikomodpanda.png",
      description:
        "Reloj Datejust con esfera blanca y detalles negros, inspirado en el icónico diseño 'Panda'. Movimiento automático NH35, caja de acero inoxidable de 40mm.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Resistente al agua 100m",
        "Cristal de zafiro",
        "Brazalete Jubilee",
      ],
    },
    {
      id: 2,
      name: "CrownMods Day-Date 'Roman Blue'",
      price: "$194.95",
      originalPrice: "$249.99",
      image: "./img/seikomodpepsi.png",
      description: "Elegante Day-Date con esfera azul y números romanos. Perfecto para ocasiones formales.",
      features: [
        "Movimiento NH36 automático",
        "Caja de oro rosa 40mm",
        "Esfera azul con números romanos",
        "Brazalete President",
        "Función día y fecha",
      ],
    },
    // Datejust/Day-Date products (IDs 29-44) - renumerados para evitar conflicto
    {
      id: 29,
      name: 'Seiko Mod Day-date Oro Rosa "Roman Green"',
      price: "€176,95",
      originalPrice: "€229,99",
      image: "../img/relojDatejustyDayDate1.png",
      description: "Lujoso Day-Date en oro rosa con esfera verde y números romanos, elegancia suprema.",
      features: [
        "Movimiento NH36 automático",
        "Caja de oro rosa 40mm",
        "Esfera verde con números romanos",
        "Brazalete President",
        "Función día y fecha",
      ],
    },
    {
      id: 30,
      name: 'Seiko Mod Day-date Oro Rosa "Roman Blue"',
      price: "€176,95",
      originalPrice: "€229,99",
      image: "../img/relojDatejustyDayDate2.png",
      description:
        "Elegante Day-Date en oro rosa con esfera azul y números romanos, perfecto para ocasiones especiales.",
      features: [
        "Movimiento NH36 automático",
        "Caja de oro rosa 40mm",
        "Esfera azul con números romanos",
        "Brazalete President",
        "Función día y fecha",
      ],
    },
    {
      id: 31,
      name: 'Seiko Mod Day-date Oro Rosa "Roman White"',
      price: "€176,95",
      originalPrice: "€229,99",
      image: "../img/relojDatejustyDayDate3.png",
      description: "Clásico Day-Date en oro rosa con esfera blanca y números romanos, elegancia atemporal.",
      features: [
        "Movimiento NH36 automático",
        "Caja de oro rosa 40mm",
        "Esfera blanca con números romanos",
        "Brazalete President",
        "Función día y fecha",
      ],
    },
    {
      id: 32,
      name: 'Seiko Mod Day-date Oro Rosa "Roman Black"',
      price: "€176,95",
      originalPrice: "€229,99",
      image: "../img/relojDatejustyDayDate4.png",
      description: "Sofisticado Day-Date en oro rosa con esfera negra y números romanos, máxima elegancia.",
      features: [
        "Movimiento NH36 automático",
        "Caja de oro rosa 40mm",
        "Esfera negra con números romanos",
        "Brazalete President",
        "Función día y fecha",
      ],
    },
    {
      id: 33,
      name: 'Seiko Mod Datejust "Tiffany"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate5.png",
      description: "Datejust con la icónica esfera azul Tiffany, una pieza única y llamativa.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul Tiffany",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 34,
      name: 'Seiko Mod Datejust "Wimbledon"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate6.png",
      description: "Datejust Wimbledon con esfera verde oliva y números romanos, inspirado en el prestigioso torneo.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera verde oliva",
        "Números romanos",
        "Brazalete Oyster",
      ],
    },
    {
      id: 35,
      name: 'Seiko Mod Datejust "Champagne"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate7.png",
      description: "Elegante Datejust con esfera champagne, perfecto para ocasiones formales.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera champagne",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 36,
      name: 'Seiko Mod Datejust "Blue Dial"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate8.png",
      description: "Datejust con hermosa esfera azul, una combinación clásica y elegante.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 37,
      name: 'Seiko Mod Datejust "Black Dial"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate9.png",
      description: "Datejust con esfera negra, un clásico atemporal para cualquier ocasión.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera negra",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 38,
      name: 'Seiko Mod Datejust "White Dial"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate10.png",
      description: "Datejust con esfera blanca, pureza y elegancia en su máxima expresión.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera blanca",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 39,
      name: 'Seiko Mod Datejust "Silver Dial"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate11.png",
      description: "Datejust con esfera plateada, sofisticación y versatilidad en un solo reloj.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera plateada",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 40,
      name: 'Seiko Mod Datejust "Green Dial"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate12.png",
      description: "Datejust con esfera verde, una opción fresca y distintiva.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera verde",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 41,
      name: 'Seiko Mod Datejust "Rose Gold"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate13.png",
      description: "Datejust en oro rosa, lujo y elegancia en cada detalle.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 40mm",
        "Brazalete President",
        "Función fecha",
        "Acabado premium",
      ],
    },
    {
      id: 42,
      name: 'Seiko Mod Datejust "Two-Tone"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate14.png",
      description: "Datejust bicolor, la perfecta combinación de acero y oro.",
      features: [
        "Movimiento NH35 automático",
        "Caja bicolor 40mm",
        "Brazalete Jubilee",
        "Función fecha",
        "Diseño distintivo",
      ],
    },
    {
      id: 43,
      name: 'Seiko Mod Datejust "Fluted Bezel"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate15.png",
      description: "Datejust con bisel estriado, el detalle que marca la diferencia.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Bisel estriado",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 44,
      name: 'Seiko Mod Datejust "Jubilee Bracelet"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate16.png",
      description: "Datejust con brazalete Jubilee, comodidad y estilo en perfecta armonía.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Brazalete Jubilee",
        "Función fecha",
        "Máxima comodidad",
      ],
    },
    {
      id: 45,
      name: 'Seiko Mod Datejust "Oyster Bracelet"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate17.png",
      description: "Datejust con brazalete Oyster, robustez y elegancia combinadas.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Brazalete Oyster",
        "Función fecha",
        "Diseño robusto",
      ],
    },
    {
      id: 46,
      name: 'Seiko Mod Datejust "Diamond Markers"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate18.png",
      description: "Datejust con marcadores de diamante, lujo y brillantez en cada hora.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Marcadores de diamante",
        "Brazalete Oyster",
        "Función fecha",
      ],
    },
    {
      id: 47,
      name: 'Seiko Mod Datejust "Smooth Bezel"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate19.png",
      description: "Datejust con bisel liso, simplicidad y elegancia en estado puro.",
      features: ["Movimiento NH35 automático", "Caja de acero 40mm", "Bisel liso", "Brazalete Oyster", "Función fecha"],
    },
    {
      id: 48,
      name: 'Seiko Mod Datejust "Cyclops Lens"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate20.png",
      description: "Datejust con lente Cyclops, la fecha siempre visible y clara.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Lente Cyclops",
        "Brazalete Oyster",
        "Función fecha amplificada",
      ],
    },
    {
      id: 49,
      name: 'Seiko Mod Datejust "Presidential"',
      price: "€176,95",
      originalPrice: "€199,99",
      image: "../img/relojDatejustyDayDate21.png",
      description: "Datejust Presidential, el reloj de los líderes y visionarios.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro 40mm",
        "Brazalete President",
        "Función fecha",
        "Máximo prestigio",
      ],
    },
  ],
  submariner: [
    {
      id: 3,
      name: "CrownMods Submariner 'Negro'",
      price: "$194.95",
      originalPrice: "$229.99",
      image: "./img/seikomodromanblue.png",
      description: "Submariner clásico con esfera negra, perfecto para actividades acuáticas y uso diario.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Resistente al agua 300m",
        "Bisel unidireccional",
        "Brazalete Oyster",
      ],
    },
    {
      id: 4,
      name: "CrownMods Submariner 'Hulk'",
      price: "$209.95",
      originalPrice: "$259.95",
      image: "./img/seikomodroyaloak.png",
      description: "Submariner verde 'Hulk', una pieza llamativa y deportiva con excelente legibilidad.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera y bisel verdes",
        "Resistente al agua 300m",
        "Brazalete Oyster",
      ],
    },
    {
      id: 21,
      name: 'Seiko Mod Submariner "Hulk"',
      price: "€176,95",
      originalPrice: "€239,99",
      image: "../img/relojsubmariner1.png", // Hulk - imagen correcta
      description: "Submariner verde 'Hulk', una pieza llamativa y deportiva con excelente legibilidad submarina.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera y bizel verdes",
        "Resistente al agua 300m",
        "Brazalete Oyster",
      ],
    },
    {
      id: 22,
      name: 'Seiko Mod Submariner "Negro"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojsubmariner2.png", // Negro - imagen correcta
      description: "Submariner clásico con esfera negra, perfecto para actividades acuáticas y uso diario.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera negra clásica",
        "Resistente al agua 300m",
        "Bizel unidireccional",
      ],
    },
    {
      id: 23,
      name: 'Seiko Mod Submariner "Dos tonos"',
      price: "€182,95",
      originalPrice: "€229,99",
      image: "../img/relojsubmariner3.png", // Dos tonos - imagen correcta
      description: "Submariner bicolor que combina acero y oro, elegancia deportiva para cualquier ocasión.",
      features: [
        "Movimiento NH35 automático",
        "Caja bicolor 40mm",
        "Esfera azul elegante",
        "Resistente al agua 300m",
        "Brazalete bicolor",
      ],
    },
    {
      id: 24,
      name: 'Seiko Mod Submariner "Starbucks"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojsubmariner4.png",
      description: "Submariner con bizel verde y negro 'Starbucks', una combinación única y llamativa.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Bizel verde y negro",
        "Resistente al agua 300m",
        "Esfera negra deportiva",
      ],
    },
    {
      id: 25,
      name: 'Seiko Mod Submariner "Bluesy"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojsubmariner5.png",
      description: "Submariner bicolor con esfera azul 'Bluesy', perfecta combinación de lujo y deportividad.",
      features: [
        "Movimiento NH35 automático",
        "Caja bicolor 40mm",
        "Esfera azul vibrante",
        "Resistente al agua 300m",
        "Brazalete bicolor Oyster",
      ],
    },
    {
      id: 26,
      name: 'Seiko Mod Submariner "Vintage"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojSubmariner6.png", // Vintage - imagen corregida
      description: "Submariner con estética vintage, un homenaje a los modelos clásicos de los años 60.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera vintage patinada",
        "Resistente al agua 300m",
        "Bizel vintage sin cerámica",
      ],
    },
    {
      id: 27,
      name: 'Seiko Mod Submariner "Azul cielo"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojSubmariner7.png", // Azul cielo - imagen corregida
      description: "Submariner con esfera azul cielo, una variante fresca y moderna del clásico diseño.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul cielo única",
        "Resistente al agua 300m",
        "Bizel azul a juego",
      ],
    },
    {
      id: 28,
      name: 'Seiko Mod Submariner "Azul"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojSubmariner8.png", // Azul - imagen corregida
      description: "Submariner azul clásico, elegancia marina en su máxima expresión para el buceador moderno.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul profundo",
        "Resistente al agua 300m",
        "Bizel azul cerámico",
      ],
    },
  ],
  daytona: [
    {
      id: 5,
      name: 'Seiko Mod Daytona "Ice Blue"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj1.png",
      description:
        "Cronógrafo Daytona con esfera azul hielo, inspirado en el mundo de las carreras. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
    {
      id: 6,
      name: 'Seiko Mod Daytona "Panda"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj2.png",
      description:
        "Cronógrafo Daytona con esfera blanca y subdiales negros, inspirado en el mundo de las carreras. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
    {
      id: 7,
      name: 'Seiko Mod Daytona "Plata y azul marino"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj3.png",
      description:
        "Cronógrafo Daytona con elegante combinación de plata y azul marino. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
    {
      id: 8,
      name: 'Seiko Mod Daytona "Negro"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj4.png",
      description:
        "Cronógrafo Daytona con esfera negra, perfecto para un look deportivo y elegante. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
    {
      id: 9,
      name: 'Seiko Mod Daytona "Plata y verde"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj5.png",
      description:
        "Cronógrafo Daytona con distintiva combinación de plata y verde. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
    {
      id: 10,
      name: 'Seiko Mod Daytona "Oro y negro"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj6.png",
      description:
        "Cronógrafo Daytona con lujosa combinación de oro y negro. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de oro rosa 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete President",
      ],
    },
    {
      id: 11,
      name: 'Seiko Mod Daytona "Raimbow" Oro Rosa',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj7.png",
      description:
        "Cronógrafo Daytona con detalles multicolor y oro rosa, una pieza única y llamativa. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de oro rosa 40mm",
        "Detalles multicolor",
        "Función cronógrafo",
        "Brazalete President",
      ],
    },
    {
      id: 12,
      name: 'Seiko Mod Daytona "John Mayer dorado y verde"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj8.png",
      description:
        "Cronógrafo Daytona inspirado en John Mayer con elegante combinación dorada y verde. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de oro 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete President",
      ],
    },
    {
      id: 13,
      name: 'Seiko Mod Daytona "Bicolor negro"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/daytonareloj9.png",
      description:
        "Cronógrafo Daytona con diseño bicolor negro, perfecto para cualquier ocasión. Producto con gran rendimiento y excelente relación precio-calidad. Stock inmediato.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 40mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete Oyster",
      ],
    },
  ],
  gmtmaster: [
    {
      id: 14,
      name: 'Seiko Mod GMT Master II "Bruce Wayne"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster1.png",
      description:
        "GMT Master II con esfera negra y bisel negro, inspirado en el estilo elegante de Bruce Wayne. Perfecto para viajeros frecuentes.",
      features: ["Movimiento NH34 GMT", "Caja de acero 40mm", "Función GMT", "Bisel bidireccional", "Brazalete Oyster"],
    },
    {
      id: 15,
      name: 'Seiko Mod GMT Master II "Pepsi"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster2.png",
      description:
        "Icónico GMT Master II con bisel rojo y azul 'Pepsi', perfecto para mostrar dos zonas horarias simultáneamente.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de acero 40mm",
        "Bisel Pepsi rojo/azul",
        "Función GMT",
        "Brazalete Oyster",
      ],
    },
    {
      id: 16,
      name: 'Seiko Mod GMT Master II "Batman"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster3.png",
      description:
        "GMT Master II con bisel negro y azul 'Batman', una combinación elegante y deportiva para el viajero moderno.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de acero 40mm",
        "Bisel Batman negro/azul",
        "Función GMT",
        "Brazalete Oyster",
      ],
    },
    {
      id: 17,
      name: 'Seiko Mod GMT Master II "Sprite"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster4.png",
      description: "GMT Master II con bisel verde y negro 'Sprite', una opción fresca y llamativa para destacar.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de acero 40mm",
        "Bisel Sprite verde/negro",
        "Función GMT",
        "Brazalete Oyster",
      ],
    },
    {
      id: 18,
      name: 'Seiko Mod GMT Master II dorado "Bruce Wayne"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster5.png",
      description: "GMT Master II en oro con esfera negra, la versión más lujosa del icónico Bruce Wayne.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de oro 40mm",
        "Función GMT",
        "Bisel bidireccional",
        "Brazalete President",
      ],
    },
    {
      id: 19,
      name: 'Seiko Mod GMT Master II "Coca-Cola"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster6.png",
      description:
        "GMT Master II con bisel rojo y negro 'Coca-Cola', un clásico atemporal para los amantes de los relojes vintage.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de acero 40mm",
        "Bisel Coca-Cola rojo/negro",
        "Función GMT",
        "Brazalete Oyster",
      ],
    },
    {
      id: 20,
      name: 'Seiko Mod GMT Master II "Root Beer"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster7.png",
      description: "GMT Master II con bisel marrón y dorado 'Root Beer', elegancia vintage en su máxima expresión.",
      features: [
        "Movimiento NH34 GMT",
        "Caja de oro rosa 40mm",
        "Bisel Root Beer marrón/dorado",
        "Función GMT",
        "Brazalete President",
      ],
    },
    {
      id: 21,
      name: 'Seiko Mod GMT Master II "Green"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster8.png",
      description: "GMT Master II con bisel verde, una opción única y distintiva para el coleccionista exigente.",
      features: ["Movimiento NH34 GMT", "Caja de acero 40mm", "Bisel verde", "Función GMT", "Brazalete Oyster"],
    },
    {
      id: 22,
      name: 'Seiko Mod GMT Master II "Blue"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster9.png",
      description: "GMT Master II con bisel azul, elegancia marina para el viajero sofisticado.",
      features: ["Movimiento NH34 GMT", "Caja de acero 40mm", "Bisel azul", "Función GMT", "Brazalete Oyster"],
    },
    {
      id: 23,
      name: 'Seiko Mod GMT Master II "Two-Tone"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojgmtmaster10.png",
      description: "GMT Master II bicolor, la perfecta combinación de acero y oro para el ejecutivo moderno.",
      features: ["Movimiento NH34 GMT", "Caja bicolor 40mm", "Función GMT", "Bisel bidireccional", "Brazalete Jubilee"],
    },
  ],
  landdweller: [
    // Land Dweller products (IDs 45-49)
    {
      id: 45,
      name: 'Seiko Mod Land-Dweller "Azul cielo"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojlandDweller4.png",
      description: "Land-Dweller con esfera azul cielo, resistencia extrema y elegancia marina.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 44mm",
        "Resistente al agua 3900m",
        "Válvula de escape de helio",
        "Brazalete Oyster",
      ],
    },
    {
      id: 46,
      name: 'Seiko Mod Land-Dweller "Blanco"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojlandDweller5.png",
      description: "Land-Dweller con esfera blanca, pureza y resistencia en perfecta armonía.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 44mm",
        "Resistente al agua 3900m",
        "Válvula de escape de helio",
        "Brazalete Oyster",
      ],
    },
    {
      id: 47,
      name: 'Seiko Mod Land-Dweller "Azul"',
      price: "€179,99",
      originalPrice: "€224,95",
      image: "../img/relojlandDweller6.png",
      description: "Land-Dweller con esfera azul profundo, para los exploradores de las profundidades.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 44mm",
        "Resistente al agua 3900m",
        "Válvula de escape de helio",
        "Brazalete Oyster",
      ],
    },
    {
      id: 48,
      name: 'Seiko Mod Land-Dweller "Verde"',
      price: "€179,99",
      originalPrice: "€209,99",
      image: "../img/relojlandDweller7.png",
      description: "Land-Dweller con esfera verde, inspirado en la naturaleza y la aventura.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 44mm",
        "Resistente al agua 3900m",
        "Válvula de escape de helio",
        "Brazalete Oyster",
      ],
    },
    {
      id: 49,
      name: 'Seiko Mod Land-Dweller "Gris"',
      price: "€179,95",
      originalPrice: "€209,99",
      image: "../img/relojlandDweller8.png",
      description: "Land-Dweller con esfera gris, elegancia urbana y resistencia extrema.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 44mm",
        "Resistente al agua 3900m",
        "Válvula de escape de helio",
        "Brazalete Oyster",
      ],
    },
  ],
  nautilus: [
    // Nautilus/Aquanaut products (IDs 50-61)
    {
      id: 50,
      name: 'Seiko Mod Nautilus Negro "Open Heart"',
      price: "€186,99",
      originalPrice: "€219,99",
      image: "../img/relojNautilusAquanaut1.png",
      description: "Nautilus con esfera negra y corazón abierto, elegancia deportiva con vista al movimiento.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño Open Heart",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 51,
      name: 'Seiko Mod Nautilus "Azul Open Heart"',
      price: "€186,99",
      originalPrice: "€219,99",
      image: "../img/relojNautilusAquanaut2.png",
      description: "Nautilus con esfera azul y corazón abierto, sofisticación marina con vista al mecanismo.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño Open Heart",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 52,
      name: 'Seiko Mod Nautilus "Oro rosa y chocolate Open Heart"',
      price: "€199,99",
      originalPrice: "€229,99",
      image: "../img/relojNautilusAquanaut3.png",
      description: "Nautilus en oro rosa con esfera chocolate y corazón abierto, lujo y elegancia suprema.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 40mm",
        "Diseño Open Heart",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 53,
      name: 'Seiko Mod Nautilus "Tiffany"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut4.png",
      description: "Nautilus con la icónica esfera azul Tiffany, una pieza única y codiciada.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul Tiffany",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 54,
      name: "Seiko Mod Nautilus Blanco",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut5.png",
      description: "Nautilus con esfera blanca, pureza y elegancia deportiva en perfecta armonía.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera blanca",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 55,
      name: "Seiko Mod Aquanaut Chocolate (Oro Rosa)",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut6.png",
      description: "Aquanaut en oro rosa con esfera chocolate, elegancia cálida y deportiva.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 40mm",
        "Esfera chocolate",
        "Resistente al agua 120m",
        "Correa de caucho",
      ],
    },
    {
      id: 56,
      name: "Seiko Mod Aquanaut Navy Blue",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut7.png",
      description: "Aquanaut con esfera azul marino, elegancia náutica en su máxima expresión.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul marino",
        "Resistente al agua 120m",
        "Correa de caucho",
      ],
    },
    {
      id: 57,
      name: 'Seiko Mod Nautilus "Azul"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut8.png",
      description: "Nautilus con esfera azul, el clásico deportivo elegante de Patek Philippe.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera azul",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 58,
      name: "Seiko Mod Nautilus Verde",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut9.png",
      description: "Nautilus con esfera verde, una opción fresca y distintiva para el coleccionista.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera verde",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 59,
      name: "Seiko Mod Aquanaut Black",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut10.png",
      description: "Aquanaut con esfera negra, elegancia deportiva en su forma más pura.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera negra",
        "Resistente al agua 120m",
        "Correa de caucho",
      ],
    },
    {
      id: 60,
      name: 'Seiko Mod Nautilus "Oro rosa y chocolate"',
      price: "€184,95",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut11.png",
      description: "Nautilus en oro rosa con esfera chocolate, lujo y calidez en perfecta combinación.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 40mm",
        "Esfera chocolate",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
    {
      id: 61,
      name: 'Seiko Mod Nautilus "Negro"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojNautilusAquanaut12.png",
      description: "Nautilus con esfera negra, elegancia atemporal y deportiva.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Esfera negra",
        "Resistente al agua 120m",
        "Brazalete integrado",
      ],
    },
  ],
  royaloak: [
    // Royal Oak products (IDs 62-75)
    {
      id: 62,
      name: 'Seiko Mod Royal Oak "Negro"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak1.png",
      description:
        "Royal Oak con esfera negra, el icónico diseño octagonal de Audemars Piguet en su versión más elegante.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 63,
      name: 'Seiko Mod Royal Oak "Navy blue"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak2.png",
      description: "Royal Oak con esfera azul marino, elegancia náutica con el distintivo diseño octagonal.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 64,
      name: 'Seiko Mod Royal Oak "Skeleton"',
      price: "€189,99",
      originalPrice: "€245,99",
      image: "../img/relojRoyalOak3.png",
      description: "Royal Oak Skeleton, la mecánica visible en toda su gloria con el icónico diseño octagonal.",
      features: [
        "Movimiento NH35 esqueletizado",
        "Caja de acero 41mm",
        "Diseño skeleton",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 65,
      name: 'Seiko Mod Royal Oak "Panda Cronógrafo"',
      price: "€173,96",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak4.png",
      description: "Royal Oak Cronógrafo Panda, funcionalidad deportiva con el elegante diseño octagonal.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 66,
      name: 'Seiko Mod Royal Oak "Cronógrafo Azul Marino"',
      price: "€173,96",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak5.png",
      description: "Royal Oak Cronógrafo con esfera azul marino, deportividad y elegancia en perfecta armonía.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 67,
      name: 'Seiko Mod Royal Oak "Tiffany"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak6.png",
      description: "Royal Oak con la codiciada esfera azul Tiffany, una pieza única y exclusiva.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 41mm",
        "Esfera azul Tiffany",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 68,
      name: 'Seiko Mod Royal Oak Chronograph "Oro Rosa dial azul"',
      price: "€183,98",
      originalPrice: "€234,98",
      image: "../img/relojRoyalOak7.png",
      description: "Royal Oak Cronógrafo en oro rosa con esfera azul, lujo y deportividad en su máxima expresión.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de oro rosa 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 69,
      name: 'Seiko Mod Royal Oak "Blanco"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak8.png",
      description: "Royal Oak con esfera blanca, pureza y elegancia con el icónico diseño octagonal.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 70,
      name: 'Seiko Mod Royal Oak "Cronógrafo negro"',
      price: "€173,96",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak9.png",
      description: "Royal Oak Cronógrafo negro, funcionalidad deportiva con elegancia atemporal.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 71,
      name: 'Seiko Mod Royal Oak "Cronógrafo verde"',
      price: "€173,96",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak10.png",
      description: "Royal Oak Cronógrafo verde, una opción fresca y distintiva para el deportista elegante.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 72,
      name: 'Seiko Mod Royal Oak "Cronógrafo blanco"',
      price: "€173,96",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak11.png",
      description: "Royal Oak Cronógrafo blanco, pureza deportiva con el distintivo diseño octagonal.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 41mm",
        "Función cronógrafo",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 73,
      name: 'Seiko Mod Royal Oak "Verde"',
      price: "€176,95",
      originalPrice: "€209,99",
      image: "../img/relojRoyalOak12.png",
      description: "Royal Oak con esfera verde, naturaleza y elegancia en el icónico diseño octagonal.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 74,
      name: 'Seiko Mod Royal Oak "oro rosa y azul marino"',
      price: "€183,95",
      originalPrice: "€229,99",
      image: "../img/relojRoyalOak13.png",
      description: "Royal Oak en oro rosa con esfera azul marino, lujo y elegancia marina en perfecta armonía.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
    {
      id: 75,
      name: "Seiko Mod Royal Oak Negro y Oro Rosa",
      price: "€189,99",
      originalPrice: "€229,99",
      image: "../img/relojRoyalOak14.png",
      description: "Royal Oak bicolor negro y oro rosa, la perfecta combinación de elegancia y lujo.",
      features: [
        "Movimiento NH35 automático",
        "Caja bicolor 41mm",
        "Diseño octagonal",
        "Resistente al agua 50m",
        "Brazalete integrado",
      ],
    },
  ],
  yachtmaster: [
    // Yacht Master products (IDs 76-79)
    {
      id: 76,
      name: 'Seiko Mod Yacht Master "Oro y negro"',
      price: "€176,96",
      originalPrice: "€199,99",
      image: "../img/relojYachtMaster1.png",
      description: "Yacht Master con elegante combinación de oro y negro, lujo náutico en su máxima expresión.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro 40mm",
        "Bisel bidireccional",
        "Resistente al agua 100m",
        "Brazalete Oyster",
      ],
    },
    {
      id: 77,
      name: 'Seiko Mod Yacht Master "Plata"',
      price: "€176,96",
      originalPrice: "€199,99",
      image: "../img/relojYachtMaster2.png",
      description: "Yacht Master en plata, elegancia náutica clásica para el navegante sofisticado.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Bisel bidireccional",
        "Resistente al agua 100m",
        "Brazalete Oyster",
      ],
    },
    {
      id: 78,
      name: 'Seiko Mod Yacht Master "Oro rosa y marrón"',
      price: "€183,95",
      originalPrice: "€199,99",
      image: "../img/relojYachtMaster3.png",
      description: "Yacht Master en oro rosa con detalles marrones, calidez y elegancia náutica.",
      features: [
        "Movimiento NH35 automático",
        "Caja de oro rosa 40mm",
        "Bisel bidireccional",
        "Resistente al agua 100m",
        "Brazalete Oyster",
      ],
    },
    {
      id: 79,
      name: 'Seiko Mod Yacht-Master "Plata y azul marino"',
      price: "€176,96",
      originalPrice: "€199,99",
      image: "../img/relojYachtMaster4.png",
      description: "Yacht Master con combinación plata y azul marino, elegancia marina en estado puro.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Bisel bidireccional",
        "Resistente al agua 100m",
        "Brazalete Oyster",
      ],
    },
  ],
  santos: [
    // Santos products (IDs 80-86)
    {
      id: 80,
      name: 'Seiko Mod Santos "Negro"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojSantos1.png",
      description: "Santos con esfera negra, el icónico diseño cuadrado de Cartier en su versión más elegante.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 81,
      name: "Seiko Mod Santos (Blanco)",
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojSantos2.png",
      description: "Santos con esfera blanca, pureza y elegancia en el distintivo diseño cuadrado.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 82,
      name: 'Seiko Mod Santos "Blanco dos tonos"',
      price: "€176,99",
      originalPrice: "€209,99",
      image: "../img/relojSantos3.png",
      description: "Santos bicolor con esfera blanca, la perfecta combinación de acero y oro.",
      features: [
        "Movimiento NH35 automático",
        "Caja bicolor 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 83,
      name: 'Seiko Mod Santos "Marrón"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojSantos4.png",
      description: "Santos con esfera marrón, calidez y elegancia en el icónico diseño cuadrado.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 84,
      name: 'Seiko Mod Santos "Azul"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojSantos5.png",
      description: "Santos con esfera azul, elegancia marina en el distintivo diseño cuadrado.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 85,
      name: 'Seiko Mod Santos "Verde"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojSantos6.png",
      description: "Santos con esfera verde, naturaleza y elegancia en el icónico diseño cuadrado.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
    {
      id: 86,
      name: 'Seiko Mod Santos "F*ck 9-5"',
      price: "€176,99",
      originalPrice: "€199,99",
      image: "../img/relojSantos7.png",
      description: "Santos con mensaje rebelde, para quienes viven fuera de lo convencional.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 35mm",
        "Diseño cuadrado",
        "Resistente al agua 100m",
        "Brazalete Santos",
      ],
    },
  ],
  speedmaster: [
    // Speedmaster products (IDs 87-91)
    {
      id: 87,
      name: "Seiko Mod Speedmaster",
      price: "€173,99",
      originalPrice: "€199,99",
      image: "../img/relojSpeedmaster1.png",
      description: "Speedmaster clásico, el icónico cronógrafo que llegó a la luna, ahora en versión Seiko Mod.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 42mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete de acero",
      ],
    },
    {
      id: 88,
      name: 'Seiko Mod Speedmaster "Panda"',
      price: "€173,99",
      originalPrice: "€199,99",
      image: "../img/relojSpeedmaster2.png",
      description: "Speedmaster Panda, el clásico diseño blanco y negro del cronógrafo más famoso del mundo.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 42mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete de acero",
      ],
    },
    {
      id: 89,
      name: 'Seiko Mod Speedmaster "Negro y naranja"',
      price: "€173,99",
      originalPrice: "€199,99",
      image: "../img/relojSpeedmaster3.png",
      description: "Speedmaster con combinación negro y naranja, una versión moderna y llamativa del clásico.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 42mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete de acero",
      ],
    },
    {
      id: 90,
      name: 'Seiko Mod Speedmaster "Azul y plateado"',
      price: "€173,99",
      originalPrice: "€199,99",
      image: "../img/relojSpeedmaster4.png",
      description: "Speedmaster con elegante combinación azul y plateado, sofisticación cronográfica.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 42mm",
        "Función cronógrafo",
        "Taquímetro",
        "Brazalete de acero",
      ],
    },
    {
      id: 91,
      name: 'Seiko Mod Speedmaster "Azul y plateado correa nylon"',
      price: "€173,99",
      originalPrice: "€199,99",
      image: "../img/relojSpeedmaster5.png",
      description: "Speedmaster con correa de nylon, comodidad deportiva con el icónico diseño cronográfico.",
      features: [
        "Movimiento VK63 cronógrafo",
        "Caja de acero 42mm",
        "Función cronógrafo",
        "Taquímetro",
        "Correa de nylon",
      ],
    },
  ],
  prx: [
    // PRX products (IDs 92-96)
    {
      id: 92,
      name: "Seiko Mod Prx Blanco",
      price: "€176,96",
      originalPrice: "€209,99",
      image: "../img/relojPrx1.png",
      description: "PRX con esfera blanca, el icónico diseño deportivo-elegante de Tissot en versión Seiko Mod.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño integrado",
        "Resistente al agua 100m",
        "Brazalete integrado",
      ],
    },
    {
      id: 93,
      name: "Seiko Mod Prx Azul cielo",
      price: "€176,96",
      originalPrice: "€209,99",
      image: "../img/relojPrx2.png",
      description: "PRX con esfera azul cielo, elegancia celestial en el distintivo diseño deportivo.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño integrado",
        "Resistente al agua 100m",
        "Brazalete integrado",
      ],
    },
    {
      id: 94,
      name: "Seiko Mod Prx Verde",
      price: "€176,96",
      originalPrice: "€209,99",
      image: "../img/relojPrx3.png",
      description: "PRX con esfera verde, naturaleza y elegancia en el icónico diseño deportivo-elegante.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño integrado",
        "Resistente al agua 100m",
        "Brazalete integrado",
      ],
    },
    {
      id: 95,
      name: "Seiko Mod Prx Negro",
      price: "€176,96",
      originalPrice: "€209,99",
      image: "../img/relojPrx4.png",
      description: "PRX con esfera negra, elegancia atemporal en el distintivo diseño deportivo.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño integrado",
        "Resistente al agua 100m",
        "Brazalete integrado",
      ],
    },
    {
      id: 96,
      name: "Seiko Mod Prx Azul",
      price: "€176,96",
      originalPrice: "€209,99",
      image: "../img/relojPrx5.png",
      description: "PRX con esfera azul, elegancia marina en el icónico diseño deportivo-elegante.",
      features: [
        "Movimiento NH35 automático",
        "Caja de acero 40mm",
        "Diseño integrado",
        "Resistente al agua 100m",
        "Brazalete integrado",
      ],
    },
  ],
  accesorios: [
    // Accessories products (IDs 97-103)
    {
      id: 97,
      name: "Correa Jubilee",
      price: "A partir de €24,95",
      originalPrice: "€49,99",
      image: "../img/relojAccesorios1.png",
      description:
        "Correa Jubilee de alta calidad, el clásico brazalete de cinco eslabones para máxima comodidad y elegancia.",
      features: [
        "Acero inoxidable 316L",
        "Eslabones de cinco piezas",
        "Cierre desplegable",
        "Compatible con múltiples modelos",
        "Acabado pulido",
      ],
    },
    {
      id: 98,
      name: "Correa Oyster",
      price: "A partir de €24,95",
      originalPrice: "€49,99",
      image: "../img/relojAccesorios2.png",
      description: "Correa Oyster robusta y elegante, el brazalete deportivo por excelencia para uso diario.",
      features: [
        "Acero inoxidable 316L",
        "Eslabones de tres piezas",
        "Cierre desplegable",
        "Compatible con múltiples modelos",
        "Acabado cepillado",
      ],
    },
    {
      id: 99,
      name: "Correa Oysterflex",
      price: "€24,95",
      originalPrice: "€49,99",
      image: "../img/relojAccesorios3.png",
      description: "Correa Oysterflex de caucho premium, comodidad deportiva con la elegancia del metal.",
      features: [
        "Caucho de alta calidad",
        "Inserto metálico",
        "Cierre desplegable",
        "Resistente al agua",
        "Máxima flexibilidad",
      ],
    },
    {
      id: 100,
      name: "Caja de Almacenamiento Premium para Relojes",
      price: "A partir de €22,95",
      originalPrice: "€35,99",
      image: "../img/relojAccesorios4.png",
      description: "Caja de almacenamiento premium para proteger y exhibir tu colección de relojes con elegancia.",
      features: [
        "Exterior de cuero sintético",
        "Interior acolchado",
        "Múltiples compartimentos",
        "Cierre seguro",
        "Diseño elegante",
      ],
    },
    {
      id: 101,
      name: "Estuche de viaje para 2 relojes",
      price: "€28,95",
      originalPrice: "€64,95",
      image: "../img/relojAccesorios5.png",
      description: "Estuche de viaje compacto para 2 relojes, protección y portabilidad para tus piezas favoritas.",
      features: [
        "Diseño compacto",
        "Protección acolchada",
        "Cierre con cremallera",
        "Material resistente",
        "Ideal para viajes",
      ],
    },
    {
      id: 102,
      name: "Estuche de viaje para 3 relojes",
      price: "€34,95",
      originalPrice: "€64,95",
      image: "../img/relojAccesorios6.png",
      description: "Estuche de viaje para 3 relojes, mayor capacidad sin comprometer la protección y portabilidad.",
      features: [
        "Capacidad para 3 relojes",
        "Protección acolchada",
        "Cierre con cremallera",
        "Material resistente",
        "Diseño práctico",
      ],
    },
    {
      id: 103,
      name: "Destornillador para eslabones",
      price: "€5,95",
      originalPrice: "€14,95",
      image: "../img/relojAccesorios7.png",
      description:
        "Herramienta profesional para ajustar eslabones de brazaletes, indispensable para el mantenimiento de relojes.",
      features: ["Acero templado", "Mango ergonómico", "Precisión profesional", "Múltiples puntas", "Fácil de usar"],
    },
  ],
}

// ------------------------------------------------------------------
// NOTA: He REMOVIDO todo lo relativo a la variable `testimonials` y
// a la función que inyectaba reseñas desde JS. Las reseñas ahora deben
// estar en HTML estático dentro de index.html (como acordamos).
// ------------------------------------------------------------------

// Inicializo al cargar (mantengo loadProducts, NO llamo a loadTestimonials)
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM Content Loaded - initializing page")
  loadTopSales()
  initTestimonialsCarousel()

  // Check if we're on the customize page
  if (window.location.pathname.includes("personalizar-reloj.html")) {
    console.log("[v0] On customize page - checking button")
    const whatsappBtn = document.querySelector(".customize-whatsapp-btn")
    if (whatsappBtn) {
      console.log("[v0] WhatsApp button found on customize page")
    } else {
      console.log("[v0] WhatsApp button NOT found on customize page")
    }
  }
})

// carga de productos (reemplazada por loadTopSales)
function loadTopSales() {
  const grid = document.getElementById("products-grid")

  if (!grid) {
    console.log("[v0] Products grid not found - skipping product loading")
    return
  }

  // Only show the first 6 products (4 from datejust/submariner, excluding daytona)
  const topSalesProducts = [...products.datejust, ...products.submariner]

  grid.innerHTML = topSalesProducts
    .map(
      (product) => `
        <div class="product-card" onclick="showProductModal(${product.id})">
            <div class="offer-badge">Oferta</div>
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    <span class="original-price">${product.originalPrice}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// ------------------------------------------------------------------
// CARRUSEL MEJORADO: controla el slider que está en HTML
// ------------------------------------------------------------------
function initTestimonialsCarousel() {
  const container = document.querySelector(".testimonials-container")
  const viewport = document.querySelector(".testimonials-viewport") || document.querySelector(".testimonials-slider")
  const nextBtn = document.querySelector(".slider-btn.next")
  const prevBtn = document.querySelector(".slider-btn.prev")

  if (!container || !viewport) {
    console.log("[v0] Testimonials carousel elements not found - skipping carousel initialization")
    return
  }

  let cardWidth = 0
  let gap = 0
  let index = 0
  let visibleCards = 1
  let totalCards = 0
  let maxIndex = 0

  function calc() {
    const cards = container.querySelectorAll(".testimonial-card")
    if (!cards.length) return

    totalCards = cards.length
    const first = cards[0]
    const containerStyles = window.getComputedStyle(container)
    const viewportWidth = viewport.getBoundingClientRect().width

    gap = Number.parseFloat(containerStyles.gap) || 30

    cardWidth = first.getBoundingClientRect().width

    visibleCards = Math.floor(viewportWidth / (cardWidth + gap))
    if (visibleCards < 1) visibleCards = 1

    maxIndex = Math.max(0, totalCards - visibleCards)

    if (index > maxIndex) {
      index = maxIndex
    }
  }

  function update() {
    const translateX = index * (cardWidth + gap)
    container.style.transform = `translateX(-${translateX}px)`
  }

  nextBtn &&
    nextBtn.addEventListener("click", () => {
      calc()
      if (index < maxIndex) {
        index++
      } else {
        index = 0
      }
      update()
    })

  prevBtn &&
    prevBtn.addEventListener("click", () => {
      calc()
      if (index > 0) {
        index--
      } else {
        index = maxIndex
      }
      update()
    })

  window.addEventListener("resize", () => {
    calc()
    update()
  })

  setTimeout(() => {
    calc()
    update()
  }, 100)
}

// ------------------------------------------------------------------
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  const mobileToggle = document.querySelector(".mobile-menu-toggle i")

  if (!navMenu || !mobileToggle) {
    console.log("[v0] Mobile menu elements not found")
    return
  }

  navMenu.classList.toggle("active")

  // Change hamburger to X when menu is open
  if (navMenu.classList.contains("active")) {
    mobileToggle.classList.remove("fa-bars")
    mobileToggle.classList.add("fa-times")
  } else {
    mobileToggle.classList.remove("fa-times")
    mobileToggle.classList.add("fa-bars")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const navMenu = document.querySelector(".nav-menu")
  const mobileToggle = document.querySelector(".mobile-menu-toggle i")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        if (mobileToggle) {
          mobileToggle.classList.remove("fa-times")
          mobileToggle.classList.add("fa-bars")
        }
      }
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const navMenu = document.querySelector(".nav-menu")
    const mobileToggle = document.querySelector(".mobile-menu-toggle")
    
    if (navMenu && navMenu.classList.contains("active")) {
      if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        navMenu.classList.remove("active")
        const mobileToggleIcon = document.querySelector(".mobile-menu-toggle i")
        if (mobileToggleIcon) {
          mobileToggleIcon.classList.remove("fa-times")
          mobileToggleIcon.classList.add("fa-bars")
        }
      }
    }
  })
})

// ------------------------------------------------------------------

// Modal de producto (igual)
function showProductModal(productId) {
  console.log("[v0] showProductModal called with ID:", productId)

  const allProducts = Object.values(products).flat()
  const product = allProducts.find((p) => p.id === productId)

  console.log("[v0] Found product:", product)

  if (!product) {
    console.log("[v0] Product not found for ID:", productId)
    return
  }

  const modal = document.getElementById("product-modal")
  const modalBody = document.getElementById("modal-body")

  console.log("[v0] Modal elements:", { modal, modalBody })

  if (!modal || !modalBody) {
    console.log("[v0] Modal elements not found")
    return
  }

  // Store product data globally for the button click
  window.currentProduct = product

  modalBody.innerHTML = `
        <div style="padding: 30px; background: #022141; color: white; border-radius: 12px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
                <div>
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
                </div>
                <div>
                    <h2 style="color: white; margin-bottom: 10px; font-size: 1.5rem; line-height: 1.2;">${product.name}</h2>
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <span style="font-size: 2rem; font-weight: bold; color: white;">${product.price}</span>
                        <span style="text-decoration: line-through; color: #9ca3af; font-size: 1.1rem;">${product.originalPrice}</span>
                    </div>
                    <p style="margin-bottom: 25px; line-height: 1.6; color: #e5e5e5;">${product.description}</p>
                    <div style="display: flex; gap: 15px;">
                        <button onclick="buyCurrentProduct()" class="whatsapp-btn">
                            <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `

  modal.style.display = "block"
  setTimeout(() => {
    modal.classList.add("show")
  }, 10)
}

function closeModal() {
  const modal = document.getElementById("product-modal")
  modal.classList.remove("show")
  setTimeout(() => {
    modal.style.display = "none"
  }, 300)
}

window.onclick = (event) => {
  const modal = document.getElementById("product-modal")
  if (event.target == modal) {
    closeModal()
  }
}

// FAQ toggle
function toggleFaq(button) {
  const answer = button.nextElementSibling
  const icon = button.querySelector("i")

  answer.classList.toggle("active")

  if (answer.classList.contains("active")) {
    icon.style.transform = "rotate(180deg)"
  } else {
    icon.style.transform = "rotate(0deg)"
  }
}

// Contact WhatsApp (actualizá número)
function contactWhatsApp(productName = "") {
  const phoneNumber = "5491137003736" // Updated to +54 9 11 3700-3736
  let message = "¡Hola! Me interesa conocer más sobre los relojes ModWatches."

  if (productName) {
    message += ` Específicamente sobre el ${productName}.`
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

function contactCustomWhatsApp() {
  console.log("[v0] contactCustomWhatsApp called")

  const phoneNumber = "5491137003736" // +54 9 11 3700-3736
  const message = "Hola, quiero personalizar mi reloj seiko mod"

  console.log("[v0] WhatsApp message:", message)
  console.log("[v0] Phone number:", phoneNumber)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  console.log("[v0] WhatsApp URL:", whatsappUrl)

  try {
    window.open(whatsappUrl, "_blank")
    console.log("[v0] WhatsApp window opened successfully")
  } catch (error) {
    console.error("[v0] Error opening WhatsApp:", error)
    // Fallback: try direct navigation
    window.location.href = whatsappUrl
  }
}

function buyOnWhatsApp(productName, productId) {
  console.log("[v0] buyOnWhatsApp called with:", { productName, productId })

  const phoneNumber = "5491137003736" // +54 9 11 3700-3736
  const message = `Hola quiero comprar este producto "${productName}"`

  console.log("[v0] WhatsApp message:", message)
  console.log("[v0] Phone number:", phoneNumber)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  console.log("[v0] WhatsApp URL:", whatsappUrl)

  try {
    window.open(whatsappUrl, "_blank")
    console.log("[v0] WhatsApp window opened successfully")
  } catch (error) {
    console.error("[v0] Error opening WhatsApp:", error)
    // Fallback: try direct navigation
    window.location.href = whatsappUrl
  }
}

function buyCurrentProduct() {
  if (window.currentProduct) {
    buyOnWhatsApp(window.currentProduct.name, window.currentProduct.id)
  } else {
    console.error("[v0] No current product found")
  }
}

// Handle contact form
function handleContactForm(event) {
  event.preventDefault()

  const formEl = event.target
  const name = formEl.querySelector('input[placeholder="Nombre"]').value || ""
  const email = formEl.querySelector('input[placeholder="Correo electrónico *"]').value || ""
  const phone = formEl.querySelector('input[placeholder="Número de teléfono"]').value || ""
  const message = formEl.querySelector("textarea").value || ""

  const whatsappMessage = `Hola, soy ${name}. 
Email: ${email}
Teléfono: ${phone}
Mensaje: ${message}`

  const phoneNumber = "5491137003736" // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(whatsappUrl, "_blank")

  formEl.reset()
  alert("¡Gracias por tu mensaje! Te contactaremos pronto por WhatsApp.")
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")

    // Skip if it's just "#" or if the target doesn't exist on current page
    if (href === "#" || href.length <= 1) {
      return
    }

    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // If target doesn't exist, let the browser handle it normally (don't prevent default)
  })
})
