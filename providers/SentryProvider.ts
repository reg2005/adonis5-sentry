import { IocContract } from '@adonisjs/fold/build'
import Config from '@ioc:Adonis/Core/Config'
import * as Sentry from '@sentry/node'

export default class SentryProvider {
	constructor(protected container: IocContract) {}

	public register(): void {
		this.container.singleton('Adonis/Addons/Sentry', () => {
			return { ...Sentry }
		})
	}

	public boot(): void {
		const config: typeof Config = this.container.use('Adonis/Core/Config')
		Sentry.init(config.get('sentry'))
	}
}
