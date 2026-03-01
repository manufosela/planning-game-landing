---
title: Card API
description: Modelo de datos de cards y referencia de campos.
---

Consulta la [referencia en inglés](/docs/reference/card-api/) para la documentación completa del modelo de datos con todos los campos y ejemplos.

## Formato de ID

```
{ABREVIATURA_PROYECTO}-{CÓDIGO_TIPO}-{NÚMERO}
```

| Tipo | Código | Ejemplo |
|------|--------|---------|
| Tarea | TSK | PLN-TSK-0042 |
| Bug | BUG | PLN-BUG-0015 |
| Épica | PCS | PLN-PCS-0003 |
| Sprint | SPR | PLN-SPR-0001 |
| Propuesta | PRP | PLN-PRP-0001 |

## Transiciones de Estado

### Tareas
```
To Do → In Progress → To Validate → Done → Done&Validated
                   ↘ Blocked
         Reopened → In Progress
```

### Bugs
```
Created → Assigned → Fixed → Verified → Closed
```
