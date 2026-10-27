# Agencia de marketing y soluciones inteligentes

Este repositorio es la "oficina" de la agencia de Santiago. Acá viven el equipo de agentes, sus skills, las plantillas y el trabajo de cada cliente. Leé este archivo entero antes de cualquier tarea.

## Qué hace la agencia

Resolvemos problemas concretos de pymes argentinas: que vendan más y que pierdan menos tiempo. Vendemos resultados medibles ("cotizás en 30 segundos", "respondés en 1 minuto a cualquier hora", "más consultas por WhatsApp por el mismo presupuesto"), no "IA".

### Soluciones inteligentes

| Servicio | Qué resuelve | Setup (USD) | Abono mensual (USD) |
| --- | --- | --- | --- |
| Cotizador automático | Presupuestos que tardan horas o días | 400 a 900 | 40 a 80 |
| Bot de WhatsApp con IA | Consultas repetidas y respuestas lentas | 300 a 700 | 60 a 150 + mensajes de Meta |
| Automatización de procesos | Copiar datos a mano entre sistemas | 300 a 1.000 | 40 a 100 |

### Marketing

| Servicio | Qué resuelve | Setup (USD) | Abono mensual (USD) |
| --- | --- | --- | --- |
| Contenido y redes | No tienen tiempo de publicar ni medir | Sin setup | 300 a 600 |
| Publicidad paga (Meta, Google, Mercado Ads) | Gastan en anuncios sin saber qué vuelve | 150 a 300 (cuentas, píxel y medición, primeras campañas) | 250 a 500 por plataforma + inversión en anuncios (mínimo sugerido USD 300/mes, la paga el cliente directo a la plataforma) |
| SEO local y Google Maps | No aparecen cuando los buscan cerca | 150 a 300 (auditoría y puesta a punto del perfil) | 120 a 300 |
| Web o landing que vende | Sin web, o una web que no trae consultas | Landing 300 a 600 · sitio 600 a 1.500 | 30 a 60 (hosting, cambios menores y medición) |
| Estrategia y plan de marketing | No saben dónde poner la plata y el tiempo | 300 a 600 pago único (diagnóstico + plan a 90 días; se descuenta si contrata un abono en 30 días) | — |

- Precios en dólares, cobrados en pesos al tipo de cambio del día.
- Nunca se entrega sin abono. Cobro: 50% al aprobar, 50% al entregar; el abono se cobra por adelantado.
- Precios de lanzamiento (oct 2026), armados con referencias del mercado argentino: por debajo de agencias grandes, a la altura de un freelancer senior. Revisarlos cuando haya 3 clientes. Casos fuera de rango: `finanzas` + Santiago.
- Combos: si un cliente toma 2 o más abonos, 10% de descuento en el total mensual.
- Sin nicho fijo: trabajamos con pymes de cualquier rubro que tengan un problema que podamos resolver.

## El equipo

El **director** coordina: sabe en qué está cada cliente, arma el equipo para cada proyecto y reparte el trabajo. Cuando no sepas por dónde empezar, pedile al director.

| Área | Agente | Hace |
| --- | --- | --- |
| Dirección | `director` | Estado de clientes, prioridades, reparto de tareas, resumen diario y semanal |
| Estrategia | `estratega` | Diagnóstico, posicionamiento, investigación de mercado y competencia, plan de marketing |
| Ventas | `comercial` | Prospección, primer contacto, diagnóstico, demos, propuestas y cierre |
| Soluciones | `consultor` | Relevamiento, mapa de procesos, elección de la solución y brief |
| Automatización | `automatizador` | n8n, bots de WhatsApp con IA, agentes de IA, integraciones |
| Web | `desarrollador-web` | Cotizadores, landings, formularios y sitios |
| Diseño | `disenador` | Marca, UX/UI, piezas gráficas y creatividades |
| Redacción | `redactor` | Textos de venta, web, emails, WhatsApp y guiones |
| Redes | `contenido` | Calendario, reels, carruseles y comunidad |
| Publicidad | `trafficker` | Campañas en Meta, Google y Mercado Ads, seguimiento de conversiones |
| SEO | `seo` | Google Maps, SEO del sitio y visibilidad en buscadores con IA |
| Datos | `analista-datos` | Medición, tableros, experimentos y conversión |
| Calidad | `calidad` | Revisión de toda entrega con el checklist (mínimo 8/10) |
| Clientes | `exito-cliente` | Puesta en marcha, abono, cambios, retención y reporte mensual |
| Administración | `finanzas` | Precios, rentabilidad, cobros y contratos |

## Cómo trabajamos

1. **Comercial** consigue el prospecto y, con ayuda de web o automatización, arma una demo con sus datos públicos.
2. **Estratega** escribe `contexto.md` del cliente; **consultor** hace el relevamiento y escribe `brief.md`.
3. **Santiago aprueba** el brief y la propuesta antes de construir nada.
4. Los especialistas construyen según el brief (automatizador, desarrollador-web, diseñador, redactor, contenido, trafficker, seo).
5. **Calidad** revisa con `plantillas/checklist-calidad.md`. Menos de 8/10 vuelve a quien lo hizo.
6. **Santiago aprueba** la entrega y la presenta al cliente.
7. **Éxito del cliente** se hace cargo del abono con **analista-datos** para los números.
8. **Contenido** convierte cada caso terminado en contenido (con permiso del cliente).

## Skills

- Cada agente tiene precargadas sus skills principales y puede usar cualquier otra de `.claude/skills/` cuando la tarea lo pida.
- Son skills de código abierto (Anthropic, Corey Haines, czlonkowski, obra, alirezarezvani). Origen y licencia en `.claude/skills/CREDITOS.md`.
- Están escritas en inglés; los resultados para la agencia y los clientes se escriben en español.
- **Contexto del cliente:** cuando una skill busque `.agents/product-marketing.md` o "product marketing context", usá `clientes/<nombre>/contexto.md` del cliente con el que estés trabajando. Si no existe, lo crea el `estratega` desde `plantillas/contexto.md`. Para la propia agencia, usá `docs/contexto-agencia.md`.
- Si una skill sugiere herramientas pagas o integraciones, proponelas a Santiago; no contrates ni conectes nada solo.

## Reglas para todos los agentes

- Escribí en español rioplatense (vos, tenés), claro y sin jerga técnica cuando el texto es para un cliente.
- Nada sale hacia un cliente sin aprobación explícita de Santiago: ni mensajes, ni propuestas, ni precios, ni publicaciones, ni anuncios.
- No inventes datos del cliente ni resultados. Si falta algo, anotalo como pregunta abierta.
- Nunca guardes contraseñas, tokens ni claves en el repositorio. Van en `.env` (ignorado por git).
- Cada cliente tiene su carpeta en `clientes/<nombre>/` copiada de `clientes/_plantilla/`. Mantené su `README.md` al día: etapa, próximos pasos y fechas.

## Estructura

```
.claude/agents/   los 15 agentes del equipo
.claude/skills/   las skills de cada especialidad (créditos en CREDITOS.md)
clientes/         una carpeta por cliente; _plantilla/ para copiar
plantillas/       contexto, brief, propuesta, relevamiento, checklist de calidad, reporte mensual
docs/             plan de la agencia, contexto de la agencia y decisiones
```

## Stack

- Claude Code + estos agentes para producir.
- n8n para automatizaciones (Cloud Starter €20/mes o autoalojado).
- API de WhatsApp de Meta vía una plataforma (ManyChat, Whaticket u otra). Desde el 1/10/2026 en Argentina: marketing USD 0,0618, utilidad y servicio USD 0,026 por mensaje.
- Cotizadores, formularios y landings: HTML/JS estático publicado en Vercel o Netlify; datos en Google Sheets cuando alcance.
- Medición: Google Analytics 4, Tag Manager y los píxeles de cada plataforma de anuncios.
