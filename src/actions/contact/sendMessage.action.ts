import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const sendMessage = defineAction({
	accept: 'form',
	input: z.object({
		name: z.string().min(4).max(15),
		email: z.string().email(),
		message: z.string().min(4).max(200),
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

			console.log({ json })

			return { json, name }
		} catch (error) {
			console.log({ error })

			throw new Error('Hubo un error al enviar el mensaje')
		}
	}
})
