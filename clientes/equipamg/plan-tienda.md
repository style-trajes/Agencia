# Plan: tienda propia para equipamg

Fecha: 2026-10-27 · Armó: Martín (director) con Facundo (web), Camila (diseño) y Diego (finanzas). Estado: borrador interno, **no sale al prospecto sin aprobación de Santiago**.

> **Limitación:** desde la oficina Mercado Libre está bloqueado por la red (web y API). No vimos la tienda. No hay productos, cantidades, precios ni marca cargados acá: todo eso queda pendiente (sección 8). Los precios de plataformas y herramientas son aproximados y hay que verificarlos antes de pasarlos.

## 1. Problema y resultado

- **Problema:** vende solo en Mercado Libre. Paga comisión de ML en cada venta (aprox. 13-16% más envío) y no tiene un canal propio con su marca ni sus clientes.
- **Qué entregamos:** una tienda propia, separada de ML (no un catálogo con links a ML), con **todos** sus productos de ML: títulos, descripciones, specs, precios y fotos, con fotos unificadas y estética premium-funcional.
- **Resultado medible (a validar con él):** tienda publicada con el 100% del catálogo, stock sincronizado sin sobreventas y primeras ventas por canal propio, sin comisión de ML.

## 2. Plataforma recomendada: Tiendanube

| | Tiendanube | Shopify | Desarrollo propio |
| --- | --- | --- | --- |
| Pagos en Argentina | Pago Nube, Mercado Pago, transferencia, cuotas | Shopify Payments no funciona en AR: fee extra (~2% en plan básico) además de MP | Hay que construir y mantener checkout y MP |
| Envíos | Envío Nube (Correo Argentino, Andreani, OCA), retiro, envío propio | Apps de terceros | A construir |
| Conexión con ML | App oficial e integradores | Integradores | Script propio |
| Costo plataforma (aprox., verificar) | Planes pagos ~ARS 20.000-100.000/mes, comisión 1% a 0% (0% con Pago Nube) | ~USD 29-39/mes + fee | Horas nuestras, no entra en el abono |
| Diseño | Temas buenos, personalización limitada | El mejor | Total |
| Lo maneja el cliente solo | Sí | Sí | No |

**Recomendación (Facundo):** Tiendanube en plan intermedio. Cobro con Mercado Pago o Pago Nube, transferencia con 10% de descuento, Envío Nube más retiro. La suscripción la paga el cliente directo.

## 3. Carga masiva desde ML

Orden recomendado:

1. **Integrador o app Tiendanube-ML** (app oficial u otras como Producteca, Multivende o Real Trends; verificar cuáles siguen activas). Importa publicaciones con fotos y descripción y además resuelve la sincronización (sección 4). Si el cliente lo va a pagar igual para sincronizar, se arranca por acá.
2. **Excel del vendedor:** desde su cuenta de ML, Publicaciones > "Modificar en Excel". Trae título, precio, stock, SKU, variantes y categoría. **No trae fotos en alta** y la descripción a veces viene incompleta. Sirve como base y control.
3. **Script contra la API de ML** (cuando la red lo permita): `/items/{id}`, `/items/{id}/description` y `pictures[]` (cambiando el sufijo de la URL de la foto por el de mayor tamaño). Para listar sus publicaciones, el vendedor autoriza nuestra app por OAuth. **Nunca le pedimos la contraseña.**

**Mapeo al CSV de Tiendanube:** identificador de URL, nombre, categorías, precio, precio promocional, stock, SKU, peso y medidas (Envío Nube las necesita y ML casi nunca las tiene: hay que pedirlas), descripción en HTML y etiquetas. Variantes: una fila por variante con el mismo identificador, propiedad/valor (talle, color) y SKU propio. **El SKU único es la llave de la sincronización.**

## 4. Sincronización de stock y precios ML ↔ tienda

| Opción | Cuándo | Costo |
| --- | --- | --- |
| App o integrador | Recomendada: stock en tiempo real | USD 15-40/mes aprox., lo paga el cliente |
| n8n (Nicolás): webhooks de ML + API de Tiendanube, por SKU | Solo si el integrador no cubre algo puntual | n8n ~€20/mes, lo cubre el abono |
| Planilla manual | Menos de 30 productos y poca rotación | Horas |

- **Riesgo de sobreventa:** dejar 1-2 unidades de stock de seguridad.
- **Regla de precio:** precio tienda = precio ML × factor (ej. ML menos X%, porque no paga comisión de ML). El factor lo decide el cliente y queda configurable. **Pendiente.**

## 5. Criterio visual y fotos (Camila)

**Criterio:** "menos, pero mejor".

- **Fondo de foto:** blanco #FFFFFF (recomendado: el mismo archivo sirve para ML y para la tienda). Alternativa: gris cálido #F4F4F2, pero obliga a mantener dos versiones.
- **Foto:** 1:1, 1200×1200 px, producto recortado y centrado, ocupa 80-85% del lado mayor, sombra de apoyo suave (15-20%) igual en todo el catálogo. Sin ambiente en la foto principal.
- **Orden por producto:** frente, tres cuartos, detalle, escala o uso, medidas o packaging.
- **Tipografía:** A) Manrope (700 títulos y precio / 400 texto) o B) Archivo 600 + Inter 400.
- **Paleta neutra:** texto #1F2124 · secundario #5F6368 · bordes #E3E3E0 · fondo #F7F7F5 · superficie #FFFFFF · acento provisorio #2B4C7E · OK #1E7A46 · oferta/error #B3261E. **Con la marca solo se reemplaza el acento** (botón comprar, links) y su hover.
- **Ficha (celular primero):** galería deslizable, nombre hasta 60 caracteres, precio grande con cuotas y stock, variantes en botones, botón comprar fijo, descripción en viñetas y medidas en tabla.
- **Grilla:** 2 columnas en celular, 4 en escritorio, sin texto sobre la foto, una sola etiqueta por producto.

**Retoque en lote:**

1. Pedir originales al cliente. Lo bajado de ML es el techo de calidad (ML recomprime).
2. Inventario en planilla: SKU, foto, px del producto recortado, estado.
3. Quitar fondo → normalizar (1:1, ocupación, blancos, exposición, sombra) → escalar con IA solo las marcadas y revisar al 100%.
4. Exportar JPG sRGB calidad 85, 1200 px, menos de 300 KB (WebP 80 para web). Originales intactos en `originales/`.
5. Nombres: `sku_nn_vista.jpg` (ej. `eq-0123_01_frente.jpg`).

**Herramientas (se proponen a Santiago, no se contrata nada sin su ok):** gratis: rembg, Upscayl, Photopea/GIMP, ImageMagick. Pagas: Photoroom, remove.bg API, Claid.ai, Topaz Gigapixel.

**Marcado de fotos chicas** (lado mayor del producto ya recortado):

| Tamaño | Qué se hace |
| --- | --- |
| Menos de 500 px | **Marcar: rehacer o pedir foto nueva** |
| 500-799 px | **Marcar:** escalar ×2 con IA y revisar bordes y textos; si quedan defectos, rehacer |
| 800-1199 px | Escalado suave y normalizar |
| 1200 px o más | Solo normalizar |

También se marcan: compresión fuerte, producto cortado, collage, marca de agua ajena, foto de fabricante sin permiso.
**No se retoca:** color, forma o terminación del producto, defectos reales, accesorios que no vienen, logos de terceros. No se genera el producto con IA ni se usan fotos de otros vendedores.

## 6. Cotización por tramos

Hora a USD 15. Setup mínimo = horas × 15 ÷ 0,6.

**Horas estimadas por el equipo** (se toman las de Facundo y Camila, más altas que las de la primera estimación de Diego):

| Tramo | Web (Facundo) | Diseño (Camila) | Textos (Julieta) | Calidad y coordinación | Total |
| --- | --- | --- | --- | --- | --- |
| Hasta 30 | 18 | 13 | 4 | 3 | **38 h** |
| 31-100 | 28 | 24 | 7 | 4 | **63 h** |
| Más de 100 | 43 | 30 | 10 | 5 | **88 h + 0,3 h por producto sobre 100** |

**Setup:**

| Tramo | Costo (h × 15) | Precio mínimo | Sugerido | Dentro del catálogo (400-1.200) |
| --- | --- | --- | --- | --- |
| Hasta 30 | 570 | 950 | **USD 990** | Sí |
| 31-100 | 945 | 1.575 | **USD 1.600** | **No: pasa el techo. Decide Santiago** |
| Más de 100 | 1.320 + 4,5/prod. | 2.200 + 7,5/prod. | **USD 2.200 + USD 8 por producto sobre 100** | **No. Decide Santiago** |

- **Nota:** Diego había calculado con menos horas (29 / 47 / 65 h → USD 790 / 1.200 / 1.650 + 6 por producto). Con las horas que dieron Facundo y Camila esos precios quedan por debajo del margen mínimo, así que no se usan.
- **Cómo bajar el tramo 31-100 al techo de USD 1.200** (achicar alcance, nunca el margen): retocar solo la foto principal de cada producto y normalizar el resto. Otra opción: que el cliente pase los originales y la app importe las fotos. Así se recortan unas 15-20 h de diseño y queda en ~45 h → mínimo USD 1.125.

**Abono (por adelantado):**

| | Hasta 30 | 31-100 | Más de 100 |
| --- | --- | --- | --- |
| Precio | **USD 90** | **USD 120** | **USD 150** |
| Productos nuevos por mes incluidos | 5 | 10 | 20 |
| Horas estimadas | ~2 h | ~3 h | ~4 h |
| Costo herramientas (n8n, si se usa) | ~USD 23 | ~USD 23 | ~USD 23 |
| Margen después de herramientas (piso 50%) | 74% | 81% | 85% |

- **Incluye:** sincronización de stock y precios, cambios menores (banners, textos, precios puntuales), productos nuevos del cupo y soporte por WhatsApp en horario hábil. Producto extra fuera del cupo: USD 6.
- **Lo paga el cliente directo:** plan de Tiendanube y app de sincronización (si alcanza con la app, nuestro costo de herramientas baja a cero).
- **Combo:** con otro abono (ej. Mercado Libre: publicaciones y Mercado Ads), 10% de descuento en el total mensual.
- **Cobro:** setup 50% al aprobar y 50% al entregar. El primer abono se cobra con el segundo pago, antes de publicar. Nunca se entrega sin abono. USD cobrados en pesos al tipo de cambio del día.

## 7. Quién hace qué

| Paso | Quién | Cuándo |
| --- | --- | --- |
| Revisar este plan y decidir precio de tramos 31-100 y más de 100 | Santiago | 2026-10-30 |
| Primer contacto y pedido de datos (cantidad de publicaciones, Excel de ML, originales de fotos) | Lucía (comercial), con mensaje aprobado por Santiago | 2026-11-06 |
| Contexto del negocio y relevamiento / brief | Valentina (estratega) y Tomás (consultor) | cuando haya datos |
| Demo de 3-5 productos con el criterio visual (opcional, para vender) | Facundo + Camila | después del primer contacto |
| Tienda, importación, pagos, envíos | Facundo | después de aprobar brief y propuesta |
| Guía visual y retoque en lote | Camila | en paralelo con Facundo |
| Revisión de títulos y descripciones | Julieta (redactor) | en paralelo |
| Sincronización (integrador o n8n) | Facundo / Nicolás (automatizador) | antes de publicar |
| Revisión con checklist (mínimo 8/10) | Rocío (calidad) | antes de mostrar a Santiago |
| Abono y reporte mensual | Florencia (éxito del cliente) | desde la publicación |

## 8. Pendientes (lo que falta conseguir)

- [ ] **Cantidad de productos** y de variantes (define el tramo y el precio).
- [ ] **Acceso a la cuenta de ML** (autorización OAuth de nuestra app, nunca contraseña) **o el Excel exportado** de sus publicaciones.
- [ ] **Nombre real de la marca, logo** y si tiene dominio propio.
- [ ] **Medios de pago y envíos que usa hoy** (MP, transferencia, cuotas; Mercado Envíos, Flex, retiro).
- [ ] Fotos originales (cámara o celular): es lo que más mueve las horas de diseño.
- [ ] Peso y medidas de cada producto (Envío Nube las pide).
- [ ] Tipo de factura (A/B) y condición fiscal.
- [ ] Regla de precio de la tienda respecto de ML (factor).
- [ ] Verificar precios vigentes de Tiendanube, apps de sincronización y n8n.
- [ ] Revisión de red: ML bloqueado desde la oficina; el script de API queda para cuando se pueda acceder.

## 9. Actualización 27/10: ya hay datos reales

Santiago ya había armado con Claude una propuesta web completa para EQUIPA, importando todo el catálogo de Mercado Libre: https://claude.ai/artifact/9YJGrL3YQW15mgi5iBdxry (privada). Copia de los datos en `datos/`.

- **Marca:** EQUIPA. Fabricantes en barrio Alberdi, Córdoba. MDF de 18 mm enchapado en melamina; entregan armado; envíos a todo el país o retiro.
- **Catálogo:** 119 productos (importado el 16/10/2026): 73 flotantes, 25 de pie, 12 de guardado, 6 racks de TV, 1 recibidor, 1 línea chicos, 1 cocina (aprox., según la línea asignada). Entre 2 y 10 fotos por producto. Precios ML entre ARS 100.729 y 398.893.
- **Ya resuelto en la propuesta:** diseño premium, logo, ficha de producto, filtro por ancho de pared, configurador 3D de colores, carrito de demostración y precio web = ML − 15% (a confirmar con el cliente). Incluye una herramienta para generar el CSV de importación a Shopify.
- **Qué cambia en este plan:**
  - Las secciones 3 y 5 (carga y fotos) ya están hechas en gran parte: no hace falta acceso a ML desde la oficina.
  - Plataforma: la propuesta apunta a Shopify (o Wix) y trae el CSV para Shopify; este plan recomendaba Tiendanube por costos. **Decide Santiago.**
  - Precio: 119 productos cae en el tramo "más de 100" (USD 2.200 + 8 × 19 = USD 2.352, abono USD 150). Como el diseño y la importación ya están hechos, las horas reales son menores: Diego tiene que recalcular con las horas que faltan (pasar a la plataforma, pagos, envíos, dominio, pruebas). Siempre respetando los márgenes mínimos de `CLAUDE.md`.
- **Pendiente:** Rocío (calidad) revisa la propuesta antes de mostrarla; confirmar con el cliente el descuento web, medios de pago y envíos.
