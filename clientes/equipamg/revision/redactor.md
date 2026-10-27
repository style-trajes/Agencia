# Revisión de textos · EQUIPA (Julieta, redactora) · 27/10/2026

Miré: `index.html`, los textos de `js/app.js` (ficha, filtro, carrito), los 10 destacados de `js/products.js`, los 109 nombres y textos cortos de `js/catalogo-meli.js` y las capturas `celu-*` / `compu-*`. No consulté a nadie (pedido de la tarea).

## 1. Lo que está bien y conviene mantener

1. **El titular.** "Muebles de baño que llegan armados." Dice qué venden y qué los diferencia, en seis palabras. La bajada suma tres datos que se pueden verificar: Córdoba, MDF de 18 mm, envío a todo el país. No lo tocaría.
2. **La sección de fabricación.** "Cada mueble sale del taller con la caja encolada, los frentes regulados y las correderas probadas. Vos solo lo fijás a la pared." Es concreta y suena a alguien que fabrica. También suma que digan de entrada que la bacha y la grifería no vienen (en la home, en la ficha y en el pie). Eso evita reclamos.
3. **Los textos del filtro por ancho.** "Entran 34 de 119 modelos", "Entra pidiéndolo 5 cm más angosto", "Ningún modelo entra en 35 cm. Probá con más ancho o escribinos". Contestan la pregunta real de quien compra un vanitory: ¿me entra?

## 2. Propuestas de mejora (por impacto)

### 1. Cambiar los nombres "· modelo 1 / modelo 2" por la diferencia real · esfuerzo medio
**Qué pasa:** 70 de los 109 productos importados de ML se llaman igual y solo cambia el número de modelo. Tienen el mismo nombre, las mismas medidas y el mismo texto corto, pero el precio no es el mismo. Por ejemplo:
- Colgante 70 de dos cajones: modelo 1 a $265.769 y modelo 2 a $353.977 en ML (33% más). Los dos miden 70×57×45 y dicen "Dos cajones con correderas telescópicas".
- Flotante 40 para bacha de apoyo: cuatro modelos, de $125.997 a $191.120, todos de 40×57×33 y con el mismo texto.

Quien compra ve el mismo mueble a dos precios y piensa que hay un error, o elige el más barato y después reclama. Además "modelo 2" no le dice nada a nadie.
**Qué cambiar:** que el nombre diga en qué se diferencian, como ya pasa en los racks ("Rack flotante 100 con puerta, roble y negro"). Por ejemplo: "Flotante 40 para bacha de apoyo, blanco con tapa roble". Si la diferencia está en el herraje o en el material de los frentes, que se diga en el texto corto. Y si son la misma publicación repetida en ML (las carpetas `-2999`, `-1320`, etc.), hay que juntarlas en un solo producto con variantes de color.
**Para esto necesito al cliente:** que nos diga qué cambia entre cada par (ver preguntas).

### 2. Escribir un texto corto distinto para cada producto · esfuerzo medio
**Qué pasa:** hay 29 productos con el mismo texto, "Para bacha de apoyo, se entrega armado.", 15 con "Puertas y un estante abierto para toallas." y 8 con "Dos cajones con correderas telescópicas." En la grilla, las tarjetas se ven todas iguales. Encima, "se entrega armado" ya lo dice el titular, así que el texto no agrega nada.
**Qué cambiar:** una línea por producto que diga para qué baño sirve o qué tiene que los otros no tienen. Los 10 destacados ya lo hacen bien ("Para arriba del inodoro: dos puertas y un estante abierto", "Un metro de guardado para baños amplios"). Hay que aplicar ese mismo criterio a los 109. Lo puedo hacer yo en una tanda cuando el cliente conteste la propuesta 1.

### 3. Agregar pruebas: la reputación de ML y un contacto visible · esfuerzo bajo
**Qué pasa:** la página no tiene una sola prueba de terceros. No hay reseñas, ni ventas, ni años de trabajo, ni fotos de clientes. Tampoco hay WhatsApp en ninguna parte: no aparece ni en `index.html` ni en `app.js`. Sin embargo, el filtro dice "escribinos" y el flujo pide "Nos contás los cambios". ¿Escribir a dónde? Para alguien que no conoce la marca, pagar $250.000 en una web nueva es un riesgo. En ML ese riesgo lo cubren la reputación y la compra protegida.
**Qué cambiar:**
- Cerca del precio y del botón de compra, mostrar lo que EQUIPA ya tiene en ML: color de reputación, ventas concretadas y algunas opiniones textuales. Con permiso y con los números reales, que no tengo.
- Un botón de WhatsApp fijo, con la frase "¿Dudas con la medida? Escribinos".
- El enlace "Tienda en MercadoLibre", que hoy está en el pie, subirlo a la ficha como "También estamos en Mercado Libre como equipamg". Funciona como aval.

### 4. Decir cuánto tarda en llegar · esfuerzo bajo
**Qué pasa:** el bloque "Cómo llega a tu casa" tiene cuatro pasos y ningún plazo. "Lo fabricamos" y "Lo recibís armado" no dicen si es una semana o un mes. Para un mueble que se fabrica, esa es la primera pregunta.
**Qué cambiar:** agregar los días hábiles de fabricación y de envío, con el dato real del cliente. Ejemplo de forma: "Lo fabricamos en [N] días hábiles. Te avisamos por WhatsApp cuando sale." Ponerlo también en la ficha, debajo de "Se entrega armado".

### 5. Ordenar el pedido de cambios a medida: hoy se pide después de pagar · esfuerzo bajo
**Qué pasa:** la home dice "Todos los precios son finales para la medida publicada" y después "Si querés otra medida o combinación, nos escribís después de comprar". La ficha repite "Nos avisás después de comprar". Pagar primero y negociar el cambio después da miedo, y deja abierto un reclamo si el cambio no se puede hacer. Además, "podés pedir cambios sin costo" es una promesa que tiene que confirmar el cliente.
**Qué cambiar:** que el cambio se pueda escribir antes de pagar, con un campo de "Notas para el taller" en la ficha o en el carrito, o con un botón "Consultar este cambio por WhatsApp". Y el texto: "Lo pedís más angosto, sin tapa o en otros colores sin pagar de más. Anotalo antes de pagar y te confirmamos en [N] horas." (solo si el cliente confirma que no cobra extra y el plazo de respuesta).

### 6. Corregir textos que confunden o se contradicen · esfuerzo bajo
- **"El más angosto: 38 cm de profundidad"** (Flotante 50 con puertas y cajón). "Angosto" habla del ancho, pero el dato es la profundidad. Además hay muebles de 33 cm de profundidad (los flotantes de 40), así que el texto no es cierto. Propuesta: "Poco profundo: 38 cm. Deja paso en baños chicos." (revisar el dato).
- **"Colgante" y "Flotante"** se usan para lo mismo: "Colgante 70 de dos cajones" aparece en la línea flotante y la ficha lo titula "Vanitory flotante". Hay que elegir una sola palabra. Recomiendo "flotante", porque es la que usa todo el sitio y el filtro. Hay que confirmar con Agustina (SEO) cuál busca la gente.
- **"Mueble para lavatorio de pie columna 60"** es el único nombre que quedó con el formato de título de ML. Propuesta: "De pie 60 tipo columna, para lavatorio".
- **El filtro habla de "modelos"** ("Entran todos los modelos") y la bajada habla de "muebles". Cuando haya nombres reales (propuesta 1), "modelo" deja de chocar con "modelo 1 / modelo 2".

### 7. Que los botones digan qué pasa después · esfuerzo bajo
- "Medir mi pared": mantenerlo, funciona. "Ver la colección" está dos veces seguidas (en el hero y en "Ir a la colección" de la barra): dejar uno solo.
- "Agregar con estos colores" (configurador) está bien. Pero si después el pedido de colores hay que mandarlo por mensaje, que el botón no prometa algo que el carrito no guarda.
- "Finalizar compra" en el carrito: mantenerlo. Debajo, una línea que baje el riesgo con datos reales: medios de pago, cuotas si hay y qué pasa si llega dañado. Hoy solo dice "El costo de envío se confirma con tu dirección". Ese texto genera dudas justo antes de pagar: si se puede, mostrar el envío estimado por provincia.

### 8. Datos que faltan en la ficha · esfuerzo bajo
Faltan el peso en 20 de 109 productos (se nota cuando aparece en unos y en otros no) y el "también se fabrica en…" en la mayoría. Son textos que ayudan a decidir. Completarlos con el cliente en la misma tanda de la propuesta 1.

## 3. Preguntas abiertas

**Para el cliente (vía Santiago):**
1. En cada par "modelo 1 / modelo 2", ¿qué cambia? ¿Color, tapa, herrajes, frentes? ¿O son la misma publicación repetida en ML? (Es lo más importante: sin esto no puedo arreglar los nombres.)
2. ¿Cuántos días hábiles tarda en fabricar y cuántos tarda el envío, según la zona?
3. ¿Los cambios (5 cm menos, sin tapa, colores) son realmente sin costo y en el mismo plazo?
4. ¿Qué reputación y cuántas ventas tiene en ML? ¿Nos deja mostrar opiniones textuales?
5. ¿Qué número de WhatsApp atiende consultas y en qué horario?
6. ¿Qué pasa si el mueble llega golpeado? ¿Hay garantía o cambio? (Lo necesito para el texto junto al botón de pago.)

**Para Santiago:**
- El aviso "Propuesta de diseño… precios y compra son de demostración" está bien para mostrarla. Hay que acordarse de sacarlo antes de publicar.
- La revisión de nombres y textos cortos de los 119 productos me lleva una tanda de trabajo aparte. Conviene sumarla al presupuesto de carga.
