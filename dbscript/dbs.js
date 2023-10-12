[
    {
        "db": "contabilidad",
        "groups": [
            {
                "name": "grupos",
                "alias": "grupos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "orden",
                        "value": "integer"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "Activo",
                            "1",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Pasivo",
                            "2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Patrimonio",
                            "3",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Ingreso",
                            "4",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "Egreso",
                            "5",
                            ""
                        ]
                    }
                ],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "orden": "integer",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "cuentas",
                "alias": "cuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "valor",
                        "value": "number"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "registro",
                        "value": "boolean"
                    },
                    {
                        "name": "nivel",
                        "value": "number"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "grupo_id",
                        "value": "number"
                    },
                    {
                        "name": "grupo",
                        "value": "[grupos|id|grupo_id]",
                        "rel": {
                            "index": "grupo",
                            "name": "grupos",
                            "field": "id",
                            "ownfield": "grupo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "codigo": "string",
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "codigo": "string",
                        "valor": "number",
                        "estado": "boolean",
                        "registro": "boolean",
                        "nivel": "number",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "grupo_id": "number",
                        "grupo": "[grupos|id|grupo_id]"
                    }
                }
            },
            {
                "name": "centro_costo_cuenta",
                "alias": "centro_costo_cuenta",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "centro_costo_id",
                        "value": "number"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    },
                    "insert": {
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "centro_costo_id": "number"
                    }
                }
            },
            {
                "name": "modulos",
                "alias": "modulos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "codigo",
                        "value": "string"
                    },
                    {
                        "name": "prefix",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-1",
                            "CONTABILIDAD",
                            "Módulo de contabilidad",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-2",
                            "COMPRAS",
                            "Módulo de compras",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-3",
                            "VENTAS",
                            "Módulo de ventas",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-4",
                            "INVENTARIO",
                            "Módulo de inventario",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-5",
                            "TESORERÍA",
                            "Módulo de tesoreria",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-6",
                            "RECURSOS HUMANOS",
                            "Módulo de recursos humanos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-7",
                            "ACTIVOS FIJOS",
                            "Módulo de activos fijos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-8",
                            "PRESUPUESTOS",
                            "Módulo de presupuestos",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-9",
                            "PRODUCCIÓN",
                            "Módulo de producción",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-modulos-10",
                            "CENTRO DE COSTOS",
                            "Módulo de centro de costos",
                            "",
                            "",
                            ""
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "estado": "boolean",
                        "codigo": "string",
                        "prefix": "string"
                    }
                }
            },
            {
                "name": "asiento_tipos",
                "alias": "asiento_tipos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "modulo_id",
                        "value": "number"
                    },
                    {
                        "name": "glosa",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-asientot-1",
                            "COMPRAS CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "COMPRAS SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO A RENDIR CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO A RENDIR SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO OPERATIVO CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DESCARGO FONDO OPERATIVO SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DEVOLUCIONES CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "DEVOLUCIONES SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REGULARIZACION DEVENGADOS CON FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REGULARIZACION DEVENGADOS SIN FACTURA",
                            "uuid-modulos-2",
                            ""
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "modulo_id": "number",
                        "glosa": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "modulo_id": "number",
                        "glosa": "string"
                    },
                    "insert": {
                        "nombre": "string",
                        "modulo_id": "number",
                        "glosa": "string"
                    }
                }
            },
            {
                "name": "tabla_consultas",
                "alias": "tabla_consultas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre_tabla",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-1",
                            "tipo_usos"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-2",
                            "api_compras_destino"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tablac-3",
                            "api_tesoreria_formas_pago"
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre_tabla": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre_tabla": "string"
                    },
                    "insert": {
                        "nombre_tabla": "string"
                    }
                }
            },
            {
                "name": "asiento_tipo_comprobante",
                "alias": "asiento_tipo_comprobante",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
                            "array": false
                        }
                    },
                    {
                        "name": "asiento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo",
                        "value": "[asiento_tipos|id|asiento_tipo_id]",
                        "rel": {
                            "index": "asiento_tipo",
                            "name": "asiento_tipos",
                            "field": "id",
                            "ownfield": "asiento_tipo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "insert": {
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    }
                }
            },
            {
                "name": "asiento_tipo_composiciones",
                "alias": "asiento_tipo_composiciones",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "descripcion",
                        "value": "string"
                    },
                    {
                        "name": "existe_opcion_configuracion",
                        "value": "boolean"
                    },
                    {
                        "name": "configuracion_fija",
                        "value": "boolean"
                    },
                    {
                        "name": "posicion",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo",
                        "value": "[asiento_tipos|id|asiento_tipo_id]",
                        "rel": {
                            "index": "asiento_tipo",
                            "name": "asiento_tipos",
                            "field": "id",
                            "ownfield": "asiento_tipo_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-1",
                            "ITEMS",
                            "CONFIGURACIÓN DE ITEMS PRESENTACIONES",
                            "true",
                            "true",
                            "1",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-2",
                            "IMPUESTOS",
                            "CONFIGURACIÓN DE IMPUESTOS",
                            "false",
                            "true",
                            "2",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-3",
                            "TASAS",
                            "CONFIGURACIÓN DE TASAS",
                            "false",
                            "true",
                            "3",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-4",
                            "IMPORTES",
                            "CONFIGURACIÓN DE IMPORTES LIBRO COMPRAS",
                            "false",
                            "true",
                            "4",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-5",
                            "DESCUENTOS",
                            "CONFIGURACIÓN DE DESCUENTOS",
                            "false",
                            "true",
                            "5",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-6",
                            "GIFT_CARD",
                            "CONFIGURACIÓN DE GIFT CARD",
                            "false",
                            "true",
                            "6",
                            "uuid-asientot-1"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-tcomp-7",
                            "FORMA_PAGO",
                            "CONFIGURACIÓN DE FORMA DE PAGO",
                            "true",
                            "true",
                            "7",
                            "uuid-asientot-1"
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "descripcion": "string",
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    },
                    "insert": {
                        "nombre": "string",
                        "descripcion": "string",
                        "existe_opcion_configuracion": "boolean",
                        "configuracion_fija": "boolean",
                        "posicion": "number",
                        "asiento_tipo_id": "number",
                        "asiento_tipo": "[asiento_tipos|id|asiento_tipo_id]"
                    }
                }
            },
            {
                "name": "asiento_tipo_cuentas",
                "alias": "asiento_tipo_cuentas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "debe_haber",
                        "value": "boolean"
                    },
                    {
                        "name": "cuenta_id",
                        "value": "number"
                    },
                    {
                        "name": "cuenta",
                        "value": "[cuentas|id|cuenta_id]",
                        "rel": {
                            "index": "cuenta",
                            "name": "cuentas",
                            "field": "id",
                            "ownfield": "cuenta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "asiento_tipo_composicion_id",
                        "value": "number"
                    },
                    {
                        "name": "asiento_tipo_composicion",
                        "value": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "rel": {
                            "index": "asiento_tipo_composicion",
                            "name": "asiento_tipo_composiciones",
                            "field": "id",
                            "ownfield": "asiento_tipo_composicion_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tabla_consulta_id",
                        "value": "number"
                    },
                    {
                        "name": "tabla_consulta",
                        "value": "[tabla_consultas|id|tabla_consulta_id]",
                        "rel": {
                            "index": "tabla_consulta",
                            "name": "tabla_consultas",
                            "field": "id",
                            "ownfield": "tabla_consulta_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_uso_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_uso",
                        "value": "[tipo_usos|id|tipo_uso_id]",
                        "rel": {
                            "index": "tipo_uso",
                            "name": "tipo_usos",
                            "field": "id",
                            "ownfield": "tipo_uso_id",
                            "array": false
                        }
                    },
                    {
                        "name": "forma_pago_id",
                        "value": "number"
                    },
                    {
                        "name": "codigo_id",
                        "value": "number"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-1",
                            "uuid-tablac-2",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-2",
                            "uuid-tablac-1",
                            "uuid-usos-1",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-3",
                            "uuid-tablac-1",
                            "uuid-usos-2",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-3",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-4",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-4",
                            "uuid-tablac-1",
                            "uuid-usos-5",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-5",
                            "uuid-tablac-1",
                            "uuid-usos-6",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-6",
                            "uuid-tablac-1",
                            "uuid-usos-7",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-7",
                            "uuid-tablac-3",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-7",
                            "uuid-tablac-3",
                            "",
                            "",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "",
                            "",
                            "uuid-tcomp-7",
                            "uuid-tablac-3",
                            "",
                            "",
                            ""
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    },
                    "insert": {
                        "debe_haber": "boolean",
                        "cuenta_id": "number",
                        "cuenta": "[cuentas|id|cuenta_id]",
                        "asiento_tipo_composicion_id": "number",
                        "asiento_tipo_composicion": "[asiento_tipo_composiciones|id|asiento_tipo_composicion_id]",
                        "tabla_consulta_id": "number",
                        "tabla_consulta": "[tabla_consultas|id|tabla_consulta_id]",
                        "tipo_uso_id": "number",
                        "tipo_uso": "[tipo_usos|id|tipo_uso_id]",
                        "forma_pago_id": "number",
                        "codigo_id": "number"
                    }
                }
            },
            {
                "name": "tipo_comprobantes",
                "alias": "tipo_comprobantes",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "simbolo",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    },
                    {
                        "name": "editable",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "INGRESO",
                            "I",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "EGRESO",
                            "E",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "TRASPASO",
                            "T",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "AJUSTE",
                            "A",
                            "true",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "AUXILIAR",
                            "AX",
                            "false",
                            ""
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "simbolo": "string",
                        "estado": "boolean",
                        "editable": "boolean"
                    }
                }
            },
            {
                "name": "tipo_usos",
                "alias": "tipo_usos",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    }
                ],
                "seeder": [
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-1",
                            "Crédito fiscal"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-2",
                            "Tasas"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-3",
                            "Importe ICE"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-4",
                            "Importe IEHD"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-5",
                            "Importe IPJ"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-6",
                            "Descuento"
                        ]
                    },
                    {
                        "data": "create",
                        "values": [
                            "uuid-usos-7",
                            "Gift Card"
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "firmas",
                "alias": "firmas",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string"
                    },
                    "insert": {
                        "nombre": "string"
                    }
                }
            },
            {
                "name": "firma_tipo_comprobante",
                "alias": "firma_tipo_comprobante",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "firma_id",
                        "value": "number"
                    },
                    {
                        "name": "firma",
                        "value": "[firmas|id|firma_id]",
                        "rel": {
                            "index": "firma",
                            "name": "firmas",
                            "field": "id",
                            "ownfield": "firma_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "insert": {
                        "firma_id": "number",
                        "firma": "[firmas|id|firma_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    }
                }
            },
            {
                "name": "estado_comprobantes",
                "alias": "estado_comprobantes",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "posicion",
                        "value": "number"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "PRE-GRABADO",
                            "1",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "CONTABILIZADO",
                            "2",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "OBSERVADO",
                            "3",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "REVERTIDO",
                            "4",
                            ""
                        ]
                    },
                    {
                        "data": "insert",
                        "values": [
                            "ELIMINADO",
                            "5",
                            ""
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "posicion": "number",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "posicion": "number",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "posicion": "number",
                        "estado": "boolean"
                    }
                }
            },
            {
                "name": "comprobantes",
                "alias": "comprobantes",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "fecha",
                        "value": "date"
                    },
                    {
                        "name": "centro_costo_id",
                        "value": "number"
                    },
                    {
                        "name": "glosa",
                        "value": "string"
                    },
                    {
                        "name": "estado_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "estado_comprobante",
                        "value": "[estado_comprobantes|id|estado_comprobante_id]",
                        "rel": {
                            "index": "estado_comprobante",
                            "name": "estado_comprobantes",
                            "field": "id",
                            "ownfield": "estado_comprobante_id",
                            "array": false
                        }
                    },
                    {
                        "name": "modulo_id",
                        "value": "number"
                    },
                    {
                        "name": "modulo",
                        "value": "[modulos|id|modulo_id]",
                        "rel": {
                            "index": "modulo",
                            "name": "modulos",
                            "field": "id",
                            "ownfield": "modulo_id",
                            "array": false
                        }
                    },
                    {
                        "name": "tipo_comprobante_id",
                        "value": "number"
                    },
                    {
                        "name": "tipo_comprobante",
                        "value": "[tipo_comprobantes|id|tipo_comprobante_id]",
                        "rel": {
                            "index": "tipo_comprobante",
                            "name": "tipo_comprobantes",
                            "field": "id",
                            "ownfield": "tipo_comprobante_id",
                            "array": false
                        }
                    }
                ],
                "seeder": [],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "fecha": "date",
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    },
                    "insert": {
                        "fecha": "date",
                        "centro_costo_id": "number",
                        "glosa": "string",
                        "estado_comprobante_id": "number",
                        "estado_comprobante": "[estado_comprobantes|id|estado_comprobante_id]",
                        "modulo_id": "number",
                        "modulo": "[modulos|id|modulo_id]",
                        "tipo_comprobante_id": "number",
                        "tipo_comprobante": "[tipo_comprobantes|id|tipo_comprobante_id]"
                    }
                }
            },
            {
                "name": "variables_configuracion",
                "alias": "variables_configuracion",
                "fields": [
                    {
                        "name": "id",
                        "value": "uuid|pk"
                    },
                    {
                        "name": "nombre",
                        "value": "string"
                    },
                    {
                        "name": "tipo",
                        "value": "string"
                    },
                    {
                        "name": "estado",
                        "value": "boolean"
                    }
                ],
                "seeder": [
                    {
                        "data": "insert",
                        "values": [
                            "NUMERACION_COMPROBANTE",
                            "JSON",
                            "true"
                        ]
                    }
                ],
                "apicustom": [],
                "apis": [
                    {
                        "method": "GET",
                        "route": "",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "GET",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "POST",
                        "route": "",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "PUT",
                        "route": ":id",
                        "in": "insert",
                        "type": "auto",
                        "out": "select"
                    },
                    {
                        "method": "DELETE",
                        "route": ":id",
                        "in": null,
                        "type": "auto",
                        "out": null
                    }
                ],
                "data": {
                    "select": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "tipo": "string",
                        "estado": "boolean"
                    },
                    "create": {
                        "id": "uuid|pk",
                        "nombre": "string",
                        "tipo": "string",
                        "estado": "boolean"
                    },
                    "insert": {
                        "nombre": "string",
                        "tipo": "string",
                        "estado": "boolean"
                    }
                }
            }
        ]
    }
]