import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Config from '@ioc:Adonis/Core/Config'
import * as Sentry from '@sentry/node'

export default class SentryProvider {
	constructor(protected app: ApplicationContract) {}

	public register(): void {
		this.app.container.singleton('Adonis/Addons/Sentry', () => {
			return { ...Sentry }
		})
	}

	public boot(): void {
		const config: typeof Config = this.app.container.use('Adonis/Core/Config')
		Sentry.init(config.get('sentry'))
	}
}
