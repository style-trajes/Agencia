/*
  Catálogo EQUIPA — datos tomados de mercadolibre.com.ar/pagina/equipamg (16/10/2026).
  `precioMeli` es el precio de venta publicado en MercadoLibre ese día.
  El precio web se calcula como 15 % menos (ver PRICE_FACTOR).
  Para pasar a Shopify: tools/shopify-csv.js genera el CSV de importación desde este archivo.
*/
window.EQUIPA = (function () {
  const PRICE_FACTOR = 0.85;

  // fotos: índices (1-based) de assets/img/<slug>/<n>.webp, en orden de galería.
  // `render` es la foto sobre fondo blanco que usa la grilla; `escena` la ambientada.
  const products = [
    {
      slug: 'colgante-80',
      linea: 'flotante',
      nombre: 'Colgante 80 con cajones y nicho',
      corto: 'Dos cajones y un nicho abierto para canastos.',
      ancho: 80, alto: 57, prof: 45, peso: 25,
      precioMeli: 255647,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 6, 7, 8, 9, 10],
      plano: 10,
      detalles: [
        'Dos cajones y un nicho lateral abierto',
        'MDF de 18 mm enchapado en melamina',
        'Cuatro ménsulas para colgar, con tornillos incluidos',
      ],
      variantes: 'También se fabrica en 70, 90 y 100 cm de ancho.',
      personalizable: true,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1462107101-vanitory-colgante-80-para-bacha-de-apoyo-mueble-bano-_JM',
    },
    {
      slug: 'flotante-80-cajones',
      linea: 'flotante',
      nombre: 'Flotante 80 de dos cajones',
      corto: 'Todo blanco, dos cajones profundos.',
      ancho: 80, alto: 57, prof: 45, peso: 22,
      precioMeli: 281600,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 5, 7, 8],
      plano: 8,
      detalles: [
        'Dos cajones con correderas telescópicas',
        'MDF de 18 mm enchapado en melamina',
        'Cuatro ménsulas para colgar, con tornillos incluidos',
      ],
      variantes: 'También se fabrica en 90 y 100 cm de ancho.',
      personalizable: true,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-2214992928-vanitory-flotante-80-cms-2-cajones-mueble-de-bano-_JM',
    },
    {
      slug: 'flotante-100',
      linea: 'flotante',
      nombre: 'Flotante 100 con puertas y cajón',
      corto: 'Un metro de guardado para baños amplios.',
      ancho: 100, alto: 57, prof: 45, peso: 25,
      precioMeli: 294084,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 6, 7],
      plano: 7,
      detalles: [
        'Puertas y cajón con guías telescópicas',
        'Melamina de 18 mm',
        'Incluye tornillos y tarugos para una colocación firme',
      ],
      personalizable: false,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1981339714-vanitory-flotante-1-metro-mueble-de-bano-puerta-cajon-_JM',
    },
    {
      slug: 'flotante-80-estante',
      linea: 'flotante',
      nombre: 'Flotante 80 con estante abierto',
      corto: 'Puertas arriba, toallas a mano abajo.',
      ancho: 80, alto: 57, prof: 45, peso: 23,
      precioMeli: 233745,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 5, 8],
      plano: 7,
      detalles: [
        'Puertas y estante inferior para toallas',
        'Melamina de 18 mm',
        'Incluye tornillos y tarugos para una colocación firme',
      ],
      personalizable: false,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1968033194-vanitory-flotante-80-cm-para-bacha-de-apoyo-mueble-bano-_JM',
    },
    {
      slug: 'flotante-60',
      linea: 'flotante',
      nombre: 'Flotante 60 con puertas y estante',
      corto: 'Compacto, con estante abierto debajo.',
      ancho: 60, alto: 57, prof: 45, peso: 19,
      precioMeli: 217350,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 5, 7],
      plano: 8,
      detalles: [
        'Dos puertas y estante inferior abierto',
        'MDF de 18 mm enchapado en melamina',
        'Cuatro ménsulas para colgar, con tornillos incluidos',
      ],
      variantes: 'También se fabrica en 40, 50, 70, 80, 90 y 100 cm de ancho.',
      personalizable: true,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1454564423-vanitory-flotante-60-cm-melamina-18-mm-puertas-y-estante-_JM',
    },
    {
      slug: 'flotante-50',
      linea: 'flotante',
      nombre: 'Flotante 50 con puertas y cajón',
      corto: 'El más angosto: 38 cm de profundidad.',
      ancho: 50, alto: 57, prof: 38, peso: 17,
      precioMeli: 189233,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 6, 7],
      plano: 7,
      detalles: [
        'Puertas y cajón con correderas telescópicas',
        'MDF de 18 mm enchapado en melamina',
        'Cuatro ménsulas para colgar, con tornillos incluidos',
      ],
      variantes: 'También se fabrica en 40, 60, 70, 80, 90 y 100 cm de ancho.',
      personalizable: true,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1458339753-vanitory-flotante-melamina-50-cms-_JM',
    },
    {
      slug: 'pie-80-cajon',
      linea: 'pie',
      nombre: 'De pie 80 con puertas y cajón',
      corto: 'Gran guardado, apoyado en pies.',
      ancho: 80, alto: 78, prof: 45, peso: 25,
      precioMeli: 255725,
      render: 3, escena: 1, fotos: [1, 2, 3, 4, 6, 7],
      plano: 7,
      detalles: [
        'Puertas y un cajón amplio con guías telescópicas',
        'Melamina de 18 mm',
        'Pies de plástico símil aluminio',
      ],
      personalizable: false,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1972131708-vanitory-de-pie-80-cm-para-bacha-de-apoyo-mueble-de-bano-_JM',
    },
    {
      slug: 'pie-80-puertas',
      linea: 'pie',
      nombre: 'De pie 80 con puertas',
      corto: 'Dos puertas y estante interior.',
      ancho: 80, alto: 78, prof: 45, peso: 25,
      precioMeli: 246655,
      render: 2, escena: 1, fotos: [1, 2, 3, 4, 6, 7, 8],
      plano: 8,
      detalles: [
        'Dos puertas con estante interior',
        'Melamina de 18 mm',
        'Pies de plástico símil aluminio',
      ],
      personalizable: false,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-2138652024-vanitory-80-cms-melamina-de-18-mm-de-pie-puertas-_JM',
    },
    {
      slug: 'pie-60',
      linea: 'pie',
      nombre: 'De pie 60 con puertas y cajón',
      corto: 'Para baños chicos que necesitan guardado.',
      ancho: 60, alto: 78, prof: 45, peso: 25,
      precioMeli: 252039,
      render: 3, escena: 2, fotos: [2, 1, 3, 4, 6, 7],
      plano: 7,
      detalles: [
        'Puertas y un cajón amplio con guías telescópicas',
        'Melamina de 18 mm',
        'Pies de plástico símil aluminio',
      ],
      personalizable: false,
      meli: 'https://articulo.mercadolibre.com.ar/MLA-1932619514-vanitory-de-pie-60-cm-para-bacha-de-apoyo-mueble-de-bano-_JM',
    },
    {
      slug: 'recibidor-90',
      linea: 'recibidor',
      nombre: 'Recibidor flotante 90 en roble',
      corto: 'Un cajón para llaves y cartas en la entrada.',
      ancho: 90, alto: 18, prof: 36, peso: null,
      precioMeli: 158576,
      render: 2, escena: 1, fotos: [1, 2, 3],
      plano: 3,
      detalles: [
        'Un cajón con guías telescópicas',
        'MDF de 18 mm enchapado en melamina, color roble',
      ],
      personalizable: false,
      esVanitory: false,
      meli: 'https://www.mercadolibre.com.ar/recibidor-flotante-organizador-armado-mdf-18-mm/up/MLAU3864440276',
    },
  ];

  products.forEach((p) => {
    p.precio = Math.round(p.precioMeli * PRICE_FACTOR);
    if (p.esVanitory === undefined) p.esVanitory = true;
  });

  const lineas = {
    flotante: 'Flotantes',
    pie: 'De pie',
    guardado: 'Guardado',
    rack: 'Racks de TV',
    recibidor: 'Recibidores',
    ninos: 'Para chicos',
    cocina: 'Cocina',
  };

  return { products, lineas, PRICE_FACTOR };
})();
