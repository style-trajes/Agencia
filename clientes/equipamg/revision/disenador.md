# Revisión de diseño: propuesta web EQUIPA

Camila (diseño, UX/UI, fotos, marca) · 27/10/2026
Miré: las 8 capturas (celu y compu), `css/styles.css`, `index.html`, `js/app.js`, `js/products.js`, `js/catalogo-meli.js` y la sección 5 de `plan-tienda.md`.

## Lo que está bien y conviene mantener

1. **Paleta tomada del material.** Blanco melamina (#F4F4F1), gris del isotipo, tinta #232427 y roble (#94622F) como acento. El texto secundario #5B5751 sobre el fondo da unos 6,5:1 de contraste, así que se lee bien. Es sobria y coherente con lo que venden. No la tocaría.
2. **El filtro "Ancho libre en tu pared".** La regla con su respuesta ("120 cm · Entran todos los modelos") resuelve la duda número uno de quien compra un vanitory. Es lo más propio de la propuesta y tiene que quedar en cualquier plataforma.
3. **La ficha con las medidas en tres columnas y el botón fijo en el celular.** Ancho, alto y profundidad se ven sin hacer scroll. "Agregar al carrito" queda pegado abajo (`.sheet__buy` sticky). Las aclaraciones ("No incluye bacha ni grifería", "Se entrega armado") están donde corresponden.

## Propuestas de mejora (ordenadas por impacto)

### 1. Agrupar el catálogo por familia y elegir el ancho dentro de la ficha (esfuerzo: medio)
- **Qué:** pasar de 119 tarjetas a familias, por ejemplo "Flotante para bacha de apoyo", con un selector de ancho (40 · 50 · 60 · 70 · 80 · 90 · 100) y uno de color dentro de la ficha.
- **Por qué:** en el listado hay unas 45 publicaciones "· modelo 1 / modelo 2" y el mismo mueble repetido en 6 o 7 anchos. Por ejemplo, "Flotante para bacha de apoyo" aparece en 40, 50, 60, 70, 80, 90 y 100, con hasta 4 "modelos" por ancho. Además están las carpetas duplicadas con sufijo (`-2999`). En la grilla esto se ve como el mismo render repetido y no deja comparar. La propia ficha ya lo dice en texto ("También se fabrica en 40, 50, 70, 80, 90 y 100 cm"): falta convertir esa frase en botones.
- **Dos opciones:** **A)** familia con selector de ancho, que deja la grilla corta y comparable (la recomiendo). **B)** dejar los productos separados pero agrupados bajo un subtítulo por familia, que es menos trabajo pero sigue siendo largo.
- Antes hay que confirmar con el cliente qué diferencia "modelo 1" de "modelo 2".

### 2. Arreglar la galería de la ficha: miniaturas rotas (esfuerzo: bajo)
- **Qué:** que solo se muestren las miniaturas cuyo archivo existe y que cada foto tenga su versión chica (`-sm`).
- **Por qué:** en las capturas `celu-3-ficha` y `compu-3-ficha` (Flotante 60) se ven 3 y 4 cuadros con ícono de imagen rota. `products.js` pide las fotos 1, 2, 3, 4, 5 y 7, pero en `assets/img/flotante-60/` solo están 1 a 4, y las 3 y 4 no tienen `-sm`. Lo mismo va a pasar en otras fichas: varias carpetas solo traen `1-sm` y `2-sm`. Es lo primero que haría que el cliente piense "esto está roto".

### 3. Dos columnas en la grilla del celular (esfuerzo: bajo)
- **Qué:** en `@media (max-width: 560px)` cambiar `.grid` de `1fr` a 2 columnas y achicar el texto de la tarjeta (nombre, precio y una sola línea de medidas, sin la descripción en serif).
- **Por qué:** con 1 columna, la captura completa del celular mide 12.254 px de alto y muestra apenas 12 productos. Para recorrer 119 (o unas 25 familias, si se hace la propuesta 1) hay que scrollear muchísimo. Es el criterio que ya habíamos fijado en `plan-tienda.md` (2 columnas en celu, 4 en compu).
- **Opciones:** A) 2 columnas fijas. B) un botón que alterne entre 1 y 2 columnas, como en ML, aunque suma una decisión más para el usuario.

### 4. En la grilla, foto del producto sobre fondo claro; el ambiente queda para la ficha (esfuerzo: medio)
- **Qué:** que la foto principal de cada tarjeta sea el render o recorte sobre fondo claro, con el mueble centrado y a la misma escala. La foto ambientada pasa a la segunda posición (hover en compu) y a la ficha.
- **Por qué:** en la grilla de compu, 4 productos usan la misma escena (azulejo gris + espejo ovalado + canasto) y otros 3 la del mármol con ducha. A 200 px de ancho casi no se distingue "con estante abierto" de "puertas y cajón": el mueble ocupa un 30 o 40% de la foto. La "Mesa Montessori" (foto real con una nena) rompe el estilo del resto. Los renders sobre blanco ya existen (`onWhite` en `app.js`). Es el criterio "sin ambiente en la foto principal" de la sección 5 del plan.
- **Opciones:** A) render sobre blanco, que permite comparar mejor (la recomiendo). B) mantener la escena pero con recorte más cerrado sobre el mueble (`object-position`), que es más lindo pero menos claro.

### 5. Filtros en una sola fila en el celular (esfuerzo: bajo)
- **Qué:** que los chips tengan scroll horizontal en una línea, y juntar "Recibidores 1", "Para chicos 1" y "Cocina 1" en "Otros".
- **Por qué:** en `celu-2-coleccion` los 8 chips ocupan 4 filas (unos 190 px) antes de la regla. Tres de ellos filtran un único producto. La regla de ancho, que es lo valioso, queda abajo de la mitad de la pantalla.

### 6. Precio con cuotas y forma de pago, en la ficha y en la tarjeta (esfuerzo: bajo de diseño, depende del dato)
- **Qué:** debajo del precio, una línea chica con cuotas o el precio con transferencia, con la misma jerarquía en toda la tienda.
- **Por qué:** hoy solo figura "$ 184.748". Quien viene de ML compara contra cuotas sin interés. La línea ya está prevista en el criterio de ficha del plan. No pongo números porque los medios de pago no están confirmados.

### 7. Fabricación con una foto real del taller en lugar del plano (esfuerzo: bajo, depende del cliente)
- **Qué:** que la sección "Hecho en Córdoba, entregado armado" lleve una foto real del taller o de un mueble embalado. El plano con medidas pasa a la ficha, donde sí ayuda.
- **Por qué:** el texto dice "Somos fabricantes" y la única imagen de la sección es un render técnico. En la captura de compu, además, esa columna queda vacía (la imagen tiene `loading="lazy"` y no llegó a cargar). Una foto real es la prueba que distingue a EQUIPA de un revendedor.

### 8. Tipografía: una sola familia de texto, pensada para la plataforma final (esfuerzo: bajo)
- **Qué:** usar Archivo (o la sans que elijamos) también para el cuerpo y dejar Newsreader, si se queda, solo para la bajada del hero.
- **Por qué:** las descripciones de las tarjetas y los detalles de la ficha van en serif a 13 o 15 px, mezcladas con Archivo en la misma línea visual (nombre en sans, bajada en serif, medidas en sans). En el celular eso es ruido. Además, si se va a Tiendanube, el tema tiene que aceptar las fuentes cargadas a mano. Menos, pero mejor.
- **Opciones:** A) solo Archivo (más limpio y fácil de portar). B) Archivo y Newsreader, pero la serif únicamente en titulares de sección.

## Preguntas para el cliente o para Santiago

1. **¿El logo (isotipo + "EQUIPA") es el del cliente o lo armamos nosotros?** Si lo armamos, no lo podemos mostrar como su marca sin avisarle. Lo presentaríamos como propuesta de identidad, y eso es otro servicio.
2. **¿Los renders y las fotos son del cliente?** ¿Tenemos permiso para usarlos fuera de ML? ¿Tiene los originales en alta? Lo bajado de ML viene recomprimido. La foto de la nena en la Montessori necesita autorización.
3. **¿Qué diferencia "modelo 1" de "modelo 2"?** ¿Color, herrajes, tipo de bacha? Lo necesito para definir los selectores de la propuesta 1.
4. **¿Tiene fotos del taller o del embalaje?** Son para la sección de fabricación.
5. **Plataforma:** el diseño actual es HTML a medida. Si vamos a Tiendanube o Shopify, hay que decidir cuánto de la regla de ancho y del configurador se puede llevar al tema. Lo tiene que confirmar Facundo antes de prometérselo al cliente.

*No consulté a otros agentes en esta tarea, como pidió el encargo.*
