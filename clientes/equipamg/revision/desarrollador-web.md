# Revisión técnica: propuesta web EQUIPA (Facundo, desarrollador web)

27/10/2026. Revisé el código en `/tmp/claude-0/equipa/` y lo probé con Playwright en celular (390 × 844, 4G lento simulado y CPU ×4) y en compu (1366 × 860).

**Límites de la prueba:** la copia local está incompleta. Tiene 12 de las 119 carpetas de fotos y no trae `assets/tex/` (texturas y luz del 3D) ni `tools/shopify-csv.js`, así que no pude revisar el generador del CSV. Las miniaturas rotas que se ven en `celu-3-ficha.png` son por esa copia parcial, no por un error de la propuesta. El 3D y las tipografías no cargan en este entorno, así que lo del configurador sale de leer el código y no de verlo andar.

## Lo que conviene mantener

1. **Fotos bien optimizadas y sin saltos.** Son WebP de 720 y 1200 px, de 20 a 95 KB, con ancho y alto declarados. El salto de diseño (CLS) medido dio 0,001 en celu y en compu.
2. **Catálogo como datos, separado del diseño.** Los productos están en `products.js` y `catalogo-meli.js`, y el precio web sale de un solo factor (`PRICE_FACTOR = 0.85`). Eso hace que pasarlo a cualquier plataforma sea una importación y no haya que cargar todo a mano.
3. **Buena base de accesibilidad y carrito.** Usa ventanas `dialog` nativas. Probado: Esc cierra la ficha y el foco vuelve a la tarjeta. Los filtros tienen `aria-pressed`, el foco se ve al navegar con teclado y el carrito queda guardado al recargar (probado: 1 producto antes y después).

## Propuestas de mejora (por impacto)

### 1. Plataforma: Tiendanube con tema adaptado, y el configurador 3D como página aparte. Esfuerzo: medio
- **Qué:** este código es una página única hecha a mano, y ninguna de las dos plataformas lo toma tal cual. En las dos hay que rehacer el diseño como tema. Mi recomendación es usar Tiendanube y replicar la estética con un tema base más CSS propio. El configurador 3D lo publicaríamos en Netlify (por ejemplo, en un subdominio) con un botón "Comprar este modelo" que lleve a la ficha del producto en la tienda.
- **Por qué:**
  - **Tiendanube** trae Mercado Pago, envíos nacionales (Envío Nube y transportes) y la integración con Mercado Libre para manejar stock y pedidos desde un solo panel, y se paga en pesos. Para un fabricante que hoy vende en ML eso pesa más que la libertad de diseño. La contra es que el tema se puede personalizar menos y no se mantiene el 100% de la propuesta.
  - **Shopify** permite copiar el diseño casi exacto (secciones Liquid) y ya existe la herramienta del CSV. Pero en Argentina no tiene Shopify Payments: el cobro va por Mercado Pago como pasarela externa, con un recargo de Shopify por venta. Los envíos con Andreani o Correo necesitan apps pagas y el plan se cobra en dólares.
  - **Antes de decidir:** los porcentajes y tarifas vigentes de los dos los tiene que confirmar Diego, porque no los verifiqué hoy.
- **Ojo:** el checkout de la propuesta dice "Shopify o Wix". Wix lo descartaría: no tiene integración nativa con ML ni con transportes argentinos.

### 2. Limpiar el catálogo antes de cargarlo: 119 publicaciones son unos 81 productos. Esfuerzo: medio (es trabajo de datos y una respuesta del cliente)
- **Qué:** unificar las publicaciones repetidas como **un producto con variantes**: color, terminación o lo que realmente cambie.
- **Por qué:** 38 publicaciones tienen el mismo nombre base, las mismas medidas y el mismo texto que otra, pero distinto ID de ML y otro precio. Por ejemplo, el "Flotante 40 para bacha de apoyo" aparece 4 veces (modelo 1 a 4) a ARS 125.997, 151.315, 159.611 y 191.120. Entre "gemelos" el precio varía de −23% a +52%. Hoy la tienda muestra 70 tarjetas con "· modelo N" y nada explica la diferencia, así que el cliente no sabe cuál elegir. Si no se limpia antes de cargar, además se complica conectar cada producto de la web con su publicación de ML para el stock.
- **Necesito del cliente:** qué diferencia a cada "modelo" (ver preguntas).

### 3. Datos de envío: peso y medidas de la caja de cada producto, y cálculo de envío en la ficha. Esfuerzo: medio
- **Qué:**
  - Completar peso y medidas del bulto embalado en los 119 productos. Hoy faltan 21 pesos y no hay ninguna medida de embalaje.
  - Poner un calculador de envío por código postal en la ficha.
  - Definir una regla por zona, por ejemplo Córdoba con flete propio y el resto por transporte.
- **Por qué:** son muebles **armados** de hasta 100 × 78 × 45 cm. Los transportes cobran por peso volumétrico, y un 100 × 57 × 45 ya da unos 50 a 64 kg volumétricos según el divisor de cada transporte, mucho más que su peso real. Sin esos datos la plataforma no puede cotizar y el envío queda "a confirmar". Hoy el carrito dice "el costo de envío se confirma con tu dirección": en un producto de ARS 250.000 eso frena la compra.

### 4. Configurador 3D en celulares: que no atrape el scroll y que no recaliente el teléfono. Esfuerzo: medio
- **Qué:**
  - El lienzo 3D tiene `touch-action: none` y en el celu ocupa 390 × 488 px, el 58% de la pantalla. Al deslizar el dedo para bajar, el 3D gira y la página no se mueve. Además, si el 3D no carga, el lienzo invisible sigue encima de la foto. Cambiarlo a `pan-y` (girar solo con deslizamiento horizontal) o a "tocá para girar".
  - En pantallas táctiles, apagar el trazado de rayos (6 rebotes, hasta 240 pasadas), la sombra ambiental GTAO (16 muestras) y el SMAA, y limitar la resolución a 1,5×. Hoy fuerza como mínimo 1,75× (`Math.max(devicePixelRatio, 1.75)`) aunque la pantalla sea 1×.
  - Cortar el bucle cuando el 3D sale de pantalla. Ahora sigue calculando hasta llegar a las 240 pasadas aunque no se vea.
  - Usar `three.module.min.js` en el importmap: hoy carga la versión sin minificar (con three r128 medí 1,1 MB contra 0,6 MB minificado). Y servir el HDRI como binario y no como base64 en un `.txt`, que pesa un 33% más.
- **Por qué:** en un Android de gama media, que es la mayoría del público, esto se traduce en tirones, calor y batería. Lo del scroll lo veo en el código pero no lo pude reproducir con el emulador (los gestos simulados no movieron la página ni siquiera fuera del 3D). **Hay que probarlo en un teléfono real antes de mostrarlo.**

### 5. La animación de apertura tapa la tienda demasiado tiempo. Esfuerzo: bajo
- **Qué:**
  - Mostrarla una sola vez por sesión y como máximo durante 1 s.
  - No mostrarla a quien tiene activado "reducir movimiento". Hoy `runIntro()` no lo tiene en cuenta.
  - No llevarla a la tienda real.
- **Por qué:** medido en celu con 4G lento y CPU ×4, la página termina de cargar a los 3,2 s y la cortina recién se abre a los **5,7 s**. En la compu se abre a los 2,7 s. Además se repite en cada visita y antes espera a que carguen las tipografías, hasta 2,5 s.

### 6. Fotos chicas para la grilla. Esfuerzo: bajo
- **Qué:** generar la versión de 720 px (`-sm`) de todos los productos, o en la plataforma pedir las fotos al tamaño justo (las dos plataformas las achican solas).
- **Por qué:** 109 de los 119 productos tienen `sm: false`, así que la grilla baja las fotos de 1200 px aunque en el celu cada tarjeta mide unos 180 px de ancho. Importa si la propuesta se sigue usando como demo de ventas.

### 7. Accesibilidad y botones táctiles. Esfuerzo: bajo
- **Qué:**
  - Poner `lang="es"`: hoy está vacío y los lectores de pantalla leen el texto con pronunciación en inglés.
  - Sacar `aria-live` de toda la grilla y dejarlo solo en el contador de resultados. Ahora, al filtrar, el lector lee las 12 tarjetas.
  - Llevar a 44 px de alto como mínimo los botones Carrito (81 × 38), los chips de filtro (40 de alto) y la regla de ancho de pared (24 de alto).
- **Por qué:** se midió 24 elementos táctiles por debajo de 44 px en el celu.

### 8. Medición desde el día uno. Esfuerzo: bajo
- **Qué:** activar GA4 y el píxel de Meta en la plataforma, con los eventos de comercio: ver producto, agregar al carrito, iniciar compra y compra. Agregar eventos propios del configurador y del filtro por ancho, para saber si el 3D vende o solo decora.
- **Quién:** el detalle lo define Joaquín (analista-datos).

## Preguntas

**Para el cliente**
1. ¿Qué cambia entre "modelo 1", "modelo 2", etc. del mismo mueble (color, terminación, herrajes, bacha incluida)? ¿Son publicaciones duplicadas que se pueden pausar?
2. ¿Cómo envían hoy por ML (Mercado Envíos, Flex, flete propio, a convenir)? ¿Peso y medidas de la caja de cada modelo? ¿A qué zonas no llegan?
3. ¿Fabrican contra pedido o tienen stock? ¿Cuánto tarda la entrega? Esto define si hace falta sincronizar stock con ML.
4. ¿Facturan electrónicamente? ¿Con qué sistema? ¿Tienen cuenta de Mercado Pago a nombre de la empresa?
5. Los 36 productos "personalizables": ¿cómo se cotiza una medida especial? ¿Va por WhatsApp o se puede cargar como variante?

**Para Santiago**
6. ¿Tiendanube o Shopify? Mi voto es Tiendanube por pagos, envíos y ML. Shopify solo si el cliente prioriza el diseño exacto por encima de la operación.
7. ¿El configurador 3D entra en el setup o lo cotizamos aparte? Dejarlo andando bien en celulares es trabajo propio, de medio a alto.

Consulté a: nadie (la consigna pedía no consultar; Martín junta las revisiones).
