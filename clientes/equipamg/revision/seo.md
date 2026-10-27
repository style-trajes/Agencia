# Revisión SEO de la propuesta web de EQUIPA

Agustina (seo) · 27/10/2026 · Revisé `index.html`, `js/app.js`, `js/products.js`, `js/catalogo-meli.js` y el plan (sección 9). No consulté a nadie, como pedía la consigna.

**Cómo busca la gente este producto:** escribe la medida y el tipo: "vanitory flotante 60", "vanitory 80 cm con cajones", "mueble de baño flotante", "vanitory para bacha de apoyo", y en Córdoba, "vanitory Córdoba" o "muebles de baño Alberdi". La medida manda porque la pared ya está. La propuesta ya piensa en eso (el filtro por ancho), pero hoy Google no puede ver nada de eso como página.

## 1. Lo que está bien y conviene mantener

1. **El dato de ancho ya está cargado en los 119 productos** (`ancho`, `alto`, `prof`). Con eso se arman las páginas por medida (propuesta 2) sin cargar nada a mano.
2. **Textos con hechos concretos y verificables:** MDF de 18 mm, entrega armado, cuatro ménsulas, bacha no incluida, hasta 5 cm menos sin costo, retiro en barrio Alberdi. Es justo lo que Google y las IA citan. Se mantiene y se repite igual en todos lados.
3. **Fotos en WebP con medidas declaradas** (`width`/`height`) y el plano del mueble como imagen. Cargan rápido en el celular y no hacen saltar la página.

## 2. Propuestas de mejora (de mayor a menor impacto)

### 1. Una página propia por producto, con URL y título que digan lo que la gente busca · esfuerzo: bajo (lo da la plataforma)
- **Qué cambiar:** hoy todo es una sola página: la ficha se abre en un `<dialog>` sin URL propia, la grilla son botones (no enlaces) y la página tiene `noindex, nofollow` y título "Propuesta web EQUIPA". Para Google existe una sola página y ningún producto. En la tienda real (Tiendanube o Shopify, cualquiera de las dos lo resuelve) cada mueble tiene que tener su URL, por ejemplo `/productos/vanitory-flotante-60-bacha-de-apoyo`, y su título: **"Vanitory flotante 60 cm para bacha de apoyo · MDF 18 mm | EQUIPA"**.
- **Por qué:** los nombres actuales ("Flotante 60 para bacha de apoyo · modelo 2") no dicen "vanitory" ni "baño" ni "cm". Si alguien busca "vanitory flotante 60", la palabra que más pesa no aparece en ninguna parte del nombre. Se puede mantener el nombre corto en la grilla (queda lindo), pero el título de la página, la URL y el H1 tienen que llevar "vanitory" + tipo + medida.
- **Cómo se mide:** en Search Console, cantidad de páginas de producto indexadas (meta: las 119, o las que queden después de la propuesta 3) e impresiones por búsquedas con "vanitory" + número, mes a mes.

### 2. Páginas de colección por medida: "Vanitorys flotantes de 60 cm", "de 80 cm", etc. · esfuerzo: bajo a medio
- **Qué cambiar:** convertir el filtro por ancho en colecciones con URL propia: `/vanitory-flotante-40`, `-50`, `-60`, `-70`, `-80`, `-90`, `-100`, y lo mismo para "de pie". Cada una con un H1 ("Vanitorys flotantes de 60 cm"), 2 o 3 párrafos útiles (qué bacha entra, alto recomendado, cómo se cuelga, que se puede pedir hasta 5 cm menos) y la grilla de los modelos de esa medida.
- **Por qué:** el catálogo tiene profundidad real en cada medida (por ejemplo, 60 cm: cuatro "Flotante 60 para bacha de apoyo", dos "de diseño", puertas y cajón, semiencastrable, encastrable). Son páginas con productos de verdad, no páginas vacías hechas para Google. Son la puerta para "vanitory flotante 60", que es justo la búsqueda del pedido. Solo armamos las medidas que tengan 3 o más productos; las demás quedan como filtro.
- **Cómo se mide:** posición promedio e impresiones de cada página de medida en Search Console para su búsqueda principal ("vanitory flotante 60"); meta a 3 meses: primera página para al menos 3 medidas.

### 3. Ordenar los "modelo 1, 2, 3, 4" antes de subirlos · esfuerzo: medio (necesita al cliente)
- **Qué cambiar:** hay 30+ productos con nombre repetido y sufijo "modelo N" y slug con número (`flotante-40-para-bacha-de-apoyo`, `-2188`, `-9471`, `-3406`; `colgante-70-de-dos-cajones` y `-2999`). Tres opciones según qué sean: (a) si cambian solo el color, se unen en **un producto con variantes de color**; (b) si son publicaciones repetidas de ML, se sube una sola; (c) si son muebles distintos, cada uno con un nombre que diga en qué se diferencia ("roble y negro", "con zócalo", etc.).
- **Por qué:** cuatro páginas casi iguales para "vanitory flotante 40" compiten entre sí y Google elige una al azar o ninguna. Además "modelo 2" no le dice nada a quien compra. Un solo producto fuerte con 4 colores rankea mejor que 4 flojos.
- **Cómo se mide:** cantidad de productos sin nombre repetido (meta: 0 "modelo N") y, en Search Console, que no aparezcan dos URLs del mismo mueble para la misma búsqueda.

### 4. Datos estructurados de producto y de empresa · esfuerzo: bajo
- **Qué cambiar:** en cada ficha, `Product` con nombre, fotos, descripción, SKU, `brand: EQUIPA`, precio en ARS y disponibilidad (`Offer`), más las medidas como `width`/`height`/`depth` y `material: MDF 18 mm enchapado en melamina`. En la home, `Organization` + `LocalBusiness` (tipo `FurnitureStore`) con dirección del taller, teléfono, horario y `sameAs` hacia Mercado Libre, Instagram y el perfil de Google. En las colecciones, `BreadcrumbList`. Tiendanube y Shopify traen el `Product` básico; hay que revisar que salgan precio y stock y sumar lo que falta.
- **Ojo:** no poner `AggregateRating` con las calificaciones de Mercado Libre: Google no acepta reseñas tomadas de otro sitio. Solo reseñas juntadas en la propia tienda.
- **Cómo se mide:** Prueba de resultados enriquecidos de Google sin errores en las fichas; en Search Console, informe "Fragmentos de productos" con las páginas válidas y el CTR de las fichas antes y después.

### 5. Perfil de Google Maps del taller en Alberdi · esfuerzo: bajo
- **Qué cambiar:** como hay retiro en barrio Alberdi, el taller puede tener perfil de empresa con dirección visible. Categoría principal "Fabricante de muebles" y secundaria "Tienda de muebles de baño" (o la más cercana que ofrezca Google); productos cargados con foto y precio (los 10 destacados alcanzan para empezar); fotos del taller y de muebles armados; descripción con "vanitorys flotantes y de pie, fabricados en Córdoba, entregados armados"; web con `?utm_source=gbp`. Nombre, dirección y teléfono idénticos en la web, Maps, Mercado Libre e Instagram.
- **Reseñas:** pedirlas por WhatsApp a quien ya compró o retiró, a todos por igual, sin descuentos ni regalos a cambio. Responder todas.
- **Por qué:** "vanitory Córdoba" y "muebles de baño cerca" muestran el mapa antes que las webs. Hoy no sé si el perfil existe (pregunta abajo).
- **Cómo se mide:** en el panel del perfil: búsquedas, clics a la web, llamadas y "cómo llegar" por mes; cantidad de reseñas y tasa de respuesta (meta: 100%).

### 6. Que las IA puedan responder "¿dónde compro un vanitory flotante de 60 armado?" con EQUIPA · esfuerzo: bajo a medio
- **Qué cambiar:** (a) una página de preguntas frecuentes en texto (no en imágenes ni solo en el configurador 3D): ¿llega armado?, ¿qué bacha entra?, ¿se puede pedir otra medida?, ¿cuánto tarda?, ¿envían a todo el país?, ¿incluye bacha y grifería?; respuestas cortas de 2 o 3 líneas, con datos. (b) Una guía "Cómo elegir el vanitory según tu pared" (medir, alto, apoyo vs. semiencastrable vs. encastrable): es contenido que las IA citan y que nadie de la competencia local suele tener. (c) Mismos datos en todos lados (web, Maps, ML, Instagram): las IA confían en lo que se repite. (d) `robots.txt` que no bloquee los robots de búsqueda de IA; `llms.txt` es opcional y de bajo costo.
- **Por qué:** las fichas de producto hoy dependen de JS para mostrarse; en la tienda real tienen que estar en el HTML. Y 46 de los 109 productos importados tienen un solo detalle ("MDF de 18 mm"): con eso no hay nada que citar.
- **Cómo se mide:** chequeo mensual a mano de 10 preguntas en ChatGPT, Gemini y Google (modo IA), 3 corridas cada una, anotando si aparece EQUIPA ("aparece 2 de 3"); y visitas que llegan desde chatgpt.com / perplexity en GA4.

### 7. Descripciones y fotos con texto de verdad · esfuerzo: medio (lo hace Julieta en lote)
- **Qué cambiar:** cada ficha con 80 a 150 palabras propias: para qué baño sirve, medidas, qué bacha va, qué trae, colores. Las fotos con `alt` descriptivo (hoy la grilla y las miniaturas tienen `alt=""`) y nombres de archivo con la palabra clave (`vanitory-flotante-60-roble-1.webp` en vez de `1.webp`).
- **Por qué:** si la ficha copia el texto de ML, Google ya tiene esa página en mercadolibre.com.ar y prefiere esa. Texto propio es lo que hace que la web le gane a su propia publicación de ML en búsquedas de marca y medida. Las fotos bien nombradas además aparecen en Google Imágenes, que se usa mucho para muebles.
- **Cómo se mide:** % de fichas con descripción propia de 80+ palabras y `alt` completo (meta: 100% de los destacados en el lanzamiento); clics desde Google Imágenes en Search Console.

### 8. Lo técnico básico del lanzamiento · esfuerzo: bajo
- **Qué cambiar:** sacar el `noindex` al publicar (está bien en la propuesta, mal en la tienda); dominio propio con HTTPS; sitemap enviado a Search Console y Bing; Search Console y GA4 conectados desde el día 1; teléfono con `tel:` y WhatsApp clickeable; dirección del taller en el pie.
- **Cómo se mide:** Search Console sin errores de indexación a las 2 semanas del lanzamiento; Core Web Vitals en verde en celular.

## 3. Preguntas para el cliente o para Santiago

1. **¿Qué son los "modelo 1, 2, 3"?** ¿Mismo mueble en otro color, publicaciones repetidas de ML o muebles distintos? Define cuántos productos se suben (propuesta 3).
2. **¿EQUIPA tiene perfil en Google Maps?** Si existe, ¿quién lo administra y con qué dirección y teléfono? ¿El taller recibe gente en un horario fijo o el retiro es con cita?
3. **¿Tienen dominio propio?** (ej. equipa.com.ar). Conviene comprarlo antes del lanzamiento.
4. **¿Cuánto tarda la fabricación y el envío?** Es la pregunta que más va a aparecer en el FAQ y en las IA, y no la tengo.
5. **Para Santiago:** el SEO del sitio entra en el setup de la tienda (URLs, títulos, schema, sitemap); las páginas por medida, la guía, el FAQ y el perfil de Maps son el servicio "SEO local y Google Maps" (setup 150 a 300, abono 120 a 300). Conviene ofrecerlo como combo con el abono de la tienda.
