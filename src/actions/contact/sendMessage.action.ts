import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const sendMessage = defineAction({
	accept: 'form',
	input: z.object({
		name: z
			.string({ message: 'Debe escribir un nombre' })
			.min(4, { message: 'El nombre debe tener al menos 4 caracteres' }),
		email: z
			.string({ message: 'Debe escribir un correo electrónico' })
			.email({ message: 'Debe ser un correo electrónico válido' }),
		message: z
			.string({ message: 'Debe escribir un mensaje' })
			.min(4, { message: 'El mensaje debe tener al menos 4 caracteres' })
			.max(200, { message: 'El mensaje no debe exceder los 200 caracteres' }),
		remember_me: z.boolean().optional()
	}),
	handler: async (input, context) => {
		const { name, email, message, remember_me } = input

		const { cookies } = context

		if (remember_me) {
			cookies.set('name', name, {
				expires: new Date(Date.now() + 60 * 60 * 24 * 31),
				path: '/'
			})
			cookies.set('email', email, { path: '/' })
		} else {
			cookies.delete('name')
			cookies.delete('email')
		}

		try {
			const response = await fetch('https://formcarry.com/s/yc9p0QJ5Ivq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					message,
					remember_me
				})
			})

			const json = await response.json()

			return { json, name }
		} catch (error) {
			console.log({ error })

			throw new Error('Hubo un error al enviar el mensaje')
		}
	}
})
