# Revisión de calidad · Propuesta web EQUIPA

Rocío (calidad) · 27/10/2026 · Revisé `/tmp/claude-0/equipa/` servido en http://127.0.0.1:8765, con Playwright en celular (375×740, táctil) y el catálogo analizado con node (`products.js` + `catalogo-meli.js`, idénticos a `clientes/equipamg/datos/`). No consulté a nadie (lo pide el CONTEXTO).

## Puntaje: 4/10. Vuelve antes de mostrársela al cliente

No hay `brief.md`, así que puntué contra `plan-tienda.md` y lo que promete la propia página.

| # | Punto | Pts | Evidencia |
| --- | --- | --- | --- |
| 1 | Cumple el brief | 0 | No hay brief. El checkout dice "Shopify o Wix", pero el plan recomienda Tiendanube y Wix no está en nuestro stack. |
| 2 | Criterios de aceptación | 0,5 | No hay criterios escritos. Mis pruebas de filtro, regla, paginado y carrito pasan. |
| 3 | Datos correctos | 0 | Los cálculos dan bien, pero hay 34 nombres repetidos con precios distintos y una ficha con un texto falso (ver 1 y 3). |
| 4 | Casos raros | 0,5 | La regla de 40 a 120 funciona, el carrito vacío avisa y la cantidad se corta en 9. Si no entra ninguno, dice "escribinos", pero no hay dónde escribir. |
| 5 | Celular | 1 | No hay scroll horizontal (scrollWidth = 375). La ficha y el carrito se usan bien. Detalles menores en la mejora 7. |
| 6 | Salida a un humano | 0 | La página no tiene ningún link de WhatsApp, teléfono, mail ni Instagram (0 links encontrados). |
| 7 | Fácil de cambiar | 0,5 | El descuento está en una sola constante (`PRICE_FACTOR`). Precios y textos se cambian editando JS. |
| 8 | Seguridad | 1 | No hay claves. El carrito se guarda solo en localStorage y la página tiene `noindex`. |
| 9 | Textos | 0,5 | El tono es bueno, pero hay "modelo 1…4", contradicciones y afirmaciones que el cliente no confirmó (ver 4 y 5). |
| 10 | Documentado | 0 | La copia no trae LEEME. `tools/shopify-csv.js` y `data/nombres.tsv` se citan en el código, pero no están. |

**¿Devolución automática?** No. Rehíce a mano tres precios y dan bien:
- 255.647 × 0,85 = 217.299,95, redondeado a $ 217.300.
- Con 9 unidades: $ 1.955.700.
- 217.350 × 0,85 = 184.747,5, redondeado a $ 184.748. Total del carrito: $ 2.140.448.

Igual, el punto 3 queda en 0 por los duplicados.

## Lo que está bien y conviene mantener
1. **Filtro por ancho de pared.** Es útil y anda. Con 40 cm entran 6 de 119, con 50 cm entran 20 y con 57 cm entran 32. La etiqueta "entra pidiéndolo 5 cm más angosto" sale solo en los productos personalizables.
2. **Precio web calculado desde el precio de ML con una sola constante.** No hay errores de redondeo en los 119 productos (verificado con un script: 0 diferencias).
3. **Ficha y carrito en celular.** Se ven claros y los botones son grandes. El total y el aviso "el costo de envío se confirma con tu dirección" están bien puestos.

## Qué falla, cómo reproducirlo y qué esperaba (por impacto)

**1. Productos repetidos con precios distintos (impacto alto, esfuerzo medio)**
- Qué pasa: 75 de los 119 productos están en 34 grupos con el mismo nombre, diferenciados solo por "· modelo 1/2/3/4". En 25 de esos grupos las medidas y los textos son idénticos y cambia solo el precio, hasta 52% de diferencia. Por ejemplo, "Flotante 40 para bacha de apoyo" va de ML $ 125.997 a $ 191.120.
- Dos pares tienen el nombre exactamente igual, sin "modelo", y se ven como el mismo mueble con dos precios:
  - "Flotante 80 de dos cajones": `flotante-80-cajones` a ML $ 281.600 y `flotante-80-de-dos-cajones` a ML $ 352.880.
  - "De pie 80 con puertas": $ 246.655 y $ 304.918.
- Los IDs de ML son todos distintos, así que son publicaciones separadas. No son el mismo dato copiado dos veces.
- Cómo reproducir: filtrar "Flotantes", poner la regla en 40 cm y mirar los cuatro "Flotante 40 para bacha de apoyo".
- Qué esperaba: una sola ficha por mueble, con sus variantes (color o terminación) o con el motivo de la diferencia de precio. Si son publicaciones repetidas de ML (clásica y premium, o cuotas), en la web se publica una sola. El catálogo real quedaría bastante por debajo de 119, y eso cambia el tramo de precio del plan.

**2. No hay forma de hablar con EQUIPA (impacto alto, esfuerzo bajo)**
- Qué pasa: la página pide "escribinos: hacemos medidas especiales" y "nos escribís después de comprar", pero no hay ningún link de WhatsApp, teléfono ni mail. El único link externo es la tienda de ML.
- Cómo reproducir: en `index.html` y en el DOM no hay ningún `wa.me`, `tel:` ni `mailto:`.
- Qué esperaba: un botón de WhatsApp fijo y otro en la ficha ("Consultar por esta medida") que lleve el nombre del producto en el mensaje.

**3. Texto falso en fichas de bacha encastrable (impacto alto, esfuerzo bajo)**
- Qué pasa: la ficha de "Flotante 60 para bacha semiencastrable" dice "**Para bacha de apoyo.** No incluye bacha…". Pasa lo mismo con "Flotante 60 para bacha encastrable".
- Causa: en `app.js`, dentro de `fillSheet`, si ningún renglón de `detalles` menciona "bacha", el código agrega "Para bacha de apoyo".
- Cómo reproducir: `EQUIPA.openSheet('flotante-60-para-bacha-semiencastrable')`.
- Qué esperaba: que la frase salga del nombre o del tipo de bacha real, o que no salga.

**4. Afirmaciones que el cliente no confirmó (impacto alto, esfuerzo bajo, depende del cliente)**
- Qué pasa: la página promete cosas que no están en ningún dato del cliente:
  - "podés pedir cambios **sin costo**"
  - "hasta 5 cm menos"
  - "sin tapa"
  - "correderas telescópicas de **extensión total**"
  - "los flotantes traen **cuatro ménsulas**"
- La última se contradice con los datos: la ficha de "Flotante 100 con puertas y cajón" dice solo "tornillos y tarugos".
- Qué esperaba: cada promesa confirmada por EQUIPA antes de mostrarla, o sacarla. Si el cliente lo lee y no es así, perdemos credibilidad.

**5. Contradicciones en los textos (impacto medio, esfuerzo bajo)**
- "Todos los precios son finales", pero el envío se cobra aparte. Mejor: "Precio final del mueble; el envío se calcula con tu dirección".
- El título dice "Muebles de baño" y la meta "Vanitorys", pero hay 21 productos que no son de baño: racks de TV, cocina, chicos y recibidor. El título está bien para el foco; falta una línea que diga que también hay otras líneas.
- "Recibidores 1", "Para chicos 1" y "Cocina 1" ocupan tres chips por un producto cada uno. Conviene agruparlos en "Otros".

**6. Plataforma y precio sin decidir dentro de la propuesta (impacto medio, esfuerzo bajo)**
- El checkout dice "Shopify o Wix". El plan recomienda Tiendanube por costo y Wix no está en el stack.
- El precio web (ML − 15%) sale de precios del 16/10. Para cuando se presente van a estar desactualizados. Hace falta una nota visible con la fecha de los precios, o actualizarlos antes de mostrar.

**7. Detalles de celular (impacto bajo, esfuerzo bajo)**
- Estos controles miden menos de 44 px de alto:
  - el botón Carrito: 81×38
  - el logo: 120×23
  - la barra de la regla: 24 px de alto
- En el carrito, un precio de 7 cifras ($ 1.955.700) queda pegado al borde derecho y desalineado con el resto (captura: `.../scratchpad/shots/cart.png`).
- La etiqueta fija "Propuesta de diseño" tapa la esquina de las fotos de la grilla (`celu-2-coleccion.png`).

**8. Sin LEEME ni herramienta CSV en la copia (impacto bajo, esfuerzo bajo)**
- `products.js` dice que `tools/shopify-csv.js` genera el CSV y `catalogo-meli.js` remite a `data/nombres.tsv`. Ninguno de los dos está en la copia ni en `clientes/equipamg/datos/`.
- Qué esperaba: un LEEME con qué es, cómo se cambia un precio o un texto y cómo se exporta.

## Lo que no pude verificar (no lo cuento como error)
- **Fotos:** la copia local trae fotos de 12 carpetas sobre 119 productos y algunas tienen solo la versión chica, así que dieron 53 respuestas 404 de fotos. Las capturas de Santiago muestran 3 miniaturas vacías en la ficha de "Flotante 60" (`celu-3-ficha.png`), pero puede ser el mismo recorte. Hay que revisarlo en el artefacto real.
- **Fotos duplicadas:** no pude comparar las carpetas con sufijo numérico.
- **Configurador 3D y tipografías:** no cargan por la red de este entorno.
- **Mercado Libre:** está bloqueado, así que no pude contrastar precios ni la tienda.

## Preguntas
- **Para el cliente:**
  - Las publicaciones repetidas ("modelo 1…4"), ¿son el mismo mueble? ¿Por qué cambia el precio?
  - ¿Confirma el 15% de descuento web, los cambios sin costo, el "hasta 5 cm" y las cuatro ménsulas?
  - ¿Qué WhatsApp ponemos?
- **Para Santiago:**
  - ¿Tiendanube o Shopify? Hay que sacar Wix del texto.
  - ¿Se recalcula el tramo de precio con el catálogo sin duplicados?
