# Agencia de automatización con IA

Este repositorio es la "oficina" de la agencia de Santiago. Acá viven los agentes, las plantillas y el trabajo de cada cliente. Leé este archivo entero antes de cualquier tarea.

## Qué hace la agencia

Le vende a pymes argentinas herramientas que les ahorran horas o les traen ventas. Vendemos resultados medibles ("cotizás en 30 segundos", "respondés en 1 minuto a cualquier hora"), no "IA".

| Servicio | Qué resuelve | Setup (USD) | Abono mensual (USD) |
| --- | --- | --- | --- |
| Cotizador automático | Presupuestos que tardan horas o días | 400 a 900 | 40 a 80 |
| Bot de WhatsApp con IA | Consultas repetidas y respuestas lentas | 300 a 700 | 60 a 150 + mensajes de Meta |
| Automatización de procesos | Copiar datos a mano entre sistemas | 300 a 1.000 | 40 a 100 |
| Marketing con IA | No tienen tiempo de publicar ni medir | Sin setup | 300 a 600 |

- Precios en dólares, cobrados en pesos al tipo de cambio del día.
- Nunca se entrega sin abono. Cobro: 50% al aprobar, 50% al entregar; el abono se cobra por adelantado.
- Nicho de arranque: fabricantes, talleres y vendedores del rubro moto y autopartes (confirmar con Santiago).

## Cómo trabajamos

1. **Ventas** consigue el prospecto y arma una demo con sus datos públicos.
2. **Analista** hace el relevamiento y escribe `brief.md` en la carpeta del cliente.
3. **Santiago aprueba** el brief y la propuesta antes de construir nada.
4. **Desarrollador** construye según el brief.
5. **Crítico** revisa con `plantillas/checklist-calidad.md`. Menos de 8/10 vuelve al desarrollador.
6. **Santiago aprueba** la entrega y la presenta al cliente.
7. **Soporte** se hace cargo del abono: cambios, monitoreo y reporte mensual.
8. **Marketing** convierte cada caso terminado en contenido (con permiso del cliente).

El **Director** coordina todo: sabe en qué etapa está cada cliente y qué le toca a quién. Cuando no sepas por dónde empezar, pedile al director.

## Reglas para todos los agentes

- Escribí en español rioplatense (vos, tenés), claro y sin jerga técnica cuando el texto es para un cliente.
- Nada sale hacia un cliente sin aprobación explícita de Santiago: ni mensajes, ni propuestas, ni precios, ni publicaciones.
- No inventes datos del cliente. Si falta algo, anotalo como pregunta abierta en el brief.
- Nunca guardes contraseñas, tokens ni claves en el repositorio. Van en `.env` (ignorado por git).
- Cada cliente tiene su carpeta en `clientes/<nombre>/` copiada de `clientes/_plantilla/`. Mantené su `README.md` al día: etapa, próximos pasos y fechas.

## Estructura

```
.claude/agents/   los 7 agentes (director, ventas, analista, desarrollador, critico, marketing, soporte)
clientes/         una carpeta por cliente; _plantilla/ para copiar
plantillas/       propuesta, relevamiento, checklist de calidad, reporte mensual
docs/             plan de la agencia y decisiones
```

## Stack

- Claude Code + estos agentes para producir.
- n8n para automatizaciones (Cloud Starter €20/mes o autoalojado).
- API de WhatsApp de Meta vía una plataforma (ManyChat, Whaticket u otra). Desde el 1/10/2026 en Argentina: marketing USD 0,0618, utilidad y servicio USD 0,026 por mensaje.
- Cotizadores y formularios: HTML/JS estático publicado en Vercel o Netlify; datos en Google Sheets cuando alcance.
