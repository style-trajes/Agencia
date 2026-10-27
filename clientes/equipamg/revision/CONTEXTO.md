# Revisión de la propuesta web de EQUIPA (pedido de Santiago, 27/10/2026)

Santiago armó con Claude una propuesta de tienda online para EQUIPA (fabricante de muebles en MDF de 18 mm, barrio Alberdi, Córdoba; vende en Mercado Libre como "equipamg"). Quiere ver las propuestas de mejora de cada especialista del equipo antes de decidir plataforma y precio.

## Dónde mirar
- Código y contenido de la propuesta: `/tmp/claude-0/equipa/` (index.html, css/styles.css, js/app.js, js/studio.js = configurador 3D, js/products.js = 10 productos destacados, js/catalogo-meli.js = otros 109 importados de ML).
- Capturas reales: `clientes/equipamg/revision/celu-*.png` y `compu-*.png` (inicio, colección, ficha, página completa). El configurador 3D y las tipografías de Google no cargan en las capturas (la red de este entorno las bloquea): no lo cuentes como error de la propuesta.
- Plan previo y datos: `clientes/equipamg/plan-tienda.md` (sección 9 = estado actual), `clientes/equipamg/README.md`.
- Reglas de la agencia, precios y márgenes: `CLAUDE.md`.

## Datos clave
- 119 productos en el catálogo; ojo: hay carpetas de fotos duplicadas con sufijo numérico (ej. `colgante-70-de-dos-cajones` y `colgante-70-de-dos-cajones-2999`), posibles publicaciones repetidas de ML.
- Precio web = precio ML menos 15% (a confirmar con el cliente).
- La propuesta muestra la grilla de a 12, filtro por tipo y por ancho de pared, ficha con galería, carrito y un checkout de demostración ("Acá va el pago": Shopify o Wix).
- Mercado Libre está bloqueado desde este entorno: no se puede abrir la tienda real.

## Qué entregar
Un archivo `clientes/equipamg/revision/<tu-agente>.md` (por ejemplo `disenador.md`) con:
1. Lo que está bien y conviene mantener (máximo 3 puntos).
2. Tus propuestas de mejora, de 4 a 8, ordenadas por impacto. Para cada una: qué cambiar, por qué (con el dato o la evidencia que viste), y esfuerzo (bajo / medio / alto).
3. Preguntas para el cliente o para Santiago, si las hay.
Corto y concreto, en español rioplatense. No inventes datos del cliente ni resultados. No consultes a otros agentes en esta tarea (Martín junta todo después). No hagas commit: solo escribí tu archivo.
