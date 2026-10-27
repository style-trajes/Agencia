# Revisión de finanzas · Diego · EQUIPA (27/10/2026)

> Borrador interno para Santiago. **Ningún precio sale al cliente sin su aprobación.** Las comisiones de ML, Mercado Pago, Tiendanube/Shopify y el tipo de cambio son **supuestos** (ML está bloqueado desde la oficina y no los pude verificar): están marcados con **(S)** y hay que confirmarlos antes de mandar nada. No consulté a otros agentes (pedido del CONTEXTO); las horas que faltan son estimación mía.

"Si no deja margen, no es negocio": y eso vale para el cliente también. La pregunta no es si la web es más barata, sino si a EQUIPA le queda más plata por venta que en ML.

## 1. Lo que está bien y conviene mantener

1. **El precio web está atado al de ML con un factor** (`PRICE_FACTOR = 0.85` en `products.js`). Es la forma correcta: se cambia en un solo lugar y la sincronización lo aplica sola.
2. **Se entrega armado y hay retiro en Alberdi.** El retiro sin cargo es la palanca más barata para que la web convenga: ahí el envío no le cuesta nada.
3. **El diseño y la carga de los 119 productos ya están hechos.** Bajan mucho las horas que faltan y permiten un setup dentro del rango del catálogo.

## 2. Las cuentas

### Supuestos (S)

| Dato | Valor usado | Fuente |
| --- | --- | --- |
| Ticket de referencia | **ARS 254.362** (mediana de los 119 precios ML; van de 100.729 a 398.893) | `datos/` (dato real) |
| Comisión ML publicación clásica, Hogar/Muebles | 14% | (S) |
| Comisión ML con 6 cuotas sin interés (premium) | 24% | (S) |
| Envío que absorbe EQUIPA en ML (envío gratis obligatorio en este ticket; mueble de ~25 kg) | ARS 35.000 por venta | (S) — **el dato que más mueve todo** |
| Mercado Pago en la web, acreditación inmediata | 7,6% (6,29% + IVA) | (S) |
| Costo de ofrecer cuotas sin interés en la web: 3 / 6 cuotas | +9% / +16% sobre el precio | (S) |
| Comisión Tiendanube por venta | 0% (con Pago Nube o plan que no cobra) | (S) |
| Tipo de cambio | ARS 1.400 por USD | (S) |

### Cuánto le queda a EQUIPA por venta (antes de su costo de fabricar)

| Canal | Precio | Comisiones y cuotas | Envío a su cargo | **Le queda** | vs. ML clásica |
| --- | --- | --- | --- | --- | --- |
| ML clásica | 254.362 | −35.611 (14%) | −35.000 | **183.751** | — |
| ML con 6 cuotas s/i | 254.362 | −61.047 (24%) | −35.000 | **158.315** | −25.436 |
| **Web ML −15%, MP, envío lo paga el comprador** | 216.208 | −16.432 (7,6%) | 0 | **199.776** | **+16.025 (+8,7%)** |
| Web ML −15%, transferencia, envío lo paga el comprador | 216.208 | 0 | 0 | **216.208** | +32.457 |
| Web ML −15%, MP, **envío gratis** | 216.208 | −16.432 | −35.000 | **164.776** | **−18.975** |
| Web ML −15%, **6 cuotas s/i**, envío lo paga el comprador | 216.208 | −51.025 (7,6% + 16%) | 0 | **165.183** | **−18.568** |

**Descuento máximo para que la web no pierda contra ML clásica** (pagando con MP):
- Envío lo paga el comprador: 1 − 183.751 ÷ (254.362 × 0,924) = **hasta 21,8%**. El 15% entra con aire.
- Envío gratis en la web: 1 − (183.751 + 35.000) ÷ (254.362 × 0,924) = **hasta 6,9%**. El 15% **pierde plata**.

**Conclusión:** ML −15% le conviene **solo si el envío lo paga el comprador (o retira) y no se ofrecen 6 cuotas sin interés**. Con envío gratis o con cuotas largas, cada venta web le deja ~ARS 18.000-19.000 menos que la misma venta en ML.

### Costo fijo mensual de tener la tienda (para EQUIPA)

| Concepto | USD | ARS (S) |
| --- | --- | --- |
| Abono agencia (tramo +100) | 150 | 210.000 |
| Plan Tiendanube intermedio (S) | ~35 | ~50.000 |
| App de sincronización ML ↔ tienda (S) | ~25 | ~35.000 |
| **Total** | **~210** | **~295.000** |

- Si la venta web **le saca un cliente a ML** (canibaliza), gana ~ARS 16.000 por venta → necesita **~18 ventas web por mes** solo para cubrir el fijo. Es mucho para arrancar.
- Si la venta web **es nueva** (no la hubiera hecho en ML), la cuenta es contra su costo de fabricar, que **no tenemos**. Ejemplo ilustrativo: si fabricar le cuesta el 60% del precio ML (ARS 152.617), cada venta web le deja ~47.000 → **~6-7 ventas por mes** para cubrir el fijo.
- La web no trae tráfico sola: sin publicidad o sin derivar clientes desde ML/WhatsApp/Instagram, esas ventas no aparecen. La inversión en anuncios va aparte.

### Cuánto cobramos nosotros: horas que faltan (estimación de Diego, no de Facundo)

| Tarea | Tiendanube | Shopify con el diseño propio |
| --- | --- | --- |
| Limpiar catálogo: duplicados con sufijo (ej. `colgante-70-de-dos-cajones-2999`), agrupar anchos 70/80/90/100 como variantes, completar peso de 21 productos sin dato | 6 | 6 |
| Adaptar CSV, importar 119 fichas y fotos, revisar | 8 | 6 (el CSV de Shopify ya existe) |
| Tema: logo, paleta, tipografía, inicio, filtro por ancho de pared | 12 | 28 (pasar el diseño a tema Liquid) |
| Configurador 3D dentro de la tienda | no entra | 6 |
| Pagos (MP, transferencia, cuotas), envíos con peso y medidas, retiro, dominio, mails, botón de arrepentimiento y legales | 6 | 7 |
| Sincronización ML (app) con regla de precio y stock de seguridad | 4 | 5 |
| Compra de prueba real de punta a punta, celular y compu | 3 | 3 |
| GA4 y píxel básico | 2 | 2 |
| Capacitación y entrega | 2 | 2 |
| Calidad (Rocío) y coordinación | 4 | 4 |
| **Total** | **47 h** | **69 h** |
| Costo (h × 15) | 705 | 1.035 |
| **Precio mínimo** (÷ 0,6) | **1.175** | **1.725** |
| **Sugerido** | **USD 1.200** | **USD 1.750** |
| ¿Dentro del catálogo (400-1.200)? | Sí, en el techo | No: decide Santiago |

- El diseño y la importación ya hechos **tienen valor**: no se regalan, se cobran dentro de estos precios. El plan original para +100 productos daba USD 2.352; acá el cliente recibe lo mismo por bastante menos porque el trabajo pesado ya está.
- **Abono USD 150 (tramo +100)**, por adelantado: ~4 h × 15 = USD 60. Con la app de sincronización (la paga el cliente) nuestro costo de herramientas es 0 → margen **100% sobre herramientas y 60% contando horas**. Si hiciera falta n8n (~USD 23): 85% sobre herramientas, 45% contando horas → en ese caso subir a USD 160 o bajar el cupo de productos nuevos de 20 a 10.
- **Cobro:** 50% al aprobar (USD 600 / 875), 50% al entregar, con el primer abono antes de publicar. En pesos al tipo de cambio del día. Nunca se entrega sin abono.

## 3. Propuestas, por impacto

1. **El precio web ML −15% va solo con envío a cargo del comprador o retiro gratis.** Por qué: con envío gratis el descuento máximo que no pierde contra ML es 6,9%; con envío a cargo del comprador, 21,8% (tabla de arriba). Si el cliente quiere "envío gratis" como en ML, bajar el descuento a ~5%. Esfuerzo: bajo (es configuración y texto).
2. **Escalonar el precio por medio de pago en vez de un −15% plano:** precio web = ML −10% con tarjeta/MP (hasta 3 cuotas sin interés), ML −15% por transferencia, y 6 cuotas al precio ML. Por qué: con ML −10% y 3 cuotas le queda ~190.900 (sigue ganándole a ML clásica: 183.751); por transferencia, 216.208; y no se regala financiación larga. Esfuerzo: bajo.
3. **Ofrecer Tiendanube a USD 1.200 + USD 150/mes como opción principal, y Shopify a USD 1.750 como opción "con tu diseño completo y configurador 3D".** Por qué: con 47 h que faltan, USD 1.200 respeta el 40% mínimo (piso 1.175) y entra en el catálogo; Shopify suma ~22 h de pasar el diseño a tema y el configurador, y además le cobra al cliente un fee extra por venta (S: ~2%, unos ARS 4.300 por venta de 216.000). Esfuerzo: bajo (decisión de Santiago).
4. **Mostrarle al cliente la cuenta de "cuántas ventas por mes necesita"** (~18 si solo le saca clientes a ML; ~6-7 si son nuevas, con el costo de fabricar que nos tiene que dar). Por qué: el fijo total ronda ARS 295.000/mes; si no lo ve antes, a los 3 meses sin ventas web se da de baja. Esfuerzo: bajo.
5. **Sumar al abono, o como combo, una forma de traer tráfico** (Meta Ads o derivar desde ML/WhatsApp con un cupón). Por qué: la tienda sola no vende; sin tráfico no llega a las ventas del punto 4. Con 2 abonos aplica el 10% de combo. Esfuerzo: medio.
6. **Limpiar duplicados y armar variantes antes de cotizar el tramo.** Por qué: si las publicaciones repetidas de ML (sufijo numérico) y los anchos 70/80/90/100 se agrupan, puede que queden menos de 100 productos "reales" y el abono baje a USD 120 (tramo 31-100). Mejor que lo descubramos nosotros que el cliente. Esfuerzo: bajo (6 h ya incluidas).
7. **No recalcular el precio ML a mano:** la regla de precio tiene que vivir en la app de sincronización. Por qué: si ML sube precios por inflación y la web no, el −15% se vuelve −25% sin que nadie lo decida. Esfuerzo: bajo (incluido en las 4-5 h de sincronización).

## 4. Preguntas

**Para el cliente:**
- ¿Cuánto le cuesta hoy en ML el envío de un mueble típico (ej. el Colgante 80, 25 kg)? Es el dato que define el descuento.
- ¿Qué tipo de publicación usa (clásica o con cuotas sin interés) y qué comisión le queda en Hogar/Muebles?
- ¿Cuál es su costo de fabricación aproximado o su margen? Sin eso no sabemos cuántas ventas web necesita.
- ¿Cuántas ventas por mes hace hoy en ML? Para dimensionar si 6-18 ventas web es realista.
- ¿Factura A o B y cuál es su condición fiscal? (afecta IVA de comisiones y cómo le facturamos).

**Para Santiago:**
- ¿Tiendanube (USD 1.200) o Shopify (USD 1.750, fuera de catálogo)? ¿O las dos opciones en la propuesta?
- Las 47/69 h son mías: conviene que Facundo las valide antes de mandar el precio.
- Confirmar comisiones vigentes de ML, Mercado Pago, Tiendanube, Shopify y el tipo de cambio del día: todas mis cifras con (S) dependen de eso.
