# Revisión publicidad paga · EQUIPA

Revisó: Matías (trafficker) · 27/10/2026 · Sin consultas a otros agentes (pedido del CONTEXTO).

**Veredicto:** hoy la propuesta **no está lista para recibir tráfico pago**. No tiene medición, cada producto no tiene su propia dirección (URL) y el checkout es de demostración. Nada de esto es grave: casi todo lo resuelve la plataforma (Tiendanube o Shopify) al publicarse. Pero no se gasta un peso hasta que esté.

## Lo que está bien y conviene mantener

1. **Ficha con medidas arriba y filtro por ancho de pared.** Es justo lo que pregunta alguien que llega de un anuncio ("¿me entra en mi baño?"). Ayuda a convertir sin tener que escribir por WhatsApp.
2. **Fotos ambientadas más fotos sobre fondo blanco** (`escena` y `render` en `products.js`). Las ambientadas sirven para el anuncio de Meta y las blancas para Google Shopping, que las pide así. Con el mismo material salen las dos cosas.
3. **Datos de catálogo estructurados** (nombre, medidas, peso, precio, línea, ID de ML) en `products.js` y `catalogo-meli.js`. Es la base del feed de productos: no hay que cargarlo de cero.

## Propuestas, ordenadas por impacto

### 1. Medición antes de cualquier anuncio · esfuerzo bajo-medio
- **Qué:** GA4 + píxel de Meta + etiqueta de Google Ads, con los eventos de compra: ver producto, agregar al carrito, iniciar compra, **compra confirmada** (con valor y moneda ARS) y **clic a WhatsApp** como contacto. Envío desde el servidor (Conversions API de Meta y conversiones mejoradas de Google) usando la **integración nativa** de la plataforma: Tiendanube y Shopify la traen, así que es gratis. Verificar con una compra de prueba que llegue a Events Manager y a Google Ads.
- **Por qué:** en el código no hay ninguna etiqueta (busqué `gtag`, `fbq`, `dataLayer`, `googletagmanager`: cero resultados). La compra hoy es un "Pedido de prueba registrado" que no existe. Sin medición no se lanza.
- **Ojo:** la compra se dispara en la página de confirmación del pedido pago, no en el botón "Finalizar compra".

### 2. Una URL por producto (y por colección) · esfuerzo medio, lo resuelve la plataforma
- **Qué:** que cada producto tenga su página propia (`/productos/flotante-60-con-puertas-y-estante`) y cada línea su colección (`/vanitorys-flotantes`, `/de-pie`).
- **Por qué:** hoy la ficha se abre en una ventana flotante (`openSheet` en `app.js`) y no cambia la dirección. Eso significa: (a) un anuncio no puede llevar a un producto puntual, (b) el feed de Meta y de Google necesita un link por producto y no lo hay, (c) el remarketing "viste este mueble" no funciona. Es la condición para que existan campañas de catálogo. En Tiendanube o Shopify viene sola: no hay que mantener la ventana flotante como única ficha.

### 3. Feed de catálogo limpio para Meta y Google Shopping · esfuerzo medio
- **Qué:** catálogo de Meta y Google Merchant Center conectados desde la plataforma, con: ID único (usar el SKU o el ID de ML), título con tipo + medida + uso ("Vanitory flotante 60 cm con puertas y estante, MDF 18 mm"), precio web, disponibilidad, foto blanca como principal, `marca = EQUIPA`, categoría de Google (Muebles > Muebles de baño), peso y medidas para el envío.
- **Por qué:** hay **38 productos con sufijo numérico** en el nombre interno (ej. `flotante-40-para-bacha-de-apoyo` aparece 3 veces con sufijos distintos). Si son publicaciones repetidas, en el feed compiten entre sí y Google puede rechazarlas como duplicadas. Además **20 de los 109 importados no tienen peso cargado**: sin eso no se calcula envío y Merchant Center puede marcarlos con error de envío. Hay que unificar (una ficha con variantes de ancho o color) antes de armar el feed.

### 4. Costo de envío visible antes del checkout · esfuerzo bajo-medio
- **Qué:** calculador de envío por código postal en la ficha (o "envío gratis a Córdoba capital", si el cliente lo decide) y el retiro en Alberdi como opción a la vista.
- **Por qué:** el carrito dice "El costo de envío se confirma con tu dirección". Un mueble de 20-25 kg a otra provincia puede sumar mucho. En tráfico frío, la sorpresa del envío es la causa típica de abandono en el último paso, y ahí es donde más plata se pierde: ya pagamos el clic. Además Google Merchant Center pide el costo de envío configurado.

### 5. Botón de WhatsApp en ficha y carrito · esfuerzo bajo
- **Qué:** botón "Consultar por WhatsApp" con el nombre del producto precargado, medido como conversión secundaria (no como la principal).
- **Por qué:** la ficha dice "Podés pedirlo hasta 5 cm más angosto... Nos avisás después de comprar", pero no hay ningún canal de contacto en la web. Con ticket de ARS 100.000 a 400.000 y medidas a medida, mucha gente va a querer preguntar antes de pagar. Es una conversión que el anuncio también puede optimizar mientras no haya volumen de compras.

### 6. Plan de campañas y presupuesto mínimo · esfuerzo medio (una vez cumplidos 1 a 4)
Estructura simple, pocas campañas:

| Fase | Campaña | Objetivo que optimiza | Inversión sugerida |
| --- | --- | --- | --- |
| Mes 1-2 | **Google Search no-marca** (vanitory flotante 60/80, mueble de baño flotante, vanitory de pie) + **Shopping / Performance Max solo con feed** | Compra (con agregar al carrito de apoyo) | USD 200/mes |
| Mes 1-2 | **Meta, campaña de ventas con catálogo**, público amplio Argentina (o Córdoba + envío nacional), 4-6 creatividades: foto ambientada, video del mueble armado e instalado, comparativa de medidas | Agregar al carrito al arrancar; pasar a compra cuando haya ~50 compras en 7 días (no va a pasar rápido con este ticket) | USD 100/mes |
| Mes 3+ | Remarketing de catálogo (vio producto / abandonó carrito) y escalar lo que vuelve, de a 20% | Compra | según resultados |

- **Mínimo total: USD 300/mes de inversión** (el piso que fija la agencia), pagado por el cliente directo a cada plataforma. Con menos, los datos tardan demasiado en ser útiles y el algoritmo no sale del aprendizaje.
- **Fee de la agencia:** según catálogo, USD 250-500 por plataforma + setup 150-300. Para no encarecer el arranque, propongo **arrancar con una sola plataforma gestionada (Google, por intención de compra) y sumar Meta en el mes 2**. Decide Santiago con Diego.
- **Marca aparte:** las búsquedas de "equipa" o "equipamg" van en campaña separada y no se cuentan como resultado: esa gente ya los conocía.
- **Regla de corte (a confirmar con números reales):** si en 4 semanas una campaña gasta 2 veces el costo por venta máximo sin vender, se apaga. Ese máximo hoy es **falta el dato** (ver preguntas).

### 7. Que la web no le saque ventas a Mercado Libre por las malas · esfuerzo bajo (decisión)
- **Qué:** definir si los anuncios empujan a la web o si conviene seguir con Mercado Ads para ciertos productos. El precio web ML − 15% hace que el anuncio de la web compita directo con su propia publicación de ML.
- **Por qué:** no queremos pagar clics para mover una venta que igual iba a pasar en ML. Lo que hay que medir es la venta total del negocio (ML + web), no solo lo que reporta cada plataforma. Si ya usa Mercado Ads: **falta el dato** de cuánto invierte y qué le devuelve.

## Preguntas para el cliente o para Santiago

1. **Margen por mueble** (o costo de fabricación + embalaje). Sin eso no se puede calcular el costo máximo por venta. Cuenta: costo por venta máximo = precio web × margen bruto − envío que absorba. Es para Diego.
2. ¿Hace hoy **Mercado Ads** u otra publicidad? ¿Cuánto invierte y con qué resultado?
3. ¿Cuántas **ventas por mes** hace en ML? Sirve para saber si la web puede llegar al volumen que necesita el algoritmo.
4. ¿Las publicaciones con sufijo numérico son **duplicadas** (mismo mueble) o variantes reales (color, bacha)?
5. ¿Envío gratis en alguna zona? ¿Cuánto cuesta enviar un vanitory de 25 kg a Buenos Aires, por ejemplo?
6. ¿Tiene **cuentas propias** de Meta Business y Google Ads? Tienen que estar a nombre del cliente. Nosotros entramos con acceso de socio, nunca con su contraseña.
7. ¿Tiene video del mueble armado o instalado? Es la creatividad más fuerte para Meta y hoy no hay ninguno en la propuesta.

**Lo que sé:** que falta medición, que no hay URL por producto, los 38 sufijos, los 20 sin peso y que el texto del envío dice "se confirma con tu dirección" (todo visto en el código y las capturas). **Lo que supongo:** el abandono por envío y el reparto de presupuesto entre Google y Meta. Son hipótesis a validar con los primeros datos.
