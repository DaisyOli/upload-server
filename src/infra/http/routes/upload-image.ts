import { uploadImage } from '@/app/functions/upload-image'
import { isLeft, isRight, unwrapEither } from '@/shared/either'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const uploadImageRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/uploads',
    {
      schema: {
        summary: 'Upload an image',
        tags: ['uploads'],
        consumes: ['multipart/form-data'],
        response: {
          201: z.object({ uploadId: z.string() }),
          409: z
            .object({ message: z.string() })
            .describe('Upload already exists.'),
        },
      },
    },
    async (request, reply) => {
      const uploadedFile = await request.file({
        limits: {
          fieldSize: 1024 * 1024 * 2, // 2mb
        },
      })

      if (!uploadedFile) {
        // O schema de resposta só permite 201 ou 409, então usamos 409 para erro de arquivo ausente
        return reply.status(409).send({ message: 'File is required.' })
      }

      const { filename, mimetype, file } = uploadedFile

      const result = await uploadImage({
        fileName: filename,
        contentType: mimetype,
        contentStream: file,
      })

      if (uploadedFile.file.truncated) {
        return reply.status(409).send({ message: 'File is too large.' })
      }

       if (isRight(result)) {
        console.log(unwrapEither(result))
        return reply.status(201).send()
       }
       if (isLeft(result)) {
        return reply.status(409).send({ message: result.left.message })
       }
    }
  )
}