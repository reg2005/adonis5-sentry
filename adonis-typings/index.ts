declare module '@ioc:Adonis/Addons/Sentry' {
	import type { NodeOptions } from '@sentry/node'

	export interface SentryConfig extends NodeOptions {}

	export { default } from '@sentry/node'
}
