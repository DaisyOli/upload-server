import { jsonSchemaTransform } from 'fastify-type-provider-zod'

// Corrige o nome do tipo
type TransformSwaggerSchemaData = Parameters<typeof jsonSchemaTransform>[0]

// Type guard simples para checar se body tem a forma que precisamos
function isBodyObject(x: unknown): x is { type?: string; properties?: Record<string, unknown>; required?: string[] } {
  return typeof x === 'object' && x !== null
}

export function transformSwaggerSchema(data: TransformSwaggerSchemaData) {
  const { schema, url } = jsonSchemaTransform(data)

  // Só ajusta endpoints multipart/form-data
  if (schema.consumes?.includes('multipart/form-data')) {
    // Garante um objeto body básico
    if (!isBodyObject(schema.body)) {
      schema.body = { type: 'object', properties: {}, required: [] }
    } else {
      // se body existe mas não tem estrutura, completamos o básico
      schema.body.type ??= 'object'
      schema.body.properties ??= {}
      schema.body.required ??= []
    }

    // A essa altura, o TS sabe que body é o objeto certo
    const body = schema.body as { type: string; properties: Record<string, unknown>; required: string[] }

    // Adiciona o campo de arquivo
    body.properties.file = { type: 'string', format: 'binary' }

    // Marca como obrigatório, garantindo que não duplique
    if (!body.required.includes('file')) {
      body.required.push('file')
    }
  }

  // Sempre retorna
  return { schema, url }
}
