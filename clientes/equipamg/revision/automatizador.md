# Revisión de la propuesta EQUIPA · Automatización (Nicolás)

27/10/2026 · Miré `js/products.js`, `js/catalogo-meli.js`, `js/app.js`, `index.html` y `plan-tienda.md`. ML bloqueado desde acá: lo que dependa de la cuenta real queda como pregunta.

## Lo que está bien y conviene mantener

1. **Cada producto ya tiene su ID de ML** (`meliId` en los 109 del catálogo; link `meli` en los 10 destacados). Es la base para cruzar la tienda con ML sin hacerlo a mano.
2. **El precio web sale de una regla, no de una tabla** (`PRICE_FACTOR = 0.85` sobre `precioMeli`). Si mañana el descuento es otro, se cambia un número. Eso hay que llevarlo tal cual a la sincronización.
3. **El carrito guarda la combinación de colores** (`combo` en cada línea). Es justo el dato que el taller necesita para fabricar: no hay que perderlo en el camino al pedido.

## Propuestas de mejora (por impacto)

### 1. Sincronizar precios desde ML todos los días (no stock en tiempo real)
- **Qué:** un flujo diario (integrador o n8n) que lee el precio de cada publicación de ML por su ID, calcula precio web = ML × factor y actualiza la tienda. Si una publicación se pausa o se cierra en ML, el producto se oculta en la tienda. Si un precio cambia más de 20% de golpe, no se aplica solo: le llega aviso a Santiago o al cliente para confirmarlo.
- **Por qué:** los precios de la propuesta son una foto del 16/10 (`precioMeli` "precio publicado ese día"). Con la inflación, en un mes la web vende más barato que ML o al revés, y nadie se entera. Además EQUIPA **fabrica** ("Lo fabricamos… en el taller"): el problema no es tanto la sobreventa de stock sino precio viejo y modelos discontinuados. Para un fabricante a pedido, un control diario alcanza y es más simple que webhooks en tiempo real.
- **Ojo con los IDs:** 89 son `MLA…` (publicación) y 20 son `MLAU…` (producto de usuario, otro endpoint de la API). Hay que resolver esos 20 antes de sincronizar. Y no hay **SKU** ni campo de stock en ningún producto: hay que crear el SKU (ej. `EQ-0001`) y que sea la llave en ML y en la tienda.
- **Esfuerzo:** medio (con integrador, bajo).

### 2. Limpiar duplicados antes de conectar nada
- **Qué:** cruzar los 119 productos por ID de ML, medida y precio; decidir con el cliente cuáles son el mismo mueble publicado dos veces y cuáles son variantes (color, tipo de bacha). Las variantes se agrupan en un solo producto con opciones.
- **Por qué:** 38 de los 109 slugs del catálogo tienen sufijo numérico (ej. `flotante-40-para-bacha-de-apoyo` aparece con `-2188`, `-9471` y `-3406`). Si se sincroniza así, cada duplicado es un producto más para mantener, el cliente ve el mismo mueble tres veces y el cobro por tramo (más de 100) puede estar inflado.
- **Esfuerzo:** bajo (es una planilla + 30 min con el cliente).

### 3. Aviso de pedido nuevo al taller, con la personalización incluida
- **Qué:** cuando entra un pago en la tienda, le llega al dueño un WhatsApp (o mail) con: producto, medida, colores de caja y frentes, cambios pedidos (5 cm menos, sin tapa), datos de envío y número de pedido. Se registra en una planilla de pedidos con estado (en fabricación / embalado / despachado). Si el flujo falla, aviso por mail.
- **Por qué:** hoy la propuesta dice "Si querés otra medida o combinación, nos escribís después de comprar", pero **no hay ningún canal de contacto en la página** (ni WhatsApp ni mail, revisé `index.html`). La personalización se pierde entre el pago y el taller. Y el `combo` ya existe en el carrito: solo hay que pasarlo como nota del pedido.
- **Esfuerzo:** bajo (Tiendanube/Shopify mandan el aviso de venta solos; n8n agrega la planilla y el WhatsApp interno).

### 4. Botón de WhatsApp para medidas y personalizaciones, con respuestas armadas (no bot con IA todavía)
- **Qué:** botón flotante y en cada ficha que abre WhatsApp con el mensaje precargado ("Hola, quiero el *Flotante 80 de dos cajones* con estos cambios: …"). En WhatsApp Business: respuestas rápidas para lo que más se pregunta (¿entra en mi nicho de X cm?, ¿viene armado?, ¿cuánto tarda?, ¿hacen envío a…?). Siempre responde una persona.
- **Por qué:** la sección "A tu medida" promete cambios sin costo (hasta 5 cm menos, sin tapa, colores combinados), y eso genera consultas que un catálogo no resuelve. Un bot con IA que confirme medidas especiales puede prometer algo que el taller no hace. Primero medimos cuántas consultas llegan; si son muchas y repetidas, recién ahí el bot (servicio aparte, USD 300-700 + abono). Las conversaciones que inicia el cliente son de servicio (USD 0,026), no de marketing.
- **Esfuerzo:** bajo.

### 5. Seguimiento de envío automático, avisando también la etapa de fabricación
- **Qué:** mensajes de utilidad en 3 momentos: "pedido confirmado, entra a fabricación (plazo X días)", "despachado, tu número de seguimiento es…" y "entregado". Si el envío es por Envío Nube o la integración de envíos de Shopify, el seguimiento lo manda la plataforma por mail sin costo; WhatsApp solo para el aviso de fabricación y despacho.
- **Por qué:** un mueble a pedido tarda más que algo en stock, y la pregunta "¿cuándo llega?" es la que más tiempo come. **La página no muestra plazo de fabricación** en ningún lado: hay que conseguirlo del cliente. Costo: 2-3 mensajes de utilidad por pedido ≈ USD 0,05-0,08.
- **Esfuerzo:** medio (depende del transportista y de que el taller marque "despachado").

### 6. Carritos abandonados: usar lo nativo de la plataforma, por mail
- **Qué:** activar el recupero de carrito abandonado que ya traen Tiendanube y Shopify (mail a las pocas horas, uno solo, con el carrito y el botón de WhatsApp para dudas de medida). No armarlo en n8n ni por WhatsApp.
- **Por qué:** el carrito de la propuesta vive en el `localStorage` del navegador: no sabemos de quién es hasta que deja mail o teléfono en el checkout, y eso lo resuelve la plataforma. Por WhatsApp sería plantilla de marketing (USD 0,0618 por mensaje) y necesita permiso explícito del cliente. Ticket de ARS 100.000-400.000: vale el mail, no hace falta más.
- **Esfuerzo:** bajo.

### 7. Completar peso y medidas de embalaje
- **Qué:** cargar peso y medidas del bulto de cada producto en la planilla maestra (la misma de los SKU).
- **Por qué:** 21 de los 119 tienen `peso: null` (20 del catálogo y 1 destacado). Sin eso, Envío Nube o el cálculo de envío no cotizan, y el "costo de envío se confirma con tu dirección" se vuelve un ida y vuelta a mano por cada venta.
- **Esfuerzo:** bajo (lo completa el cliente; nosotros le pasamos la planilla).

## Preguntas

**Para el cliente**
- ¿Fabrica a pedido o tiene stock armado de algunos modelos? ¿Cuál es el plazo de fabricación?
- ¿Las publicaciones con nombre repetido son duplicados o variantes (color, bacha)?
- ¿Por qué canal quiere recibir los pedidos y las consultas? ¿Tiene WhatsApp Business?
- ¿Con qué transporte envía hoy (Mercado Envíos, Andreani, flete propio)?
- ¿Confirma el 15% menos que ML? ¿Lo quiere igual para todos los productos?

**Para Santiago**
- Plataforma: si es Tiendanube, la app oficial de ML puede cubrir la sincronización y n8n queda solo para pedidos y avisos (baja nuestro costo de herramientas). Con Shopify probablemente necesitemos n8n o un integrador pago.
- El abono de USD 150 incluye "sincronización": ¿incluye también los avisos de pedido y seguimiento (propuestas 3 y 5), o se presupuestan como automatización aparte (USD 300-1.000 + 40-100)?
