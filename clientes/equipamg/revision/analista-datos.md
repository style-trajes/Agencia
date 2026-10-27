# Revisión de la propuesta web EQUIPA · Joaquín (datos y conversión)

Fecha: 27/10/2026 · Fuentes: código de la propuesta (`/tmp/claude-0/equipa/`, catálogo importado de ML el 16/10/2026), capturas `celu-*` y `compu-*`, `plan-tienda.md`. No hay datos de tráfico ni de ventas: todo lo que sigue sobre conversión son **hipótesis** que hay que medir, salvo lo marcado como dato.

## Lo que está bien y conviene mantener

1. **El filtro por ancho de pared.** Responde la duda principal de quien compra un vanitory ("¿me entra?") y es medible: sirve para saber qué medidas busca la gente.
2. **Medidas en tabla arriba del botón** en la ficha (ancho, alto, profundidad), y "llega armado, bacha no incluida" dicho claro. Baja consultas y devoluciones.
3. **Precio web = ML − 15%**, si el cliente lo confirma: es el argumento más fuerte para que alguien que lo encontró en ML compre por la tienda.

## Propuestas de mejora (ordenadas por impacto)

### 1. Medición desde el día 1 (GA4 + Tag Manager + píxel de Meta) · esfuerzo bajo
- **Qué:** hoy la propuesta no tiene ninguna medición (dato: no hay gtag, dataLayer ni píxel en el código). Instalar los eventos estándar de ecommerce de GA4 con sus nombres oficiales: `view_item_list`, `view_item`, `add_to_cart`, `begin_checkout`, `purchase`; más tres propios: `whatsapp_click` (con producto y ubicación), `filtro_ancho_usado` (con el ancho elegido) y `configurador_usado`. `purchase` se dispara en la página de confirmación del pago, nunca en el clic de "Finalizar compra".
- **Por qué:** sin esto no vamos a poder decir en el reporte mensual si la tienda le ahorra comisión de ML o no. Tiendanube y Shopify traen la integración nativa con GA4 y Meta: es configurar, no programar.
- **Indicador principal a 90 días:** ventas por la tienda (cantidad y ARS) y comisión de ML ahorrada estimada. Secundarios: tasa de `view_item` → `add_to_cart` → `purchase`, y clics a WhatsApp por producto.

### 2. Botón de WhatsApp en la ficha y en el carrito · esfuerzo bajo
- **Qué:** botón flotante y uno en la ficha con mensaje precargado ("Hola, me interesa el [producto] de [ancho] cm"). Registrar cada clic como evento.
- **Por qué:** dato: la propuesta no tiene ningún contacto (cero menciones a WhatsApp). Y el propio sitio promete "si querés otra medida o combinación, nos escribís después de comprar": un mueble de ARS 250.000 (mediana del catálogo, precio ML) no se compra a ciegas. Hipótesis: buena parte de las ventas van a cerrarse por WhatsApp; si no lo medimos, la tienda va a parecer que no vende.
- **Ojo:** pedir que pregunten **antes** de comprar los cambios de medida, no después. "Comprá y después contanos" genera cancelaciones.

### 3. Cuotas, envío y medios de pago visibles en la ficha, no recién en el checkout · esfuerzo bajo
- **Qué:** debajo del precio: "Hasta X cuotas sin interés" (lo que el cliente tenga con Mercado Pago o Pago Nube), "X% menos con transferencia" y una estimación de envío por código postal o un "Envío a Córdoba Capital: $X / resto del país: calculalo acá".
- **Por qué:** dato: en la ficha y el carrito solo dice "El costo de envío se confirma con tu dirección". En un mueble armado y pesado el envío puede ser una parte grande del total; enterarse al final es la causa típica de abandono de carrito. En ML el comprador ve cuotas y envío al lado del precio: si en la tienda no los ve, compara mal.
- **Falta dato:** cuánto cuesta hoy enviar un vanitory armado y a qué zonas. Además 21 de 119 productos no tienen peso cargado (dato del catálogo), y sin peso Envío Nube no cotiza.

### 4. Prueba social traída de Mercado Libre · esfuerzo medio
- **Qué:** mostrar la reputación de equipamg (color de termómetro, ventas concretadas, opiniones con estrellas) en la home y cerca del botón de compra, y 3 a 6 opiniones reales por producto o generales, con fotos de clientes si las hay.
- **Por qué:** dato: la propuesta no muestra ninguna opinión, reputación ni cantidad de ventas. Una marca nueva fuera de ML pierde la confianza que ML le presta ("si sale mal, ML me devuelve la plata"). Hipótesis: es la fricción número uno para pagar por fuera de ML.
- **Regla:** solo opiniones reales y con permiso; no inventamos ni reescribimos testimonios. Sumar también "Compra protegida: si llega dañado, te lo cambiamos" **solo si el cliente lo garantiza por escrito**.

### 5. Ordenar los modelos repetidos antes de publicar · esfuerzo medio
- **Qué:** dato calculado sobre el catálogo: 70 de los 119 productos se llaman "… · modelo N" y caen en 32 grupos con el mismo nombre base. Solo en flotantes de 80×57×45 hay 15 publicaciones con precios ML entre ARS 233.745 y 352.880. Hay que confirmar con el cliente cuáles son modelos distintos (y nombrarlos por lo que cambia: puertas, cajones, color) y cuáles son publicaciones repetidas de ML (agruparlas como variantes o eliminarlas).
- **Por qué:** alguien que ve "Flotante 40 para bacha de apoyo · modelo 1… 4" con cuatro precios distintos no entiende la diferencia y o se va o escribe para preguntar. Además, en el análisis, 15 fichas casi iguales dividen los datos y no vamos a saber qué modelo funciona.

### 6. En celular, mostrar productos antes que filtros · esfuerzo bajo
- **Qué:** en la colección mobile, colapsar el filtro de ancho en un botón ("¿Cuánto mide tu pared?") y dejar visibles los chips de tipo en una sola fila deslizable.
- **Por qué:** dato (captura `celu-2-coleccion.png`): toda la primera pantalla son título, 7 chips y la regla de ancho; el primer producto aparece recién abajo del pliegue. Hipótesis: la mayoría del tráfico va a venir de celular (Instagram, ML, WhatsApp); medirlo con GA4 para confirmar.

### 7. Atribución: separar quién vino de ML, de Instagram y de anuncios · esfuerzo bajo
- **Qué:** links con UTM en minúscula para cada canal propio (`utm_source=instagram&utm_medium=social`, `utm_source=whatsapp&utm_medium=mensaje`, etc.) y una pregunta de una línea en el checkout: "¿Cómo nos conociste?" (ML, Instagram, recomendación, Google, otro).
- **Por qué:** muchos compradores van a ver el producto en ML y después buscar la marca; llegan como "directo" y GA4 no lo sabe. La pregunta es la forma barata de saber cuánto de la tienda canibaliza ML y cuánto es venta nueva, que es lo que el cliente va a querer saber.

### 8. Primer experimento cuando haya tráfico: precio con referencia a ML · esfuerzo bajo
- **Qué:** variante A muestra solo el precio web; variante B muestra "Precio en Mercado Libre $X · acá $Y (15% menos)". Indicador: `add_to_cart` / `view_item`.
- **Por qué:** es la hipótesis más barata y con más impacto posible. **No correrlo antes de tener volumen:** con una conversión de 5% a carrito hacen falta unas 1.200 visitas a ficha por variante para detectar una mejora del 50% (tabla de tamaño de muestra de la skill `ab-testing`). Mientras tanto, observar y no decidir por intuición con 20 visitas.

## Preguntas para el cliente o para Santiago

1. ¿Cuántas ventas por mes hace hoy en ML y cuántas consultas le llegan por WhatsApp o Instagram? Sin esta línea de base no vamos a poder mostrar resultados.
2. ¿Cuánto le cuesta hoy un envío de un vanitory armado (Córdoba y resto del país) y quién lo paga?
3. ¿Qué cuotas sin interés ofrece y con qué medio de cobro?
4. ¿Los "modelo 1, 2, 3, 4" son muebles distintos o publicaciones repetidas en ML?
5. ¿Nos autoriza a mostrar su reputación y opiniones de ML en la tienda? ¿Tiene fotos de clientes con el mueble instalado?
6. ¿El descuento web del 15% está confirmado? Cambia el argumento principal de la tienda y el experimento 8.
