# EQUIPA · Qué dice el equipo de la propuesta web

Martín (director) · 27/10/2026 · Junté las 13 revisiones de esta carpeta. No consulté a nadie más.
Ya descarté como error las fotos que faltan o las miniaturas rotas (la copia local trae solo 12 carpetas de fotos), el 3D y las tipografías que no cargan (las bloquea la red del entorno).

---

## 1. En una frase

**La base es buena, pero todavía no se le puede mostrar: Rocío le puso 4/10.** El catálogo muestra el mismo mueble a precios distintos, no hay ningún WhatsApp ni contacto y la página promete cosas que el cliente no confirmó. Casi todo se arregla rápido, pero varias cosas dependen de que responda el cliente.

---

## 2. Lo que hay que mantener

1. **El filtro "Ancho libre en tu pared".** Lo destacan 11 de 13. Responde la duda de quien compra un vanitory ("¿me entra?") y ML no lo tiene. Tiene que estar en cualquier plataforma que elijamos.
2. **El mensaje "Muebles de baño que llegan armados · hecho en Córdoba".** Es concreto y fácil de comprobar. Además, 98 de los 119 productos son vanitorys, así que el foco cierra.
3. **"A tu medida"** (hasta 5 cm menos, sin tapa, colores combinados). Es lo único que la web puede dar y ML no. Antes de usarlo, el cliente tiene que confirmarlo.
4. **La ficha:** medidas en tres columnas arriba del botón, "bacha no incluida" bien a la vista y el botón de compra fijo en el celular.
5. **El catálogo cargado como datos y el precio sacado de una sola regla** (`PRICE_FACTOR = 0,85`). Pasarlo a Tiendanube o Shopify es importar, no cargar todo a mano. Rocío controló los redondeos de los 119 productos y no hay errores.

---

## 3. Mejoras priorizadas

### A. Antes de mostrársela al cliente (imprescindible)

**1. Productos repetidos con precios distintos** · lo dicen 12 de 13 · esfuerzo medio
- **Qué pasa:** entre 70 y 75 publicaciones se llaman "· modelo 1/2/3/4" y forman 32 a 34 grupos. Otras 38 tienen un sufijo numérico en el nombre interno. Un ejemplo: "Flotante 40 para bacha de apoyo" aparece 4 veces, con las mismas medidas y el mismo texto, a precios de ML que van de $125.997 a $191.120. Hay dos pares con el nombre exactamente igual, como "Flotante 80 de dos cajones" a $281.600 y a $352.880.
- **Para la demo:** mostrar solo los 10 destacados o esconder los repetidos. La limpieza de fondo se hace cuando el cliente nos diga qué los diferencia. Los modelos que solo cambian de color o de ancho se juntan en un producto con variantes.
- **Lo propusieron:** Rocío, Camila, Julieta, Facundo, Agustina, Joaquín, Diego, Valentina, Matías, Nicolás, Florencia y Lucía.

**2. WhatsApp visible: botón fijo y otro en la ficha con el producto en el mensaje** · lo dicen 10 · esfuerzo bajo
- **Por qué:** la página dice "escribinos" y "nos avisás después de comprar", pero no tiene ni un link de contacto. El único que hay manda a ML.
- **Lo propusieron:** Rocío, Julieta, Joaquín, Valentina, Matías, Nicolás, Sofía, Florencia, Lucía y Agustina.

**3. Sacar las promesas que el cliente no confirmó y corregir los textos falsos** · lo dicen 4 · esfuerzo bajo
- **Las promesas:** "cambios sin costo", "hasta 5 cm menos", "sin tapa", "extensión total" y "cuatro ménsulas". Lo de las cuatro ménsulas además choca con la ficha del Flotante 100, que dice solo "tornillos y tarugos".
- **El texto falso:** las fichas de las bachas semiencastrable y encastrable dicen "Para bacha de apoyo". Es un error del código (`fillSheet` en `app.js`).
- **Las contradicciones:** dice "precios finales", pero el envío se cobra aparte. Y "el más angosto: 38 cm" habla en realidad de la profundidad.
- **Lo propusieron:** Rocío, Julieta, Florencia y Valentina.

**4. Sacar "Shopify o Wix" del checkout** · lo dicen 3 · esfuerzo bajo
- Hay que poner la plataforma elegida y los medios de pago reales. Wix queda afuera: no está en nuestro stack y no se integra con ML ni con los transportes argentinos.
- **Lo propusieron:** Rocío, Facundo y Lucía.

**5. Actualizar los precios o mostrar la fecha** · lo dicen 2 · esfuerzo bajo
- Los precios son del 16/10. Con la inflación, para la reunión ya van a estar viejos.
- **Lo propusieron:** Rocío y Nicolás.

**6. Probar la demo en un celular real** · esfuerzo bajo a medio
- **El 3D:** en un celular puede trabar el scroll y recalentar el teléfono (`touch-action: none` en el 58% de la pantalla, trazado de rayos). Si traba, lo mostramos en la compu o lo dejamos afuera.
- **La animación de entrada:** tarda 5,7 s en abrirse con 4G lento. Hay que dejarla en 1 s como máximo.
- **El orden para mostrarla en la reunión, según Lucía:** su producto más vendido → filtro de ancho → 3D → carrito → precio.
- **Lo propusieron:** Facundo y Lucía.

### B. Para que venda (antes de publicar)

**7. Medición desde el primer día** · lo dicen 6 · esfuerzo bajo
- Hoy no hay ninguna medición. Hay que instalar GA4, el píxel de Meta y la etiqueta de Google Ads con la integración nativa de la plataforma.
- Eventos: ver producto, agregar al carrito, compra confirmada, clic a WhatsApp y uso del filtro de ancho. Sumar UTM en los links y la pregunta "¿Cómo nos conociste?" en el checkout.
- Sin esto no vamos a poder mostrarle la comisión de ML que se ahorra, que es el número que sostiene el abono.
- **Lo propusieron:** Joaquín, Matías, Valentina, Facundo, Agustina y Sofía.

**8. El costo de envío a la vista antes de pagar** · lo dicen 7 · esfuerzo medio
- **El problema:** el carrito dice "el envío se confirma con tu dirección". Para un mueble armado de $250.000 eso frena la compra.
- **Lo que falta:** a 21 productos les falta el peso y a ninguno las medidas de la caja. Un 100×57×45 da entre 50 y 64 kg de peso volumétrico.
- **Lo que hay que hacer:** un calculador por código postal y el retiro en Alberdi como opción visible.
- **Lo propusieron:** Facundo, Joaquín, Matías, Florencia, Nicolás, Diego y Julieta.

**9. Plazo de fabricación y entrega en la ficha, el carrito y el mail** · lo dicen 5 · esfuerzo bajo (falta el dato del cliente)
- No hay ningún plazo en toda la página, y es la primera pregunta que hace quien compra un mueble que se fabrica.
- **Lo propusieron:** Julieta, Florencia, Nicolás, Valentina y Agustina.

**10. Pedir la personalización antes de pagar** · lo dicen 5 · esfuerzo medio
- **Qué:** un campo de notas o propiedades del producto en la ficha. La combinación de colores que ya guarda el carrito tiene que viajar con el pedido. Cuando entra un pedido, al taller le llega un aviso.
- **Por qué:** hoy dice "nos avisás después de comprar". Así quedan pedidos pagados sin saber cómo fabricarlos, y un mueble hecho 3 cm más angosto no se puede revender.
- **Lo propusieron:** Florencia, Julieta, Joaquín, Valentina y Nicolás.

**11. Cuotas y medios de pago debajo del precio** · lo dicen 5 · esfuerzo bajo
- Quien viene de ML compara contra precios con cuotas.
- **Lo propusieron:** Camila, Joaquín, Valentina, Julieta y Diego.

**12. Pruebas de que la empresa existe** · lo dicen 5 · esfuerzo medio
- **Qué:** la reputación y las ventas de ML (con el dato real y su permiso), fotos reales del taller en lugar del plano y el link "también estamos en ML como equipamg".
- **Por qué:** hoy todas las imágenes son renders, el pie dice "fotos ilustrativas" y no hay ninguna opinión.
- **Ojo:** las calificaciones de ML no se pueden marcar como reseñas para Google (Agustina).
- **Lo propusieron:** Julieta, Joaquín, Valentina, Camila y Sofía.

**13. Página de cambios, devoluciones y garantía, botón de arrepentimiento y preguntas frecuentes** · lo dicen 4 · esfuerzo bajo
- No hay ninguna política. La página tiene que decir antes de pagar qué pasa con los pedidos a medida. La parte legal la valida el contador o abogado del cliente.
- **Lo propusieron:** Florencia, Julieta, Agustina y Valentina.

**14. Una URL propia por producto y por colección, con "vanitory + tipo + medida" en el título** · lo dicen 2 · esfuerzo bajo (la plataforma ya lo trae)
- Hoy la ficha es una ventana flotante sin dirección propia. Así Google no ve ningún producto y no se pueden armar anuncios, catálogo de Meta ni remarketing.
- **Lo propusieron:** Agustina y Matías.

**15. Que el motivo para comprar en la web sea "a tu medida, directo de fábrica", no "15% más barato"** · lo dicen 3 · esfuerzo bajo
- Ver el punto 4 de los números.
- **Lo propusieron:** Valentina, Lucía y Diego.

**16. Nombres y textos propios para cada producto** · lo dicen 2 · esfuerzo medio
- **Qué:** que cada nombre diga en qué se diferencia del resto. Que cada ficha tenga entre 80 y 150 palabras propias y que las fotos tengan texto alternativo.
- **Por qué:** hoy 29 productos dicen lo mismo: "Para bacha de apoyo, se entrega armado".
- Julieta lo hace en una tanda cuando conteste el cliente.
- **Lo propusieron:** Julieta y Agustina.

**17. Ajustes de celular** · lo dicen 4 · esfuerzo bajo
- La grilla a 2 columnas: hoy la página mide 12.254 px de alto para mostrar 12 productos.
- Los filtros en una sola fila. "Recibidores", "Para chicos" y "Cocina" se juntan en "Otros".
- En la grilla, foto sobre fondo blanco. La foto ambientada pasa a la ficha.
- Botones de 44 px como mínimo y `lang="es"`.
- **Lo propusieron:** Camila, Joaquín, Rocío y Facundo.

**18. Sincronizar los precios con ML todos los días** · lo dicen 2 · esfuerzo medio
- Un control diario: precio web = precio de ML × la regla. Si una publicación se pausa en ML, el producto se oculta en la web. Si un precio salta más de 20%, nos llega un aviso.
- Hace falta crear un código propio (SKU) para cada producto. Además, 20 de los IDs de ML son de otro tipo (`MLAU`).
- **Lo propusieron:** Nicolás y Diego.

**19. Lo técnico del lanzamiento** · esfuerzo bajo
- Sacar el `noindex` y el aviso "Propuesta de diseño", comprar el dominio propio, mandar el sitemap a Search Console y sumar los datos estructurados de producto. Sumar también un LEEME de cómo se cambia un precio.
- **Lo propusieron:** Agustina, Julieta y Rocío.

### C. Fase 2 (después de lanzar)

- **Traer visitas con anuncios** · lo dicen 4: primero búsquedas y Shopping de Google y desde el mes 2 Meta con catálogo. Antes tienen que estar hechos los puntos 7, 8 y 14. Lo propusieron Matías, Valentina, Diego y Sofía.
- **SEO local:** páginas por medida (`/vanitory-flotante-60`), el perfil de Google Maps del taller y una guía "cómo elegir según tu pared" para que las IA la citen. Lo propusieron Agustina y Valentina.
- **Video:** un reel "llega armado" (caja → mueble colgado), un video de instalación para los 73 flotantes y fotos en casas de clientes con su permiso. Lo propusieron Sofía y Camila.
- **Postventa:** 4 avisos por pedido (recibido → en fabricación → despachado → pedido de reseña) y la recuperación de carritos abandonados que ya trae la plataforma, por mail. Lo propusieron Florencia y Nicolás.
- **El configurador 3D como página aparte (Netlify)** con un botón "Comprar este modelo", optimizado para celular. Lo propuso Facundo.
- **Bot de WhatsApp con IA:** solo si las consultas son muchas y repetidas. Lo propusieron Nicolás y Florencia.
- **Prueba de precio "en ML $X · acá $Y":** recién cuando haya unas 1.200 visitas a fichas por variante. Lo propuso Joaquín.

---

## 4. Números clave

> Las comisiones, el costo de envío y el tipo de cambio son **supuestos de Diego** (ML está bloqueado desde acá). Hay que confirmarlos antes de mandar un precio.

**Catálogo real**
- Son 119 publicaciones. Facundo y Lucía estiman **unos 81 productos únicos** después de juntar los repetidos. Es una estimación: lo confirma el cliente.
- Si quedan 100 o menos, pasamos al tramo de 31 a 100 productos y **el abono baja de USD 150 a USD 120**.

**Cuánto le queda a EQUIPA por venta**
- La cuenta usa el precio del medio del catálogo: ARS 254.362 en ML (supuestos: envío de ARS 35.000, comisión de ML de 14%, Mercado Pago 7,6%).
- ML clásica: le quedan **$183.751**.
- Web −15% pagando con MP y el envío a cargo del comprador: **$199.776**, +8,7% contra ML. ✅
- Web −15% por transferencia: **$216.208**. ✅
- Web −15% con envío gratis: **$164.776**. ❌ Pierde unos $19.000 por venta.
- Web −15% con 6 cuotas sin interés: **$165.183**. ❌
- **Diego, en resumen:** el −15% sirve solo si el envío lo paga el comprador o retira en Alberdi, y sin 6 cuotas. Con envío gratis, el descuento máximo que no pierde plata es 6,9%.
- **Lo que propone Diego:** escalonarlo así.
  - ML −10% con tarjeta, hasta 3 cuotas: le quedan unos $190.900.
  - ML −15% por transferencia.
  - 6 cuotas al precio de ML.

**Cuánto le cobramos (horas estimadas por Diego, Facundo las tiene que validar)**
- **Tiendanube:** 47 h, piso USD 1.175 → **USD 1.200**. Queda en el techo del catálogo.
- **Shopify:** 69 h, piso USD 1.725 → **USD 1.750**. Queda fuera del catálogo (decidís vos). Incluye pasar el diseño entero y el 3D. Además Shopify le cobra al cliente un recargo de ~2% por venta (supuesto).
- **Tienda de lanzamiento**, con los 20 a 30 productos que más vende (opción de Valentina, con precios del plan): **USD 990 + USD 90 por mes**.
- Se cobra 50% al aprobar y 50% al entregar, y el primer abono antes de publicar.

**Abono:** **USD 150** (más de 100 productos) o **USD 120** (100 o menos). Nos lleva unas 4 h por mes, así que el margen queda bien. Si hace falta n8n, subirlo a USD 160. Florencia suma unas +1 h por mes de control y reporte, que Diego todavía tiene que recalcular.

**Lo que le cuesta al cliente cada mes:** unos **USD 210 (ARS 295.000)**, sumando abono, plan de Tiendanube y app de sincronización. Lo cubre con **~18 ventas web por mes** si son ventas que igual hubiera hecho en ML. Si son clientes nuevos, con **6 o 7**. Este último número es ilustrativo: supone que fabricar le cuesta el 60% del precio, y no tenemos su costo real.

**Anuncios:** **USD 300 por mes como mínimo**, que paga el cliente (Google 200 + Meta 100). Nuestro fee: USD 250 a 500 por plataforma más un setup de 150 a 300. Matías propone arrancar solo con Google y no invertir nada hasta tener medición, una URL por producto y el envío visible.

---

## 5. Decisiones para vos

1. **Plataforma.** El equipo recomienda **Tiendanube, a USD 1.200**: tiene Mercado Pago, envíos y la integración con ML. Shopify, a USD 1.750, solo si el cliente pone el diseño exacto por encima de la operación. Wix queda afuera. La tenías para el 30/10.
2. **Alcance de la primera propuesta.** ¿Catálogo completo o tienda de lanzamiento (20 a 30 productos, USD 990 + 90)? Valentina recomienda la de lanzamiento para bajar la barrera de entrada. En los dos casos, cotizamos **recién cuando el cliente aclare los repetidos**, así no le cobramos el tramo de más de 100 si son unos 81.
3. **Precio web.** El equipo recomienda **no usar el −15% como gancho principal** y escalonarlo por medio de pago, como propone Diego. El −15% va solo con envío a cargo del comprador. Además, ¿el 15% lo propusiste vos o lo pidió el cliente?
4. **El configurador 3D.** El equipo recomienda dejarlo **fuera del setup de Tiendanube** y cotizarlo aparte como página propia, porque dejarlo bien en celular es trabajo de medio a alto.
5. **Qué entra en el setup.** El equipo recomienda que **las políticas, las preguntas frecuentes y el aviso de pedido al taller vayan adentro**, porque sin eso la tienda no está lista para vender. El seguimiento por WhatsApp y la postventa van como automatización aparte.
6. **Cómo le traemos visitas.** La tienda sola no vende. El equipo recomienda que la propuesta diga desde el día uno de dónde van a venir los compradores, y ofrecer como combo para la fase 2 (10% de descuento): SEO local + Google Ads, y reels después. Así no aparece el "la web no vende" a los 90 días.

Antes de todo esto falta el **brief**: no hay `brief.md`, por eso Rocío no pudo controlar la propuesta contra ningún documento.

---

## 6. Preguntas para el cliente

1. **Los "modelo 1, 2, 3, 4" y las publicaciones repetidas:** ¿son el mismo mueble, otro color, otra bacha u otros herrajes? ¿Por qué cambia el precio? (Lo preguntan 12 de 13.)
2. **Plazos:** ¿cuántos días hábiles tarda en fabricar un modelo estándar y uno a medida? ¿Tiene stock de alguno?
3. **Envío:** ¿con qué transporte manda y cuánto cuesta por zona, por ejemplo el de un mueble de 25 kg a Buenos Aires? ¿Quién lo paga? ¿Peso y medidas de la caja de cada modelo?
4. **Ventas:** ¿cuántas ventas por mes hace en ML, cuál es su venta promedio y cuáles son sus 20 a 30 modelos más vendidos? ¿Hace Mercado Ads?
5. **Plata:** ¿qué margen o costo de fabricación tiene? ¿Publica en clásica o con cuotas? ¿Qué cuotas puede ofrecer en la web?
6. **Promesas:** ¿confirma el 15%, los cambios sin costo, el "hasta 5 cm" y las cuatro ménsulas? ¿Qué garantía da, qué hace si un mueble llega golpeado y acepta devolver uno hecho a medida?
7. **Contacto y canales:** ¿qué WhatsApp ponemos, quién responde y en qué horario? ¿Tiene Instagram, dominio propio y perfil en Google Maps?
8. **Fotos y confianza:** ¿los renders son suyos y los podemos usar? ¿Tiene fotos o video del taller y de entregas? ¿Nos deja mostrar su reputación y opiniones de ML? La foto de la nena en la mesa Montessori necesita autorización.
